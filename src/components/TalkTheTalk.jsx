import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Play, RotateCcw, Shuffle, Clock, Check, Phone, Mail, GraduationCap, LogIn, X } from 'lucide-react';
import { themes, difficulties, getRandomTopic } from '../data/speakingTopics';
import { getThemeIcon, getDifficultyIcon } from './ThemeIcons';
import { useLanguage } from '../context/LanguageContext';
import Hourglass from './Hourglass';
import whatsappIcon from '../whatsapp.webp';

/**
 * Talk the Talk - Free Speech Practice Tool
 * Full-page speaking practice experience with elegant design
 */
const TalkTheTalk = ({ isOpen, onClose }) => {
    const { language, setLanguage, t } = useLanguage();
    const [screen, setScreen] = useState('select');
    const [selectedTheme, setSelectedTheme] = useState('relatable');
    const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
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
        applyCustomTime(mins, secs);
    }, [applyCustomTime, customMinutes, customSeconds]);

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
        goToScreen('practice', 1200);
    }, [duration, generateTopic, goToScreen]);

    const readyToSpeak = useCallback(() => {
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
        }
        setIsTimerRunning(true);
        setHasStarted(true);
        setReadyHidden(true);
        setShowDone(false);
        doneDelayRef.current = setTimeout(() => {
            setShowDone(true);
        }, readyToDoneDelay);
    }, []);

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
    }, [duration, generateTopic]);

    const finishEarly = useCallback(() => {
        setIsTimerRunning(false);
        if (completionTimeoutRef.current) {
            clearTimeout(completionTimeoutRef.current);
            completionTimeoutRef.current = null;
        }
        if (doneDelayRef.current) {
            clearTimeout(doneDelayRef.current);
            doneDelayRef.current = null;
        }
        goToScreen('complete');
    }, [goToScreen]);

    useEffect(() => {
        if (isTimerRunning && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        setIsTimerRunning(false);
                        if (!completionTimeoutRef.current) {
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
    }, [isTimerRunning]);

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
    const currentDifficulty = difficulties.find(d => d.id === selectedDifficulty) || difficulties[1];
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
                                <div className="bg-[#FF914D] px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-black" />
                                    <span className="text-black flex items-center text-base sm:text-lg font-['Cabinet_Grotesk']">
                                        <span className="font-bold">English</span>
                                        <span className="mx-1 text-sm sm:text-base font-normal">with</span>
                                        <span className="font-bold">Auris</span>
                                    </span>
                                </div>
                            </a>

                            {/* Language Toggle */}
                            <div className="flex items-center gap-1 sm:gap-2 text-sm">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`px-2 sm:px-3 py-1 rounded-full transition-colors ${language === 'en'
                                        ? 'bg-[#FF914D] text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('es')}
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
                                aria-label={t('studentLogin')}
                            >
                                <LogIn className="w-4 h-4" />
                                <span className="hidden md:inline">{t('studentLogin')}</span>
                            </a>

                            <div className="hidden sm:block w-px h-6 bg-gray-200" />

                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label={link.label}
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
            <div className="text-center py-3 sm:py-6 border-b border-gray-100 bg-white/50">
                <h1 className="text-xl sm:text-3xl font-display font-bold">
                    <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                        Talk the Talk
                    </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Speaking Practice</p>
            </div>

            {/* Main Content */}
            <main
                className={`max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 pb-20 sm:pb-32 transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                style={{ transitionDuration: `${transitionMs}ms` }}
            >
                {/* Selection Screen */}
                {screen === 'select' && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Instructions */}
                        <div className="text-center max-w-xl mx-auto">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Choose a theme, set your timer, and start speaking out loud.
                                <br className="hidden sm:block" />
                                <span className="text-gray-500">Practice makes progress!</span>
                            </p>
                        </div>

                        {/* Theme Selection */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Choose a Theme
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {themes.map((theme) => {
                                    const Icon = getThemeIcon(theme.id);
                                    const isSelected = selectedTheme === theme.id;
                                    return (
                                        <button
                                            key={theme.id}
                                            onClick={() => setSelectedTheme(theme.id)}
                                            className={`relative flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left group ${isSelected
                                                ? 'border-orange-400 bg-orange-50 shadow-lg shadow-orange-100'
                                                : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
                                                }`}
                                        >
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isSelected
                                                ? 'bg-gradient-to-br from-orange-400 to-rose-400 text-white'
                                                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                                                }`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className={`font-medium transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-700'
                                                }`}>
                                                {theme.name}
                                            </span>
                                            {isSelected && (
                                                <div className="absolute top-2 right-2">
                                                    <Check className="w-4 h-4 text-orange-500" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Difficulty Selection - Slider Style */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
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
                                            onClick={() => setSelectedDifficulty(diff.id)}
                                            className={`relative z-10 flex flex-col items-center justify-center gap-1 py-3 rounded-lg transition-colors duration-300 w-[110px] sm:w-[130px] ${isSelected
                                                ? 'text-white'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            <DiffIcon className="w-5 h-5" />
                                            <span className="font-semibold text-sm whitespace-nowrap">{diff.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            {/* Description below slider */}
                            <p className="text-sm text-gray-500 mt-3 text-center transition-all duration-200">
                                {currentDifficulty.description}
                            </p>
                        </div>

                        {/* Duration Selection */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Set Duration
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {[60, 90, 120, 180, 300].map((secs) => (
                                    <button
                                        key={secs}
                                        onClick={() => {
                                            setDuration(secs);
                                            setTimeRemaining(secs);
                                            const [mm, ss] = formatTime(secs).split(':');
                                            setCustomMinutes(mm);
                                            setCustomSeconds(ss);
                                        }}
                                        className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${duration === secs
                                            ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-200'
                                            : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm'
                                            }`}
                                    >
                                        {formatTime(secs)}
                                    </button>
                                ))}
                                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-400 rounded-xl shadow-sm">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        value={customMinutes}
                                        onChange={(e) => handleMinutesChange(e.target.value)}
                                        onBlur={handleCustomBlur}
                                        placeholder="MM"
                                        className="w-12 px-2 py-2 text-sm text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    />
                                    <span className="text-gray-500 font-semibold">:</span>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        value={customSeconds}
                                        onChange={(e) => handleSecondsChange(e.target.value)}
                                        onBlur={handleCustomBlur}
                                        placeholder="SS"
                                        className="w-12 px-2 py-2 text-sm text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Practice Screen */}
                {screen === 'practice' && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Topic Display */}
                        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
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
                        <div className="flex flex-col items-center py-2 sm:py-6">
                            <div className="w-40 h-52 sm:w-48 sm:h-72 mb-1 sm:mb-6">
                                <Hourglass
                                    getProgress={getProgress}
                                    isRunning={isTimerRunning}
                                />
                            </div>
                            <div className="text-4xl sm:text-6xl font-mono font-bold text-gray-900 tabular-nums">
                                {formatTime(timeRemaining)}
                            </div>
                            <p className="text-xs sm:text-base text-gray-500 mt-1 sm:mt-2">
                                {isTimerRunning ? 'Keep talking!' : 'Review your topic, then hit Ready to start.'}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto">
                            <button
                                onClick={skipTopic}
                                className="col-start-1 row-start-1 flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm sm:text-base"
                            >
                                <Shuffle className="w-4 h-4" />
                                New Topic
                            </button>
                            <button
                                onClick={readyToSpeak}
                                className={`col-start-2 row-start-1 flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-opacity duration-700 text-sm sm:text-base ${readyHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                            >
                                <Play className="w-4 h-4" />
                                Ready
                            </button>
                            <button
                                onClick={finishEarly}
                                className={`col-start-2 row-start-1 flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-opacity duration-700 text-sm sm:text-base ${hasStarted && showDone ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <Check className="w-4 h-4" />
                                I'm Done
                            </button>
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
                                You practiced speaking for <span className="font-semibold text-gray-900">{formatTime(duration - timeRemaining)}</span>
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

                        {/* Action Buttons */}
                        <div className="flex gap-3 max-w-md mx-auto">
                            <button
                                onClick={() => {
                                    goToScreen('select');
                                    setTimeRemaining(duration);
                                }}
                                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Change Settings
                            </button>
                            <button
                                onClick={startPractice}
                                className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl transition-all"
                            >
                                <Play className="w-4 h-4" />
                                Practice Again
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Sticky Footer - Start Button (only on select screen) */}
            {screen === 'select' && (
                <div
                    className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 sm:p-6 transition-opacity ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDuration: `${transitionMs}ms` }}
                >
                    <div className="max-w-md mx-auto">
                        <button
                            onClick={startPractice}
                            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 text-white font-semibold text-lg rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                        >
                            <Play className="w-5 h-5" />
                            Start Speaking
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TalkTheTalk;
