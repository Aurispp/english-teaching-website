import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, Play, RotateCcw, Shuffle, Check, Phone, Mail, GraduationCap, LogIn, X, ChevronRight } from 'lucide-react';
import { themes, difficulties, getRandomTopic } from '../data/speakingTopics';
import { getThemeIcon, getDifficultyIcon } from './ThemeIcons';
import { useLanguage } from '../context/LanguageContext';
import Hourglass from './Hourglass';
import whatsappIcon from '../whatsapp.webp';
import { trackEvent } from '../utils/analytics';

const CALENDLY_TRIAL_URL =
    import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/aurienglish/trial-class';
const TALK_TRIAL_URL = `${CALENDLY_TRIAL_URL}${CALENDLY_TRIAL_URL.includes('?') ? '&' : '?'}utm_source=talkthetalk&utm_medium=tool&utm_campaign=completion_cta`;

/**
 * Talk the Talk - Free Speech Practice Tool
 * Full-page speaking practice experience with elegant design
 */
const TalkTheTalk = ({ isOpen, onClose }) => {
    const { language, setLanguage } = useLanguage();
    const [screen, setScreen] = useState('select');
    const [selectedTheme, setSelectedTheme] = useState('relatable');
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
    const [duration, setDuration] = useState(90);
    const [topic, setTopic] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(90);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [readyHidden, setReadyHidden] = useState(false);
    const [showDone, setShowDone] = useState(false);
    const [customMinutes, setCustomMinutes] = useState('01');
    const [customSeconds, setCustomSeconds] = useState('30');
    const [transitionMs, setTransitionMs] = useState(200);

    const timerRef = useRef(null);
    const transitionTimeoutRef = useRef(null);
    const completionTimeoutRef = useRef(null);
    const doneDelayRef = useRef(null);

    const transitionDurationDefault = 200; // ms crossfade
    const readyToDoneDelay = 2400; // ms delay before showing "I'm Done"
    const completionHoldMs = 5000; // ms hold on finished view before showing results
    const howItWorks = [
        'Pick a topic',
        'Record yourself (optional)',
        'Speak until time runs out',
        'Listen to your recording',
    ];

    const trackTalkEvent = useCallback((eventName, params = {}) => {
        trackEvent(eventName, {
            event_category: 'talk_the_talk',
            theme: selectedTheme,
            difficulty: selectedDifficulty,
            duration_seconds: duration,
            ...params,
        });
    }, [duration, selectedDifficulty, selectedTheme]);

    const getProgress = useCallback(() => {
        if (duration === 0) return 0;
        return Math.min(1, Math.max(0, (duration - timeRemaining) / duration));
    }, [duration, timeRemaining]);

    const generateTopic = useCallback(() => {
        const newTopic = getRandomTopic(selectedTheme, selectedDifficulty);
        setTopic(newTopic);
    }, [selectedTheme, selectedDifficulty]);

    const clampDuration = useCallback((secs) => Math.max(30, Math.min(900, secs)), []);

    const formatTime = useCallback((seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    const syncCustomInputs = useCallback((secs) => {
        const [mm, ss] = formatTime(secs).split(':');
        setCustomMinutes(mm);
        setCustomSeconds(ss);
    }, [formatTime]);

    const applyCustomTime = useCallback((minsStr, secsStr) => {
        const m = parseInt(minsStr || '0', 10);
        const sRaw = parseInt(secsStr || '0', 10);
        const s = isNaN(sRaw) ? 0 : Math.min(59, sRaw);
        const total = clampDuration((isNaN(m) ? 0 : m) * 60 + s);
        syncCustomInputs(total);
        setDuration(total);
        setTimeRemaining(total);
    }, [clampDuration, syncCustomInputs]);

    const handleMinutesChange = useCallback((value) => {
        const digits = value.replace(/\D/g, '').slice(0, 2);
        setCustomMinutes(digits);
        if (digits.length === 2 && customSeconds.length === 2) {
            applyCustomTime(digits, customSeconds);
        }
    }, [applyCustomTime, customSeconds]);

    const handleSecondsChange = useCallback((value) => {
        const digits = value.replace(/\D/g, '').slice(0, 2);
        setCustomSeconds(digits);
        if (digits.length === 2 && customMinutes.length === 2) {
            applyCustomTime(customMinutes, digits);
        }
    }, [applyCustomTime, customMinutes]);

    const handleCustomBlur = useCallback(() => {
        const mins = customMinutes.padStart(2, '0');
        const secs = customSeconds.padStart(2, '0');
        trackTalkEvent('talk_setting_changed', {
            setting_name: 'custom_duration',
            setting_value: `${mins}:${secs}`,
        });
        applyCustomTime(mins, secs);
    }, [applyCustomTime, customMinutes, customSeconds, trackTalkEvent]);

    const goToScreen = useCallback((target, duration = transitionDurationDefault) => {
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        setTransitionMs(duration);
        setIsTransitioning(true);
        transitionTimeoutRef.current = setTimeout(() => {
            setScreen(target);
            requestAnimationFrame(() => setIsTransitioning(false));
        }, duration);
    }, [transitionDurationDefault]);

    const startPractice = useCallback(() => {
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
        generateTopic();
        setTimeRemaining(duration);
        setIsTimerRunning(false);
        setHasStarted(false);
        setReadyHidden(false);
        setShowDone(false);
        trackTalkEvent('talk_started');
        goToScreen('practice', 220);
    }, [duration, generateTopic, goToScreen, trackTalkEvent]);

    const readyToSpeak = useCallback(() => {
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
        }
        setIsTimerRunning(true);
        setHasStarted(true);
        setReadyHidden(true);
        setShowDone(false);
        trackTalkEvent('talk_ready_clicked');
        doneDelayRef.current = setTimeout(() => {
            setShowDone(true);
        }, readyToDoneDelay);
    }, [trackTalkEvent]);

    const skipTopic = useCallback(() => {
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
        generateTopic();
        setIsTimerRunning(false);
        setHasStarted(false);
        setReadyHidden(false);
        setShowDone(false);
        setTimeRemaining(duration);
        trackTalkEvent('talk_topic_skipped');
    }, [duration, generateTopic, trackTalkEvent]);

    const finishEarly = useCallback(() => {
        setIsTimerRunning(false);
        trackTalkEvent('talk_completed', {
            completion_type: 'manual',
            practiced_seconds: duration - timeRemaining,
        });
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
        goToScreen('complete');
    }, [duration, goToScreen, timeRemaining, trackTalkEvent]);

    const repeatSameTopic = useCallback(() => {
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
        if (!topic) {
            generateTopic();
        }
        setTimeRemaining(duration);
        setIsTimerRunning(false);
        setHasStarted(false);
        setReadyHidden(false);
        setShowDone(false);
        trackTalkEvent('talk_same_topic_repeated', {
            practiced_seconds: duration - timeRemaining,
        });
        goToScreen('practice', 220);
    }, [duration, generateTopic, goToScreen, timeRemaining, topic, trackTalkEvent]);

    useEffect(() => {
        if (isTimerRunning && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        setIsTimerRunning(false);
                        if (!completionTimeoutRef.current) {
                            trackTalkEvent('talk_completed', {
                                completion_type: 'timer',
                                practiced_seconds: duration,
                            });
                            completionTimeoutRef.current = setTimeout(() => {
                                goToScreen('complete');
                                completionTimeoutRef.current = null;
                            }, completionHoldMs);
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [completionHoldMs, duration, goToScreen, isTimerRunning, timeRemaining, trackTalkEvent]);

    useEffect(() => {
        if (!isOpen) {
            setScreen('select');
            setIsTimerRunning(false);
            setTimeRemaining(duration);
            setHasStarted(false);
            setIsTransitioning(false);
            syncCustomInputs(duration);
            setReadyHidden(false);
            setShowDone(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
                transitionTimeoutRef.current = null;
            }
            if (completionTimeoutRef.current) {
                clearTimeout(completionTimeoutRef.current);
                completionTimeoutRef.current = null;
            }
            if (doneDelayRef.current) {
                clearTimeout(doneDelayRef.current);
                doneDelayRef.current = null;
            }
        }

        // Prevent body scroll when Talk the Talk is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, duration, syncCustomInputs]);

    useEffect(() => {
        return () => {
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
            if (completionTimeoutRef.current) clearTimeout(completionTimeoutRef.current);
            if (doneDelayRef.current) clearTimeout(doneDelayRef.current);
        };
    }, []);

    const currentTheme = themes.find(t => t.id === selectedTheme) || themes[0];
    const currentDifficulty = difficulties.find(d => d.id === selectedDifficulty) || difficulties[0];
    const ThemeIcon = getThemeIcon(selectedTheme);

    if (!isOpen) return null;

    const contactLinks = [
        {
            icon: <Phone className="w-5 h-5" />,
            href: "tel:+34684082221",
            label: "Call"
        },
        {
            icon: <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />,
            href: "https://wa.me/34684082221",
            label: "WhatsApp"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:aurienglish@gmail.com",
            label: "Email"
        }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-y-auto">
            {/* Full Navbar */}
            <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-primary-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                    <div className="flex justify-between items-center h-16 gap-2">
                        {/* Logo and Language Selection */}
                        <div className="flex items-center gap-2 sm:gap-8">
                            {/* Logo */}
                            <a href="/" className="flex-shrink-0">
                                <div className="bg-[#FF914D] px-2.5 sm:px-4 py-2 rounded-lg flex items-center gap-1.5 sm:gap-2">
                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                                    <span className="text-black flex items-center text-sm sm:text-lg font-['Cabinet_Grotesk']">
                                        <span className="font-bold">English</span>
                                        <span className="mx-0.5 sm:mx-1 text-xs sm:text-base font-normal">with</span>
                                        <span className="font-bold">Auris</span>
                                    </span>
                                </div>
                            </a>

                            {/* Language Toggle */}
                            <div className="flex items-center gap-1 sm:gap-2 text-sm">
                                <button
                                    onClick={() => {
                                        trackEvent('language_selected', {
                                            event_category: 'engagement',
                                            language: 'en',
                                            location: 'talk_the_talk',
                                        });
                                        setLanguage('en');
                                    }}
                                    aria-label="Switch to English"
                                    aria-pressed={language === 'en'}
                                    className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'en'
                                        ? 'bg-[#FF914D] text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => {
                                        trackEvent('language_selected', {
                                            event_category: 'engagement',
                                            language: 'es',
                                            location: 'talk_the_talk',
                                        });
                                        setLanguage('es');
                                    }}
                                    aria-label="Cambiar a español"
                                    aria-pressed={language === 'es'}
                                    className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'es'
                                        ? 'bg-[#FF914D] text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    ES
                                </button>
                            </div>
                        </div>

                        {/* Contact Buttons and Close */}
                        <div className="flex items-center gap-1 sm:gap-3">
                            {/* Close Talk the Talk */}
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
                                aria-label="Close Talk the Talk"
                            >
                                <X className="w-4 h-4" />
                                <span className="hidden sm:inline">Close</span>
                            </button>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            {/* Student Login - subtle link */}
                            <a
                                href="https://english-with-auris-portal.netlify.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-2 text-sm text-gray-600 hover:text-[#FF914D] hover:bg-orange-50 rounded-lg transition-colors"
                                aria-label="Student Login"
                            >
                                <LogIn className="w-4 h-4" />
                                <span className="hidden md:inline">Student Login</span>
                            </a>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="hidden sm:inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label={link.label}
                                    onClick={() => trackEvent('contact_click', {
                                        event_category: 'lead',
                                        contact_method: link.label.toLowerCase(),
                                        location: 'talk_the_talk_nav',
                                    })}
                                >
                                    {link.icon}
                                    <span className="hidden sm:inline">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Talk the Talk Title */}
            <div className="text-center py-2.5 sm:py-4 border-b border-gray-100 bg-white/50">
                <h1 className="text-xl sm:text-3xl font-display font-bold">
                    <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                        Talk the Talk
                    </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 hidden sm:block">Free English speaking practice</p>
            </div>

            {/* Main Content */}
            <main
                className={`max-w-5xl mx-auto px-4 sm:px-6 ${screen === 'select' ? 'py-3 sm:py-4 pb-36 sm:pb-28' : 'py-4 sm:py-8 pb-4 sm:pb-6'} transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                style={{ transitionDuration: `${transitionMs}ms` }}
            >
                {/* Selection Screen */}
                {screen === 'select' && (
                    <div className="space-y-4 animate-fade-in">
                        {/* Instructions */}
                        <div className="text-center max-w-3xl mx-auto">
                            <p className="text-base sm:text-[17px] text-gray-600 leading-relaxed">
                                <span>Practise speaking English out loud with random prompts and a timer.</span>
                                <span className="hidden text-gray-500 sm:inline">&nbsp;Choose a theme, speak until the timer ends, and build fluency one round at a time.</span>
                                <span className="block text-gray-500 sm:hidden">Choose a theme, speak until the timer ends, and build fluency one round at a time.</span>
                            </p>
                            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-y-3">
                                {howItWorks.map((step, index) => (
                                    <React.Fragment key={step}>
                                        <div className="flex items-center gap-2 group cursor-default px-1 sm:px-2">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-600 ring-1 ring-orange-200/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-rose-400 group-hover:text-white group-hover:ring-orange-400 group-hover:shadow-md group-hover:shadow-orange-200">
                                                {index + 1}
                                            </div>
                                            <span className="text-[13px] sm:text-[14px] font-medium text-gray-600 tracking-tight transition-colors duration-300 group-hover:text-gray-900">
                                                {step}
                                            </span>
                                        </div>
                                        {index < howItWorks.length - 1 && (
                                            <div className="hidden sm:flex items-center px-1 lg:px-3 shrink-0">
                                                <div className="h-[2px] w-6 lg:w-10 rounded-full bg-gradient-to-r from-orange-200/70 to-rose-200/70"></div>
                                            </div>
                                        )}
                                        {index < howItWorks.length - 1 && (
                                            <div className="sm:hidden px-0.5">
                                                <ChevronRight className="h-3.5 w-3.5 text-orange-300" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-orange-100/70 bg-white/70 p-3.5 shadow-sm backdrop-blur-sm sm:p-4 space-y-4">
                            {/* Theme Selection */}
                            <div>
                                <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                                    Choose a Theme
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                                    {themes.map((theme) => {
                                        const Icon = getThemeIcon(theme.id);
                                        const isSelected = selectedTheme === theme.id;
                                        return (
                                            <button
                                                key={theme.id}
                                                onClick={() => {
                                                    trackTalkEvent('talk_setting_changed', {
                                                        setting_name: 'theme',
                                                        setting_value: theme.id,
                                                    });
                                                    setSelectedTheme(theme.id);
                                                }}
                                                className={`relative flex min-h-[52px] items-center gap-2.5 rounded-xl border px-3 py-2 text-left transition-all duration-200 group ${isSelected
                                                    ? 'border-orange-300 bg-orange-50 shadow-sm ring-1 ring-orange-200'
                                                    : 'border-gray-100 bg-white hover:border-orange-100 hover:bg-orange-50/30 hover:shadow-sm'
                                                    }`}
                                            >
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isSelected
                                                    ? 'bg-gradient-to-br from-orange-400 to-rose-400 text-white'
                                                    : 'bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-orange-500'
                                                    }`}>
                                                    <Icon className="h-[18px] w-[18px]" />
                                                </div>
                                                <span className={`text-sm font-semibold leading-tight transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-700'
                                                    }`}>
                                                    {theme.name}
                                                </span>
                                                {isSelected && (
                                                    <div className="absolute top-2 right-2">
                                                        <Check className="w-3.5 h-3.5 text-orange-500" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Difficulty Selection - Slider Style */}
                            <div className="flex flex-col items-center">
                                <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                                    Choose Difficulty
                                </h2>
                                <div className="relative inline-grid grid-cols-3 bg-gray-100 rounded-xl p-1.5">
                                    {/* Sliding background indicator */}
                                    <div
                                        className={`absolute top-1.5 bottom-1.5 rounded-lg transition-all duration-300 ease-out shadow-md ${selectedDifficulty === 'easy'
                                            ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                                            : selectedDifficulty === 'medium'
                                                ? 'bg-gradient-to-r from-orange-400 to-rose-500'
                                                : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                                            }`}
                                        style={{
                                            width: 'calc(33.333% - 4px)',
                                            left: selectedDifficulty === 'easy'
                                                ? '6px'
                                                : selectedDifficulty === 'medium'
                                                    ? 'calc(33.333% + 2px)'
                                                    : 'calc(66.666% - 2px)'
                                        }}
                                    />
                                    {/* Difficulty options */}
                                    {difficulties.map((diff) => {
                                        const DiffIcon = getDifficultyIcon(diff.id);
                                        const isSelected = selectedDifficulty === diff.id;
                                        return (
                                            <button
                                                key={diff.id}
                                                onClick={() => {
                                                    trackTalkEvent('talk_setting_changed', {
                                                        setting_name: 'difficulty',
                                                        setting_value: diff.id,
                                                    });
                                                    setSelectedDifficulty(diff.id);
                                                }}
                                                className={`relative z-10 flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-colors duration-300 w-[92px] sm:w-[112px] ${isSelected
                                                    ? 'text-white'
                                                    : 'text-gray-500 hover:text-gray-700'
                                                    }`}
                                            >
                                                <DiffIcon className="h-[18px] w-[18px]" />
                                                <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">{diff.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                {/* Description below slider */}
                                <p className="text-sm text-gray-500 mt-2 text-center transition-all duration-200">
                                    {currentDifficulty.description}
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                {/* Practice Screen */}
                {screen === 'practice' && (
                    <div className="space-y-4 sm:space-y-6 animate-fade-in">
                        {/* Topic Display */}
                        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white">
                                    <ThemeIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-500">{currentTheme.name}</span>
                                {(() => {
                                    const DiffIcon = getDifficultyIcon(selectedDifficulty);
                                    return (
                                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${selectedDifficulty === 'easy'
                                            ? 'bg-green-100 text-green-700'
                                            : selectedDifficulty === 'medium'
                                                ? 'bg-orange-100 text-orange-700'
                                                : 'bg-purple-100 text-purple-700'
                                            }`}>
                                            <DiffIcon className="w-3 h-3" />
                                            {currentDifficulty.name}
                                        </span>
                                    );
                                })()}
                            </div>
                            <p className="text-xl sm:text-2xl text-gray-900 leading-relaxed whitespace-pre-line">
                                {topic}
                            </p>
                        </div>

                        {/* Hourglass and Timer */}
                        <div className="flex flex-col items-center py-2 sm:py-4">
                            <div className="w-32 h-40 sm:w-36 sm:h-48 mb-1 sm:mb-4">
                                <Hourglass
                                    getProgress={getProgress}
                                    isRunning={isTimerRunning}
                                />
                            </div>
                            <div className="text-4xl sm:text-5xl font-mono font-bold text-gray-900 tabular-nums">
                                {formatTime(timeRemaining)}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                                {isTimerRunning ? 'Keep talking!' : 'Review your topic, then hit Ready to start.'}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto">
                            <button
                                onClick={skipTopic}
                                className="col-start-1 flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm sm:text-base"
                            >
                                <Shuffle className="w-4 h-4" />
                                New Topic
                            </button>

                            {/* Overlapping Ready/Done Buttons Wrapper */}
                            <div className="col-start-2 sm:flex-1 grid grid-cols-1 grid-rows-1">
                                <button
                                    onClick={readyToSpeak}
                                    className={`col-start-1 row-start-1 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-opacity duration-700 text-sm sm:text-base ${readyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
                                        }`}
                                >
                                    <Play className="w-4 h-4" />
                                    Ready
                                </button>
                                <button
                                    onClick={finishEarly}
                                    className={`col-start-1 row-start-1 w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm sm:text-base ${hasStarted && showDone ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <Check className="w-4 h-4" />
                                    I'm Done
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Complete Screen */}
                {screen === 'complete' && (
                    <div className="text-center space-y-8 py-8 animate-fade-in">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-200">
                            <Check className="w-10 h-10 text-white" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                                Great job!
                            </h2>
                            <p className="text-lg text-gray-600">
                                You practised speaking for <span className="font-semibold text-gray-900">{formatTime(duration - timeRemaining)}</span>
                            </p>
                            <p className="text-gray-500 mt-1">
                                Regular practice builds confidence!
                            </p>
                        </div>

                        {/* Topic recap */}
                        <div className="max-w-lg mx-auto p-5 bg-white rounded-xl border border-gray-100 text-left">
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Your topic was</p>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{topic}</p>
                        </div>

                        <div className="max-w-lg mx-auto p-5 bg-orange-50/80 rounded-xl border border-orange-100 text-left">
                            <p className="text-sm font-semibold text-orange-700 mb-2">Want personal feedback?</p>
                            <p className="text-gray-600 leading-relaxed">
                                I offer practical guidance and accountability to help you speak with more fluency and clarity.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid gap-3 max-w-2xl mx-auto sm:grid-cols-3">
                            <button
                                onClick={repeatSameTopic}
                                className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Same topic
                            </button>
                            <button
                                onClick={startPractice}
                                className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                            >
                                <Shuffle className="w-4 h-4" />
                                New topic
                            </button>
                            <a
                                href={TALK_TRIAL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackTalkEvent('talk_trial_click', {
                                    practiced_seconds: duration - timeRemaining,
                                })}
                                className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-all"
                            >
                                <Calendar className="w-4 h-4" />
                                Book a free trial
                            </a>
                        </div>
                        <button
                            onClick={() => {
                                trackTalkEvent('talk_settings_returned');
                                goToScreen('select');
                                setTimeRemaining(duration);
                            }}
                            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Change settings
                        </button>
                    </div>
                )}
            </main>

            {/* Sticky Footer - Start Button (only on select screen) */}
            {screen === 'select' && (
                <div
                    className={`pointer-events-none fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-white via-white/90 to-transparent p-2.5 sm:p-3 transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDuration: `${transitionMs}ms` }}
                >
                    <div className="pointer-events-auto max-w-5xl mx-auto rounded-2xl bg-white/85 p-2 shadow-xl shadow-orange-100/70 ring-1 ring-orange-100 backdrop-blur-md">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
                            <div className="min-w-0 md:flex md:items-center md:gap-3">
                                <p className="mb-1.5 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-500 md:mb-0 md:text-left">
                                    Set Duration
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:justify-start">
                                    {[60, 90, 120, 180, 300].map((secs) => (
                                        <button
                                            key={secs}
                                            onClick={() => {
                                                trackTalkEvent('talk_setting_changed', {
                                                    setting_name: 'duration',
                                                    setting_value: secs,
                                                });
                                                setDuration(secs);
                                                setTimeRemaining(secs);
                                                const [mm, ss] = formatTime(secs).split(':');
                                                setCustomMinutes(mm);
                                                setCustomSeconds(ss);
                                            }}
                                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${duration === secs
                                                ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md shadow-orange-200'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-orange-100 hover:bg-orange-50/40 hover:shadow-sm'
                                                }`}
                                        >
                                            {formatTime(secs)}
                                        </button>
                                    ))}
                                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <span className="whitespace-nowrap text-[11px] font-semibold text-gray-500">
                                            Set Time
                                        </span>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={customMinutes}
                                            onChange={(e) => handleMinutesChange(e.target.value)}
                                            onBlur={handleCustomBlur}
                                            placeholder="MM"
                                            className="w-10 px-1.5 py-1.5 text-sm text-center border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                        />
                                        <span className="text-gray-400 font-semibold">:</span>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={customSeconds}
                                            onChange={(e) => handleSecondsChange(e.target.value)}
                                            onBlur={handleCustomBlur}
                                            placeholder="SS"
                                            className="w-10 px-1.5 py-1.5 text-sm text-center border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={startPractice}
                                className="w-full md:w-[330px] lg:w-[360px] flex-shrink-0 flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.015] transition-all duration-200"
                            >
                                <Play className="w-5 h-5" />
                                Start Speaking
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TalkTheTalk;
