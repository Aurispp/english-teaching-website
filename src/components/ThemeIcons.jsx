import React from 'react';

// Custom SVG icons for each speaking theme
// Designed to be elegant, minimal, and fit the warm orange color scheme

export const HomeIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
);

export const ThinkIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

export const DebateIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left speech bubble */}
        <path d="M3 6h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6l-3 3v-3a2 2 0 0 1 0-4V6z" />
        {/* Right speech bubble */}
        <path d="M21 10h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3l3 3v-3a2 2 0 0 0 0-4v-4z" />
        {/* Dots in left bubble */}
        <circle cx="5" cy="10" r="0.5" fill="currentColor" />
        <circle cx="7" cy="10" r="0.5" fill="currentColor" />
        <circle cx="9" cy="10" r="0.5" fill="currentColor" />
        {/* Dots in right bubble */}
        <circle cx="15" cy="14" r="0.5" fill="currentColor" />
        <circle cx="17" cy="14" r="0.5" fill="currentColor" />
        <circle cx="19" cy="14" r="0.5" fill="currentColor" />
    </svg>
);

export const LightbulbIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2z" />
    </svg>
);

export const CompareIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" />
        <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
        <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2 2" />
    </svg>
);

export const SparklesIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M5 19l0.75 2.25L8 22l-2.25 0.75L5 25l-0.75-2.25L2 22l2.25-0.75L5 19z" opacity="0.7" />
        <path d="M19 13l0.5 1.5L21 15l-1.5 0.5L19 17l-0.5-1.5L17 15l1.5-0.5L19 13z" opacity="0.7" />
    </svg>
);

export const BookIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="14" y2="10" />
    </svg>
);

export const MasksIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3C5.5 3 3.5 5.5 3.5 8.5c0 4.5 4.5 8.5 4.5 8.5s4.5-4 4.5-8.5C12.5 5.5 10.5 3 8 3z" />
        <circle cx="6.5" cy="7.5" r="0.75" fill="currentColor" />
        <circle cx="9.5" cy="7.5" r="0.75" fill="currentColor" />
        <path d="M6 10.5s0.75 1 2 1 2-1 2-1" />
        <path d="M16 6c-2.5 0-4.5 2.5-4.5 5.5 0 4.5 4.5 8.5 4.5 8.5s4.5-4 4.5-8.5C20.5 8.5 18.5 6 16 6z" />
        <circle cx="14.5" cy="10.5" r="0.75" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.75" fill="currentColor" />
        <path d="M14.5 13s0.5 1.5 1.5 1.5 1.5-1.5 1.5-1.5" />
    </svg>
);

export const SearchIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
        <line x1="11" y1="8" x2="11" y2="14" />
    </svg>
);

// Business English theme icons
export const InterviewIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Two people facing each other */}
        <circle cx="7" cy="6" r="3" />
        <path d="M3 20v-2a4 4 0 0 1 4-4h0" />
        <circle cx="17" cy="6" r="3" />
        <path d="M21 20v-2a4 4 0 0 0-4-4h0" />
        {/* Desk/table between them */}
        <path d="M8 16h8" />
        <path d="M10 16v4" />
        <path d="M14 16v4" />
    </svg>
);

export const PresentationIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Presentation board */}
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="8" y1="21" x2="16" y2="21" />
        {/* Chart inside */}
        <path d="M6 13V10" />
        <path d="M10 13V8" />
        <path d="M14 13V9" />
        <path d="M18 13V7" />
    </svg>
);

export const SalesPitchIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Megaphone/bullhorn shape */}
        <path d="M3 11l18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        {/* Sound waves */}
        <path d="M21 8.5c1 1 1 3 0 4" opacity="0.7" />
    </svg>
);

// Map theme IDs to their respective icons
export const themeIcons = {
    relatable: HomeIcon,
    philosophical: ThinkIcon,
    argument: DebateIcon,
    explanatory: LightbulbIcon,
    compare: CompareIcon,
    hypothetical: SparklesIcon,
    story: BookIcon,
    roleplay: MasksIcon,
    analysis: SearchIcon,
    interview: InterviewIcon,
    presentation: PresentationIcon,
    salespitch: SalesPitchIcon
};

export const getThemeIcon = (themeId) => {
    return themeIcons[themeId] || HomeIcon;
};

// Difficulty level icons
export const SeedlingIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 12 8 8 5" />
        <path d="M12 12C12 12 12 8 16 5" />
        <path d="M8 5C8 5 4 6 4 10C4 14 8 14 12 12" />
        <path d="M16 5C16 5 20 6 20 10C20 14 16 14 12 12" />
    </svg>
);

export const FlameIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C16.5 22 19 18.5 19 14.5C19 10.5 16 8 14 6C14 9 12 11 10 11C10 11 10 8 12 4C8 6 5 10 5 14.5C5 18.5 7.5 22 12 22Z" />
        <path d="M12 22C10 22 8 20 8 17.5C8 15 10 13 12 13C14 13 16 15 16 17.5C16 20 14 22 12 22Z" />
    </svg>
);

export const RocketIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 8 6 8 12C8 15 9 18 12 22C15 18 16 15 16 12C16 6 12 2 12 2Z" />
        <path d="M12 12L8 16" />
        <path d="M12 12L16 16" />
        <circle cx="12" cy="9" r="2" />
        <path d="M5 18L8 15" />
        <path d="M19 18L16 15" />
    </svg>
);

export const difficultyIcons = {
    easy: SeedlingIcon,
    medium: FlameIcon,
    boss: RocketIcon
};

export const getDifficultyIcon = (difficultyId) => {
    return difficultyIcons[difficultyId] || FlameIcon;
};
