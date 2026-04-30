import React from 'react';
import {
    BookOpen,
    Briefcase,
    Flame,
    GitCompare,
    HelpCircle,
    Home,
    Lightbulb,
    Megaphone,
    MessagesSquare,
    Presentation,
    Rocket,
    SearchCheck,
    Sparkles,
    Sprout,
    UserSquare,
} from 'lucide-react';

const makeIcon = (Icon) => {
    const ThemedIcon = ({ className = 'w-6 h-6' }) => (
        <Icon className={className} strokeWidth={1.8} />
    );
    ThemedIcon.displayName = `${Icon.displayName || Icon.name || 'Icon'}ThemeIcon`;
    return ThemedIcon;
};

export const HomeIcon = makeIcon(Home);
export const ThinkIcon = makeIcon(HelpCircle);
export const DebateIcon = makeIcon(MessagesSquare);
export const LightbulbIcon = makeIcon(Lightbulb);
export const CompareIcon = makeIcon(GitCompare);
export const SparklesIcon = makeIcon(Sparkles);
export const BookIcon = makeIcon(BookOpen);
export const MasksIcon = makeIcon(UserSquare);
export const SearchIcon = makeIcon(SearchCheck);
export const InterviewIcon = makeIcon(Briefcase);
export const PresentationThemeIcon = makeIcon(Presentation);
export const SalesPitchIcon = makeIcon(Megaphone);

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
    presentation: PresentationThemeIcon,
    salespitch: SalesPitchIcon,
};

export const getThemeIcon = (themeId) => {
    return themeIcons[themeId] || HomeIcon;
};

export const SeedlingIcon = makeIcon(Sprout);
export const FlameIcon = makeIcon(Flame);
export const RocketIcon = makeIcon(Rocket);

export const difficultyIcons = {
    easy: SeedlingIcon,
    medium: FlameIcon,
    boss: RocketIcon,
};

export const getDifficultyIcon = (difficultyId) => {
    return difficultyIcons[difficultyId] || FlameIcon;
};
