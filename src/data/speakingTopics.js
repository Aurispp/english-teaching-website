/**
 * Pre-generated speaking practice topics for Talk the Talk
 * English only, organized by theme and difficulty level
 *
 * Level intent:
 * - Easy: simple topics with familiar vocabulary
 * - Medium: bridge prompts that add reasons, examples, or light structure
 * - Boss Mode: the previous medium tier, now reserved for more developed answers
 *
 * Medium is DERIVED, not stored: for every theme except `explanatory` it is the
 * Easy prompt plus a scaffold from MEDIUM_SCAFFOLDS, applied by getTopicList().
 * Edit a prompt once, in `easy`, and both tiers follow. Do not re-add baked
 * medium arrays.
 *
 * Curation rules (teacher audit, Aug 2026) — students are teens and adults:
 * - No child-register prompts (magic, toys, recess, playground fantasy).
 * - Brands only if globally famous (Apple, Netflix, Toyota); no niche B2B names.
 * - Keep US-only institutions out; use portable equivalents. Metric units only.
 * - Idiom and proverb prompts are WANTED, not a barrier: meeting the expression
 *   is part of the lesson. Do not cut a prompt for containing an idiom.
 * - UK/Irish English throughout: -ise, -our, -re, "holiday" not "vacation",
 *   "flat" not "apartment", "film" not "movie", "lift", "shop", "metro".
 *   Irish spelling follows the UK standard, so UK spelling is the rule here.
 * - A prompt must be answerable in the student's own language. If it isn't,
 *   it tests knowledge rather than English and belongs in `explanatory`.
 *
 * Explain It (`explanatory`) follows a stricter reading of that ladder after a
 * teacher audit:
 * - Easy asks students to explain something they already do or have an opinion
 *   about ("How do you learn a language?"). A learner who cannot answer the easy
 *   tier should feel out of practice, never uninformed — so "why does popcorn
 *   pop?" style general-knowledge questions live one tier up.
 * - Medium holds the how-does-it-work explanations (science, mechanisms, systems).
 * - Prompts carry NO "explain what happens first / give one example" scaffolding.
 *   The bare question is the task; the student riffs. Do not re-add suffixes here.
 */

export const themes = [
    { id: 'relatable', name: 'Everyday Life' },
    { id: 'philosophical', name: 'Deep Questions' },
    { id: 'argument', name: 'Debate' },
    { id: 'explanatory', name: 'Explain It' },
    { id: 'compare', name: 'Compare & Contrast' },
    { id: 'hypothetical', name: 'What If...' },
    { id: 'story', name: 'Storytelling' },
    { id: 'roleplay', name: 'Role Play' },
    { id: 'analysis', name: 'Deep Analysis' },
    // Business English themes (formal practice)
    { id: 'interview', name: 'Job Interview', formal: true },
    { id: 'presentation', name: 'Presentations', formal: true },
    { id: 'salespitch', name: 'Sales Pitch', formal: true }
];

export const difficulties = [
    { id: 'easy', name: 'Easy', description: 'Simple topics, familiar vocabulary' },
    { id: 'medium', name: 'Medium', description: 'Familiar prompts with reasons, examples, and simple structure' },
    { id: 'boss', name: 'Boss Mode', description: 'Nuanced prompts that require more developed answers' }
];

export const topics = {
    relatable: {
        easy: [
            // Morning & Daily Routines
            "Describe your morning routine",
            "What do you do first thing when you wake up?",
            "Describe your evening routine before bed",
            "What do you eat for breakfast?",
            "How do you get ready for work or school?",
            "Describe your perfect lazy Sunday",
            "What time do you usually wake up?",
            "Do you prefer mornings or evenings?",
            "What's the first thing you check on your phone?",
            "Describe your commute to work or school",

            // Food & Eating
            "Talk about your favourite food",
            "What's your go-to comfort food?",
            "Describe your favourite restaurant",
            "What did you eat yesterday?",
            "Do you like cooking? What do you cook?",
            "What's your favourite snack?",
            "Describe your ideal dinner",
            "What food do you hate?",
            "Talk about a food you tried recently",
            "What's your favourite dessert?",
            "Do you prefer sweet or savoury food?",
            "What do you usually drink with meals?",
            "Describe your favourite sandwich",
            "What's your favourite fruit?",
            "Do you eat breakfast every day?",

            // Home & Living Space
            "Describe your room",
            "What's your favourite spot in your home?",
            "Describe your neighbourhood",
            "What do you like about where you live?",
            "Describe your dream bedroom",
            "What's on the walls of your room?",
            "Do you prefer a tidy or messy space?",
            "Describe your kitchen",
            "What's your favourite piece of furniture?",
            "Do you have any plants at home?",

            // Friends & Family
            "Describe your best friend",
            "Talk about a family member you admire",
            "What do you and your friends do for fun?",
            "Describe your siblings (or being an only child)",
            "Who makes you laugh the most?",
            "Describe your grandparents",
            "Talk about your closest cousin",
            "Who do you call when you're sad?",
            "Describe a friend you've known for years",
            "What's your family like?",

            // Hobbies & Free Time
            "Talk about a hobby you enjoy",
            "What do you do on weekends?",
            "What do you do after work or school?",
            "Describe your favourite way to relax",
            "What games do you like to play?",
            "Do you have any collections?",
            "What do you do when you're bored?",
            "Describe a skill you're learning",
            "What's your favourite thing to do alone?",
            "How do you spend your free time?",

            // Technology & Social Media
            "What's on your phone's home screen?",
            "Describe your favourite app",
            "Talk about your favourite social media",
            "What video games do you play?",
            "How much time do you spend online?",
            "What do you watch on YouTube?",
            "Describe your favourite YouTuber or creator",
            "Do you prefer texting or calling?",
            "What's the last photo you took?",
            "Talk about your favourite website",

            // Entertainment
            "Talk about the last show you watched",
            "What's your favourite film?",
            "Describe your favourite TV series",
            "What kind of music do you like?",
            "Talk about your favourite song right now",
            "What podcasts do you listen to?",
            "Describe a concert you've been to",
            "What's the last book you read?",
            "Who's your favourite actor or actress?",
            "What's your favourite streaming service?",

            // Places & Travel
            "Describe your hometown",
            "Talk about your favourite place in your city",
            "Where do you like to go on weekends?",
            "Describe a place that makes you happy",
            "What's your favourite shop?",
            "Talk about a place you visit often",
            "Describe your favourite café or coffee shop",
            "Where do you go to think?",
            "What's the nicest place you've visited?",
            "Describe your favourite park",

            // Weather & Seasons
            "What is your favourite season? Why?",
            "Do you like rainy days?",
            "What do you do when it's hot outside?",
            "Describe your favourite weather",
            "What do you wear in winter?",
            "How does weather affect your mood?",
            "What's your least favourite season?",
            "Do you like snow?",
            "What do you do on sunny days?",
            "Describe the weather today",

            // Memories & Experiences
            "Describe a happy memory",
            "Talk about your favourite birthday",
            "Describe a fun trip you took",
            "What's your favourite childhood memory?",
            "Talk about a time you laughed a lot",
            "Describe a nice surprise you got",
            "What's your earliest memory?",
            "Talk about a memorable meal",
            "Describe a fun day with friends",
            "What's your favourite holiday memory?",

            // School & Work
            "What's the best thing about your job or school?",
            "Describe your workplace or classroom",
            "Talk about your favourite subject or task",
            "What do you like about your coworkers or classmates?",
            "Describe your lunch break",
            "What's something you learned recently?",
            "Talk about your favourite teacher or boss",
            "What time does your day start?",
            "Describe a normal day at work or school",
            "What do you wish was different about your job or school?",

            // Pets & Animals
            "Describe your pet (or dream pet)",
            "What's your favourite animal?",
            "Do you prefer cats or dogs?",
            "Talk about an animal you find interesting",
            "Have you ever had a pet?",

            // Style & Appearance
            "Describe your style – what do you like to wear?",
            "What's your favourite outfit?",
            "Do you have a favourite colour to wear?",
            "Describe your favourite shoes",
            "How would you describe your look?",
            "What do you wear on a typical day?",
            "Talk about your favourite accessory",
            "Do you follow fashion trends?",
            "What's the most comfortable thing you own?",
            "Describe what you're wearing today",

            // Health & Wellness
            "How do you stay healthy?",
            "Do you exercise? What kind?",
            "What do you do when you're sick?",
            "Talk about your sleep habits",
            "What makes you feel energetic?",
            "How do you deal with stress?",
            "What's your favourite form of exercise?",
            "Talk about your self-care routine",

            // Shopping & Money
            "What do you like to shop for?",
            "Do you prefer online or in-store shopping?",
            "Talk about the last thing you bought",
            "What's something you're saving for?",
            "Describe your shopping habits",
            "What's the best deal you ever found?",
            "Where do you buy your clothes?",
            "Talk about something you want to buy",

            // Simple Opinions
            "What's your favourite public holiday?",

            // Miscellaneous Easy
            "What makes you smile?",
            "Describe something that annoys you",
            "What's your favourite smell?",
            "Talk about something you're good at",
            "What do you do to cheer yourself up?",
            "What's your favourite day of the year?",
            "Talk about something you do every day",
            "What's in your bag right now?",
            "Describe your favourite sound",
            "What's on your to-do list today?",
            "Talk about your favourite drink",
            "What do you do on holidays?",
            "Describe your dream holiday spot",
            "What's your favourite time of day?",
            "Talk about your morning coffee or tea",
            "What makes a good day for you?",
            "Describe your favourite photo",
            "What's your current favourite thing?",
            "Talk about something that makes you happy",

            // Additional Easy - Daily Life Extended
            "How do you prepare for the next day?",
            "Describe your workspace or study area",
            "How do you spend your evenings?",
            "What's your favourite thing about your daily routine?",
            "Describe a typical Monday for you",

            // Additional Easy - Food & Drinks Extended
            "What snacks do you keep at home?",
            "What's your favourite drink on a hot day?",
            "Describe a dish from your culture",
            "What food reminds you of home?",
            "What's the strangest food you've eaten?",
            "Describe your favourite homemade meal",

            // Additional Easy - People & Relationships
            "Who do you spend the most time with?",
            "Talk about a neighbour you like",
            "Who taught you something important?",
            "Talk about someone you admire",
            "Who gives you the best advice?",
            "Talk about a kind person in your life",
            "Describe someone who inspires you",

            // Additional Easy - Hobbies Extended
            "Describe a hobby you want to start",
            "What's something you do every weekend?",
            "Talk about a skill you're proud of",
            "Describe your favourite indoor activity",
            "What's your favourite outdoor activity?",
            "Describe a relaxing activity",

            // Additional Easy - Technology Extended
            "What's your favourite thing about your phone?",
            "What do you use the internet for most?",
            "Talk about your favourite online content",
            "What technology makes your life easier?",
            "Describe your computer or laptop",
            "What's the best feature on your phone?",

            // Additional Easy - Places Extended
            "Where do you feel most comfortable?",
            "Talk about a place you go to relax",
            "Describe a cosy place you know",
            "Talk about a place with good memories",
            "Describe your favourite outdoor spot",



        ],
        boss: [
            // Boss Mode - previous medium tier
            // Routines & Habits
            "Describe your ideal morning routine and why it works for you",
            "How has your daily routine changed over the past few years?",
            "What habits would you like to build or break?",
            "Explain why your current schedule works (or doesn't work) for you",
            "Describe how your routine differs on workdays vs weekends",
            "What morning rituals help you start your day right?",
            "How do you balance productivity with relaxation in your routine?",
            "Describe the most important habit you've developed",
            "What would you change about your typical day?",
            "How do you wind down after a stressful day?",

            // Relationships & Social Life
            "Describe a friendship that has evolved over time",
            "What qualities do you value most in your relationships?",
            "How do you maintain friendships when life gets busy?",
            "Talk about how your social life has changed as you've grown older",
            "Describe a time when a friend surprised you",
            "What makes someone a good listener?",
            "How do you handle disagreements with friends or family?",
            "Describe the difference between acquaintances and true friends",
            "What have your friendships taught you about yourself?",
            "How do you make time for the people who matter?",

            // Memories & Experiences
            "Share a childhood memory that still makes you smile",
            "Describe an experience that changed your perspective",
            "Talk about a moment when you felt truly grateful",
            "Share a memory that taught you an important lesson",
            "Describe a trip that didn't go as planned but turned out great",
            "What's a small moment that you'll never forget?",
            "Talk about a time you stepped outside your comfort zone",
            "Describe a celebration that was particularly meaningful",
            "Share a memory of trying something new",
            "What experience made you more independent?",

            // Preferences & Opinions
            "Explain why you prefer your favourite season over the others",
            "Describe your favourite comfort food and when you eat it",
            "Talk about a book or film that changed your perspective",
            "Describe what makes a perfect evening for you",
            "Explain your preference for mornings or nights",
            "What makes a city a good place to live, in your opinion?",
            "Describe your ideal holiday and why it appeals to you",
            "Talk about how your taste in music has changed over time",
            "What do you look for when choosing a restaurant?",

            // Home & Living
            "Describe your ideal living space and what makes it special",
            "Talk about what home means to you",
            "How would you describe your decorating style?",
            "Describe the neighbourhood you'd love to live in",
            "Talk about how your living situation has shaped your habits",
            "What items in your home have sentimental value?",
            "Describe the atmosphere you try to create at home",
            "How do you balance functionality and comfort in your space?",
            "What would you never change about your current home?",

            // Personal Growth
            "Talk about a skill you'd like to learn and why",
            "Describe a time when you overcame self-doubt",
            "What have you learned about yourself in the past year?",
            "Share a moment when you felt proud of yourself",
            "How do you push yourself to improve?",
            "Describe a challenge that made you stronger",
            "What goals are you currently working towards?",
            "Talk about a fear you've overcome",
            "How do you stay motivated when things get hard?",
            "Describe how you handle failure or setbacks",

            // Work & Study
            "Describe what you enjoy most about your job or studies",
            "How do you stay focused when you need to concentrate?",
            "Talk about a project you're proud of completing",
            "What makes a good work or study environment?",
            "Describe how you handle pressure or deadlines",
            "What skills have you developed through your work or studies?",
            "How do you balance work/study with personal life?",
            "Talk about someone who has mentored or inspired you professionally",
            "Describe your approach to learning something new",
            "What would your dream job look like?",

            // Leisure & Hobbies
            "Describe how your hobbies help you recharge",
            "Talk about a hobby you picked up recently",
            "What activity do you lose track of time doing?",
            "Describe why your favourite hobby is important to you",
            "How do you decide how to spend your free time?",
            "Talk about a creative outlet that brings you joy",
            "What hobby would you recommend to anyone?",
            "Describe an activity that helps clear your mind",
            "How have your interests evolved over time?",
            "Talk about a hobby you wish you had more time for",

            // Technology & Modern Life
            "How has technology changed the way you communicate?",
            "Describe your relationship with social media",
            "Talk about an app or tool that has improved your life",
            "How do you manage screen time?",
            "Describe how you stay connected with distant friends or family",
            "What role does technology play in your daily routine?",
            "Talk about a time technology frustrated you",
            "How do you balance online and offline activities?",
            "Describe your approach to digital privacy",
            "What technology could you not live without?",

            // Food & Cooking
            "Describe a meal that brings back memories",
            "Talk about your journey with cooking",
            "What food traditions does your family have?",
            "Describe your approach to trying new foods",
            "Talk about a dish you've mastered making",
            "What does a special meal look like for you?",
            "Describe how your food preferences have changed",
            "Talk about the role of food in bringing people together",
            "What makes eating out special compared to cooking at home?",
            "Describe a food experience that surprised you",

            // Health & Wellness
            "Share your thoughts on the importance of taking breaks",
            "How do you maintain your mental health?",
            "Talk about how sleep affects your mood and productivity",
            "What does self-care mean to you?",
            "Talk about the role of exercise in your life",
            "How do you maintain energy throughout the day?",
            "Describe what wellness looks like for you",
            "Talk about a health habit that made a real difference",

            // Culture & Entertainment
            "Describe a piece of art or music that moved you",
            "Talk about why certain films or shows resonate with you",
            "What role does entertainment play in your life?",
            "Describe a performance or event that impressed you",
            "Talk about your favourite genre of music and why",
            "What makes a story compelling to you?",
            "Describe how you discover new music or shows",
            "Talk about a book that stayed with you",
            "What kind of content do you enjoy most?",
            "Describe your film or show watching habits",

            // Places & Travel
            "Describe a place that makes you feel peaceful",
            "Talk about a trip that exceeded your expectations",
            "What do you look for when visiting a new place?",
            "Describe the most memorable place you've visited",
            "Talk about why travel (or staying home) appeals to you",
            "What's on your travel bucket list?",
            "Describe how travelling has changed your perspective",
            "What makes a destination worth visiting?",
            "Describe a place you'd love to revisit",

            // Traditions & Family
            "Describe a tradition in your family that you love",
            "Talk about how you celebrate special occasions",
            "What family traditions would you pass on?",
            "Describe a public holiday that's meaningful to you",
            "Talk about the role of traditions in your life",
            "What new traditions have you started?",
            "Describe how your family gatherings typically go",
            "Talk about a celebration that brought your family together",
            "What traditions have you adapted or changed?",
            "Describe a cultural tradition you appreciate",

            // Miscellaneous Boss
            "Describe the most useful thing you've learned this year",
            "Talk about something you've changed your mind about",
            "What does a balanced life look like to you?",
            "Describe a small thing that brightens your day",
            "Talk about what you do when you need to recharge",
            "What makes ordinary moments feel special?",
            "Describe your approach to trying new things",
            "Talk about a lesson you learned the hard way",
            "What advice would you give your younger self?",
            "Describe what a successful day looks like for you",
            "Talk about something you're currently excited about",
            "What small pleasures do you enjoy most?",
            "Describe how you stay organised",
            "Talk about something that always puts you in a good mood",
            "What do you do to stay curious and keep learning?",

            // Additional Boss - Deeper Daily Life
            "How do you decide what's worth spending money on?",
            "Describe your philosophy on punctuality",
            "Talk about how you handle interruptions to your plans",
            "What's your approach to making difficult decisions?",
            "Describe a habit you've successfully changed",
            "How do you deal with waiting or delays?",
            "Talk about your relationship with routines",
            "What do you consider a productive use of time?",
            "Describe how you handle unexpected guests",
            "How do you approach household chores and responsibilities?",

            // Additional Boss - Social Dynamics
            "Describe how you navigate small talk",
            "Talk about your comfort level with silence in conversations",
            "Describe your approach to maintaining friendships over distance",
            "Talk about how you show appreciation to people",
            "What makes someone easy or difficult to talk to?",
            "Describe how you handle being the centre of attention",
            "How do you approach meeting new people?",
            "Talk about your role in your friend group",
            "Describe how you handle gossip or rumours",


            // Additional Boss - Emotions & Self
            "Describe how you handle disappointment",
            "Talk about what makes you feel confident",
            "How do you deal with jealousy or envy?",
            "Describe your relationship with patience",
            "Talk about what triggers your frustration",
            "How do you handle feeling overwhelmed?",
            "Describe what makes you feel appreciated",
            "Talk about how you process difficult emotions",
            "What helps you feel grounded?",
            "Describe your relationship with criticism",

            // Additional Boss - Life Perspectives
            "How has your definition of success changed?",

            // Additional Boss - Practical Life
            "Describe your approach to staying informed about current events",
            "Talk about how you handle financial decisions",
            "What's your philosophy on lending and borrowing?",
            "Describe how you approach gift-giving",
            "Talk about your relationship with clutter and possessions",
            "How do you decide what to keep and what to let go of?",
            "Describe your approach to planning versus spontaneity",
            "Talk about how you handle being wrong about something",

            // Additional Boss - Modern Challenges
            "How do you maintain focus in a distracted world?",

            // Additional Boss - Creativity & Expression
            "Describe how you express yourself creatively",
            "Talk about what inspires you most",
            "How do you approach creative blocks?",
            "Describe something you've created that you're proud of",
            "Talk about the role of art in your life",
            "What forms of self-expression come naturally to you?",
            "Describe how you appreciate beauty in everyday life",
            "How do you find your creative voice?",
            "Describe what aesthetic appeals to you most",

            // Additional Boss - Growth & Learning
            "Describe your ideal learning environment",
            "How do you know when you've truly learned something?",
            "Talk about a subject you'd like to master",
            "Describe how you handle being a beginner at something",
            "What motivates you to keep improving?",
            "How do you balance depth versus breadth in learning?",
            "Talk about your approach to intellectual curiosity",

            // Additional Boss - Community & Belonging
            "Describe where you feel you most belong",
            "Talk about your relationship with your neighbourhood",
            "How do you contribute to your community?",
            "Describe what makes a place feel welcoming",
            "Talk about the communities you're part of",
            "How do you find people with similar interests?",
            "Describe your ideal social environment",
            "Talk about the role of belonging in your wellbeing",
            "How do you balance solitude and social connection?",
            "Describe what makes you feel at home somewhere"
        ]
    },
    philosophical: {
        easy: [
            // Happiness & Emotions
            "What makes you happy?",
            "Is happiness a choice?",
            "What is joy?",
            "Can you be happy alone?",
            "Why do we laugh?",
            "What makes people sad?",
            "Is it okay to cry?",
            "What is love?",
            "Why do we feel angry?",
            "Can you have too much happiness?",

            // Good & Bad
            "Is it better to be kind or honest?",
            "What makes someone a good person?",
            "Is lying always wrong?",
            "What is fairness?",
            "Should we always follow rules?",
            "What makes something right or wrong?",
            "Is it okay to make mistakes?",
            "Can bad things lead to good things?",
            "What is courage?",
            "Is stealing ever okay?",

            // Life & Meaning
            "What is a good life?",
            "What is the most important thing in life?",
            "Why are we here?",
            "What does success mean to you?",
            "Is life fair?",
            "What is the purpose of work?",
            "Why do we have dreams?",
            "What makes life worth living?",
            "Is there a meaning to everything?",
            "What happens when we die?",

            // Relationships
            "Is it better to have more friends or a few close friends?",
            "Why do people need friends?",
            "What makes a good friend?",
            "Is family important?",
            "Why do people argue?",
            "Is it better to give or to receive?",
            "Can you love someone you don't like?",
            "Why do we need other people?",
            "What is trust?",
            "Is forgiveness important?",

            // Success & Achievement
            "Is it more important to try or to win?",
            "Can money buy happiness?",
            "Is hard work always rewarded?",
            "What is talent?",
            "Is luck real?",
            "Does everyone deserve success?",
            "Is competition good or bad?",
            "What is ambition?",
            "Is fame important?",
            "What is wisdom?",

            // Beauty & Art
            "What is beauty?",
            "Why do we like music?",
            "Is art important?",
            "What makes something beautiful?",
            "Can nature be ugly?",
            "What is creativity?",
            "Why do people make art?",
            "Is beauty the same for everyone?",
            "What makes a good story?",

            // Time & Change
            "Why does time pass?",
            "Is the past important?",
            "Can people change?",
            "Is the future set?",
            "Why do we grow old?",
            "Is change good or bad?",
            "What is a memory?",
            "Should we live in the moment?",
            "Is tomorrow promised?",
            "Why do we remember some things and forget others?",

            // Truth & Knowledge
            "What is truth?",
            "Can you know everything?",
            "Is seeing believing?",
            "Why do people have different opinions?",
            "Is common sense real?",
            "What is intelligence?",
            "Can you learn too much?",
            "Is knowledge power?",
            "Why do we ask questions?",
            "Is there one truth or many?",

            // Freedom & Choice
            "What is freedom?",
            "Do we really have choices?",
            "Is too much freedom bad?",
            "What is responsibility?",
            "Can you be free and still have rules?",
            "Why do people want to be free?",
            "What is independence?",
            "Should everyone be equal?",
            "Is it better to lead or follow?",
            "What is power?",

            // Nature & Animals
            "Are humans special?",
            "What makes humans different from animals?",
            "Do animals have feelings?",
            "Is nature important?",
            "Should we protect the environment?",
            "Are some animals better than others?",
            "What can we learn from nature?",
            "Do animals have rights?",
            "Is the world alive?",
            "Why do we love pets?",

            // Simple Big Questions
            "Is there life after death?",
            "Are we alone in the universe?",
            "What is normal?",
            "Is everything connected?",
            "Can we trust our senses?",

            // Society & People
            "Why do we have laws?",
            "What is culture?",
            "Why are people different?",
            "Is it important to belong?",
            "What makes a good leader?",
            "Why do we wear clothes?",
            "Is tradition important?",
            "Why do people fight?",
            "What is respect?",
            "Should everyone think the same?",

            // Self & Identity
            "Who am I?",
            "What makes you, you?",
            "Can you change who you are?",
            "What is your personality?",
            "Are you the same person you were years ago?",
            "What defines a person?",
            "Is your name important?",
            "Do we have a true self?",
            "What makes someone unique?",
            "Are thoughts private?",

            // Miscellaneous Easy Philosophy
            "What is patience?",
            "Is perfection possible?",
            "What is hope?",
            "Can you have everything?",
            "What is peace?",
            "Is simplicity good?",
            "What is comfort?",
            "Is there good in everyone?",

            // Additional Easy - Simple Ethics
            "Is it ever okay to lie to help someone?",
            "Should you always keep a promise?",
            "Is it wrong to ignore someone?",
            "What makes something unfair?",
            "Is being selfish always bad?",
            "Should you help strangers?",
            "Is revenge ever okay?",
            "What makes someone trustworthy?",
            "Is it okay to judge others?",
            "Should you always say sorry?",

            // Additional Easy - Feelings & Emotions
            "Why do we feel fear?",
            "Is it okay to be jealous?",
            "What is loneliness?",
            "Can you control your feelings?",
            "Why do we get bored?",
            "What makes someone brave?",
            "Is it okay to be proud?",
            "What is guilt?",
            "Why do we feel shy?",
            "Can you feel too much?",

            // Additional Easy - People & Society
            "Why do people follow leaders?",
            "Is it better to be popular or liked?",
            "Why do people gossip?",
            "What makes someone boring?",
            "Is it hard to be different?",
            "Why do people copy others?",
            "What is a hero?",
            "Is being famous good?",
            "Why do people make fun of others?",
            "Is it okay to be ordinary?",

            // Additional Easy - Simple Philosophy
            "Can dreams be real?",
            "Is everything temporary?",

            // Additional Easy - Good & Bad Choices
            "Is it okay to give up?",
            "Should you always try your best?",
            "Is it wrong to say no?",
            "What makes a bad decision?",
            "Is taking risks smart or silly?",
            "Should you always listen to advice?",
            "Is being careful the same as being scared?",
            "Is it okay to change your mind?",
            "Should you always be honest about your feelings?",

            // Additional Easy - Life Questions
            "Why do bad things happen to good people?",
            "Can you make your own luck?",
            "Is life a test?",
            "What is destiny?",
            "Is the world getting better or worse?",
            "What is a miracle?",

            // Additional Easy - Self & Others
            "Is it okay to put yourself first?",
            "What makes you different from everyone else?",
            "What makes someone annoying?",
            "Can you be friends with yourself?",
            "What makes someone mature?",

            // Additional Easy - Simple Wonders
            "What is a coincidence?",

            // Additional Easy - Values
            "Is money important?",
            "What is more valuable – time or money?",
            "Is health more important than wealth?",
            "Is it better to be smart or kind?",
            "What is the best age to be?",
            "Is fun important?",
            "What is the point of school?",
            "Is it better to be young or old?",

            // Additional Easy - Wonder Questions
            "Can machines feel?",
            "Why do we wonder about things?",
            // Idioms and proverbs - the expression itself is worth learning
            "Is the glass half empty or half full?",
            "Is silence golden?",
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Meaning & Purpose
            "What makes a life meaningful – achievement, relationships, or something else?",
            "Is happiness the ultimate goal of life?",
            "Can meaning exist without purpose?",
            "What role does suffering play in personal growth?",
            "Is it possible to waste a life?",
            "How do we know if we're living authentically?",
            "Can you find meaning in ordinary moments?",
            "Is the search for meaning itself meaningful?",
            "What gives mundane tasks significance?",
            "Can meaning be created or must it be discovered?",

            // Identity & Self
            "What defines personal identity – memories, personality, or something else?",
            "Do our choices define who we are, or does who we are define our choices?",
            "Is there a true self hidden beneath our social masks?",
            "How much of who we are is shaped by others?",
            "Can we reinvent ourselves completely?",
            "What remains constant about you through change?",
            "Is personality fixed or fluid?",
            "How do our stories about ourselves shape who we become?",
            "Can you know yourself fully?",

            // Knowledge & Truth
            "Can we ever truly know another person's experience?",
            "How do we know what is truly 'right' or 'wrong'?",
            "Is truth relative or absolute?",
            "Can we trust our memories?",
            "What's the difference between believing and knowing?",
            "How do we distinguish truth from convincing lies?",
            "Can two contradictory things both be true?",
            "Is ignorance ever preferable to knowledge?",
            "How do our beliefs shape what we perceive?",
            "Can you know something without being able to prove it?",

            // Time & Existence
            "What is the nature of time – does the past still exist?",
            "Is the present moment all that truly exists?",
            "How does our perception of time affect how we live?",
            "Are we shaped more by our past or our anticipated future?",
            "Is it possible to live fully in the present?",
            "What does it mean for something to end?",
            "How do we make peace with impermanence?",
            "Is memory a reliable record of the past?",
            "Would knowing the future change it?",
            "What is the relationship between time and change?",

            // Morality & Ethics
            "Is it possible to be completely selfless?",
            "Does everyone deserve a second chance?",
            "What is the relationship between freedom and responsibility?",
            "Can good intentions justify bad outcomes?",
            "Is it wrong to benefit from others' misfortune?",
            "Do we have obligations to strangers?",
            "Is fairness the same as equality?",
            "Can an action be wrong if no one is harmed?",
            "Is moral growth always possible?",
            "What do we owe to future generations?",

            // Society & Individual
            "Is society necessary for individual happiness?",
            "How do cultural norms shape our sense of right and wrong?",
            "Is conformity natural or learned?",
            "What responsibilities do we have to our communities?",
            "Can individuals change society?",
            "Is privacy a fundamental need?",
            "How do we balance individual freedom with collective good?",
            "What makes a society just?",
            "Are humans inherently selfish or cooperative?",

            // Art & Beauty
            "Can art change the world?",
            "What makes something art?",
            "Is beauty in the eye of the beholder?",
            "Why does music move us emotionally?",
            "Can something be true without being beautiful?",
            "What is the value of fiction?",
            "Is creativity unique to humans?",
            "Why do we need stories?",
            "Can art be morally wrong?",
            "What makes art meaningful to you?",

            // Love & Relationships
            "What is the nature of love?",
            "Can you love someone and not understand them?",
            "Is unconditional love possible?",
            "What role does sacrifice play in love?",
            "Can friendship be deeper than romantic love?",
            "Is it possible to love too much?",
            "How do we balance attachment with freedom in relationships?",
            "What makes some relationships last while others don't?",
            "Can love be rational?",
            "Is loneliness necessary for self-discovery?",

            // Life Choices
            "Is it better to live a short exciting life or a long peaceful one?",
            "Should we follow our passions or be practical?",
            "Is it better to be safe or to take risks?",
            "How do we know we're making the right decision?",
            "Is regret useful or harmful?",
            "Should we live for ourselves or for others?",
            "Is it better to have loved and lost?",
            "Can we truly learn from others' mistakes?",
            "Is comfort the enemy of growth?",
            "How do we balance ambition with contentment?",

            // Mind & Consciousness
            "Where do thoughts come from?",
            "Is the mind the same as the brain?",
            "Can we control our emotions?",
            "What is intuition?",
            "Are dreams meaningful?",
            "Can we think without language?",
            "What is imagination?",
            "Is consciousness an illusion?",
            "Can we ever be truly objective?",
            "What is the relationship between thought and action?",

            // Human Nature
            "Are people basically good or bad?",
            "Is human nature fixed or changeable?",
            "Why do people do things they know are wrong?",
            "Is selfishness natural?",
            "What drives human behaviour?",
            "Can empathy be taught?",
            "Why do we fear the unknown?",
            "Is jealousy inevitable?",
            "What makes humans want to create?",
            "Is boredom uniquely human?",

            // Values & Beliefs
            "Where do our values come from?",
            "Can beliefs be changed through argument?",
            "Is doubt healthy?",
            "What makes a belief rational?",
            "Should we question everything?",
            "Can you believe something without evidence?",
            "Is certainty achievable?",
            "How do our beliefs affect our experiences?",
            "Can two people with different values both be right?",
            "What shapes our worldview?",

            // Miscellaneous Boss
            "Is there inherent meaning in the universe or do we create it?",
            "What is the relationship between pain and pleasure?",
            "Can something be wrong even if it feels right?",
            "Is change always possible?",
            "What is the purpose of difficulty?",
            "Can you be happy without being good?",
            "Is simplicity better than complexity?",
            "What is the relationship between power and responsibility?",
            "Is authenticity always valuable?",
            "Can reason and emotion coexist?",

            // Additional Boss - Deeper Ethics
            "Can breaking the law ever be the right thing to do?",

            // Additional Boss - Knowledge & Understanding
            "What is the difference between understanding and information?",
            "Is wisdom different from intelligence?",
            "How do we know when we're deceiving ourselves?",
            "What makes an explanation satisfying?",
            "How do biases affect what we consider knowledge?",

            // Additional Boss - Personal Growth
            "What is the relationship between struggle and growth?",
            "Can we change without suffering?",
            "Is self-improvement always valuable?",
            "What do we lose when we change for the better?",
            "How do we distinguish growth from mere change?",
            "Is discomfort necessary for learning?",
            "Can we truly transcend our limitations?",
            "What role does failure play in becoming who we are?",
            "Is the examined life truly worth living?",

            // Additional Boss - Society & Systems
            "Is democracy the best form of government?",

            // Additional Boss - Existence & Being
            "What makes life valuable?",
            "Is existence a gift or a burden?",
            "What is the relationship between being and becoming?",
            "Is there meaning in randomness?",
            "Can something matter if it doesn't last?",
            "What is the significance of individual existence?",
            "Is consciousness a blessing or a curse?",
            "Does the universe care about our existence?",
            "What makes existence preferable to non-existence?",
            "Is there dignity in simply existing?",


            // Additional Boss - Choice & Action
            "Is not choosing also a choice?",
            "What makes a choice truly free?",

            // Additional Boss - Time & Change
            "How does awareness of mortality shape our choices?",


            // Additional Boss - Virtue & Character
            "Can virtue be taught?",
            "Is there a difference between being good and appearing good?",
            "What makes someone admirable?",
            "Is humility always a virtue?",
            "Can you be too honest?",
            "What is the relationship between happiness and virtue?",
            "Is courage meaningless without fear?",
            "Can character change throughout life?",
            "What distinguishes confidence from arrogance?",
            "Is patience always wise?",
            // Abstract metaphysics re-tiered up from Easy
            "What is real?",
            "Why does anything exist?",
            "What is the soul?",
            "What is the mind?",
            "If a tree falls and no one hears it, does it make a sound?",
            "Why is there something instead of nothing?",
            "What is consciousness?",
        ]
    },
    argument: {
        easy: [
            // Classic Preferences
            "Cats or dogs: which is better?",
            "Tea or coffee: which is better?",
            "Early bird or night owl: which is better?",
            "Summer or winter: which is your favourite?",
            "Beach or mountains: where would you go?",
            "City or countryside: where would you live?",
            "Sweet or savoury snacks: which do you prefer?",
            "Hot weather or cold weather: which is better?",
            "Books or films: which is better?",
            "Indoor or outdoor activities: which do you prefer?",

            // Food Debates
            "Pizza or tacos: which is better?",
            "Breakfast or dinner: which meal is best?",
            "Chocolate or vanilla: which flavour is better?",
            "Home cooking or eating out: which is better?",
            "Fast food or slow food: which is better?",
            "Fruits or vegetables: which is healthier?",
            "Spicy food or mild food: which is better?",
            "Hot drinks or cold drinks: which do you prefer?",
            "Cake or ice cream: which is better?",
            "Coffee or energy drinks: which is better?",

            // Technology & Media
            "TikTok or YouTube: which is better?",
            "Android or iPhone: which side are you on?",
            "Spotify or Apple Music: which is better?",
            "Netflix or cinema: which is better?",
            "Video calls or phone calls: which is better?",
            "Texting or calling a friend: which is better?",
            "Online shopping or in-store shopping: which is better?",
            "E-books or paper books: which do you prefer?",
            "Social media or no social media: which is better?",
            "Gaming console or PC: which is better?",

            // Daily Life
            "Morning shower or night shower: which is better?",
            "Neat desk or creative mess: which is better?",
            "Planning ahead or being spontaneous: which is better?",
            "Working alone or in a team: which is better?",
            "Bus or bicycle for short trips: which is better?",
            "Cash or card: which do you prefer?",
            "Living at home vs. living alone: which is better?",
            "Public transport or driving yourself: which is better?",
            "Big breakfast or big dinner: which is better?",
            "Early arrival or just on time: which is better?",

            // Entertainment
            "Subtitles on or off when watching shows?",
            "Comedies or dramas: which is better?",
            "Physical sports or esports: which is better?",
            "Reading fiction or non-fiction: which is better?",
            "Live music or recorded music: which is better?",
            "Board games or video games: which is better?",
            "Watching sports or playing sports: which is better?",
            "Horror films or romantic comedies: which is better?",
            "Podcasts or music while commuting: which is better?",

            // Social & Lifestyle
            "Big friend group or small friend group: which is better?",
            "Group projects or solo work: which is better?",
            "Holiday with friends or holiday with family: which is better?",
            "Partying or quiet nights in: which is better?",
            "Many hobbies or one deep hobby: which is better?",
            "Weekend trips or long holidays: which is better?",
            "Meeting new people or deepening old friendships: which is better?",
            "Adventure travel or relaxation travel: which is better?",
            "Celebrating birthdays big or small: which is better?",

            // School & Work
            "Homework on Friday night or Sunday night: which is better?",
            "Online classes or in-person classes: which is better?",
            "Open office or private office: which is better?",
            "Working from home or working at an office: which is better?",
            "Morning classes or afternoon classes: which is better?",
            "Strict teacher or relaxed teacher: which is better?",
            "Digital notes or handwritten notes: which is better?",
            "Multiple choice or essay exams: which is better?",
            "Internships or classroom learning: which is better?",
            "Salary or job satisfaction: which is more important?",

            // Lifestyle Choices
            "Renting or buying a home: which is better?",
            "Getting up with alarm or naturally: which is better?",
            "Minimalist living or cosy clutter: which is better?",
            "Gym workout or outdoor exercise: which is better?",
            "Cooking for yourself or meal delivery: which is better?",
            "Having pets or no pets: which is better?",
            "City flat or house with garden: which is better?",
            "New car or used car: which is better?",
            "Saving money or enjoying life now: which is better?",
            "Following trends or having your own style: which is better?",

            // Random Fun Debates
            "Superpowers: flying or invisibility?",
            "Time travel: past or future?",
            "Window seat or aisle seat: which is better?",
            "Sunrise or sunset: which is more beautiful?",
            "Ocean or lake: which is better for swimming?",

            // Miscellaneous Easy Debates
            "Texting with emojis or without: which is better?",
            "Having siblings or being an only child: which is better?",
            "Watching shows alone or with others: which is better?",
            "Camping or hotels: which is better?",
            "New Year's Eve or your birthday: which is better?",
            "Spring or autumn: which season is better?",
            "Having a plan or going with the flow: which is better?",
            "Being too hot or too cold: which is worse?",
            "Wearing glasses or contact lenses: which is better?",
            "Morning workouts or evening workouts: which is better?",


            // Additional Easy - Entertainment Choices
            "Action films or comedy films: which is better?",
            "New shows or rewatching favourites: which is better?",
            "Short episodes or long episodes: which is better?",
            "Reading on phone or tablet: which is better?",
            "Music with lyrics or instrumental: which is better?",
            "Slow songs or fast songs: which is better?",
            "Scary games or relaxing games: which is better?",
            "Playing games or watching others play: which is better?",

            // Additional Easy - Daily Habits
            "Making the bed or leaving it: which is better?",
            "Eating breakfast at home or on the go: which is better?",
            "Walking or taking short drives: which is better?",

            // Additional Easy - Social Preferences
            "Texting in group or private chats: which is better?",
            "Phone calls or voice messages: which is better?",
            "Meeting at a café or at home: which is better?",
            "Big parties or small gatherings: which is better?",
            "Talking or listening: which do you prefer?",
            "Giving gifts or receiving gifts: which is better?",
            "Hugging or handshaking: which is better?",
            "Being the host or the guest: which is better?",
            "Formal or casual hangouts: which is better?",

            // Additional Easy - Shopping & Spending
            "Brand names or generic products: which is better?",
            "Buying new or second-hand: which is better?",
            "Spending on food or on clothes: which is better?",
            "Sales or full price for quality: which is better?",
            "Shopping alone or with others: which is better?",
            "Window shopping or quick buying: which is better?",
            "Many cheap things or one expensive thing: which is better?",
            "Gifts or experiences for presents: which is better?",

            // Additional Easy - Weather & Seasons
            "Rainy days or sunny days: which is better?",
            "Snow or no snow: which is better?",
            "Spring flowers or autumn leaves: which is better?",
            "Hot sunny beach or cool mountain: which is better?",
            "Staying inside on rainy days or going out: which is better?",
            "Summer fruits or winter comfort food: which is better?",
            "Long summer days or cosy winter nights: which is better?",
            "Thunderstorms: exciting or scary?",
            "Living somewhere with seasons or constant weather: which is better?",
            "Humid heat or dry heat: which is better?",

            // Additional Easy - Home & Space
            "Living near work or in a nice area: which is better?",

            // Additional Easy - Learning Style
            "Learning from videos or from books: which is better?",
            "Studying in silence or with music: which is better?",
            "Morning study or evening study: which is better?",
            "Taking notes or just listening: which is better?",
            "Learning alone or in groups: which is better?",
            "Flashcards or practice problems: which is better?",
            "Reading or listening to learn: which is better?",
            "Short study sessions or long ones: which is better?",
            "Learning one topic deeply or many topics: which is better?",
            "Deadlines or no deadlines: which is better?",

            // Additional Easy - Miscellaneous Fun
            "Taking photos or living in the moment: which is better?",
            "Planning holidays or last-minute trips: which is better?",
            "Flying or driving for travel: which is better?",
            "Asking for directions or using GPS: which is better?",
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Technology & Society
            "Argue for or against: Social media does more harm than good",
            "Argue for or against: Technology makes us less social",
            "Argue for or against: Everyone should learn to code",
            "Argue for or against: Smartphones should be banned in schools",
            "Argue for or against: Online friendships are as real as in-person ones",
            "Argue for or against: We spend too much time looking at screens",
            "Argue for or against: AI will create more jobs than it destroys",
            "Argue for or against: Social media companies are responsible for user content",
            "Argue for or against: Video games can be educational",
            "Argue for or against: Digital privacy is a fundamental right",

            // Education
            "Argue for or against: College education should be free",
            "Argue for or against: Homework does more harm than good",
            "Argue for or against: Schools should teach financial literacy",
            "Argue for or against: Learning a musical instrument should be mandatory",
            "Argue for or against: Exams are the best way to test knowledge",
            "Argue for or against: All students should learn a second language",
            "Argue for or against: Physical education should be optional",
            "Argue for or against: Schools should start later in the morning",
            "Argue for or against: Teachers should be paid more",
            "Argue for or against: Online learning is as effective as in-person",

            // Work & Economy
            "Argue for or against: Working from home is better than office work",
            "Argue for or against: We should have a four-day work week",
            "Argue for or against: Minimum wage should be increased",
            "Argue for or against: Everyone should have the right to work remotely",
            "Argue for or against: Unpaid internships should be illegal",
            "Argue for or against: Companies should require dress codes",
            "Argue for or against: Performance bonuses motivate employees",
            "Argue for or against: Retirement age should be lowered",
            "Argue for or against: Job experience matters more than education",
            "Argue for or against: Open offices are more productive than cubicles",

            // Health & Lifestyle
            "Argue for or against: Everyone should meditate daily",
            "Argue for or against: People should eat less meat",
            "Argue for or against: Junk food should be taxed more",
            "Argue for or against: Mental health days should be normalised",
            "Argue for or against: Gyms should be free for everyone",
            "Argue for or against: Healthcare should be free for all",
            "Argue for or against: People should be required to exercise",
            "Argue for or against: Energy drinks should have age restrictions",
            "Argue for or against: Sleep is more important than exercise",
            "Argue for or against: Alternative medicine has value",

            // Transportation & Environment
            "Argue for or against: Public transport should be free",
            "Argue for or against: Everyone should own an electric car",
            "Argue for or against: Cities should ban cars from centres",
            "Argue for or against: People should fly less for the environment",
            "Argue for or against: Plastic bags should be banned completely",
            "Argue for or against: Recycling should be mandatory",
            "Argue for or against: Companies should pay for their pollution",
            "Argue for or against: Nuclear energy is the future",
            "Argue for or against: Everyone should reduce their carbon footprint",
            "Argue for or against: Fast fashion should be regulated",

            // Culture & Entertainment
            "Argue for or against: Physical books are better than e-books",
            "Argue for or against: Competitive sports build character",
            "Argue for or against: Music festivals are overrated",
            "Argue for or against: Everyone should read more books",
            "Argue for or against: Celebrity culture is harmful",
            "Argue for or against: Traditional art is better than digital art",
            "Argue for or against: Sports stars are overpaid",
            "Argue for or against: Museums should always be free",
            "Argue for or against: Remakes and sequels ruin original films",
            "Argue for or against: Reality TV is bad for society",

            // Living & Lifestyle
            "Argue for or against: Cities are better places to live than rural areas",
            "Argue for or against: Renting is smarter than buying a home",
            "Argue for or against: Living alone is better than with housemates",
            "Argue for or against: People should live closer to family",
            "Argue for or against: Small towns have a higher quality of life",
            "Argue for or against: Minimalism leads to happiness",
            "Argue for or against: Everyone should travel internationally",
            "Argue for or against: Gap years benefit personal development",
            "Argue for or against: Marriage is an outdated institution",
            "Argue for or against: Having children is necessary for fulfilment",

            // Society & Values
            "Argue for or against: Voting should be mandatory",
            "Argue for or against: The drinking age should be lowered",
            "Argue for or against: Tipping culture should be abolished",
            "Argue for or against: News media has become too biased",
            "Argue for or against: Free speech should have no limits",
            "Argue for or against: Privacy is more important than security",
            "Argue for or against: We should judge people by actions not words",
            "Argue for or against: Success is mostly luck not hard work",
            "Argue for or against: Money can buy happiness",
            "Argue for or against: Social pressure is mostly negative",

            // Miscellaneous Boss Debates
            "Argue for or against: Experience is more valuable than possessions",
            "Argue for or against: Learning never stops after school",
            "Argue for or against: Following your passion is bad career advice",
            "Argue for or against: Failure is necessary for success",
            "Argue for or against: Being optimistic is better than being realistic",
            "Argue for or against: Honesty is always the best policy",
            "Argue for or against: It's better to be loved than respected",
            "Argue for or against: Rules are made to be broken",

            // Additional Boss - Personal Life
            "Argue for or against: People should live with their partners before marriage",
            "Argue for or against: Long-distance relationships can work",
            "Argue for or against: It's better to have loved and lost than never loved at all",
            "Argue for or against: Having children makes people happier",
            "Argue for or against: People shouldn't date coworkers",
            "Argue for or against: Age gaps in relationships matter",
            "Argue for or against: Online dating is the best way to meet people",
            "Argue for or against: Friends make better partners",
            "Argue for or against: It's okay to stay single forever",
            "Argue for or against: Arranged relationships can be successful",

            // Additional Boss - Work Ethics
            "Argue for or against: Employees should be allowed to work during holidays",
            "Argue for or against: Job hopping is better than staying with one company",
            "Argue for or against: Work friendships are important for success",
            "Argue for or against: Employers should monitor employees working from home",
            "Argue for or against: Unlimited holiday policies benefit employees",
            "Argue for or against: Workers should be paid equally regardless of experience",
            "Argue for or against: Open-door policies actually work",
            "Argue for or against: Work should be meaningful to be worthwhile",

            // Additional Boss - Social Issues
            "Argue for or against: Everyone should volunteer regularly",
            "Argue for or against: Rich people should pay more taxes",
            "Argue for or against: Welfare programmes help more than they hurt",
            "Argue for or against: Society is too focused on individual success",
            "Argue for or against: Community service should be required at school",
            "Argue for or against: Local businesses are better than chains",
            "Argue for or against: Neighbourliness is disappearing",
            "Argue for or against: Social safety nets make people lazy",
            "Argue for or against: Immigration benefits the economy",

            // Additional Boss - Media & Entertainment
            "Argue for or against: News should be required to be neutral",
            "Argue for or against: Violent video games affect behaviour",
            "Argue for or against: Children's content should have educational value",
            "Argue for or against: Celebrities should use their platform for activism",
            "Argue for or against: Streaming has killed the cinema experience",
            "Argue for or against: Music was better in the past",
            "Argue for or against: Book adaptations are usually disappointing",
            "Argue for or against: Award shows are still relevant",
            "Argue for or against: Social media influencers are legitimate celebrities",
            "Argue for or against: Fan communities can be toxic",

            // Additional Boss - Education Extended
            "Argue for or against: Students should grade their teachers",
            "Argue for or against: College is overrated for most careers",
            "Argue for or against: Trade schools deserve more respect",
            "Argue for or against: Grades don't reflect real learning",
            "Argue for or against: Group projects prepare students for work",
            "Argue for or against: Arts education is essential",
            "Argue for or against: Students should specialise earlier",
            "Argue for or against: Teachers should have more freedom in curriculum",
            "Argue for or against: Education should focus more on practical skills",

            // Additional Boss - Lifestyle Choices
            "Argue for or against: People should delete social media",
            "Argue for or against: Routine is essential for happiness",
            "Argue for or against: People should try everything once",
            "Argue for or against: It's never too late to change careers",
            "Argue for or against: Everyone needs a hobby",
            "Argue for or against: Journaling is good for mental health",
            "Argue for or against: People should wake up early",
            "Argue for or against: Everyone should learn to cook",
            "Argue for or against: Regular exercise is non-negotiable",
            "Argue for or against: Digital minimalism improves life quality",

            // Additional Boss - Technology Extended
            "Argue for or against: Smart homes are worth the investment",
            "Argue for or against: Everyone should learn basic tech skills",
            "Argue for or against: Tech companies have too much power",
            "Argue for or against: Self-driving cars will be safer",
            "Argue for or against: Cash will become obsolete",
            "Argue for or against: Screen time limits should be self-imposed",
            "Argue for or against: Subscription services are worth the cost",
            "Argue for or against: We're too dependent on GPS navigation",
            "Argue for or against: Video conferencing can replace business travel",
            "Argue for or against: Passwords should be replaced with biometrics",

            // Additional Boss - Health Extended
            "Argue for or against: Therapy should be normalised",
            "Argue for or against: Organic food is worth the extra cost",
            "Argue for or against: People should track their health data",
            "Argue for or against: Alternative diets are just trends",
            "Argue for or against: Work-life balance is a myth",
            "Argue for or against: Preventive healthcare saves money",
            "Argue for or against: Mental health is as important as physical health",
            "Argue for or against: People should take fewer medications",
            "Argue for or against: Self-diagnosis using the internet is harmful",
            "Argue for or against: Wellness culture has gone too far",

            // Additional Boss - Environmental
            "Argue for or against: Individual actions can fight climate change",
            "Argue for or against: Second-hand shopping should be preferred",
            "Argue for or against: Everyone should grow their own food",
            "Argue for or against: Conservation is everyone's duty",
            "Argue for or against: Eco-anxiety is a legitimate concern",
            // Idioms and proverbs - the expression itself is worth learning
            "Argue for or against: Charity begins at home",
            "Argue for or against: Age brings wisdom",
        ]
    },
    explanatory: {
        easy: [
            // Cooking You Can Actually Do
            "How do you make spaghetti bolognese?",
            "How do you make a Spanish tortilla?",
            "How do you cook rice so it doesn't stick?",
            "How do you make good coffee at home?",
            "How do you make a sandwich worth paying for?",
            "How do you make a salad that isn't boring?",
            "How do you cook a steak the way you like it?",
            "How do you make soup from what's left in the fridge?",
            "How do you bake a cake?",
            "How do you make breakfast for someone you want to impress?",

            // Food & Eating
            "How do you do the weekly food shopping?",
            "How do you choose a restaurant for a big group?",
            "How do you eat healthier without hating your life?",
            "How do you cook when you get home late and tired?",
            "How do you plan meals for a whole week?",
            "How do you know if food has gone bad?",
            "How do you order food in a country whose language you don't speak?",
            "How do you host a dinner for eight people?",
            "Why do people in Spain eat dinner so late?",
            "Why do some people stop eating meat?",

            // Learning & Studying
            "How do you learn a language?",
            "How do you study for an important exam?",
            "How do you learn something new from YouTube?",
            "How do you remember new words so you don't forget them?",
            "How do you learn to drive?",
            "How do you get better at speaking in public?",
            "How do you teach a child to read?",
            "How do you practise English when nobody around you speaks it?",
            "How do you learn from a mistake?",
            "Why do some people learn languages faster than others?",

            // Skills & Hobbies
            "How do you learn to swim?",
            "How do you learn to play an instrument?",
            "How do you take a good photo?",
            "How do you get into running?",
            "How do you start a hobby and actually keep it?",
            "How do you get good at a video game?",
            "How do you learn to dance?",
            "How do you choose your next book?",
            "How do you keep plants alive at home?",
            "Why do people collect things?",

            // Getting In Shape
            "How do you get in great shape?",
            "How do you build a gym routine you'll stick to?",
            "How do you lose weight without a crazy diet?",
            "How do you train for a 10K race?",
            "How do you stay active when you sit at a desk all day?",
            "How do you turn morning exercise into a habit?",
            "How do you recover after a hard workout?",
            "How do you stay in shape on holiday?",
            "How do you know when you're pushing your body too hard?",
            "Why do people join a gym in January and stop in March?",

            // Sleep, Stress & Feeling Good
            "How do you sleep better?",
            "How do you calm down when you're stressed?",
            "How do you switch off from work at the end of the day?",
            "How do you cheer up a friend who's having a bad week?",
            "How do you get out of a bad mood?",
            "How do you stop worrying about things you can't control?",
            "How do you take a proper day off?",
            "How do you quit a habit like smoking or scrolling?",
            "How do you survive a Monday you didn't want?",
            "Why do people go to therapy?",

            // Home & Chores
            "How do you clean a kitchen quickly?",
            "How do you do the laundry?",
            "How do you move to a new flat?",
            "How do you pack a suitcase for a week?",
            "How do you keep a home tidy when you're busy?",
            "How do you put together furniture that comes in a box?",
            "How do you decide what to throw away?",
            "How do you decorate a room on a small budget?",
            "How do you share the housework with the people you live with?",
            "How do you fix a small problem at home before calling someone?",

            // Money & Shopping
            "How do you save money every month?",
            "How do you decide if something is worth the price?",
            "How do you choose a new phone?",
            "How do you buy something second-hand without getting cheated?",
            "How do you plan a budget for a holiday?",
            "How do you teach a child the value of money?",
            "How do you cancel a subscription you never use?",
            "How do you return something to a shop?",
            "Why do people buy things they don't need?",
            "Why do people tip in some countries and not in others?",

            // Travel
            "How do you plan a trip?",
            "How do you get from the airport to the city centre in a new place?",
            "How do you find a good place to stay?",
            "How do you survive a long flight?",
            "How do you ask for directions when you're lost?",
            "How do you travel cheaply?",
            "How do you agree on a destination with friends?",
            "How do you use public transport in a city you don't know?",
            "How do you pack for a weekend with hand luggage only?",

            // Work
            "How do you prepare for a job interview?",
            "How do you write a good CV?",
            "How do you organise your working day?",
            "How do you run a short meeting well?",
            "How do you ask your boss for a day off?",
            "How do you work with someone you find difficult?",
            "How do you learn a new job in the first month?",
            "How do you stop leaving everything until the last minute?",
            "How do you explain your job to someone who knows nothing about it?",
            "Why do people change careers?",

            // Friends & Relationships
            "How do you make friends as an adult?",
            "How do you keep in touch with people who live far away?",
            "How do you keep a friendship alive for twenty years?",
            "How do you apologise properly?",
            "How do you say no without hurting someone?",
            "How do you meet someone you'd want to date?",
            "How do you plan a surprise party?",
            "How do you deal with a friend who is always late?",
            "How do you end a friendship that isn't good for you?",
            "Why do people get married?",

            // Family & Kids
            "How do you raise a kid to be a good citizen?",
            "How do you explain something difficult to a child?",
            "How do you get children to eat vegetables?",
            "How do you look after older parents?",
            "How do you survive a family lunch with very different opinions?",
            "How do you teach a teenager to be responsible?",
            "How do you keep a family calm on a long car trip?",
            "How do you choose a name for a baby?",
            "How do you spend real time with family when everyone is busy?",
            "Why do families argue about the same things every year?",

            // Living Well
            "How do you live life to the fullest?",
            "How do you decide what to do with your life?",
            "How do you know if you're happy in your job?",
            "How do you make a big decision?",
            "How do you enjoy a day off properly?",
            "How do you become more confident?",
            "How do you deal with getting older?",
            "How do you spend a Sunday well?",
            "How do you become the kind of person people trust?",
            "Why do people say time goes faster as you get older?",

            // Why Do People...?
            "Why do people celebrate birthdays?",
            "Why do people go to concerts when they can listen at home?",
            "Why do people talk about the weather?",
            "Why do people cry at weddings?",

            // Technology In Real Life
            "How do you set up a new phone?",
            "How do you keep your passwords safe?",
            "How do you back up your photos?",
            "How do you spot a scam message?",
            "How do you teach an older person to use a smartphone?",
            "How do you find good information online?",
            "How do you fix a computer that has become slow?",
            "How do you stop your phone from stealing your whole evening?",
            "How do you choose what to watch without spending an hour deciding?",
            "Why do people use so many apps?",

            // Everyday How-To
            "How do you make a good first impression?",
            "How do you tell a story people want to hear?",
            "How do you give someone directions to your house?",
            "How do you complain about bad service?",
            "How do you choose a film for a group?",
            "How do you wrap a present?",
            "How do you win an argument without shouting?",
            "How do you help a tourist who is lost in your city?",
            "How do you get through a boring afternoon?",
            "How do you write a message you're nervous about sending?",




            // When Things Go Wrong
            "How do you fix a flat tyre on a bike?",
            "How do you get a stain out of a shirt?",
            "How do you deal with a noisy neighbour?",
            "How do you cancel a flight and get your money back?",
            "How do you find a lost phone?",
            "How do you get a doctor's appointment quickly?",
            "How do you deal with internet that keeps dropping?",
            "How do you calm a crying baby?",
            "How do you look after someone with a bad cold?",
            "How do you survive a day when everything goes wrong?"
        ],
        medium: [
            // Weather & Sky
            "How does rain form?",
            "How do clouds form?",
            "Why does it thunder?",
            "How do hailstones form?",
            "Why does fog appear?",
            "How do tornadoes spin?",
            "Why does the wind blow?",
            "Why is morning dew wet?",
            "Why does it snow instead of rain?",
            "Why do we see lightning before we hear thunder?",

            // Earth & Nature
            "How do rivers form?",
            "How do mountains form?",
            "How do caves form?",
            "How do deserts form?",
            "How do waterfalls form?",
            "Why do leaves change colour in autumn?",
            "How do trees make oxygen?",
            "How do seeds sprout?",
            "Why do some animals hibernate?",
            "Why do some plants have thorns?",

            // The Human Body
            "How do our eyes see?",
            "How does the heart pump blood?",
            "How does food give us energy?",
            "How do cuts heal?",
            "Why do we dream?",
            "How do we hear sounds?",
            "How do we smell things?",
            "How do we taste food?",
            "Why do we feel pain?",
            "Why do we get goosebumps?",

            // Body Curiosities
            "Why do we yawn?",
            "Why do we sneeze?",
            "Why do we get hiccups?",
            "Why do onions make us cry?",
            "Why does skin tan in the sun?",
            "How does hair grow?",
            "How do nails grow?",
            "Why do we have fingerprints?",
            "Why do we blink?",
            "Why do we get tired in the afternoon?",

            // Food Science
            "How does bread rise?",
            "How does yeast work?",
            "Why does popcorn pop?",
            "Why does milk go off?",
            "How is cheese made?",
            "Why does fruit ripen?",
            "Why does toast turn brown?",
            "Why do eggs go hard when you cook them?",
            "How does baking powder work?",
            "Why does meat change colour when it's cooked?",

            // Kitchen Physics
            "Why does water boil?",
            "How does salt make food taste better?",
            "How do microwaves heat food?",
            "How does oil cook food?",
            "Why do fizzy drinks bubble?",
            "How does sugar dissolve?",
            "Why does chocolate melt in your hand?",
            "How does a pressure cooker cook faster?",
            "Why does metal feel colder than wood?",
            "How does jelly set?",

            // Around the House
            "How does a refrigerator keep food cold?",
            "How does a washing machine clean clothes?",
            "How does a vacuum cleaner work?",
            "How does a toaster work?",
            "How does a thermostat work?",
            "How does a smoke detector work?",
            "Why do windows fog up?",
            "Why do floors creak?",
            "Why do taps drip?",
            "Why do we hear echoes?",

            // Everyday Objects
            "How does a light bulb work?",
            "How does a mirror reflect?",
            "How do glasses help you see?",
            "How does a zip work?",
            "How does glue stick things together?",
            "How does tape stick?",
            "Why can pencil marks be rubbed out but not pen?",
            "How does a pencil write?",
            "Why do rubber bands stretch?",
            "How does a key open a lock?",

            // Simple Physics
            "Why do things fall down?",
            "How does sound travel?",
            "Why do shadows form?",
            "How does friction slow things down?",
            "Why do magnets stick together?",
            "How does a compass work?",
            "Why does static make your hair stand up?",
            "Why does ice float on water?",
            "How do colours mix?",
            "How do bubbles form?",

            // Chemistry Around You
            "How does fire burn?",
            "How do candles work?",
            "Why does paper burn but a wet towel doesn't?",
            "Why does metal rust?",
            "Why does soap clean things?",
            "How do crystals form?",
            "Why do puddles disappear?",
            "Why does glass break easily?",
            "Why do things get dusty?",
            "Why do batteries run out?",

            // Transportation
            "How do cars move?",
            "Why do planes leave white trails in the sky?",
            "How do boats float?",
            "How do brakes stop a car?",
            "Why do bicycles stay balanced?",
            "How does a helicopter fly?",
            "How does a hot air balloon work?",
            "How do trains stay on tracks?",
            "Why do tyres need air?",
            "How do escalators move?",

            // Getting Around Town
            "How do lifts work?",
            "How do traffic lights decide when to change?",
            "How do metro trains know where to stop?",
            "Why do ambulances have sirens?",
            "How does a motorcycle stay upright?",
            "Why do we wear seatbelts?",
            "How does a vending machine work?",
            "How do automatic doors know you're there?",
            "How does a parking sensor know something is behind you?",
            "How does a roundabout keep traffic moving?",

            // Animals
            "How do fish breathe underwater?",
            "How do bees make honey?",
            "How do spiders make webs?",
            "Why do cats purr?",
            "Why do dogs wag their tails?",
            "How do chameleons change colour?",
            "Why do owls hunt at night?",
            "How do penguins stay warm?",
            "How do butterflies develop?",
            "Why do fireflies light up?",

            // Animal Behaviour
            "Why do birds sing?",
            "How do birds fly?",
            "How do dolphins communicate?",
            "Why do snakes shed their skin?",
            "How do ants carry heavy things?",
            "Why do mosquitoes bite some people more than others?",
            "How do elephants use their trunks?",
            "Why do dogs understand some words?",
            "How do birds know where to migrate?",
            "Why do cats always land on their feet?",

            // Technology You Use
            "How does WiFi work?",
            "How does a phone make a call?",
            "How do speakers make sound?",
            "How do photos appear on a screen?",
            "How does a remote control work?",
            "Why do computers need to restart?",
            "Why do phones need charging so often?",
            "Why do websites take time to load?",
            "Why do we need passwords?",
            "How does a keyboard know which key you pressed?",

            // Online & Digital
            "How does an emergency call get to the nearest ambulance?",
            "How does an app get onto your phone?",
            "How does a QR code work?",
            "Why does the internet stop working sometimes?",
            "How does online shopping get a package to your door?",
            "How does a website know it's you when you log in?",
            "Why do photos take up so much space on your phone?",
            "How does a video get from a camera to your screen?",
            "How does a bank card pay without touching the machine?",
            "Why do apps ask for so many permissions?",

            // Money & Everyday Systems
            "How does money work?",
            "How does a bank keep your money safe?",
            "How does a food delivery order reach you hot?",
            "Why do shops have sales at the same time every year?",
            "How does renting a flat work?",
            "How does a pharmacy know which medicine needs a prescription?",
            "How does a lottery work?",
            "How does a supermarket decide where to put things?",
            "How does a driving test work?",
            "How does a city keep the streets clean?",

            // Space & Planet
            "Why does the moon change shape?",
            "Why do we only see stars at night?",
            "Why is there a time difference between countries?",
            "Why do we have leap years?",
            "How do satellites stay up in the sky?",
            "Why is it hotter near the equator?",
            "Why is it cold at night in the desert?",
            "How do astronauts float inside a spaceship?",
            "Why does the sun look bigger at sunset?",
            "How do we know the Earth is round?",

            // How Things Are Made
            "How is paper made?",
            "How is glass made?",
            "How is chocolate made?",
            "How is olive oil made?",
            "How are clothes made?",
            "How is a car built in a factory?",
            "How does coffee get from a plant to your cup?",
            "How is milk turned into yoghurt?",
            "How is a house built?",
            "How is a road built?",

            // Health & Living Things
            "Why do we get a fever?",
            "Why do we need to drink water?",
            "How does a cold spread from person to person?",
            "Why do we get out of breath when we run?",
            "How does a painkiller know where the pain is?",
            "Why do we need vitamins?",
            "Why do teeth get holes?",
            "Why do we get sunburned?",
            "Why do children grow but adults don't?",
            "Why do some people never seem to get sick?",
            // General knowledge moved up from Easy (see header rule)
            "Why do earthquakes happen?",
            "Why do we have day and night?",
            "Why do we have seasons?",
            "Why do volcanoes erupt?",
            "Why is the sea salty?",
            "Why is the sky blue?",
            "Why do plants need sun and water?",
            "Why do we recycle?",
            "Why is the planet getting warmer?",
            "Why do some countries have more natural disasters than others?",
            "Why do we need to sleep?",
            "Why do we get hungry?",
            "Why do we get sick more in winter?",
            "Why does exercise put you in a better mood?",
            "Why do people get grey hair?",
            "Why do we cry?",
            "Why do we sweat?",
            "Why does coffee wake you up?",
            "Why is it hard to remember names?",
            "Why is smoking bad for you?",
            "How does a computer work?",
            "How does electricity get to your home?",
            "How does the internet reach your phone?",
            "How does a supermarket always have fresh food?",
            "How does a sports league decide the champion?",
            "How does a school year work?",
            "How does a hospital emergency department decide who goes first?",
            "How does a restaurant kitchen serve fifty people at once?",
            "How does a big concert get organised?",
            "How does a delivery driver get through a hundred packages in a day?",
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Biology & Health
            "How does the immune system fight off infections?",
            "Explain how vaccines protect the body",
            "How does the brain process and store memories?",
            "Explain the digestive process from start to finish",
            "How do muscles grow stronger with exercise?",
            "Explain how allergies develop and work",
            "Explain how sleep affects physical and mental health",

            // Physics & Chemistry
            "How do aeroplanes generate lift to fly?",
            "Explain how electricity flows through circuits",
            "How does a combustion engine work?",
            "Explain the process of photosynthesis",
            "How do solar panels convert sunlight to electricity?",
            "Explain how sound waves create music",
            "Explain the greenhouse effect",
            "How do fibre optic cables transmit data?",
            "Explain how nuclear power plants generate electricity",

            // Technology
            "How does GPS determine your exact location?",
            "Explain how search engines find relevant results",
            "How do touchscreens detect finger movements?",
            "Explain how streaming services deliver video",
            "How does facial recognition technology work?",
            "Explain how noise-cancelling headphones work",
            "How do smartphones connect to cellular networks?",
            "Explain how digital cameras capture images",
            "How does cloud storage work?",
            "Explain how wireless charging works",

            // Economics & Finance
            "How does inflation affect purchasing power?",
            "Explain how credit cards work behind the scenes",
            "How do stock markets determine prices?",
            "Explain the concept of compound interest",
            "How do banks make money?",
            "Explain how exchange rates are determined",
            "How does the housing market work?",
            "Explain the basics of how taxes fund public services",
            "How do insurance companies calculate premiums?",
            "Explain how retirement savings accounts grow",

            // Environment & Earth Science
            "How do tsunamis form after an earthquake?",
            "Explain the water cycle in detail",
            "How does climate differ from weather?",
            "Explain how coral reefs form and support life",
            "How do scientists know what the climate was like 10,000 years ago?",
            "Explain how ocean currents affect climate",
            "How does erosion shape landscapes?",
            "Explain how fossil fuels formed over millions of years",
            "How do hurricanes develop?",
            "Explain the carbon cycle and its importance",

            // Psychology & Behaviour
            "How does stress affect the body and mind?",
            "Explain how habits form in the brain",
            "How do emotions influence decision-making?",
            "Explain the psychology of first impressions",
            "How does memory work and why do we forget?",
            "How do we develop language as children?",
            "Explain how peer pressure influences behaviour",
            "How does sleep deprivation affect cognitive function?",
            "Explain the fight-or-flight response",

            // Society & Systems
            "How do elections work in a democracy?",
            "Explain how news spreads through social media",
            "How does the legal system handle disputes?",
            "Explain how supply and demand affect prices",
            "How do cities manage water and waste?",
            "Explain how public transport systems are organised",
            "How does international trade work?",
            "Explain how healthcare systems vary between countries",
            "How do educational systems prepare students for work?",
            "Explain how time zones were established",

            // Communication & Media
            "How does the internet transmit information globally?",
            "Explain how podcasts are created and distributed",
            "How do recommendation algorithms work?",
            "Explain how advertising targets specific audiences",
            "How does live television broadcasting work?",
            "Explain how translation apps process language",
            "How do social media platforms generate revenue?",
            "Explain how newspapers decide what to publish",
            "How does email travel from sender to recipient?",
            "Explain how viral content spreads online",

            // Miscellaneous Boss
            "How do 3D printers create objects?",
            "Explain how MRI machines create body images",
            "How do hybrid cars conserve fuel?",
            "Explain how a skyscraper stays standing in strong wind",
            "How do weather forecasts predict conditions?",
            "Explain how recycling processes work",
            "How do aeroplanes navigate long distances?",
            "Explain how contact lenses correct vision",
            "How do self-checkout systems work?",
            "Explain how concerts amplify sound for large audiences",


            // Additional Boss - Earth & Space
            "How does the moon affect ocean tides?",
            "Explain how plate tectonics shape continents",

            // Additional Boss - Chemistry in Life
            "How does fermentation create alcohol?",
            "Explain how water purification plants work",
            "How does concrete harden, and why does it crack?",
            "Explain how gluten affects bread texture",
            "How do cleaning products break down dirt?",
            "Explain how perfumes and scents work",
            "How does sunscreen protect skin?",
            "Explain how batteries store and release energy",
            "How do antacids neutralise stomach acid?",
            "Explain how hair dye changes hair colour",

            // Additional Boss - Modern Technology
            "How do smartwatches track health metrics?",
            "Explain how voice assistants understand commands",
            "How does video compression reduce file size?",
            "Explain how AI chatbots produce an answer",
            "How do e-readers display text without backlighting?",
            "Explain how self-driving cars decide when to brake",
            "How does a video game build a huge open world?",
            "Explain how a drone stays steady in the air",
            "How do navigation apps predict traffic?",
            "Explain how online banking keeps transactions secure",

            // Additional Boss - Social Systems
            "How does a court decide a sentence?",
            "Explain how charities distribute donations",
            "How does the postal system sort mail?",
            "Explain how credit scores are calculated",
            "How do insurance claims get processed?",
            "Explain how food safety inspections work",
            "How does a city decide where to build new housing?",
            "Explain how public libraries are funded",
            "How do emergency services coordinate?",
            "Explain how the border between two countries gets decided",

            // Additional Boss - Business & Work
            "How does franchising work?",
            "Explain how companies determine salaries",
            "How does venture capital funding work?",
            "Explain how patents protect inventions",
            "How do supply chains track products?",
            "Explain how companies conduct market research",
            "How does employee recruitment work?",
            "Explain how a company recovers from a public scandal",
            "How do loyalty programmes benefit businesses?",
            "Explain how companies value themselves",

            // Additional Boss - Food Science
            "How does pasteurisation make milk safe?",
            "Explain how different cooking methods affect nutrients",
            "Explain how the gut and the brain talk to each other",
            "Explain how probiotics benefit digestion",

            // Additional Boss - Engineering
            "How do bridges distribute weight?",
            "Explain how air conditioning cools buildings",
            "How do lifts prevent free-falling?",
            "Explain how dams generate electricity",
            "How do sewage treatment plants work?",
            "Explain how buildings resist earthquakes",
            "How do tunnels get built underwater?",
            "Explain how cranes lift heavy loads",
            "How do power grids balance supply and demand?",
            "Explain how highways are designed for safety",

            // Additional Boss - Communication
            "How does sign language convey complex ideas?",
            "Explain how braille allows reading by touch",
            "How do hearing aids amplify specific sounds?",

            // Additional Boss - Art & Design
            "How do printers reproduce colour images?",
            "Explain how autotune corrects singing pitch",
            "How do special effects create realistic CGI?",
            "Explain how fonts are designed for readability",
            "How do museums preserve ancient artifacts?",
            "Explain how acoustics affect concert hall design",
            "How does animation create illusion of movement?",
            "Explain how colour psychology influences design",
            "How do sound engineers mix music tracks?",
            "Explain how lighting changes the mood of a photograph"
        ]
    },
    compare: {
        easy: [
            // Transportation
            "Compare buses and bicycles for getting around",
            "Compare trains and cars for long trips",
            "Compare walking and driving",
            "Compare flying and taking the train",
            "Compare taxis and public buses",
            "Compare motorcycles and cars",
            "Compare electric scooters and bicycles",
            "Compare travelling by boat and by plane",
            "Compare commuting by car and by metro",
            "Compare ride-sharing apps and traditional taxis",

            // Food & Drinks
            "Compare tea and coffee as morning drinks",
            "Compare cooking at home and eating out",
            "Compare fast food and home-cooked meals",
            "Compare vegetarian and meat-based diets",
            "Compare breakfast and dinner as meals",
            "Compare water and soft drinks",
            "Compare fresh fruit and fruit juice",
            "Compare baking and frying food",
            "Compare eating alone and eating with others",
            "Compare supermarkets and farmers' markets",

            // Living Situations
            "Compare living alone and living with housemates",
            "Compare small towns and big cities",
            "Compare flats and houses",
            "Compare renting and buying a home",
            "Compare living in the city centre and suburbs",
            "Compare living near work and commuting far",
            "Compare old buildings and new construction",
            "Compare living with family and living independently",
            "Compare houses with gardens and flats with balconies",
            "Compare quiet neighbourhoods and busy areas",

            // Technology
            "Compare texting and phone calls",
            "Compare laptops and tablets",
            "Compare online shopping and in-store shopping",
            "Compare paper maps and GPS navigation",
            "Compare social media and face-to-face communication",
            "Compare streaming music and buying albums",
            "Compare e-readers and physical books",
            "Compare video calls and in-person meetings",
            "Compare desktop computers and laptops",
            "Compare cash payments and digital payments",

            // Entertainment
            "Compare watching films at home and at the cinema",
            "Compare reading books and watching TV",
            "Compare board games and video games",
            "Compare live concerts and recorded music",
            "Compare comedies and dramas",
            "Compare watching sports and playing sports",
            "Compare solo hobbies and group activities",
            "Compare going to museums and staying home",
            "Compare streaming services and cable TV",
            "Compare podcasts and radio",

            // Weather & Seasons
            "Compare summer and winter",
            "Compare rainy days and sunny days",
            "Compare spring and autumn",
            "Compare hot climates and cold climates",
            "Compare beach holidays and mountain trips",
            "Compare snowy weather and warm weather",
            "Compare dry seasons and wet seasons",
            "Compare windy days and calm days",
            "Compare indoor activities and outdoor activities",

            // People & Lifestyle
            "Compare morning people and night owls",
            "Compare introverts and extroverts",
            "Compare cats and dogs as pets",
            "Compare having siblings and being an only child",
            "Compare big families and small families",
            "Compare young people and elderly people's routines",
            "Compare students and working professionals",
            "Compare city people and country people",
            "Compare athletes and artists",
            "Compare travellers and homebodies",

            // Learning & Work
            "Compare handwriting and typing",
            "Compare studying alone and with a group",
            "Compare learning online and in person",
            "Compare reading for fun and reading for school",
            "Compare morning classes and afternoon classes",
            "Compare strict teachers and relaxed teachers",
            "Compare working in an office and working from home",
            "Compare physical work and desk work",
            "Compare full-time and part-time jobs",
            "Compare internships and regular jobs",

            // Daily Activities
            "Compare morning routines and evening routines",
            "Compare weekdays and weekends",
            "Compare exercising indoors and outdoors",
            "Compare taking photos and drawing pictures",
            "Compare planning ahead and being spontaneous",
            "Compare shopping alone and with friends",
            "Compare cooking and ordering food",
            "Compare cleaning daily and cleaning weekly",
            "Compare early dinners and late dinners",
            "Compare busy schedules and relaxed schedules",

            // Miscellaneous Easy
            "Compare paper books and audiobooks",
            "Compare sweet snacks and salty snacks",
            "Compare short holidays and long trips",
            "Compare making friends online and in person",
            "Compare giving gifts and receiving gifts",
            "Compare memories and photographs",
            "Compare silence and background music",
            "Compare formal clothes and casual clothes",
            "Compare traditional games and modern games",
            "Compare homemade gifts and shop-bought gifts",

            // Additional Easy - More Food
            "Compare pasta and rice as side dishes",
            "Compare soup and sandwiches for lunch",
            "Compare tap water and bottled water",
            "Compare salads and cooked vegetables",
            "Compare hot meals and cold meals",
            "Compare buffets and menu ordering",
            "Compare eating quickly and eating slowly",

            // Additional Easy - More Entertainment
            "Compare animated films and live-action films",
            "Compare playing music and listening to music",
            "Compare painting and photography",
            "Compare action games and puzzle games",
            "Compare watching TV series and watching films",
            "Compare going to the zoo and going to an aquarium",
            "Compare theme parks and water parks",

            // Additional Easy - More Technology
            "Compare smartphones and smartwatches",
            "Compare headphones and earbuds",
            "Compare wired internet and WiFi",
            "Compare taking photos with camera and with phone",
            "Compare touchscreens and keyboards",
            "Compare gaming on phone and on console",
            "Compare streaming and downloading",
            "Compare video and audio podcasts",

            // Additional Easy - More Animals
            "Compare birds and fish as pets",
            "Compare big dogs and small dogs",

            // Additional Easy - More Places
            "Compare libraries and bookshops",
            "Compare cafés and restaurants",
            "Compare supermarkets and corner shops",
            "Compare swimming pools and beaches",
            "Compare hotels and hostels",
            "Compare airports and train stations",
            "Compare shopping centres and street markets",

            // Additional Easy - More Activities
            "Compare jogging and swimming",
            "Compare yoga and gym workouts",
            "Compare fishing and hiking",
            "Compare camping and glamping",
            "Compare fixing things and buying new",
            "Compare team sports and individual sports",
            "Compare morning exercise and evening exercise",

            // Additional Easy - More School
            "Compare maths and science classes",
            "Compare art class and music class",
            "Compare tests and projects",
            "Compare uniforms and free dress",
            "Compare teachers and tutors",


            // Additional Easy - More Clothing
            "Compare t-shirts and dress shirts",
            "Compare new clothes and vintage clothes",

            // Additional Easy - More Time
            "Compare New Year and Christmas",
            "Compare waking up early and sleeping in",
            "Compare work hours and free time"
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Education & Learning
            "Compare learning a language as a child vs. as an adult",
            "Compare theoretical knowledge and practical skills",
            "Compare self-taught learning and formal education",
            "Compare memorisation and understanding-based learning",
            "Compare competitive and collaborative learning environments",
            "Compare general education and specialised training",
            "Compare learning from books and learning from experience",
            "Compare traditional degrees and online certifications",

            // Work & Career
            "Compare working for a company and being self-employed",
            "Compare salary jobs and freelance work",
            "Compare climbing the corporate ladder and lateral career moves",
            "Compare job security and job satisfaction",
            "Compare working in a startup and a large corporation",
            "Compare remote work and hybrid work arrangements",
            "Compare creative jobs and analytical jobs",
            "Compare leadership roles and individual contributor roles",
            "Compare changing careers and staying in one field",
            "Compare work experience and academic qualifications",

            // Lifestyle Choices
            "Compare renting and buying a home as life strategies",
            "Compare living in a city and in a small town for quality of life",
            "Compare having a routine and being spontaneous",
            "Compare minimalist living and comfortable abundance",
            "Compare early retirement and working longer",
            "Compare prioritising career and prioritising family",
            "Compare active lifestyles and relaxed lifestyles",
            "Compare travelling frequently and putting down roots",
            "Compare spending on experiences vs. spending on possessions",
            "Compare digital detox and constant connectivity",

            // Relationships
            "Compare online friendships and in-person friendships",
            "Compare having many acquaintances and few deep friendships",
            "Compare family relationships and chosen friendships",
            "Compare long-distance relationships and proximity-based ones",
            "Compare traditional dating and app-based dating",
            "Compare independent living and interdependent living",
            "Compare maintaining old friendships and making new ones",
            "Compare introverted and extroverted approaches to socialising",
            "Compare professional networks and personal relationships",
            "Compare quality time and acts of service in relationships",

            // Communication
            "Compare sending a detailed email to your boss vs. calling them to explain the same issue",
            "Compare Dutch directness ('Your presentation was boring') vs. British indirectness ('Perhaps some sections could be more engaging')",
            "Compare saying 'Hey, can you help me out?' to a friend vs. 'Would you be available to assist with this matter?' to a client",
            "Compare someone who dominates conversations vs. someone who mostly asks questions and listens",
            "Compare giving a keynote speech to 500 people vs. having a difficult one-on-one conversation with an employee",
            "Compare presenting quarterly results in a 20-slide PowerPoint vs. in a 10-page written document",
            "Compare a team chat message that can be answered in 2 hours vs. a phone call that needs an immediate response",
            "Compare telling your coworkers you're stressed about a deadline vs. pretending everything is fine",
            "Compare sending a birthday message on WhatsApp vs. saying happy birthday in person at a party",
            "Compare a one-sentence reply to a complex question vs. a detailed response that covers all aspects",

            // Health & Wellness
            "Compare getting a yearly health checkup to catch problems early vs. only seeing a doctor when something is clearly wrong",
            "Compare doing a CrossFit class at a gym vs. going for a 10km run in the park",
            "Compare spending €100/month on a therapist vs. spending €100/month on a personal trainer",
            "Compare following a strict keto diet with macros vs. eating whatever you want but stopping when you're 80% full",
            "Compare taking antibiotics prescribed by a doctor vs. trying herbal remedies and acupuncture for the same condition",
            "Compare doing 20-minute HIIT workouts 3x per week vs. walking 30 minutes every day",
            "Compare sleeping 8 hours and waking at 8am vs. sleeping 6 hours and waking at 5am to be productive",
            "Compare training for a marathon alone vs. playing recreational football with a team every weekend",
            "Compare dealing with work stress by going to the gym vs. dealing with it by watching Netflix on the sofa",
            "Compare weekly sessions with a licensed psychologist vs. reading self-help books and doing meditation apps",

            // Society & Culture
            "Compare spending a Saturday afternoon browsing clothes at H&M in a shopping centre vs. ordering the same items from ASOS at home",
            "Compare taking a 4-hour train ride from Paris to Amsterdam vs. a 1-hour flight for the same journey",
            "Compare reading about a political scandal on the BBC website vs. seeing tweets about it on Twitter/X",
            "Compare the walkable medieval streets of Amsterdam vs. the car-designed suburban sprawl of Los Angeles",
            "Compare demolishing an old factory to build flats vs. converting it into a museum or creative space",
            "Compare buying bread from a local bakery where the owner knows your name vs. buying from a Carrefour supermarket",
            "Compare sending your child to a public school vs. a private school that costs €20,000/year",
            "Compare solving homelessness through individual charity donations vs. through government housing programmes",
            "Compare getting into Harvard because you worked hard vs. getting in because your parents donated a building",
            "Compare a French cheese producer losing to cheap imports vs. exporting French wine to new markets worldwide",

            // Technology Impact
            "Compare getting driving directions in 1995 using paper maps vs. today using Google Maps on your phone",
            "Compare buying a winter coat at Zara in the shop vs. ordering it from Zalando online",
            "Compare depositing a cheque by visiting a bank branch vs. using mobile deposit on your banking app",
            "Compare reading the morning news in a physical newspaper vs. scrolling through a news app on your tablet",
            "Compare attending a 200-person tech conference in Las Vegas vs. watching the same conference streamed on YouTube",
            "Compare filing expense reports with paper receipts vs. using an app that scans receipts automatically",
            "Compare calling your bank's customer service line and speaking to a person vs. using their AI chatbot",
            "Compare seeing a TV advert during a Champions League final vs. getting a personalised Instagram ad based on your browsing",
            "Compare buying Microsoft Office once for €300 vs. paying €10/month for Microsoft 365 subscription forever",
            "Compare a factory worker assembling products by hand vs. a robot doing the same task automatically",

            // Values & Priorities
            "Compare someone who works 80 hours/week to become CEO vs. someone who works 35 hours and spends time with family",
            "Compare taking a stable government job with a pension vs. joining an exciting startup that might fail",
            "Compare a digital nomad who has no home base vs. someone deeply rooted in their hometown community",
            "Compare a Japanese company that hasn't changed its process in 100 years vs. a tech startup that reinvents itself every 6 months",
            "Compare students trying to outperform each other for grades vs. students collaborating to help everyone pass",
            "Compare saving 40% of your income for retirement vs. spending freely now because 'life is short'",
            "Compare a lawyer who quits to become a yoga instructor vs. someone who stays in finance despite hating it",
            "Compare someone who shares everything on Instagram vs. someone who has no social media and keeps life private",
            "Compare eating the same breakfast every day for 10 years vs. never eating the same meal twice in a month",
            "Compare being a world expert in medieval French literature vs. knowing a little about many subjects",

            // Additional Boss - Deeper Work Life
            "Compare a boss who says 'do it this way' vs. a boss who asks 'what do you think we should do?'",
            "Compare working at a long table with 20 colleagues vs. having your own office with a door you can close",
            "Compare learning from a senior colleague who guides you for 2 years vs. attending a 1-week corporate training course",
            "Compare being on a 50-person team where you know only your small part vs. a 5-person team where you do everything",
            "Compare a real estate agent who earns only commission vs. a teacher with a fixed monthly salary",
            "Compare promoting someone who's been at the company 10 years vs. hiring an external expert with fresh ideas",
            "Compare a manager who checks every email you send vs. a manager who only cares about results",
            "Compare having a formal quarterly review meeting vs. getting casual feedback over coffee",
            "Compare a marketing expert who only knows marketing vs. someone who's done sales, finance, and marketing",
            "Compare a 22-year-old who chooses accounting immediately vs. a 35-year-old who tries different jobs before specialising",

            // Additional Boss - Communication Styles
            "Compare saying 'I need this done by Friday' vs. saying 'Maybe we could try to finish this soon, if that's okay'",
            "Compare telling a colleague directly that their idea won't work vs. gently suggesting some challenges to consider",
            "Compare explaining a project in 3 pages with every detail vs. summarising it in 5 bullet points",
            "Compare starting a presentation with 'Let me tell you a story about a customer...' vs. 'Here are the Q3 numbers'",
            "Compare starting a meeting with a joke vs. going straight to the agenda in a serious tone",
            "Compare sending a detailed email that can be referenced later vs. quick chat messages back and forth",
            "Compare blocking 1 hour on the calendar for a meeting vs. tapping someone on the shoulder for a 5-minute chat",
            "Compare a phone call where you only hear the voice vs. a Zoom call where you can see facial expressions",
            "Compare a CEO monologue for 45 minutes vs. a workshop where everyone discusses in small groups",
            "Compare a 20-page quarterly report in PDF vs. a 2-minute voice message summarising the key points",

            // Additional Boss - Learning Approaches
            "Compare learning Spanish by moving to Spain for 6 months vs. studying grammar textbooks at home",
            "Compare taking a Coursera course with weekly deadlines vs. learning from random YouTube videos when you feel like it",
            "Compare learning the basics of 5 programming languages vs. becoming an expert in only Python",
            "Compare getting an AWS certification in 3 months vs. getting a 4-year Computer Science degree",
            "Compare learning to cook from your housemate vs. attending a professional culinary school",
            "Compare a 2-day Excel workshop where you practise vs. a 2-hour lecture explaining Excel formulas",
            "Compare getting your essay graded immediately after submitting vs. waiting 2 weeks for feedback",
            "Compare analysing why your startup succeeded vs. analysing why your previous startup failed",
            "Compare writing a group thesis with 3 classmates vs. writing your thesis completely alone",
            "Compare studying 2 hours every day at 8am vs. studying whenever you feel motivated",

            // Additional Boss - Life Philosophy
            "Compare someone focused on reaching VP by 35 vs. someone who just enjoys the daily work without career targets",
            "Compare measuring success by salary and car vs. measuring it by free time and relationships",
            "Compare quitting your job to travel the world vs. staying in a secure position and saving for retirement",
            "Compare following your parents' path (doctor, lawyer, engineer) vs. becoming an artist or entrepreneur",
            "Compare always expecting the best outcome vs. preparing for what's most likely to happen",
            "Compare wanting to win at everything vs. wanting everyone to succeed together",
            "Compare spending 3 extra hours to make a presentation perfect vs. submitting a 'good enough' version on time",
            "Compare buying a new iPhone today vs. investing that money and buying it in 5 years with the returns",
            "Compare aggressively applying to 100 jobs vs. waiting for the right opportunity to come along",
            "Compare needing 1,000 Instagram likes to feel good vs. feeling satisfied simply because you did good work",

            // Additional Boss - Social Dynamics
            "Compare having 500 Facebook friends you barely know vs. having 5 close friends you see every week",
            "Compare telling colleagues 'that's personal, I don't discuss it' vs. sharing openly about your divorce at work",
            "Compare asking your neighbour to help you move vs. hiring movers and doing it yourself",
            "Compare telling a friend 'here's what you should do about your boyfriend' vs. just saying 'that sounds really hard'",
            "Compare eating the same Christmas dinner your family has made for 40 years vs. trying a completely new menu",
            "Compare deciding together as a family where to go on holiday vs. one parent just booking the trip",
            "Compare wearing the same clothes as everyone at the office vs. wearing something that makes you stand out",
            "Compare a manager who works harder than everyone vs. a manager who just tells people what to do",
            "Compare being the official team leader with a title vs. being the person everyone listens to even without a title",
            "Compare going to networking events specifically to find clients vs. just making friends who might one day become clients",

            // Additional Boss - Consumer Choices
            "Compare buying a €2,000 washing machine that lasts 15 years vs. a €400 one you replace every 5 years",
            "Compare always buying Nike shoes because you trust them vs. buying whatever is on sale",
            "Compare ordering groceries delivered for €10 fee vs. spending 2 hours going to the shop yourself",
            "Compare buying a €300 jacket you saw in the window vs. planning what you need and shopping with a list",
            "Compare renting a power washer for €50 when you need it vs. buying one for €400 that sits in your garage",
            "Compare booking an all-inclusive resort for €3,000 vs. booking flights, hotels, and activities separately",
            "Compare buying a €400 blender that 'does everything' vs. a €50 blender that just blends",
            "Compare buying tomatoes from the farmer down the road vs. cheaper tomatoes shipped from Spain",
            "Compare owning 200 DVDs on a shelf vs. having a Netflix subscription with unlimited streaming",

            // Additional Boss - Digital Life
            "Compare posting only your best moments and filtered photos vs. posting your bad days too",
            "Compare following 2,000 accounts and seeing random content vs. following 50 accounts you actually care about",
            "Compare posting on Instagram 3 times per week vs. scrolling for an hour without ever posting",
            "Compare replying to messages immediately vs. checking messages once a day and responding in batches",
            "Compare having a public Instagram anyone can see vs. a private account with only 100 approved followers",
            "Compare being very active on LinkedIn only vs. posting on TikTok, Instagram, Twitter, and YouTube",
            "Compare seeing posts chosen by the algorithm vs. seeing posts in order from newest to oldest",
            "Compare posting opinions on Reddit anonymously vs. posting the same opinions with your real name on LinkedIn",
            "Compare posting every holiday, meal, and life event vs. keeping your social media silent for years",
            "Compare saving every photo and chat in the cloud vs. deleting old messages and living without records",

            // Additional Boss - Personal Development
            "Compare doing the same routine every day vs. trying something new that scares you",
            "Compare following a 30-day habit tracker vs. just doing what feels right each day",
            "Compare weighing yourself every morning and logging it vs. just noticing how your clothes fit",
            "Compare paying €200/month for a life coach vs. journaling and figuring things out yourself",
            "Compare reading Atomic Habits vs. just trying to build habits through trial and error",
            "Compare waking up at 5am for a morning routine vs. doing your self-improvement in the evening",
            "Compare setting a goal to lose 20 kg in 3 months vs. aiming to eat one more vegetable per day",
            "Compare meeting weekly with a friend who checks on your goals vs. relying only on your own discipline",
            "Compare quitting your job and moving to a new city tomorrow vs. making small changes over 2 years",
            "Compare learning a completely new skill like coding vs. getting better at something you already do well",

            // Additional Boss - Health Choices
            "Compare following a strict 12-week gym programme vs. just going to the gym when you feel like it",
            "Compare weighing every meal and logging calories vs. just eating slowly and stopping when full",
            "Compare exercising at 6am before work vs. exercising at 8pm after dinner",
            "Compare doing yoga or walking on rest days vs. lying on the sofa and truly resting",
            "Compare hiring a personal trainer vs. watching YouTube videos and designing your own routine",
            "Compare eating only plants and no meat vs. eating meat, fish, vegetables, and everything",
            "Compare eating breakfast, lunch, and dinner at fixed times vs. only eating when you're actually hungry",
            "Compare taking protein powder and vitamins vs. just eating a variety of whole foods",

            // Additional Boss - Environment & Space
            "Compare working in a silent room vs. working in a busy coffee shop with noise around you",
            "Compare an office with big windows and sunlight vs. an office with bright fluorescent lights",
            "Compare a room with only a desk, chair, and plant vs. a room full of decorations and memories",
            "Compare having a home office in a separate room vs. working from your kitchen table",
            "Compare walking in a small city park vs. hiking in the mountains for a weekend",
            "Compare working in air conditioning all day vs. opening windows and feeling the temperature change",
            "Compare working in total silence vs. working with lo-fi music or white noise",
            "Compare standing at your desk for 8 hours vs. sitting in an ergonomic chair",
            "Compare working in an open-plan office with 50 people vs. working alone in a private office",
            "Compare a desk where everything is perfectly organised vs. a desk covered in papers and ideas"
        ]
    },
    hypothetical: {
        easy: [
            // Superpowers
            "What if you could fly for one day?",
            "Imagine you could read minds for an hour",
            "What if you could be invisible for a day?",
            "Suppose you could talk to animals",
            "What if you had super strength?",
            "Imagine you could breathe underwater",
            "What if you could run super fast?",
            "Suppose you could see in the dark",
            "What if you could walk through walls?",
            "Imagine you could control the weather",

            // Time & Travel
            "What if you could travel back in time for one day?",
            "Imagine you could visit any country right now",
            "What if you could live in any time period?",
            "Suppose you could pause time whenever you wanted",
            "What if you could see one day into the future?",
            "Imagine you could teleport anywhere instantly",
            "What if you could relive your favourite day?",
            "Suppose you could slow down time",
            "What if you could skip ahead one year?",
            "Imagine you could visit the past as an observer",

            // Money & Possessions
            "What if you won a million euros?",
            "Imagine you could have any car you wanted",
            "What if everything you touched turned to gold?",
            "Suppose money didn't exist – how would things work?",
            "What if you could only keep ten possessions?",
            "Imagine you had unlimited money for one day",
            "What if you found a treasure chest?",
            "Suppose you inherited a castle",
            "What if you could buy any house in the world?",
            "Imagine everything was free for a week",

            // Famous People & Meeting
            "Suppose you could meet any famous person",
            "What if you had dinner with a historical figure?",
            "Imagine you could be friends with any celebrity",
            "What if you could ask any person one question?",
            "Suppose you could spend a day with your hero",
            "What if you woke up famous tomorrow?",
            "Imagine you could interview anyone from history",
            "What if your favourite author wrote about your life?",
            "Suppose you could join any band or team",
            "What if you could shadow any professional for a day?",

            // Alternate Life
            "What if you could live in any film or TV show?",
            "Imagine you could be any character from a book",
            "What if you were born in a different country?",
            "Suppose you could choose your own age",
            "What if you could switch lives with someone for a day?",
            "Imagine you could have any job without training",
            "What if you could live anywhere in the world?",
            "Suppose you woke up speaking every language",
            "What if you had a completely different personality?",
            "Imagine you could redesign your life from scratch",

            // Technology Gone
            "What if the internet stopped for a week?",
            "Imagine phones were never invented",
            "What if you couldn't use technology for a month?",
            "Suppose TV didn't exist – what would you do?",
            "What if social media disappeared tomorrow?",
            "Imagine there were no video games",
            "What if cars hadn't been invented?",
            "Suppose computers didn't exist",
            "What if there was no electricity for a day?",
            "Imagine we had no clocks or watches",

            // Talking & Communication
            "What if your pet could talk – what would it say?",
            "Imagine everyone had to tell the truth for one day",
            "What if you could only speak in questions?",
            "Suppose you could send messages through dreams",
            "What if everyone could hear your thoughts?",
            "Imagine you couldn't speak for a week",
            "What if you could talk to plants?",
            "Suppose you could leave video messages in the air",
            "What if you could only communicate through drawings?",
            "Imagine you could record and share dreams",

            // School & Work Changes
            "What if school started at 12pm instead of 8am?",
            "What if you could design your own school subjects?",
            "Suppose the school week was only three days",
            "What if adults had to go to school too?",
            "Imagine you were the teacher for a day",
            "What if homework didn't exist?",
            "Suppose you could work at any company",
            "What if the work week was only four days?",
            "Imagine everyone worked from home",

            // Nature & Environment
            "What if you found a door to another dimension?",
            "Imagine you discovered a new species",
            "What if it snowed in summer?",
            "Suppose you could live on another planet",
            "What if you could breathe in space?",
            "Imagine oceans were fresh water",
            "What if trees could walk?",
            "Suppose flowers bloomed all year",
            "What if you could control one element?",
            "Imagine the moon was closer to Earth",

            // Personal Changes
            "What if you had a clone of yourself?",
            "Imagine you could eat anything without getting full",
            "What if you never needed to sleep?",
            "Suppose you could remember everything perfectly",
            "What if you could only eat one food forever?",
            "Imagine you could change one thing about yourself",
            "What if you aged backwards?",
            "Suppose you could see everyone's emotions as colours",
            "What if you could feel no pain?",
            "Imagine you could learn any skill instantly",

            // Additional Easy - More Superpowers
            "What if you could stretch like rubber?",
            "Imagine you could shrink to ant size",
            "What if you could grow to giant size?",
            "Suppose you could copy any ability you saw",
            "What if you could heal others with your touch?",
            "Imagine you could create fire from your hands",
            "What if you could freeze things by looking at them?",
            "Suppose you could move objects with your mind",
            "Imagine you could become any animal",


            // Additional Easy - More Time
            "What if weekends were five days long?",
            "Imagine you could redo yesterday",
            "What if you had an extra hour every day?",
            "Suppose time stopped during your sleep",
            "What if you could see yourself in 20 years?",
            "Imagine tomorrow never came",
            "What if you could jump to any date in your life?",
            "Suppose each day lasted 30 hours",
            "What if you could speed up boring moments?",
            "Imagine you could trade time with others",

            // Additional Easy - More World Changes
            "What if everyone was the same height?",
            "Imagine if all cities were underground",
            "Suppose gravity was half as strong",
            "Imagine all walls were transparent",


            // Additional Easy - More School Fun
            "What if you could choose your teachers?",
            "What if you learned only what interested you?",
            "What if you got paid to go to school?",

            // Additional Easy - More Home Life
            "What if your house could move anywhere?",
            "Suppose you had a secret room in your house",

            // Additional Easy - More Fun Scenarios
            "What if you never got tired?",

            // Additional Easy - More Adventure
            "What if you found a secret cave?",
            "Imagine you discovered a new island",
            "What if you could visit the bottom of the ocean?",
            "Suppose you found a map to hidden treasure",
            "What if you could explore space for a day?",
            "Imagine you found a time capsule from the future",
            "What if you discovered a lost city?",
            "Suppose you met a friendly alien",
            "What if you could safari in any jungle?",
            "Imagine you found a portal in your wardrobe",

            // Additional Easy - More Wishes
            "What if dreams could come true literally?",
            "Suppose you could be in your favourite video game",
            "What if you could write the ending to any story?",
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Personal Life Changes
            "What if you could not use your smartphone for a month?",
            "Suppose you had to move to a country where you don't speak the language",
            "What if you could redo one year of your life?",
            "Imagine you discovered you had a twin you never knew about",
            "What if you had to change careers completely tomorrow?",
            "Suppose you inherited a business you knew nothing about",
            "What if you could only keep the friends you made after age 25?",
            "Imagine your biggest fear came true – how would you cope?",
            "What if you had to live without your favourite technology?",
            "Suppose you found out a life-changing secret about your family",

            // Society Changes
            "Suppose everyone worked four days a week – how would life change?",
            "What if public transport were free everywhere?",
            "Imagine school started at noon – what would be the effects?",
            "What if there were no grades or exams in education?",
            "Suppose voting was mandatory for all citizens",
            "What if advertising was banned?",
            "Imagine if social media required real names and photos only",
            "What if retirement age was lowered to 50?",
            "Suppose everyone had to do one year of community service",
            "What if news media had to be completely unbiased?",

            // Human Abilities
            "What if humans needed only two hours of sleep per day?",
            "Imagine if everyone could read at ten times normal speed",
            "What if humans lived to be 200 years old?",
            "Suppose we could communicate telepathically",
            "What if everyone had perfect memory?",
            "Imagine humans could photosynthesise like plants",
            "What if we could see the full electromagnetic spectrum?",
            "Suppose we didn't need to eat – only drink water",
            "What if humans could regenerate limbs?",
            "Imagine we could turn off pain at will",

            // Technology & Future
            "What if AI could do your job better than you?",
            "Suppose self-driving cars were mandatory",
            "What if virtual reality became indistinguishable from reality?",
            "Imagine if every conversation was recorded",
            "What if we could upload skills directly to our brains?",
            "Suppose robots did all household chores",
            "What if you could video call anyone in history (simulation)?",
            "Imagine if lie detection was perfect and mandatory in courts",
            "What if translation was instant and perfect?",
            "Suppose we could record and replay dreams",

            // Environment & Living
            "Imagine if everyone had to grow some of their own food",
            "What if plastic was completely banned?",
            "Suppose your city became car-free overnight",
            "What if you had to live without electricity for a month?",
            "Imagine the climate in your area became tropical",
            "What if water became extremely scarce?",
            "Suppose meat became prohibitively expensive",
            "What if everyone had to live in flats?",
            "Imagine if flying was no longer possible",

            // Economics & Work
            "What if everyone earned the same salary?",
            "Suppose inheritance was abolished",
            "What if you could only work on projects you loved?",
            "Imagine if your country had no national debt",
            "What if tipping culture disappeared?",
            "Suppose all work was remote by law",
            "What if university was completely free?",
            "Imagine if healthcare was free everywhere",
            "What if the maximum work week was 30 hours?",
            "Suppose minimum wage tripled overnight",

            // Relationships & Social
            "What if you had to be completely honest for a month?",
            "Suppose you could see people's true intentions",
            "What if everyone's search history was public?",
            "Imagine if first impressions were always accurate",
            "What if you could feel others' emotions physically?",
            "Suppose you had to make a major life decision today",
            "What if your parents had made different life choices?",
            "Imagine if strangers became friends instantly",
            "What if you could see compatibility percentages with people?",
            "Suppose you had to mentor someone for a year",

            // Culture & Entertainment
            "What if all films had to be educational?",
            "Imagine if music didn't exist – what would fill the gap?",
            "What if books could only be borrowed, never owned?",
            "Suppose art had to serve a social purpose",
            "What if sports betting was illegal everywhere?",
            "Imagine if celebrities had no more influence than average people",
            "What if violent entertainment was banned?",
            "Suppose fashion trends didn't exist",
            "What if everyone had to create art regularly?",
            "Imagine if there were no fictional stories allowed",

            // Health & Wellness
            "What if you knew exactly when you would die?",
            "Suppose unhealthy food tasted bad to everyone",
            "What if exercise was mandatory for all adults?",
            "Imagine if mental health was visible like physical symptoms",
            "What if ageing stopped at 30?",
            "Suppose addiction didn't exist",
            "What if everyone had to meditate daily?",
            "Imagine if stress had immediate visible effects",
            "What if sleep quality was guaranteed?",
            "Suppose everyone had the same physical abilities",

            // Miscellaneous Boss
            "What if you could see five years into your own future?",
            "Imagine if coincidences weren't random",
            "What if you had to justify every purchase publicly?",
            "Suppose luck was a measurable, tradeable resource",
            "What if everyone remembered their past lives?",
            "Imagine if your thoughts created your reality",
            "What if failure was impossible – would success mean anything?",
            "Suppose you could experience any era for a week",
            "What if personal data was your only currency?",
            "Imagine if empathy could be taught like maths",

            // Additional Boss - Career & Work
            "What if AI wrote all your work emails?",
            "Suppose your salary was public knowledge",
            "What if promotions were decided by lottery?",
            "Imagine if everyone changed careers every five years",
            "What if workplace hierarchies didn't exist?",
            "What if networking was unnecessary for career success?",
            "Imagine if all jobs were equally respected",
            "What if your passion automatically became your career?",
            "Suppose work hours were flexible for everyone",

            // Additional Boss - Education & Learning
            "What if you could download knowledge instantly?",
            "Suppose teachers were replaced by AI tutors",
            "What if grades were based on effort not results?",
            "Imagine if learning disabilities didn't exist",
            "What if all education was project-based?",
            "Suppose you could learn any language in a week",
            "What if critical thinking was the only subject?",
            "Imagine if schools had no fixed curriculum",
            "What if education continued throughout life mandatorily?",
            "Suppose children taught adults sometimes",

            // Additional Boss - Technology & Privacy
            "What if you could never be anonymous online?",
            "Suppose all your online activity was public",
            "What if technology could read your emotions?",
            "Imagine if screen time had physical limits built in",
            "What if social media showed accuracy ratings for claims?",
            "Suppose you could unsend any message ever sent",
            "What if your digital footprint could be erased completely?",
            "Imagine if notifications were banned",
            "What if algorithms couldn't personalise content?",
            "Suppose you could rate every interaction publicly",

            // Additional Boss - Society & Rules
            "What if voting was done by expertise on each issue?",
            "Suppose communities could set their own laws",
            "What if reputation was the only currency?",
            "Imagine if everyone had to volunteer monthly",
            "What if disputes were settled by random selection?",
            "Suppose opinions had to be backed by evidence publicly",
            "What if privacy was legally guaranteed absolutely?",
            "Imagine if all government decisions were voted on directly",
            "What if age didn't determine any rights or restrictions?",

            // Additional Boss - Relationships
            "What if you could see your future partner?",
            "Suppose breakups were mediated by professionals",
            "What if families were chosen not born into?",
            "Imagine if friendships had formal agreements",
            "What if loneliness was medically treated?",
            "Suppose you could only have five close relationships",
            "What if relationship compatibility was scientifically matched?",
            "Imagine if conflict resolution was taught at school",
            "What if gratitude was expressed publicly daily?",

            // Additional Boss - Health & Body
            "What if you could choose your body type permanently?",
            "Suppose genetic health risks were eliminated at birth",
            "What if hospitals were unnecessary?",
            "Imagine if diet had no effect on weight",
            "What if mental energy was unlimited?",
            "Suppose recovery from illness took hours not days",
            "Imagine if physical appearance could be changed at will",
            "What if age-related decline was reversible?",

            // Additional Boss - Environment
            "What if you had to live carbon-neutral?",
            "Suppose every product showed its environmental cost",
            "What if travel was limited by carbon budget?",
            "Imagine if nature had legal rights enforced",
            "What if extreme weather events were predictable perfectly?",
            "Suppose you could control pollution in your area",
            "Imagine if cities were designed primarily for nature",
            "What if every home generated its own power?",
            "Suppose water was more valuable than gold",

            // Additional Boss - Money & Economy
            "What if savings were impossible?",
            "Suppose prices were negotiable everywhere",
            "What if wealth was redistributed annually?",
            "Imagine if rent didn't exist",
            "What if your needs were guaranteed but wants weren't?",
            "Suppose barter replaced money",
            "Imagine if poverty was eliminated overnight",
            "What if spending was tracked publicly?",
            "Suppose debt was forgiven every decade",

            // Additional Boss - Personal Growth
            "What if you could see your blind spots clearly?",
            "What if therapy was mandatory for everyone?",
            "Imagine if trauma could be healed instantly",
            "What if regret didn't exist as an emotion?",
            "Suppose you knew your purpose from birth",

            // Additional Boss - Time & Memory
            "What if you forgot nothing but could choose to?",
            "Suppose you could revisit memories in VR",
            "Imagine if you could share exact memories with others",
            "Suppose you could trade years of life",
        ]
    },
    story: {
        easy: [
            // Lost & Found
            "Tell a short story about a lost key",
            "Make up a story about finding money on the street",
            "Tell a story about a lost pet that comes home",
            "Make up a story about finding a mysterious note",
            "Tell a story about losing your phone for a day",
            "Make up a story about a lost letter",
            "Tell a story about finding something in an old jacket",
            "Make up a story about a missing shoe",
            "Tell a story about finding a photo of a stranger",
            "Make up a story about a lost umbrella",

            // New Experiences
            "Make up a story about a new neighbour",
            "Tell a story about your first day at a job or school",
            "Make up a story about trying a new food",
            "Tell a story about making a new friend",
            "Make up a story about visiting a new city",
            "Tell a story about learning something new",
            "Make up a story about a new hobby",
            "Tell a story about meeting someone interesting",
            "Make up a story about a new pet",
            "Tell a story about starting something new",

            // Weather & Nature
            "Tell a story about a rainy day",
            "Make up a story about a thunderstorm",
            "Tell a story about a perfect sunny day",
            "Make up a story about getting caught in the rain",
            "Tell a story about a snowy adventure",
            "Make up a story about a windy day",
            "Tell a story about watching a sunset",
            "Make up a story about a walk in the woods",
            "Tell a story about a day at the beach",

            // Small Moments
            "Make up a story about a small surprise",
            "Tell a story about a funny misunderstanding",
            "Make up a story about a helpful stranger",
            "Tell a story about a broken object",
            "Make up a story about a wrong number call",
            "Tell a story about a lucky coincidence",
            "Make up a story about a late night snack",
            "Tell a story about an unexpected visitor",
            "Make up a story about a strange dream",
            "Tell a story about a forgotten birthday",

            // Animals
            "Make up a story about finding a puppy",
            "Tell a story about a clever cat",
            "Make up a story about a talking bird",
            "Tell a story about a zoo visit",
            "Make up a story about a squirrel in the house",
            "Tell a story about an escaped pet",
            "Make up a story about a friendly dog",
            "Tell a story about meeting a wild animal",

            // Travel & Transport
            "Make up a story about missing the bus",
            "Tell a story about a train journey",
            "Make up a story about a taxi ride",
            "Tell a story about getting lost",
            "Make up a story about a flat tyre",
            "Tell a story about a plane trip",
            "Make up a story about a boat ride",
            "Tell a story about a road trip snack stop",
            "Make up a story about a crowded metro",
            "Tell a story about waiting at an airport",

            // Food & Eating
            "Tell a story about a birthday party",
            "Make up a story about a cooking disaster",
            "Tell a story about your most memorable meal",
            "Make up a story about a restaurant visit",
            "Tell a story about baking something",
            "Make up a story about a picnic",
            "Tell a story about trying a strange food",
            "Make up a story about a food festival",
            "Tell a story about a family dinner",

            // Technology
            "Make up a story about a mysterious text message",
            "Tell a story about your phone dying",
            "Make up a story about a viral video",
            "Tell a story about a video call with a friend",
            "Make up a story about a social media post",
            "Tell a story about losing internet for a day",
            "Make up a story about an online purchase",
            "Tell a story about a funny autocorrect",
            "Make up a story about a group chat drama",
            "Tell a story about taking the perfect photo",

            // School & Work
            "Make up a story about a school prank",
            "Tell a story about a presentation gone wrong",
            "Make up a story about a helpful teacher",
            "Tell a story about an exam day",
            "Make up a story about a work meeting",
            "Tell a story about a project deadline",
            "Make up a story about finding something in your locker",
            "Tell a story about a school trip",
            "Make up a story about a job interview",
            "Tell a story about your lunch break",

            // Miscellaneous Easy Stories
            "Tell a story about an embarrassing moment",
            "Make up a story about a power outage",
            "Tell a story about winning something unexpectedly",
            "Make up a story about a ghost in your house",
            "Make up a story about a broken alarm clock",
            "Tell a story about a concert or event you went to",
            "Make up a story about a street performer",
            "Tell a story about a secret place",
            "Make up a story about a time capsule",

            // Additional Easy - More Lost & Found
            "Tell a story about losing your way home",
            "Tell a story about finding an old photo",
            "Make up a story about losing your voice",

            // Additional Easy - More Friendship
            "Tell a story about making up after a fight",
            "Make up a story about sharing a secret",
            "Tell a story about a best friend moving away",
            "Make up a story about meeting an old classmate",
            "Make up a story about helping a friend in trouble",
            "Tell a story about a friend who surprised you",
            "Make up a story about standing up for a friend",
            "Tell a story about a friendship that started badly",
            "Make up a story about friends on an adventure",

            // Additional Easy - More Family
            "Tell a story about cooking with a grandparent",
            "Make up a story about a sibling prank",
            "Tell a story about a family road trip",
            "Make up a story about visiting relatives",
            "Tell a story about a family game night",
            "Tell a story about a family photo session",
            "Make up a story about a parent's surprise",
            "Tell a story about babysitting a younger sibling",
            "Make up a story about a family tradition",

            // Additional Easy - More School
            "Make up a story about a school play",
            "Tell a story about a science experiment",
            "Tell a story about a substitute teacher",
            "Tell a story about forgetting homework",

            // Additional Easy - More Adventure
            "Make up a story about exploring an attic",
            "Make up a story about finding a shortcut",
            "Tell a story about a bike ride adventure",

            // Additional Easy - More Celebrations
            "Tell a story about a surprise party",
            "Make up a story about receiving a gift",
            "Make up a story about a holiday tradition",
            "Tell a story about making a costume",
            "Tell a story about a special dinner",
            "Make up a story about winning an award",

            // Additional Easy - More Helping
            "Tell a story about helping a neighbour",
            "Make up a story about walking someone's dog",
            "Make up a story about teaching someone to swim",
            "Tell a story about finding a lost pet for someone",
            "Tell a story about volunteering for the first time",

            // Additional Easy - More Simple Moments
            "Tell a story about staying up late",
            "Tell a story about a perfect day",
            "Tell a story about a small kindness",

            // Additional Easy - More Surprises
            "Tell a story about finding something you'd lost long ago",
            "Make up a story about an unexpected talent",
            "Make up a story about good news",
            "Tell a story about meeting someone famous accidentally",

        ],
        boss: [
            // Boss Mode - previous medium tier
            // Discoveries & Mysteries
            "You find a wallet on the street. Inside is €2,000 in cash, a photo of a family, and a note that says 'Please find me.' There's no ID, just an address. Continue the story.",
            "A package arrives with no return address. Inside is a phone with one contact saved: 'Call when ready.' You weren't expecting anything. Continue the story.",
            "You're renovating your old house when you break through a wall and find a room that shouldn't exist. Inside is a chair, a table, and a journal from 1952. Continue the story.",
            "You're walking on a beach in Portugal. You find a bottle with a note inside: 'If you're reading this, I need help. I'm at—' The rest is washed away. The note is dated last week. Continue the story.",
            "You buy a used book at a flea market. Hidden inside the cover is a handwritten diary. The last entry says 'Tomorrow, I'll tell them the truth about the fire.' Continue the story.",
            "You're at the city library. You lean on a bookshelf and it swings open. Behind it is a staircase going down. The librarian sees you and whispers 'You weren't supposed to find that.' Continue the story.",
            "A letter arrives for you. It's postmarked 1999 but delivered today. It's from your grandfather, who died in 1998. It says 'By now you're old enough to know about the cabin.' Continue the story.",
            "You inherit an old wardrobe from your aunt. You find a false bottom with a locked box inside. When you finally open it, you find your own baby photo and a key to a safety deposit box. Continue the story.",
            "Your father passes away. At the funeral, a woman you've never seen approaches you and says 'I'm your father's other daughter. We need to talk about the money.' Continue the story.",
            "You buy an old painting at an estate sale for €50. Behind the canvas, you find another painting – one that looks like a lost masterpiece worth millions. Continue the story.",

            // Unexpected Connections
            "You got on the wrong train to Brussels and found an empty seat next to someone reading the same obscure book you love. Continue the story.",
            "It's 11pm on the last metro. An elderly woman sits next to you and says 'I've been looking for someone like you.' Continue the story.",
            "At a wedding, you meet someone who went to your same small primary school on another continent. You realise your mothers were best friends. Continue the story.",
            "You're at a café in Tokyo when you hear someone call your name. You turn around and see your housemate from 15 years ago. Continue the story.",
            "A homeless man on the street hands you an envelope and says 'Someone told me to give this to the person wearing blue today.' Inside is a key. Continue the story.",
            "Your flight is delayed. You start talking to the person next to you, and by the end of the conversation, they offer you a job. Continue the story.",
            "Your new neighbour keeps leaving small gifts at your door: a plant, a book, fresh biscuits. One day, there's a note asking you to dinner. Continue the story.",
            "At a dinner party, a stranger mentions they grew up in the same tiny village as your grandmother. They have a photo of your grandmother as a young woman. Continue the story.",
            "You've exchanged dozens of messages with someone on a dating app but never met. One day, they sit down next to you at your regular coffee shop without knowing it's you. Continue the story.",
            "Five years ago, you helped a crying teenager at a bus stop. Today, that teenager is interviewing you for your dream job. Continue the story.",

            // Plans Gone Wrong
            "You're making your grandmother's famous lasagne for your partner's parents. You open the oven and see it's completely black. They arrive in 20 minutes. Continue the story.",
            "You've spent two weeks planning a surprise 40th birthday party for your best friend. They walk into the venue an hour early to pick something up. Continue the story.",
            "Your romantic weekend in Paris starts with lost luggage, a hotel that doesn't have your reservation, and rain. But then something unexpected happens. Continue the story.",
            "Your Tinder date shows up, and it's your boss's spouse. You're already seated and they've seen you. Continue the story.",
            "You've planned the perfect proposal at the top of the Eiffel Tower. The ring falls through the grating. Continue the story.",
            "The bride is walking down the aisle when her ex-boyfriend stands up from the back row and says 'I have something to say.' Continue the story.",
            "It's day one of your camping trip. A bear has eaten all your food, your tent has a hole, and it's starting to rain. Continue the story.",
            "You quit your job and invested your savings into a food truck. On opening day, you realise you set up next to a health inspector. Continue the story.",
            "Your family reunion cruise ship breaks down in the middle of the ocean. You're stuck with relatives you haven't seen in 20 years. Continue the story.",
            "You bet your coworker €500 that you could run a marathon without training. Race day is tomorrow. Continue the story.",

            // Memory & Promise
            "You're cleaning your old flat before moving out. Behind a bookshelf, you find a note from 10 years ago: 'Don't forget to call Maria on 15 March.' Today is 14 March. Continue the story.",
            "You're going through your grandmother's things after her funeral. You find a photo of her as a young woman, standing next to someone who looks exactly like your partner. Continue the story.",
            "When you were 8, you promised your dying grandfather you would climb Mount Everest. You're now 35, have never climbed anything, and you just found his letter reminding you. Continue the story.",
            "Your whole life, you've told people about the time you saved a drowning child at the beach when you were 12. Today, your mother says 'What beach? We never went to the beach.' Continue the story.",
            "Your old secondary school buried a time capsule 25 years ago. Today it's being opened. Inside is something with your name on it that you don't remember putting there. Continue the story.",
            "You return to the small town you grew up in for the first time in 30 years. You walk into your childhood home, now owned by strangers, and they say 'We've been expecting you.' Continue the story.",
            "Every year on 24 December, your family makes the same strange dish no one actually likes. This year, your grandmother finally explains why. Continue the story.",
            "You're at a bar when the old song 'Hey Ya!' by OutKast comes on. Suddenly you remember something important that happened 20 years ago that you had completely forgotten. Continue the story.",
            "A message request pops up from a name you don't recognise: 'Were you at summer camp in 1998? I need to tell you something.' Continue the story.",
            "You're cleaning out your parent's house after they've moved to a care home. You find a recording labelled 'My last message for my child.' Your parent is still alive. Continue the story.",

            // Transformation & Change
            "You accidentally send a text meant for your friend to your boss. The text says 'I hate this job.' But instead of getting fired, something unexpected happens. Continue the story.",
            "You're sitting in a café in Lisbon on your first day of a new life. You left everything behind – your job, your flat, your relationship. The waiter brings you coffee and says 'You look like you need to talk.' Continue the story.",
            "Three months ago, you were a workaholic who never took a day off. Then you collapsed at your desk. Today, you're standing on a beach in Thailand, and you don't recognise the person you've become. Continue the story.",
            "Your taxi driver says one sentence that changes how you see everything. The sentence is: 'What if you're not running towards something, but away from something?' Continue the story.",
            "You're having the most ordinary Tuesday of your life – coffee, emails, lunch alone. At 3:47pm, a stranger knocks on your office door and says 'They told me you'd know what to do.' Continue the story.",
            "Your house burns down. Everything you own is gone. Standing in the ashes, you realise you feel free. Continue the story.",
            "You're 55 years old, and you've never been on a plane. Today, you buy a one-way ticket to anywhere. The destination that comes up is Reykjavik. Continue the story.",
            "You're terrified of public speaking. You're standing backstage at a TED conference. In 5 minutes, you have to give a talk. You have no idea how you got here. Continue the story.",
            "Ten years ago, a stranger paid for your coffee when you had no money. Today, you're the CEO of a coffee company. You recognise them in the queue at your flagship store. Continue the story.",
            "You started painting to deal with your divorce. Today, someone offers €10,000 for one of your paintings. Continue the story.",

            // Work & Dreams
            "You finally got hired at Google, your dream company since you were 15. It's Monday morning of week 3, and you're sitting in the car park, unable to go inside. Continue the story.",
            "Your new boss is difficult, demanding, and never gives praise. But one day she says 'I see myself in you. Let me tell you why I push you so hard.' Continue the story.",
            "You've been a lawyer for 15 years. Today, during a meeting with a client worth millions, you stand up and say 'I'm sorry, I can't do this any more.' Continue the story.",
            "It's the final round of MasterChef. You're competing against your culinary school rival. The judges taste your dish, then taste theirs, and the room goes silent. Continue the story.",
            "Your company is about to go bankrupt. The five remaining employees decide to make one final product together. If it fails, everyone loses their job. Continue the story.",
            "Your father always told you 'Never trust anyone in business.' Today, you trusted someone – and it worked. Continue the story.",
            "Your first restaurant closed after 6 months. You lost everything. Today, you're opening your second restaurant, and the person who shut down your first one is standing at the door. Continue the story.",
            "You and your college housemate started the same business separately. For 5 years, you were enemies. Today, they call and say 'What if we worked together?' Continue the story.",
            "You missed your alarm and arrived 10 minutes late to a job interview. But those 10 minutes changed everything. Continue the story.",
            "You were rejected from this company three times. Today, the CEO personally calls you and says 'I made a mistake. Will you give us another chance?' Continue the story.",

            // Family & Relationships
            "Your mother is dying. She asks everyone to leave the room except you. She says 'There's something about your father I've never told anyone.' Continue the story.",
            "You and your brother haven't spoken in 12 years – not since the argument at your father's funeral. Today, you see him at a coffee shop in another city. He's sitting alone. Continue the story.",
            "You're 40 years old, cleaning out your father's garage. You find his old journal from when he was your age. The first page says 'I hate my life.' Continue the story.",
            "Your grandmother, who you always thought was a housewife, dies at 94. At the funeral, a stranger approaches and says 'Did she ever tell you about Cuba in 1961?' Continue the story.",
            "Your grandfather's pocket watch has been in your family for 4 generations. Today, an antiques dealer sees it and turns pale. 'Where did you get this?' they ask. Continue the story.",
            "Your sister said something unforgivable 5 years ago. Today, she's at your door with tears in her eyes. She says 'I finally understand. Can we talk?' Continue the story.",
            "It's the first family Christmas since the divorce. Your parents are in the same room for the first time in 3 years. Your 8-year-old nephew says 'Why doesn't grandpa talk to grandma?' Continue the story.",
            "You take a DNA test for fun. The results show a half-sibling you've never met lives 20 minutes from your house. You're standing at their door. Continue the story.",
            "Your 6-year-old daughter asks 'Why do you always work so much? Don't you want to play with me?' You don't have an answer. Continue the story.",
            "Your family's bakery has been open for 60 years. Your father wants to sell it. You've never wanted to be a baker, but something stops you from saying yes. Continue the story.",

            // Adventure & Risk
            "Your flight to London is delayed 12 hours. The person next to you says 'I'm driving to Amsterdam instead. Want to come?' You've never met them before. Continue the story.",
            "You're hiking in the Swiss Alps. The marked trail is closed. You take a different path and discover a village that isn't on any map. Continue the story.",
            "Your friends dare you to knock on the door of the abandoned mansion at the end of the street. Someone answers. Continue the story.",
            "You're a nurse. A patient is dying and begs you to do something that's against hospital rules. You do it. Continue the story.",
            "You mean to book a hotel in Barcelona, Spain. You accidentally book one in Barcelona, Venezuela. You decide to go anyway. Continue the story.",
            "Your friend invites you to a 'dinner party' which turns out to be a cult recruitment session. But then things get interesting. Continue the story.",
            "You buy a motorcycle and decide to ride from Berlin to Istanbul with no plan. On day 3, in the middle of Serbia, the bike breaks down in front of a small house. Continue the story.",
            "Every morning for 5 years, you've taken the same route to work. Today, for no reason, you turn left instead of right. Continue the story.",
            "It's 11pm on your 40th birthday. You're alone at a bar when a stranger says 'I know what you need. Follow me.' Continue the story.",
            "You've always been afraid of the ocean. Today, you sign up for a scuba diving certification. On your first dive, you see something at the bottom you weren't supposed to see. Continue the story.",

            // Miscellaneous Boss Stories
            "You're a guitar. For 50 years, you've been passed from owner to owner – a rock star, a homeless man, a child. Tell the story of the hands that have played you.",
            "There's a car accident at an intersection. Tell the story twice: first from the driver who caused it, then from the driver who was hit.",
            "Everything happens between 11:00am and 12:00pm. A woman walks into a hotel. She walks out with someone else's life. Continue the story.",
            "The film ends with the hero walking into the sunset. But what happens the next morning? He wakes up in a motel room with a problem. Continue the story.",
            "A child runs into traffic. You can either pull them back or push away the woman next to you who's also moving. You choose in half a second. Continue the story.",
            "Someone in a small town of 2,000 people starts a rumour that the mayor has been embezzling money. By evening, the story has changed five times. Tell the story of how it spread.",
            "It's 9:45pm and the restaurant closes at 10. A man walks in alone, orders nothing, and sits by the window. Continue the story.",
            "A fishing boat vanishes in 1965. In 2023, it's found floating intact in the Pacific, 6,500 kilometres from where it disappeared. Continue the story.",
            "There's a photograph on the wall of a bar. It's been there since 1953. Three people in the photo are still alive. One of them walks in today. Continue the story.",
            "A 40-year-old man meets his 30-year-old self in a dream. The younger version asks 'Did we make it?' What does the 40-year-old say? Continue the story.",

            // Additional Boss - Choices & Consequences
            "You have two job offers: one pays twice as much but means moving away from your family. You're standing at the airport when you make your final decision. Continue the story.",
            "Twenty years ago, you had two choices: follow your art or take the safe corporate job. Tell both versions of your life – the one you chose and the one you didn't.",
            "Your logical mind says marry the stable accountant. Your heart says run away with the struggling musician. Today is your wedding day. Continue the story.",
            "You said goodbye to your best friend at the airport 10 years ago. Neither of you knew it would be the last time. Continue the story.",
            "The first house you tried to buy fell through. At the time, you were devastated. Then you found this house. Continue the story.",
            "You hold your late mother's jewellery in your hands. A dealer offers €50,000. You need the money, but something stops you. Continue the story.",
            "You texted the wrong person and accidentally revealed a secret. At first you were horrified, but then... Continue the story.",
            "You can take the motorway and be home in 30 minutes, or take the scenic route through the mountains. You choose the mountains. Continue the story.",
            "Your finger hovers over 'Send' on the email that could change everything. You've been sitting here for 20 minutes. Continue the story.",
            "You quit your job without a backup plan. You told your parents you're moving to Spain to be a painter. There's no going back now. Continue the story.",

            // Additional Boss - Growth & Change
            "You look at photos from five years ago. You don't recognise that person. What happened in between? Continue the story.",
            "Since childhood, you wanted to be a doctor. At 28, halfway through medical school, you realise you hate it. Continue the story.",
            "You've lived in the same city your whole life. Today is your first morning in Tokyo. You don't speak the language. You feel free. Continue the story.",
            "For 15 years, you were 'the responsible one.' Today, you dyed your hair purple, quit your management job, and bought a motorcycle. Continue the story.",
            "You're 14 years old. Your parents tell you they're getting divorced and you need to choose who to live with. Continue the story.",
            "Your parents told you 'Money is the most important thing.' At 40, you finally realise they were wrong. Continue the story.",
            "You always judged people who worked in corporate jobs. Now you're wearing a suit in a lift, going to your corner office. Continue the story.",
            "You stopped painting 20 years ago when a teacher said you had no talent. Today, you pick up a brush for the first time since. Continue the story.",
            "You spent years fighting against moving to the suburbs, having kids, driving a people carrier. Now you're in the people carrier, and you're happy. Continue the story.",
            "When your mother died, you became a different person. Not worse, not better – just different. Continue the story.",

            // Additional Boss - Secrets & Revelations
            "You've kept a secret for 25 years. Today, you finally tell someone. They say 'I already knew.' Continue the story.",
            "You discover your kind, gentle neighbour was a war criminal in another country 40 years ago. Continue the story.",
            "Your father told your mother he was fired. But he wasn't – he quit to care for you when you were sick. You find this out at his funeral. Continue the story.",
            "You're in the bathroom at a restaurant when you hear two people talking. One is your spouse. They're discussing something about you. Continue the story.",
            "Your brother confesses he was the one who caused the accident that changed your family. Not your father, who everyone blamed. Continue the story.",
            "You were angry at your best friend for 10 years for not coming to your wedding. Today, you learn why she couldn't come. Continue the story.",
            "Your accountant father who 'worked late' for 30 years dies. At his office, they say he left every day at 5pm. Where did he go? Continue the story.",
            "You tell your daughter the truth about her biological father. She was happier not knowing. Continue the story.",
            "By day, she's a housewife in the suburbs. What nobody knows is that she's also an online poker champion who has won €200,000. Continue the story.",
            "You and your best friend made a pact never to tell anyone about what happened in summer 2005. They just wrote a memoir. Continue the story.",

            // Additional Boss - Work & Purpose
            "You took a job cleaning hotel rooms because you needed money. That was 3 years ago. Today, you're the hotel manager. What happened in between? Continue the story.",
            "You made a mistake at work that should have ended your career. Your boss called you into her office. You expected to be fired. She said something unexpected. Continue the story.",
            "Your colleague Maria started the same day you did, 15 years ago. Last week, she was diagnosed with cancer. You realise she's the closest thing you have to a sister. Continue the story.",
            "Today is your last day at the company you love. You're leaving because you got a better offer. But sitting at your desk at 5pm, you're not sure any more. Continue the story.",
            "You worked as a nurse for 10 years. A patient said something on her last day that completely changed how you see your job. Continue the story.",
            "Your startup failed spectacularly. You lost €100,000 and your reputation. But 3 years later, that failure became the foundation of something better. Continue the story.",
            "You mentored a young employee for 5 years. Yesterday, she was promoted above you. You're in the lift together. Continue the story.",
            "Your boss asks you to approve an invoice you know is fraudulent. If you refuse, you'll lose your job. If you approve it, you'll keep your salary. Continue the story.",
            "You had two offers: €150,000/year in finance or €45,000/year doing what you love. You chose the €45,000. It's 10 years later. Continue the story.",
            "For 8 years, your office was your home. Your colleagues were your family. Today, the company announced it's closing. You're standing in the empty office alone. Continue the story.",

            // Additional Boss - Love & Relationships
            "You met your spouse in the waiting room of a divorce lawyer's office. Both of you were there for consultations. Continue the story.",
            "You're in love with someone whose dream is to move to Japan. Your dream is to stay close to your family. One of you has to give up. Continue the story.",
            "You and your partner have been long-distance for 5 years – Amsterdam and Sydney. Today, one of you is moving. The plane lands in 3 hours. Continue the story.",
            "Your best friend confesses they've loved you for years. You love them too – but not that way. Or do you? Continue the story.",
            "You run into your ex-spouse at a wedding. It's been 20 years. They're alone. So are you. You end up at the same table. Continue the story.",
            "In college, you dated someone for 3 months before they transferred schools. That was 15 years ago. You just got a Facebook message from them. Continue the story.",
            "You've been on 5 dates with someone. Nothing dramatic, nothing exciting. Just nice. You realise this might be what love actually looks like. Continue the story.",
            "When you met them, you were selfish, angry, and closed. 10 years later, you're a different person. They made you this. Continue the story.",
            "Everyone said it wouldn't work. She's from a wealthy family; you grew up poor. She's 15 years older. You're different religions. It's your 25th anniversary. Continue the story.",
            "You're sitting in a car, about to break up with someone you've been with for 7 years. You know it's the right thing. You're still crying. Continue the story.",

            // Additional Boss - Community & Belonging
            "You were the only person at the conference who looked like you. Then someone sat next to you and said 'I've been looking for people like us.' Continue the story.",
            "There was nothing here 5 years ago – just an empty lot. Now there's a community garden, weekend markets, and neighbours who know each other's names. You started it. Continue the story.",
            "A developer wants to tear down your neighbourhood's only park to build flats. Tomorrow is the city council meeting. You've organised 50 neighbours to speak. Continue the story.",
            "Everyone in town knows that the mayor's wife has a secret. Nobody talks about it. You're new here. Someone is about to tell you. Continue the story.",
            "You left your small town at 18 and swore never to return. It's 20 years later. You're driving past the 'Welcome to...' sign. Continue the story.",
            "Mr Chen was the only person who remembered what the neighbourhood looked like before the war. He died last week. You were the only one at his funeral. Continue the story.",
            "She was just a librarian. But when she retired after 40 years, 500 people came to the ceremony. You were one of the children she taught to read. Continue the story.",
            "You moved next door to each other as strangers. That was 10 years ago. Now your kids are best friends, you share a lawn mower, and Sunday dinners are at your house. Continue the story.",
            "The coffee shop on the corner is closing after 50 years. You had your first date here. You studied for exams here. You said goodbye to your father here. Continue the story.",
            "You're 65. The person you're training will take over your job at the family business. It's been in the family for 3 generations. This is your last day. Continue the story.",

            // Additional Boss - Loss & Resilience
            "The fire took everything: your home, your photos, your wedding dress. It's been 6 months. You're standing in front of your new flat, empty. Continue the story.",
            "Your father died suddenly. At the funeral, a stranger approached and said 'He saved my life once. Let me tell you how.' Continue the story.",
            "Your spouse died a year ago today. This morning, you woke up and realised you had gone an entire day without crying for the first time. Continue the story.",
            "You never got to say goodbye. But today, you're writing a letter to them – the letter you wish you'd written before. Continue the story.",
            "Your grandmother left you her house in her will. When you opened the wardrobe, you found boxes of letters and photos you'd never seen. Continue the story.",
            "Yesterday, your mother was in the hospital. Today, she's gone. Tomorrow, you have to go back to work and pretend everything is normal. Continue the story.",
            "Every year on his birthday, you cook his favourite meal, set a place for him, and tell your children one story about their grandfather they've never heard. Continue the story.",
            "You spent 20 years angry at your father. He died before you could forgive him. Now you're sitting in a therapist's office trying to find closure. Continue the story.",
            "When they left, they left quickly. A half-drunk coffee. An unmade bed. A note that said only 'I'm sorry.' It's been 5 years. You're still living in that flat. Continue the story.",
            "The earthquake destroyed your city. 10,000 people are living in tents. You're one of them. But you're also organising the rebuilding. Continue the story.",

            // Additional Boss - Dreams & Reality
            "You wanted to be a professional musician. You're now a music teacher. It's not what you planned, but watching a student play your song, you realise something. Continue the story.",
            "You were going to start your own business at 30. You're now 45, still in the same job. Today, you throw away the business plan. Continue the story.",
            "Your worst fear came true: your company went bankrupt, your spouse left, and you're living with your parents at 50. It's Monday morning. Continue the story.",
            "You're 28 and training to swim the English Channel. Everyone says it's impossible. You've failed 3 times already. This is attempt 4. Continue the story.",
            "You never became famous. But your kids are happy, your marriage is good, and you look forward to Mondays. Is this settling, or is this the dream? Continue the story.",
            "At 22, you wanted to change the world. At 40, you got lost in mortgages and meetings. Today, you're 55 and you just signed up to volunteer. Continue the story.",
            "You wanted to win a Grammy. You won something better: a small club that's silent when you play, waiting for every note. Continue the story.",
            "Your daughter wants to be a painter. You know how hard that life is – you gave it up yourself. She's asking for your blessing. Continue the story.",
            "You dreamed of living in Paris. Now you dream of living closer to your ageing parents. Both can't happen. You're on a flight. Continue the story.",
            "You planned every detail: the career, the family, the retirement. None of it happened. What did happen was completely different – and maybe better. Continue the story.",

            // Additional Boss - Coincidence & Fate
            "If you hadn't missed your train that morning, you wouldn't have met the person you've now been married to for 20 years. Continue the story.",
            "You stopped to tie your shoe. That's why you saw the 'Help Wanted' sign in the window. That's how your life changed. Continue the story.",
            "Your favourite author dies. At the funeral, you meet someone who knew him. Then you meet someone who knew them. By the end of the day, your life is different. Continue the story.",
            "You sat next to a stranger on a plane for 6 hours. You told each other everything. You never exchanged names. 10 years later, you meet again. Continue the story.",
            "You kept choosing Door B your whole life. What would have happened if you'd chosen Door A, just once? Imagine that life. Continue the story.",
            "You almost died in a car accident 10 years ago. The car next to you swerved at the last second. You never found out who was driving. Until today. Continue the story.",
            "A random conversation at a party leads to an introduction, which leads to a job, which leads to a city, which leads to a marriage. Tell the story of that party conversation. Continue the story.",
            "A butterfly in Tokyo flaps its wings. 6 months later, you lose your job in London. Tell the story of everything in between. Continue the story.",
            "Your grandfather and your grandmother both went to the same café every morning for 3 years before they met. Then, one day, their usual tables were taken. Continue the story.",
            "Your family has the same tragedy every generation: divorce at 40, lost fortune, starting over. You're 39. Continue the story.",

            // Additional Boss - Courage & Fear
            "You've never given a speech in your life. Tomorrow, 500 people will be watching you give a eulogy for your best friend. It's midnight and you're staring at a blank page. Continue the story.",
            "You didn't run into the burning building. But you did call the emergency services, wait with the children, and hold the mother's hand for 3 hours. That was also brave. Continue the story.",
            "You finally confronted your bully from 30 years ago. You expected to feel strong. Instead, you felt something else. Continue the story.",
            "Nobody knows what you did that night. You saved three people's lives, then walked away before anyone could thank you. Continue the story.",
            "You didn't take the promotion because something in your gut said 'no.' Everyone thought you were crazy. 6 months later, the company collapsed. Continue the story.",
            "You were terrified of public speaking. Then you watched your 8-year-old daughter present to her class with confidence. She learned it from watching you pretend. Continue the story.",
            "Everyone disagreed with you. Your boss, your team, your spouse. But you stood your ground. That was 5 years ago. Were you right? Continue the story.",
            "Your grandmother survived a war, raised 6 children, and started a business at 60. She's 90 now. She just told you her secret to bravery. Continue the story.",
            "You've struggled with anxiety your whole life. Today, you're standing on the edge of a cliff, about to jump – into water, for fun, because your kids are watching. Continue the story.",
            "You watched one person stand up to injustice. Then two more stood. Then ten. Then you stood. Tell the story of how courage spread. Continue the story."
        ]
    },
    roleplay: {
        easy: [
            // Food & Dining
            "Situation: At a café\nYou are ordering a drink from the barista. Describe what you want.",
            "Situation: At a restaurant\nOrder food and ask about the specials.",
            "Situation: At a fast food place\nOrder a meal and ask for extra napkins.",
            "Situation: At a bakery\nBuy bread and ask what's fresh today.",
            "Situation: At a food truck\nAsk what they recommend and order.",
            "Situation: At a pizza place\nOrder a pizza with your choice of toppings.",
            "Situation: At a dinner party\nCompliment the host on the food.",
            "Situation: At a buffet\nAsk staff where certain items are.",

            // Shopping
            "Situation: At a shop\nYou want to return an item. Explain why.",
            "Situation: At a clothing shop\nAsk if they have this shirt in a different size.",
            "Situation: At a bookshop\nAsk for a recommendation for a gift.",
            "Situation: At a supermarket\nAsk where to find a specific product.",
            "Situation: At a shoe shop\nAsk to try on a pair of shoes.",
            "Situation: At an electronics shop\nAsk about phone cases.",
            "Situation: At a pharmacy\nAsk for a recommendation for a headache.",
            "Situation: At a flower shop\nBuy flowers for a special occasion.",
            "Situation: At a farmers' market\nAsk about the produce and buy some.",
            "Situation: At a gift shop\nAsk for help finding a souvenir.",

            // Directions & Help
            "Situation: On the street\nA tourist asks you for directions to a museum. Help them.",
            "Situation: At a bus stop\nAsk someone which bus goes to the centre.",
            "Situation: In a shopping centre\nAsk where the toilets are.",
            "Situation: At a park\nAsk someone if there's a café nearby.",
            "Situation: In a new city\nAsk a local for restaurant recommendations.",
            "Situation: At a university\nAsk where a specific building is.",
            "Situation: In an office building\nAsk the receptionist where to go.",
            "Situation: At the beach\nAsk where the lifeguard station is.",

            // Social Situations
            "Situation: Meeting someone new\nIntroduce yourself to your new classmate.",
            "Situation: At a party\nStart a conversation with someone you don't know.",
            "Situation: Meeting a friend's friend\nIntroduce yourself and find common ground.",
            "Situation: At a networking event\nIntroduce yourself briefly.",
            "Situation: At a birthday party\nWish the birthday person well.",
            "Situation: Meeting your neighbour\nIntroduce yourself after moving in.",
            "Situation: At a club or group\nIntroduce yourself to other members.",
            "Situation: At a wedding\nMake small talk with someone at your table.",
            "Situation: At a barbecue\nOffer to help the host.",
            "Situation: At a reunion\nCatch up with someone you haven't seen in years.",

            // Travel & Transportation
            "Situation: At a hotel\nCheck in and ask about breakfast times.",
            "Situation: At a train station\nBuy a ticket to another city.",
            "Situation: At an airport\nAsk where your gate is.",
            "Situation: At a car rental\nAsk about available cars and prices.",
            "Situation: On a plane\nAsk the flight attendant for water.",
            "Situation: At a taxi stand\nTell the driver where you want to go.",
            "Situation: At a bus station\nAsk when the next bus leaves.",
            "Situation: On a ferry\nAsk how long the journey takes.",
            "Situation: At a hostel\nAsk about WiFi and checkout time.",

            // Services
            "Situation: Phone call\nCall to make a doctor's appointment.",
            "Situation: At a hair salon\nExplain what haircut you want.",
            "Situation: At a bank\nAsk about opening an account.",
            "Situation: At the post office\nSend a package to another country.",
            "Situation: At a gym\nAsk about membership options.",
            "Situation: At a library\nAsk for help finding a book.",
            "Situation: At a dry cleaner\nDrop off clothes and ask when they'll be ready.",
            "Situation: At a copy shop\nAsk to print documents.",
            "Situation: At a pet shop\nAsk about food for your pet.",
            "Situation: At a mechanic\nExplain what's wrong with your car.",

            // Problems & Complaints
            "Situation: At a restaurant\nYour order is wrong. Politely ask for it to be fixed.",
            "Situation: At a hotel\nThe room is too hot. Ask for help.",
            "Situation: At a shop\nThe item you bought doesn't work. Ask for a refund.",
            "Situation: On the phone\nComplain about a late delivery.",
            "Situation: At a café\nYou've been waiting too long. Politely ask about your order.",
            "Situation: At a flat\nReport a problem to the landlord.",
            "Situation: At a restaurant\nAsk to speak to the manager about good service.",
            "Situation: At a hotel\nYour key card doesn't work. Ask for help.",
            "Situation: On a bus\nSomeone is in your reserved seat.",
            "Situation: At a shop\nAsk if they can order something not in stock.",

            // Miscellaneous Easy Roleplay
            "Situation: At a cinema\nBuy tickets for a film.",
            "Situation: At a sports centre\nAsk about classes available.",
            "Situation: At a tourist information centre\nAsk about things to do in the area.",
            "Situation: At a concert venue\nAsk where your seats are.",
            "Situation: At a museum\nAsk about guided tours.",
            "Situation: At a language school\nAsk about courses and prices.",
            "Situation: At a photo studio\nAsk about passport photos.",
            "Situation: At a ticket booth\nAsk about discounts for students.",
            "Situation: At an embassy\nAsk about visa requirements.",
            "Situation: At a charity event\nOffer to volunteer your time.",

            // Additional Easy - More Food & Drinks
            "Situation: At a coffee shop\nAsk what milk alternatives they have.",
            "Situation: At a restaurant\nAsk if a dish contains nuts because of an allergy.",
            "Situation: At a bar\nOrder a non-alcoholic drink.",
            "Situation: At a birthday dinner\nToast to the birthday person.",
            "Situation: At a cooking class\nAsk the instructor for help.",
            "Situation: At a wine shop\nAsk for a recommendation for dinner.",
            "Situation: At a deli\nOrder a custom sandwich.",

            // Additional Easy - More Shopping
            "Situation: At a computer shop\nAsk about warranty options.",
            "Situation: At a furniture shop\nAsk about delivery.",
            "Situation: At a sports shop\nAsk for running shoe advice.",
            "Situation: At a department store\nAsk where the fitting rooms are.",

            // Additional Easy - More Services
            "Situation: At a spa\nBook a massage appointment.",
            "Situation: At a locksmith\nExplain you're locked out.",
            "Situation: At the optician's\nBook an eye test.",
            "Situation: At the dentist's\nExplain tooth sensitivity.",
            "Situation: At a vet clinic\nBring your pet for a checkup.",

            // Additional Easy - More Transportation
            "Situation: On a bus\nAsk the driver if this bus goes to the city centre.",
            "Situation: At a bike rental\nRent a bike for the day.",
            "Situation: On the metro\nAsk which stop is next.",
            "Situation: At a car service centre\nDrop off your car for maintenance.",
            "Situation: In an Uber\nConfirm your destination with the driver.",

            // Additional Easy - More Social
            "Situation: At a shared dinner\nAsk what dish someone brought.",
            "Situation: At a housewarming\nGive a gift and congratulate the hosts.",
            "Situation: At a farewell party\nWish someone well on their journey.",
            "Situation: At a baby shower\nCongratulate the parents-to-be.",
            "Situation: At a graduation party\nCongratulate the graduate.",
            "Situation: At a holiday gathering\nMake small talk with extended family.",
            "Situation: At a friend's house\nCompliment their home decoration.",
            "Situation: At a street party\nIntroduce yourself to neighbours.",
            "Situation: At a game night\nExplain the rules of a game.",
            "Situation: At a book club meeting\nShare your thoughts on the book.",

            // Additional Easy - More Phone Calls
            "Situation: Phone call\nOrder pizza delivery.",
            "Situation: Phone call\nCheck your bank account balance.",
            "Situation: Phone call\nCancel a subscription.",
            "Situation: Phone call\nReport a lost credit card.",
            "Situation: Phone call\nMake a restaurant reservation.",
            "Situation: Phone call\nSchedule a home repair.",
            "Situation: Phone call\nAsk about opening hours.",
            "Situation: Phone call\nCheck on a package delivery.",
            "Situation: Phone call\nRSVP to an invitation.",
            "Situation: Phone call\nLeave a voicemail for a friend.",

            // Additional Easy - More Help & Requests
            "Situation: At a gym\nAsk how to use a machine.",
            "Situation: At work\nAsk a coworker for help with a task.",
            "Situation: At a park\nAsk someone to take your photo.",
            "Situation: At a restaurant\nAsk for the bill.",

            // Additional Easy - More Everyday
            "Situation: At a self-checkout\nAsk for help when something goes wrong.",
            "Situation: At lost property\nDescribe the item you've lost.",
            "Situation: At a waiting room\nMake small talk with someone next to you.",
            "Situation: In a lift\nHold the door for someone.",
            "Situation: At a reception desk\nSign in as a visitor.",
            "Situation: At an information desk\nAsk about event schedules.",

            // Additional Easy - More Pleasantries
            "Situation: Walking your dog\nChat with another dog owner.",
            "Situation: At the postboxes\nGreet your neighbour.",
            "Situation: In the morning\nGreet your doorman or building staff.",
            "Situation: At checkout\nChat briefly with the cashier.",
            "Situation: On public transport\nOffer your seat to someone.",
            "Situation: In a queue\nComment on the wait politely.",
            "Situation: At a shared table\nAsk if a seat is taken.",
            "Situation: In an office kitchen\nMake small talk while waiting for coffee.",
            "Situation: At a doorway\nHold the door and exchange pleasantries."
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Negotiation & Compromise
            "Situation: Planning a weekend trip\nYou want adventure but your friend wants relaxation. Find a compromise.",
            "Situation: Choosing what to watch\nYou want a comedy, your friend wants a documentary. Discuss.",
            "Situation: Deciding on dinner\nYou want to cook, your partner wants a takeaway. Find middle ground.",
            "Situation: Planning a party\nYou want small and intimate, others want big. Negotiate.",
            "Situation: Holiday budget\nYou want to splurge, your friend wants to save. Find a solution.",
            "Situation: Meeting time conflict\nYou need to reschedule but others prefer the original time.",
            "Situation: Group project\nTeam disagrees on the approach. Mediate the discussion.",
            "Situation: Moving flats\nYou want central, partner wants quiet suburbs. Discuss priorities.",
            "Situation: Gift for someone\nYou and others disagree on what to get. Find consensus.",
            "Situation: Event planning\nVenue options are limited. Convince others of your choice.",

            // Professional Interactions
            "Situation: Job interview\nYou're asked about your greatest weakness. Respond professionally.",
            "Situation: Salary discussion\nYou believe you deserve more money. Make your case.",
            "Situation: Performance review\nReceive feedback and ask how to improve.",
            "Situation: Project pitch\nPresent your idea to your team and answer questions.",
            "Situation: Client meeting\nA client is unhappy with progress. Address their concerns.",
            "Situation: Team conflict\nTwo colleagues disagree. Help them find common ground.",
            "Situation: Deadline extension\nAsk your manager for more time on a project.",
            "Situation: New job\nIntroduce yourself to your new team on your first day.",
            "Situation: Feedback session\nGive constructive criticism to a junior colleague.",
            "Situation: Exit interview\nExplain why you're leaving to HR.",

            // Academic Situations
            "Situation: Discussing a homework assignment\nYou think the homework is too difficult. Explain your concerns to the teacher.",
            "Situation: Group project planning\nDivide tasks fairly among team members who have different skills.",
            "Situation: Office hours\nAsk your professor to clarify a concept you don't understand.",
            "Situation: Study group\nSomeone isn't contributing equally. Address this diplomatically.",
            "Situation: Presentation feedback\nGive and receive peer feedback on a presentation.",
            "Situation: Extension request\nAsk for an extension on an assignment with a valid reason.",
            "Situation: Academic advising\nDiscuss your course selection with an advisor.",
            "Situation: Letter of recommendation\nAsk a professor to write you a recommendation.",
            "Situation: Thesis discussion\nDefend your thesis topic choice to your supervisor.",
            "Situation: Class debate\nArgue a position you may not personally agree with.",

            // Service Industry
            "Situation: At a restaurant opening night\nYou're a food critic interviewing the chef about their signature dish.",
            "Situation: Hotel complaint\nYour room is not as advertised. Negotiate a solution.",
            "Situation: Flight cancellation\nYour flight is cancelled. Work with the agent to find alternatives.",
            "Situation: Custom order\nExplain exactly what you want to a tailor or craftsperson.",
            "Situation: Event planning\nDiscuss requirements with a venue coordinator.",
            "Situation: Rental agreement\nNegotiate terms with a landlord before signing.",
            "Situation: Insurance claim\nExplain what happened to an insurance representative.",
            "Situation: Technical support\nExplain a complex technical problem to get help.",
            "Situation: Medical appointment\nDescribe symptoms thoroughly to your doctor.",
            "Situation: Legal consultation\nExplain your situation to a lawyer and ask questions.",

            // Personal Challenges
            "Situation: Before a big sports game\nYou're nervous about losing. Your coach gives you encouragement.",
            "Situation: Breaking bad news\nTell a friend you can't attend their important event.",
            "Situation: Apologising\nYou forgot an important date. Apologise sincerely.",
            "Situation: Setting boundaries\nTell a friend you need more personal space.",
            "Situation: Asking for help\nYou're struggling with something. Ask a friend for support.",
            "Situation: Confronting a friend\nYour friend said something hurtful. Address it directly.",
            "Situation: Admitting a mistake\nConfess to a mistake at work to your supervisor.",
            "Situation: Declining an invitation\nSay no to something you don't want to do without being rude.",
            "Situation: Expressing disagreement\nDisagree with a friend's opinion respectfully.",
            "Situation: Offering comfort\nA friend is going through a hard time. Be supportive.",

            // Lifestyle Decisions
            "Situation: Moving to a new flat\nYour friend suggests what to donate. You want to keep everything.",
            "Situation: Shopping for a gift\nYou're unsure what to buy. Ask the shop assistant for suggestions.",
            "Situation: Financial advice\nDiscuss your financial goals with a bank advisor.",
            "Situation: Health decision\nDiscuss treatment options with your doctor.",
            "Situation: Career change\nTalk through your thoughts with a mentor.",
            "Situation: Major purchase\nAsk detailed questions before buying a car or appliance.",
            "Situation: Wedding planning\nDiscuss preferences with your partner and planner.",
            "Situation: Pet adoption\nAsk shelter staff about a pet's history and needs.",
            "Situation: Home renovation\nExplain what you want to a contractor.",
            "Situation: College selection\nDiscuss options with a counsellor.",

            // Conflict Resolution
            "Situation: Workplace conflict\nA colleague missed an important deadline. Address the issue professionally.",
            "Situation: Neighbour dispute\nYour neighbour's music is too loud late at night. Discuss it politely.",
            "Situation: Housemate issues\nYour housemate doesn't clean up. Have the conversation.",
            "Situation: Family disagreement\nYou disagree with a parent's decision. Express yourself respectfully.",
            "Situation: Friend group tension\nTwo friends are fighting. Help them reconcile.",
            "Situation: Customer complaint\nYou're the manager. Handle an upset customer.",
            "Situation: Service recovery\nYou made an error at work. Fix it with the affected customer.",
            "Situation: Partnership disagreement\nYou and your business partner disagree on strategy.",
            "Situation: Community issue\nAddress a local issue at a community meeting.",
            "Situation: Online misunderstanding\nClear up a miscommunication with someone online.",

            // Miscellaneous Boss Roleplay
            "Situation: Being interviewed\nYou're being interviewed for a podcast about your expertise.",
            "Situation: Giving a tour\nShow a visitor around your workplace or school.",
            "Situation: Hosting guests\nWelcome visitors from another country to your home.",
            "Situation: Making introductions\nIntroduce two people who might benefit from knowing each other.",
            "Situation: Conducting an interview\nYou're hiring someone. Ask appropriate questions.",
            "Situation: Receiving an award\nGive a brief acceptance speech.",
            "Situation: Mentoring session\nGive advice to someone newer than you.",
            "Situation: Goodbye party\nSay farewell to a colleague who's leaving.",
            "Situation: Fundraising event\nConvince someone to donate to a cause you believe in.",
            "Situation: Cultural exchange\nExplain your culture's traditions to someone unfamiliar.",

            // Additional Boss - Workplace Communication
            "Situation: Team brainstorming\nFacilitate a creative session without dominating.",
            "Situation: Cross-department collaboration\nCoordinate with another team on a shared goal.",
            "Situation: Onboarding a new employee\nWelcome them and explain how things work.",
            "Situation: Explaining a process\nTeach a colleague a complex procedure.",
            "Situation: Reporting to leadership\nSummarise your team's progress to upper management.",
            "Situation: Delegation\nAssign tasks to team members effectively.",
            "Situation: Status update meeting\nShare your progress and flag potential issues.",
            "Situation: Peer recognition\nPublicly acknowledge a colleague's contribution.",
            "Situation: Request for resources\nMake a case for additional budget or staff.",
            "Situation: Meeting facilitation\nKeep a meeting on track and productive.",

            // Additional Boss - Personal Relationships
            "Situation: Reconnecting\nReach out to someone you lost touch with.",
            "Situation: Setting expectations\nDiscuss relationship expectations with your partner.",
            "Situation: Expressing gratitude\nThank someone meaningfully for their impact on your life.",
            "Situation: Asking for space\nExplain you need time alone without hurting feelings.",
            "Situation: Planning together\nDiscuss future plans with your significant other.",
            "Situation: Meeting the parents\nMake a good impression on your partner's family.",
            "Situation: Supporting through grief\nComfort someone who lost a loved one.",
            "Situation: Celebrating success\nShare good news without seeming boastful.",
            "Situation: Asking for advice\nSeek guidance on a personal matter.",
            "Situation: Apologising deeply\nMake amends for something significant.",

            // Additional Boss - Service Recovery
            "Situation: Double booking\nYou accidentally scheduled two meetings at once. Resolve it.",
            "Situation: Miscommunication\nYour message was misunderstood. Clarify and repair.",
            "Situation: Missed deadline\nExplain why you missed a deadline and propose a solution.",
            "Situation: Broken promise\nYou couldn't keep a commitment. Apologise and make it right.",
            "Situation: Error admission\nYou made a mistake that affected others. Take responsibility.",
            "Situation: Quality issue\nA product or service you delivered had problems. Address it.",
            "Situation: Late delivery\nYour delivery arrived late. Apologise and compensate.",
            "Situation: Wrong information\nYou gave incorrect information. Correct it professionally.",

            // Additional Boss - Negotiation Practice
            "Situation: Price negotiation\nBargain for a better price at a market.",
            "Situation: Terms discussion\nNegotiate payment terms with a client.",
            "Situation: Timeline adjustment\nNegotiate a deadline extension with stakeholders.",
            "Situation: Resource sharing\nNegotiate shared use of limited resources.",
            "Situation: Compensation package\nNegotiate beyond just salary in a job offer.",
            "Situation: Dispute mediation\nHelp two parties reach a fair agreement.",
            "Situation: Trade-off discussion\nExplain what you need to give up to get something.",

            // Additional Boss - Difficult Feedback
            "Situation: Giving tough feedback\nTell someone their work isn't meeting standards.",
            "Situation: Receiving criticism\nRespond professionally to criticism of your work.",
            "Situation: Peer feedback\nGive constructive criticism to an equal.",
            "Situation: Client feedback\nExplain to a client why their approach won't work.",
            "Situation: Self-advocacy\nRespond to feedback you disagree with.",

            // Additional Boss - Customer Service
            "Situation: Angry customer\nCalm down an irate customer.",
            "Situation: Complex request\nHandle a request that's outside normal procedures.",
            "Situation: Product education\nHelp a customer understand how to use a product.",
            "Situation: Loyal customer retention\nConvince a long-time customer not to leave.",
            "Situation: Technical troubleshooting\nWalk a customer through a technical fix.",
            "Situation: Policy explanation\nExplain a policy a customer disagrees with.",
            "Situation: Refund request\nHandle a refund request with empathy.",
            "Situation: Special accommodation\nDecide whether to make an exception.",

            // Additional Boss - Life Transitions
            "Situation: Career advice\nAdvise someone on a career change.",
            "Situation: Moving announcement\nTell friends and family you're relocating.",
            "Situation: Retirement discussion\nDiscuss retirement plans with family.",
            "Situation: Life change support\nSupport someone going through a major transition.",
            "Situation: New baby visit\nVisit friends who just had a baby.",
            "Situation: Divorce conversation\nTell someone you're getting divorced.",
            "Situation: Health discussion\nDiscuss a health concern with loved ones.",
            "Situation: Financial conversation\nDiscuss finances with your partner.",
            "Situation: College decision\nHelp a teen decide about college.",
            "Situation: Empty nest\nDiscuss feelings about children leaving home.",

            // Additional Boss - Social Boundaries
            "Situation: Pushy salesperson\nPolitely decline without being rude.",
            "Situation: Oversharing coworker\nRedirect a colleague who shares too much.",
            "Situation: Nosy relative\nDeflect personal questions at family gatherings.",
            "Situation: Borrowed item\nAsk for something back you lent long ago.",
            "Situation: Uninvited guest\nHandle someone who showed up uninvited.",
            "Situation: Personal loan\nA friend asks to borrow money. Navigate this.",
            "Situation: Political discussion\nExit a political debate gracefully.",
            "Situation: Gossip deflection\nSteer conversation away from gossip.",
            "Situation: Favour request\nDecline a favour without damaging the relationship.",
            "Situation: Time boundary\nEnd a conversation that's going too long."
        ]
    },
    analysis: {
        easy: [
            // Entertainment & Media
            "Why do people like watching sports?",
            "What makes a good film?",
            "Why is music important to people?",
            "What makes a song popular?",
            "Why do people enjoy video games?",
            "What makes a TV show successful?",
            "Why do we have favourite songs?",
            "What makes a book interesting?",
            "Why do people like horror films?",
            "What makes social media entertaining?",

            // Success & Quality
            "What makes a restaurant successful?",
            "What makes a good teacher?",
            "What makes someone a good leader?",
            "What makes a product popular?",
            "What makes a good party?",
            "What makes a conversation interesting?",
            "What makes a person attractive?",
            "What makes a city livable?",
            "What makes a brand trustworthy?",

            // Human Behaviour
            "Why do people follow fashion trends?",
            "Why do people like to travel?",
            "Why do people keep pets?",
            "Why do people post on social media?",
            "Why do people like surprises?",
            "Why do people enjoy compliments?",
            "Why do people give gifts?",

            // Simple Why Questions
            "Why do children love sweets?",
            "Why do people like coffee?",
            "Why do we have hobbies?",
            "Why do people enjoy weekends?",
            "Why do we need time off work?",
            "Why do people like sunny days?",
            "Why do we remember some songs forever?",
            "Why do people have favourite colours?",
            "Why do we enjoy stories?",
            "Why do people watch the news?",

            // Society & Lifestyle
            "Why do people move to big cities?",
            "Why do some foods become trendy?",
            "Why do people wear uniforms?",
            "Why do people join clubs?",
            "Why do we have traditions?",
            "Why do people take photos?",
            "Why do people exercise?",
            "Why do we celebrate holidays?",
            "Why do people volunteer?",
            "Why do people save money?",

            // Technology & Modern Life
            "Why do people like smartphones?",
            "Why do people watch YouTube?",
            "Why are apps so popular?",
            "Why do people shop online?",
            "Why do people listen to podcasts?",
            "Why do people prefer texting to calling?",
            "Why do people stream music?",
            "Why do people take selfies?",
            "Why do people use emojis?",

            // Personal Preferences
            "Why do people have morning or night preferences?",
            "Why do some people prefer cats, others dogs?",
            "Why do people have comfort foods?",
            "Why do some people like spicy food?",
            "Why do people have lucky numbers?",
            "Why do people prefer certain seasons?",
            "Why do we have favourite places?",
            "Why do people redecorate their homes?",
            "Why do people change their hairstyles?",
            "Why do people have different music tastes?",

            // Work & Study
            "Why do people choose certain careers?",
            "Why is teamwork important?",
            "Why do people need breaks?",
            "Why do we have meetings?",
            "Why is homework given?",
            "Why do people work overtime?",
            "Why do people network?",
            "Why do people learn new skills?",
            "Why do we have job interviews?",
            "Why do people change jobs?",

            // Relationships
            "Why do we need friends?",
            "Why do families have dinner together?",
            "Why do people have best friends?",
            "Why do we keep in touch with old friends?",
            "Why is trust important?",
            "Why do we miss people?",
            "Why do people help strangers?",
            "Why do we say thank you?",

            // Miscellaneous Easy Analysis
            "Why is breakfast considered important?",
            "Why do people enjoy shopping?",
            "Why do we have different languages?",
            "Why do people like learning new things?",
            "Why is sleep important?",
            "Why do people have routines?",
            "Why do we laugh at jokes?",
            "Why do people cry at films?",
            "Why do we feel nostalgic?",

            // Additional Easy - More Entertainment
            "Why do people binge-watch TV shows?",
            "What makes a game fun to play?",
            "Why do people have favourite actors?",
            "What makes a meme funny?",
            "Why do people enjoy live music?",
            "What makes a character likeable?",
            "Why do people rewatch favourite films?",
            "What makes a good story ending?",

            // Additional Easy - More Behaviour
            "What makes people feel comfortable?",
            "Why do we forget things?",
            "What makes someone interesting to talk to?",
            "What makes a place feel safe?",
            "Why do people compare themselves to others?",
            "What makes someone easy to trust?",
            "What makes a conversation awkward?",

            // Additional Easy - More Daily Life
            "Why do people enjoy cooking?",
            "What makes a house feel like home?",
            "Why do people decorate their rooms?",
            "What makes a meal satisfying?",
            "Why do people have morning routines?",
            "Why do people like hot drinks?",
            "What makes a good night's sleep?",
            "What makes clothes feel comfortable?",

            // Additional Easy - More Social
            "Why do people like parties?",
            "What makes someone popular?",
            "Why do people join groups?",
            "What makes a gift thoughtful?",
            "Why do people share food?",
            "What makes someone kind?",
            "What makes a friendship last?",
            "Why do people need alone time?",
            "What makes a family close?",

            // Additional Easy - More Technology
            "Why do people check their phones often?",
            "What makes an app useful?",
            "Why do people watch videos online?",
            "What makes a website easy to use?",
            "What makes a game addictive?",
            "What makes a phone camera important?",
            "Why do people send voice messages?",
            "What makes streaming popular?",


            // Additional Easy - More Places
            "What makes a city exciting?",
            "What makes a neighbourhood nice?",

            // Additional Easy - More Feelings
            "Why do people feel nervous?",
            "What makes someone happy?",
            "Why do people get excited?",
            "What makes us feel proud?",
            "Why do people worry?",
            "What makes someone feel loved?",
            "Why do people feel embarrassed?",
            "What makes us feel relaxed?",
            "Why do people feel lonely?",
            "What makes someone feel confident?",


        ],
        boss: [
            // Boss Mode - previous medium tier
            // Digital & Social Media
            "Analyse why some social media platforms become more popular than others",
            "Analyse how recommendation algorithms shape what we consume",
            "Analyse why certain content goes viral while similar content doesn't",
            "Analyse the factors that make influencers successful",
            "Analyse how social media changes the way we form opinions",
            "Analyse why people share personal information online",
            "Analyse how digital communication differs from face-to-face",
            "Analyse the appeal of online communities",
            "Analyse why misinformation spreads so easily",
            "Analyse how social media affects attention spans",

            // Media & Entertainment
            "Analyse the impact of streaming services on how we watch TV",
            "Analyse why certain cities attract more tourists than others",
            "Analyse why some books become bestsellers while others don't",
            "Analyse what makes some video games addictive",
            "Analyse the factors that make a podcast successful",
            "Analyse why nostalgia influences entertainment choices",
            "Analyse how music genres evolve over time",
            "Analyse why certain film franchises succeed",
            "Analyse the appeal of reality television",
            "Analyse why live events create different experiences than recordings",

            // Consumer Behaviour
            "Analyse how advertising influences consumer decisions",
            "Analyse the factors that build brand loyalty",
            "Analyse why some products become cultural phenomena",
            "Analyse how pricing affects perception of quality",
            "Analyse what drives impulse purchases",
            "Analyse why subscription models have become popular",
            "Analyse the psychology of sales and discounts",
            "Analyse why people pay for premium versions",
            "Analyse how reviews influence purchasing decisions",
            "Analyse the appeal of limited edition products",

            // Work & Organisations
            "Analyse the factors that make a company a good place to work",
            "Analyse why some startups succeed while most fail",
            "Analyse how remote work changes productivity",
            "Analyse the factors that make teams effective",
            "Analyse why some meetings are productive and others aren't",
            "Analyse what makes a workplace culture strong",
            "Analyse how incentive structures affect behaviour",
            "Analyse why employee motivation varies",
            "Analyse the impact of leadership styles on performance",
            "Analyse what drives career satisfaction",

            // Psychology & Behaviour
            "Analyse how childhood experiences shape adult behaviour",
            "Analyse why some habits are harder to break than others",
            "Analyse what makes people resilient to stress",
            "Analyse how emotions influence decision-making",
            "Analyse why people procrastinate despite knowing better",
            "Analyse the psychology of fear of missing out",
            "Analyse why people often resist change",
            "Analyse how group dynamics influence individual behaviour",
            "Analyse what makes people trust or distrust",
            "Analyse why first impressions are so powerful",

            // Education & Learning
            "Analyse the relationship between education and career success",
            "Analyse what makes some languages harder to learn than others",
            "Analyse why some teaching methods are more effective",
            "Analyse the factors that influence student motivation",
            "Analyse how different learning styles affect outcomes",
            "Analyse why some people become lifelong learners",
            "Analyse the impact of technology on education",
            "Analyse what makes feedback effective",
            "Analyse why practical experience often outweighs theory",
            "Analyse how cultural factors affect educational achievement",

            // Society & Culture
            "Analyse how generational differences shape values",
            "Analyse why certain traditions persist while others fade",
            "Analyse the factors that contribute to social movements",
            "Analyse how cultural context affects communication",
            "Analyse why some cities develop distinct identities",
            "Analyse the role of role models in society",
            "Analyse how economic conditions shape culture",
            "Analyse why some social norms change rapidly",
            "Analyse the factors that build community cohesion",
            "Analyse how globalisation affects local cultures",

            // Health & Wellness
            "Analyse the factors that influence health behaviour",
            "Analyse why healthy habits are difficult to maintain",
            "Analyse the relationship between sleep and performance",
            "Analyse what makes some diets more sustainable",
            "Analyse how stress affects physical health",
            "Analyse the factors that contribute to mental wellbeing",
            "Analyse why people often ignore health advice",
            "Analyse the psychology of fitness motivation",
            "Analyse how environment affects health choices",
            "Analyse the impact of social connections on health",

            // Economics & Markets
            "Analyse what makes certain real estate markets more valuable",
            "Analyse the factors that drive housing prices",
            "Analyse how economic uncertainty affects behaviour",
            "Analyse what makes some businesses recession-proof",
            "Analyse the factors that create economic inequality",
            "Analyse why some innovations disrupt markets",
            "Analyse how consumer confidence affects spending",
            "Analyse the relationship between supply and demand in modern markets",
            "Analyse what creates economic bubbles",
            "Analyse how globalisation affects local economies",

            // Miscellaneous Boss Analysis
            "Analyse why some cities are more walkable than others",
            "Analyse the factors that make architecture iconic",
            "Analyse how transport options shape cities",
            "Analyse what makes public spaces successful",
            "Analyse how demographics shape markets",
            "Analyse the role of timing in success",
            "Analyse how expectations affect experience",
            "Analyse what makes certain years feel significant",

            // Additional Boss - Communication & Media
            "Analyse how podcasts changed information consumption",
            "Analyse the factors that make news stories compelling",
            "Analyse why certain communication channels suit certain messages",
            "Analyse how visual communication differs from text",
            "Analyse why some speakers are more persuasive than others",
            "Analyse how headlines shape article perception",
            "Analyse the impact of 24-hour news cycles",
            "Analyse why simplification sometimes distorts understanding",
            "Analyse how medium affects message reception",
            "Analyse the factors that make communication memorable",

            // Additional Boss - Identity & Belonging
            "Analyse how people construct their online identities",
            "Analyse the factors that shape national identity",
            "Analyse why people join subcultures",
            "Analyse how personal branding affects authenticity",
            "Analyse the role of shared experiences in group identity",
            "Analyse how language shapes identity",
            "Analyse why people feel attached to brands",
            "Analyse how place shapes personal identity",
            "Analyse the factors that create in-group loyalty",
            "Analyse how generational identity is constructed",

            // Additional Boss - Decision Making
            "Analyse how choice overload affects decisions",
            "Analyse the factors that lead to poor decisions",
            "Analyse how framing affects choice",
            "Analyse why people stick with default options",
            "Analyse how social proof influences behaviour",
            "Analyse the role of intuition versus analysis in decisions",
            "Analyse why people make inconsistent choices",
            "Analyse how time pressure affects decision quality",
            "Analyse the factors that enable good judgment",
            "Analyse how regret shapes future decisions",

            // Additional Boss - Innovation & Change
            "Analyse what makes some innovations succeed",
            "Analyse the factors that resist organisational change",
            "Analyse how early adopters differ from mainstream users",
            "Analyse why established companies struggle to innovate",
            "Analyse the role of failure in innovation",
            "Analyse how network effects create winners",
            "Analyse what makes technology adoption successful",
            "Analyse the factors that accelerate cultural change",
            "Analyse why some changes happen gradually and others suddenly",
            "Analyse how constraints can drive creativity",

            // Additional Boss - Motivation & Performance
            "Analyse what drives intrinsic motivation",
            "Analyse the factors that lead to burnout",
            "Analyse how goals affect performance",
            "Analyse why some people persist while others quit",
            "Analyse how environment affects productivity",
            "Analyse what makes work meaningful",
            "Analyse the factors that create flow states",
            "Analyse how competition affects performance",
            "Analyse why money doesn't always motivate",

            // Additional Boss - Social Dynamics
            "Analyse how status is established in groups",
            "Analyse the factors that create social hierarchies",
            "Analyse why conformity is so powerful",
            "Analyse how trust is built and broken",
            "Analyse the dynamics of cooperation and competition",
            "Analyse what makes some people natural leaders",
            "Analyse how conflict can be constructive",
            "Analyse the factors that enable collective action",
            "Analyse why diverse teams can outperform homogeneous ones",
            "Analyse how power affects behaviour",

            // Additional Boss - Urban & Environment
            "Analyse what makes neighbourhoods thrive",
            "Analyse the factors that create traffic congestion",
            "Analyse how green spaces affect urban wellbeing",
            "Analyse why some buildings age well and others don't",
            "Analyse the impact of noise pollution on quality of life",
            "Analyse how infrastructure shapes daily routines",
            "Analyse what makes cities resilient",
            "Analyse the factors that drive gentrification",
            "Analyse how zoning affects community character",
            "Analyse why some places feel safer than others",

            // Additional Boss - Learning & Development
            "Analyse what makes practice effective",
            "Analyse the factors that create expertise",
            "Analyse how failure accelerates learning",
            "Analyse why some skills transfer and others don't",
            "Analyse the role of reflection in development",
            "Analyse what makes knowledge stick",
            "Analyse the factors that enable skill acquisition",
            "Analyse how challenges develop capability",
            "Analyse why age affects learning differently for different skills",


        ]
    },
    interview: {
        easy: [
            // Introduction Questions
            "Tell me about yourself",
            "What are your hobbies?",
            "Why are you interested in this job?",
            "What do you know about our company?",
            "How did you hear about this position?",
            "Why did you choose your field of study?",
            "What are you passionate about?",
            "Describe yourself in three words",
            "What motivates you?",
            "Where are you from?",

            // Education & Background
            "Tell me about your education",
            "What was your favourite subject at school?",
            "Why did you choose your university?",
            "What did you learn from your studies?",
            "Did you do any internships?",
            "What activities were you involved in at school?",
            "How would your teachers describe you?",
            "What was your biggest achievement at school?",
            "Did you work while studying?",
            "What courses prepared you for this job?",

            // Work Experience Basics
            "Tell me about your last job",
            "What did you do in your previous role?",
            "What did you enjoy about your last job?",
            "Why did you leave your last job?",
            "What were your main responsibilities?",
            "How long were you in your last position?",
            "What skills did you develop?",
            "Did you work in a team or alone?",
            "What did you learn from your last job?",
            "Who was your favourite boss and why?",


            // Weaknesses & Improvement
            "What is your biggest weakness?",
            "What do you need to improve?",
            "What skills are you working on?",
            "What was your biggest failure?",
            "What would you change about yourself?",
            "What's something you struggle with?",
            "How do you handle criticism?",
            "What have you learned from mistakes?",
            "What's your biggest regret?",
            "How have you improved over time?",

            // Goals & Future
            "Where do you see yourself in five years?",
            "What are your career goals?",
            "Why do you want this job?",
            "What do you hope to achieve here?",
            "How long do you plan to stay?",
            "What do you want to learn?",
            "What's your dream job?",
            "What would success look like for you?",
            "How does this job fit your goals?",

            // Work Style
            "How do you handle stress?",
            "Are you punctual?",
            "How do you organise your work?",
            "Do you prefer working alone or with others?",
            "How do you prioritise tasks?",
            "Are you flexible with your schedule?",
            "How do you handle deadlines?",
            "What's your ideal work environment?",
            "How do you stay focused?",
            "Are you comfortable with change?",

            // Availability & Logistics
            "When can you start?",
            "Are you willing to travel?",
            "Can you work overtime?",
            "What hours can you work?",
            "Can you work weekends?",
            "Are you willing to relocate?",
            "Do you have reliable transport?",
            "What salary are you expecting?",
            "Are you available for night shifts?",
            "Do you have any questions for us?",

            // Personality & Values
            "How would your friends describe you?",
            "What makes you happy at work?",
            "What frustrates you?",
            "Are you competitive?",
            "What's important to you in a job?",
            "How do you handle conflict?",
            "Are you patient?",
            "What values are important to you?",
            "Are you ambitious?",
            "How do you relax after work?",

            // Miscellaneous Easy Interview
            "Why should we hire you?",
            "What makes you unique?",
            "What excites you about this role?",
            "Have you applied to other jobs?",
            "Is there anything else we should know?",
            "What did you like least about school?",
            "What's your favourite thing about your career?",
            "How would you describe a perfect workday?",
            "What do you think about our office?",

            // Additional Easy - More About You
            "What do you enjoy doing outside of work?",
            "What's a fun fact about you?",
            "What are you currently learning?",
            "What's your favourite way to spend a weekend?",
            "What's something people don't usually know about you?",
            "What music do you like?",
            "What's your favourite food?",
            "Do you have any pets?",
            "What sports do you play or watch?",


            // Additional Easy - More Work Experience
            "What was your first job?",
            "What was your best work experience?",
            "What was your worst job?",
            "Have you worked in different industries?",
            "Do you prefer big or small companies?",
            "Have you worked with customers?",
            "Have you trained new employees?",
            "What was your favourite project at work?",
            "Do you prefer routine or variety?",
            "What's the longest you stayed at a job?",



            // Additional Easy - More Goals
            "What do you want to achieve this year?",
            "Do you want to be a manager?",
            "What's your biggest ambition?",
            "Where do you see this job leading?",
            "What do you want to be known for?",
            "Do you want to work internationally?",
            "What's your retirement goal?",
            "What's one thing you want to accomplish?",


            // Additional Easy - More Simple Scenarios
            "How do you handle a bad day?",
            "What makes work enjoyable?",
            "How do you like to receive feedback?",
            "What makes you stressed?",
            "How do you celebrate success?",
            "What do you do when you're stuck?",
            "How do you prepare for meetings?",
            "What makes you feel accomplished?",


            // Additional Easy - More Final Questions
            "What concerns do you have about this role?",
            "When can we expect to hear from you?",
            "What's your timeline for deciding?",
            "Do you have other offers?",
            "What would make you accept this job?",
            "Is there anything preventing you from starting?",
            "What's most important to you in this decision?",
        ],
        boss: [
            // Boss Mode - previous medium tier
            // Behavioral - Teamwork
            "Tell me about a time you worked successfully in a team",
            "Describe a situation where you had to collaborate with difficult colleagues",
            "Give an example of how you contributed to a team project",
            "Tell me about a time you had to resolve a conflict in your team",
            "Describe a situation where you had to rely on others to complete a task",
            "Tell me about a time you supported a struggling team member",
            "Give an example of receiving feedback from your team",
            "Describe how you've helped improve team morale",
            "Tell me about a time you disagreed with a team decision",
            "Give an example of a team achievement you're proud of",

            // Behavioral - Problem Solving
            "Describe a time you solved a difficult problem at work",
            "Tell me about a challenge you faced and how you overcame it",
            "Give an example of when you had to think creatively to solve an issue",
            "Describe a situation where you had limited information to make a decision",
            "Tell me about a time you identified a problem before others noticed",
            "Give an example of improving a process at work",
            "Describe how you handle unexpected obstacles",
            "Tell me about a time you had to learn quickly to solve a problem",
            "Give an example of when your first solution didn't work",
            "Describe a complex problem you simplified",

            // Behavioral - Leadership
            "Describe a time you took the lead on a project",
            "Tell me about an experience mentoring or training someone",
            "Give an example of how you motivated others",
            "Describe a situation where you had to make an unpopular decision",
            "Tell me about a time you delegated effectively",
            "Give an example of leading through change",
            "Describe how you've influenced without authority",
            "Tell me about a time you built consensus",
            "Give an example of giving difficult feedback",
            "Describe a leadership failure and what you learned",

            // Behavioral - Communication
            "Tell me about a time you had to explain something complex simply",
            "Describe a situation where miscommunication caused problems",
            "Give an example of persuading someone to your point of view",
            "Tell me about a difficult conversation you've had at work",
            "Describe how you communicate with different audiences",
            "Give an example of active listening making a difference",
            "Tell me about a time you received criticism well",
            "Describe how you've handled communicating bad news",
            "Give an example of adjusting your communication style",
            "Tell me about a presentation that went particularly well",

            // Behavioral - Time Management
            "Describe how you manage competing priorities",
            "Tell me about a time you met a tight deadline",
            "Give an example of how you handle being overwhelmed",
            "Describe your approach to long-term project planning",
            "Tell me about a time you had to say no to additional work",
            "Give an example of balancing quality with speed",
            "Describe how you handle interruptions at work",
            "Tell me about a time you missed a deadline and how you handled it",
            "Give an example of effective multitasking",
            "Describe how you decide what's urgent versus important",

            // Situational Questions
            "How would you handle a disagreement with your supervisor?",
            "What would you do if you were given an impossible deadline?",
            "How would you approach a project with unclear requirements?",
            "What would you do if you noticed a colleague making mistakes?",
            "How would you handle a customer complaint?",
            "What would you do if your idea was rejected?",
            "How would you respond to negative feedback?",
            "What would you do if you were asked to do something unethical?",
            "How would you handle a sudden change in priorities?",
            "What would you do if you disagreed with a company policy?",

            // Role-Specific Skills
            "Walk me through your relevant experience for this role",
            "Describe your expertise in your specialist area",
            "Tell me about a project that showcases your abilities",
            "How do you stay current in your field?",
            "Describe your approach to a key job responsibility",
            "What tools and technologies are you proficient in?",
            "How do you measure success in your work?",
            "Describe your professional development activities",
            "What's the most challenging aspect of your profession?",

            // Culture Fit
            "What type of management style do you prefer?",
            "How do you handle work-life balance?",
            "Describe the culture of your previous workplace",
            "What values are most important to you in a company?",
            "How do you build relationships with colleagues?",
            "Describe your approach to workplace diversity",
            "What makes you want to come to work every day?",
            "How do you handle office politics?",
            "What would make you leave a job?",

            // Growth & Development
            "Describe how you've grown professionally in the last few years",
            "Tell me about a skill you developed outside of work",
            "How do you seek out learning opportunities?",
            "Describe a time you received coaching that helped you",
            "What's the most valuable feedback you've received?",
            "How do you set professional development goals?",
            "Tell me about a mentor who influenced you",
            "Describe how you've adapted to industry changes",
            "What do you read or listen to for professional growth?",
            "How do you challenge yourself professionally?",

            // Miscellaneous Boss Interview
            "What accomplishment are you most proud of?",
            "Describe a risk you took that paid off",
            "Tell me about a time you went above and beyond",
            "How do you handle ambiguity?",
            "Describe a time you had to adapt quickly",
            "What's the biggest lesson you've learned professionally?",
            "Tell me about a time you showed initiative",
            "How do you ensure quality in your work?",
            "Describe your decision-making process",
            "What drives you to succeed?",

            // Additional Boss - More Behavioral
            "Tell me about a time you exceeded expectations",
            "Describe a situation where you had to prioritise ethics over profit",
            "Give an example of building a relationship with a difficult person",
            "Tell me about a time you had to advocate for yourself",
            "Describe how you handled an unfair situation",
            "Tell me about a time you changed your approach based on data",
            "Describe a situation where you had to work with limited resources",
            "Give an example of successfully managing up",
            "Tell me about a time you turned around a failing project",

            // Additional Boss - More Problem Solving
            "Tell me about a time you found a non-obvious solution",
            "Give an example of preventing a problem before it occurred",
            "Describe how you approach root cause analysis",
            "Tell me about solving a problem that had been ongoing",
            "Describe how you know when a problem is truly solved",

            // Additional Boss - More Leadership
            "Tell me about developing someone who later surpassed you",
            "Describe how you handle underperformers",
            "Give an example of building trust quickly with a new team",
            "Tell me about balancing being liked versus being respected",
            "Describe leading through uncertainty when you didn't have answers",
            "Tell me about transitioning from peer to manager",

            // Additional Boss - More Communication
            "Describe tailoring your message for different stakeholders",
            "Tell me about navigating a politically sensitive communication",
            "Give an example of communicating complex data simply",
            "Describe managing expectations that couldn't be met",
            "Tell me about recovering from a communication failure",
            "Describe how you prepare for difficult conversations",
            "Tell me about communicating across cultural differences",
            "Give an example of changing someone's mind on an important issue",
            "Describe communicating during high-stress situations",

            // Additional Boss - More Situational
            "How would you handle discovering a colleague's serious mistake?",
            "What would you do if you disagreed with your company's direction?",
            "How would you approach joining a team that resists new members?",
            "What would you do if you were passed over for promotion?",
            "How would you handle competing priorities from different managers?",
            "What would you do if a client asked for something unreasonable?",
            "How would you approach working with someone you don't trust?",
            "What would you do if you realised you were wrong publicly?",
            "How would you handle a team member taking credit for your work?",
            "What would you do if asked to support a decision you disagreed with?",

            // Additional Boss - More Self-Awareness
            "Describe your biggest professional blind spot",
            "Tell me about feedback that was hard to accept but true",
            "How do you stay self-aware under pressure?",
            "Describe a time you had to check your ego",
            "Tell me about recognising when you were the problem",
            "How do you seek out honest feedback?",
            "Describe your relationship with failure",
            "Tell me about growing from a professional embarrassment",
            "How do you distinguish confidence from arrogance?",
            "Describe managing your emotional reactions at work",

            // Additional Boss - More Values
            "Tell me about a time your values were tested at work",
            "Describe a situation where you chose integrity over convenience",
            "How do you handle working in environments that conflict with your values?",
            "Tell me about a time you took a stand on principle",
            "Describe how you make decisions when no option is clearly right",
            "Give an example of supporting someone at personal cost",
            "Tell me about navigating ethical grey areas",
            "How do you maintain ethics when pressured?",
            "Describe a time fairness was more important than efficiency",
            "Tell me about earning trust after it was lost",

            // Additional Boss - More Innovation
            "Tell me about implementing a new idea from scratch",
            "Describe overcoming resistance to a new approach",
            "Give an example of learning from failure and trying again",
            "Tell me about spotting an opportunity others missed",
            "Tell me about pivoting when your original plan wasn't working",
            "Tell me about killing a project you believed in",

            // Additional Boss - More Collaboration
            "Describe building a coalition for a complex initiative",
            "Tell me about working across organisational silos",
            "Describe negotiating resources with peer departments",
            "Describe maintaining relationships through disagreements",
            "Give an example of bridging different working styles",
        ]
    },
    presentation: {
        easy: [
            // Self & Personal
            "Give a short presentation about yourself",
            "Present your favourite hobby to the class",
            "Present about your hometown",
            "Give a presentation about your family",
            "Give a presentation about your best friend",
            "Present your favourite food and how to make it",
            "Give a presentation about your dream holiday",
            "Give a presentation about your pet (real or dream pet)",

            // Entertainment & Interests
            "Present your favourite film and why you like it",
            "Give a presentation about your favourite music artist",
            "Present a book you enjoyed reading",
            "Give a presentation about a TV show you recommend",
            "Present your favourite video game",
            "Give a presentation about a sport you like",
            "Present about your favourite YouTube channel",
            "Give a presentation about a hobby you'd like to try",
            "Present about the last concert or event you attended",
            "Give a presentation about a celebrity you admire",

            // Places & Travel
            "Present about a place you have visited",
            "Give a presentation about a country you want to visit",
            "Present your favourite restaurant in your city",
            "Give a presentation about your school or workplace",
            "Present about a famous landmark",
            "Give a presentation about your neighbourhood",
            "Present about the best holiday you've had",
            "Give a presentation about a city you'd like to live in",
            "Present your favourite local spot",

            // Objects & Things
            "Present about a gadget you use daily",
            "Give a presentation about your phone",
            "Present something you bought recently",
            "Give a presentation about your favourite clothing item",
            "Present about something in your bag",
            "Give a presentation about your car or bicycle",
            "Present a gift you received that was special",
            "Give a presentation about your favourite possession",
            "Present about something you collect",
            "Give a presentation about a tool you find useful",

            // Events & Experiences
            "Present about a holiday celebration in your culture",
            "Give a presentation about a birthday party you remember",
            "Present about a wedding you attended",
            "Present about a school event you enjoyed",
            "Give a presentation about a party you hosted",
            "Present about a time you volunteered",
            "Give a presentation about a competition you participated in",
            "Present about a graduation or ceremony",
            "Give a presentation about a surprise you planned",

            // Simple How-To
            "Present how to make your favourite drink",
            "Give a presentation on how to take a good photo",
            "Present how to organise your desk",
            "Give a presentation on how to pack for a trip",
            "Present how to be a good friend",
            "Give a presentation on how to save money",
            "Present how to relax after a long day",
            "Give a presentation on how to start a new hobby",
            "Present how to prepare for an exam",
            "Give a presentation on how to stay healthy",

            // Opinions & Recommendations
            "Present three apps everyone should have",
            "Give a presentation on the best films of the year",
            "Present three places to visit in your city",
            "Present the best gifts for different occasions",
            "Give a presentation on fun things to do on weekends",
            "Present tips for learning a language",
            "Give a presentation on how to make friends",
            "Give a presentation on ways to be more productive",

            // Comparisons
            "Present the differences between two restaurants",
            "Give a presentation comparing two cities",
            "Present the differences between working and studying",
            "Give a presentation comparing online and in-person shopping",
            "Present the pros and cons of social media",
            "Give a presentation comparing two films",
            "Present the differences between two hobbies",
            "Give a presentation comparing city life and country life",
            "Present the advantages of morning vs evening routines",
            "Give a presentation comparing two holiday types",

            // Miscellaneous Easy Presentations
            "Present about something you learned recently",
            "Give a presentation about a skill you have",
            "Present about your goals for this year",
            "Give a presentation about what makes you happy",
            "Present about a tradition in your family",
            "Present about a challenge you overcame",
            "Give a presentation about someone who inspires you",
            "Give a presentation about something you're grateful for",

            // Additional Easy - More Personal Topics
            "Present about your favourite childhood memory",
            "Give a presentation about your favourite season",
            "Present about a memorable teacher you had",
            "Give a presentation about your dream home",
            "Give a presentation about your favourite public holiday",
            "Present about a skill you want to learn",
            "Give a presentation about your role model",
            "Present about your favourite childhood toy",
            "Give a presentation about your favourite room in your home",









        ],
        boss: [
            // Boss Mode - previous medium tier
            // Project & Work Updates
            "Present a project update to your team",
            "Give a quarterly progress report to stakeholders",
            "Present the results of a completed initiative",
            "Give a presentation on lessons learned from a project",
            "Present your department's achievements",
            "Give a status update on current initiatives",
            "Present a post-mortem analysis of a project",
            "Give a presentation on process improvements you've made",
            "Give a mid-year review presentation",

            // Proposals & Recommendations
            "Present a proposal for a new initiative",
            "Give a presentation recommending a new tool or system",
            "Present a plan for improving a current process",
            "Give a presentation proposing a budget allocation",
            "Present a recommendation for organisational change",
            "Give a presentation on why a project should be approved",
            "Present options for solving a current challenge",
            "Give a presentation recommending vendor selection",
            "Present a case for additional resources",
            "Give a presentation proposing a new service or product",

            // Training & Education
            "Present a training module for new employees",
            "Give a presentation teaching a professional skill",
            "Present best practices for your area of expertise",
            "Give a how-to presentation on a technical process",
            "Present industry knowledge to colleagues",
            "Give a training on new tools or systems",
            "Present safety or security protocols",
            "Give a presentation on professional development topics",

            // Analysis & Research
            "Present market research findings",
            "Give a presentation analysing competitor activity",
            "Present data analysis and insights",
            "Give a presentation on customer feedback analysis",
            "Present trend analysis for your industry",
            "Give a presentation on survey results",
            "Present a case study relevant to your field",
            "Present financial analysis to stakeholders",
            "Give a presentation on performance metrics",

            // Strategy & Planning
            "Present annual goals and objectives",
            "Give a strategic planning presentation",
            "Present a roadmap for upcoming initiatives",
            "Give a presentation on market opportunity",
            "Present growth strategies for your area",
            "Give a presentation on risk assessment",
            "Present resource planning for upcoming period",
            "Present organisational priorities",
            "Give a presentation on long-term vision",

            // External & Client-Facing
            "Present your company to potential clients",
            "Give a presentation at a networking event",
            "Present capabilities to prospective partners",
            "Give a presentation at an industry conference",
            "Present case studies to prospects",
            "Give a presentation to industry association members",
            "Present thought leadership content",
            "Give a community presentation on your industry",
            "Present at a trade show or expo",
            "Give a presentation to academic institutions",

            // Problem-Solving
            "Present solutions to a current challenge",
            "Give a presentation on overcoming obstacles",
            "Present a troubleshooting guide",
            "Give a presentation on addressing customer issues",
            "Present crisis response procedures",
            "Give a presentation on quality improvement",
            "Present root cause analysis findings",
            "Give a presentation on risk mitigation strategies",
            "Present contingency plans",
            "Give a presentation on change management approach",

            // Innovation & Ideas
            "Present an innovative idea for your organisation",
            "Give a presentation on emerging technologies",
            "Present a pilot programme proposal",
            "Give a presentation on industry innovations",
            "Present ideas for improving customer experience",
            "Give a presentation on automation opportunities",
            "Present a creative solution to a common problem",
            "Give a presentation on future of your industry",
            "Present efficiency improvement ideas",
            "Give a presentation on sustainability initiatives",

            // Team & Culture
            "Present team accomplishments at an all-hands meeting",
            "Give a presentation welcoming new team members",
            "Present culture and values to new hires",
            "Give a presentation on team-building initiatives",
            "Present diversity and inclusion efforts",
            "Give a presentation on employee engagement results",
            "Present recognition for team achievements",
            "Give a presentation on professional development opportunities",
            "Present wellness programme information",
            "Give a presentation on organisational changes",

            // Miscellaneous Boss Presentations
            "Present your professional expertise to a general audience",
            "Give a presentation summarising a book or article",
            "Present advice for people entering your field",
            "Give a presentation on time management techniques",
            "Present communication skills tips",
            "Give a presentation on industry certifications",
            "Present career path options in your field",
            "Give a presentation on work-life balance strategies",
            "Present productivity tools and techniques",
            "Give a presentation on networking strategies",

            // Additional Boss - Business Skills
            "Present conflict resolution techniques to managers",
            "Give a presentation on effective meeting facilitation",
            "Present negotiation strategies for business deals",
            "Give a presentation on building professional relationships",
            "Give a presentation on emotional intelligence at work",

            // Additional Boss - Industry Updates
            "Present current trends in your industry",



            // Additional Boss - Technical Presentations
            "Present a software tool demo to colleagues",

            // Additional Boss - Sales & Marketing
            "Present product features to potential customers",




        ]
    },
    salespitch: {
        easy: [
            // Simple Products
            "Sell a pen to a customer",
            "Pitch a coffee mug as the best gift",
            "Sell a notebook to a student",
            "Pitch a water bottle to a gym-goer",
            "Sell a book to a reader",
            "Pitch a backpack to a traveller",
            "Sell a watch to a professional",
            "Pitch headphones to a music lover",
            "Sell a plant to someone decorating their home",
            "Pitch a calendar to someone who wants to be organised",

            // Food & Beverages
            "Sell a new coffee blend",
            "Pitch a lunch special at a restaurant",
            "Sell a box of chocolates as a gift",
            "Pitch a meal delivery service",
            "Sell a smoothie to a health-conscious customer",
            "Pitch a bakery's fresh bread",
            "Sell a new flavour of ice cream",
            "Pitch a food subscription box",
            "Sell a speciality tea to a tea lover",
            "Pitch a catering service for events",

            // Technology Basics
            "Sell a phone case to a new phone owner",
            "Pitch a simple app to make life easier",
            "Sell a USB drive to a student",
            "Pitch a streaming service subscription",
            "Sell a portable charger to a traveller",
            "Pitch a password manager to someone forgetful",
            "Sell a webcam to someone working from home",
            "Pitch a music streaming service",
            "Sell a tablet to a casual user",
            "Pitch a cloud storage service",

            // Services
            "Sell a haircut to a walk-in customer",
            "Pitch a gym membership",
            "Sell a car wash service",
            "Pitch a house cleaning service",
            "Sell a pet grooming appointment",
            "Pitch a photography session",
            "Sell a language tutoring service",
            "Pitch a personal training session",
            "Sell a spa treatment",
            "Pitch a home repair service",

            // Retail
            "Sell a pair of shoes to a shopper",
            "Pitch a jacket to someone looking for outerwear",
            "Sell sunglasses to a tourist",
            "Pitch a piece of jewellery as a gift",
            "Sell a piece of furniture to a homeowner",
            "Pitch a kitchen gadget to a home cook",
            "Sell a toy to a parent",
            "Pitch a sports equipment item",
            "Sell a bag to a professional",
            "Pitch a piece of art for home decoration",

            // Experiences & Entertainment
            "Sell a film ticket to someone undecided",
            "Pitch a concert to a music fan",
            "Sell a museum visit to a tourist",
            "Pitch a theme park day pass",
            "Sell an escape room experience",
            "Pitch a cooking class",
            "Sell a wine tasting tour",
            "Pitch a sports event ticket",
            "Sell a weekend getaway package",
            "Pitch a dance lesson",

            // Memberships & Subscriptions
            "Sell a shop loyalty card",
            "Pitch a magazine subscription",
            "Sell a club membership",
            "Pitch a book club membership",
            "Sell a rewards programme sign-up",
            "Pitch a professional association membership",
            "Pitch a premium account upgrade",
            "Sell an annual pass to an attraction",
            "Pitch a newsletter subscription",

            // Local Businesses
            "Sell your favourite local restaurant to a friend",
            "Pitch a local coffee shop over a chain",
            "Sell a local farmer's produce",
            "Pitch a local bookshop experience",
            "Sell a local bakery's specialities",
            "Pitch a local gym over a chain gym",
            "Sell a local market's unique products",
            "Pitch a local tour guide service",
            "Sell a local artist's work",
            "Pitch a local food truck",

            // Ideas & Concepts
            "Sell the idea of reading more books",
            "Pitch learning a new language",
            "Sell the benefits of meditation",
            "Pitch taking up a new sport",
            "Sell the idea of cooking at home more",
            "Pitch the benefits of journaling",
            "Sell adopting a plant-based diet",
            "Pitch starting a side project",
            "Sell the importance of sleep",
            "Pitch the value of networking",

            // Miscellaneous Easy Sales
            "Sell a holiday destination",
            "Pitch a career change to someone unsure",
            "Sell a piece of advice to a younger person",
            "Pitch your favourite hobby to a friend",
            "Sell an old item you no longer need",
            "Pitch a film to friends for film night",
            "Sell a restaurant for a special occasion",
            "Pitch a weekend activity to family",
            "Sell an exercise routine",
            "Pitch a book to someone looking for recommendations",

            // Additional Easy - Home Items
            "Sell a cosy blanket to someone who gets cold easily",
            "Pitch a candle to someone who loves relaxing at home",
            "Sell a desk organiser to a messy person",
            "Pitch a houseplant to brighten up someone's room",
            "Sell a picture frame as a thoughtful gift",
            "Pitch a throw pillow to improve a living space",
            "Sell a wall clock to someone always running late",
            "Pitch a doormat to a new homeowner",
            "Sell a laundry basket to someone moving flats",
            "Pitch a shower curtain with a fun design",

            // Additional Easy - Personal Care
            "Sell a new toothbrush to someone due for an upgrade",
            "Pitch a skincare product to a friend",
            "Sell a razor with better features",
            "Pitch a shampoo for healthier hair",
            "Sell sunscreen to someone going on holiday",
            "Pitch lip balm for dry weather",
            "Sell a deodorant with a great scent",
            "Pitch hand cream for winter months",
            "Sell a nail care kit to someone who likes grooming",
            "Pitch a hair styling product",

            // Additional Easy - Office Supplies
            "Sell a stapler to someone setting up a home office",
            "Pitch a desk lamp for better lighting",


            // Additional Easy - Beverages
            "Sell energy drinks for a busy person",
            "Sell a protein shake to a gym-goer",

            // Additional Easy - Outdoor Items
            "Sell a beach towel to someone planning a trip",
            "Sell bug spray for camping trips",
            "Pitch a travel pillow for long trips",

            // Additional Easy - Kids' Items
            "Sell crayons to a parent with young kids",
            "Sell a board game for family game night",

            // Additional Easy - Pet Products
            "Sell dog treats to a pet owner",
            "Pitch bird seed to a bird owner",
            "Sell fish food to an aquarium owner",

            // Additional Easy - Seasonal Items
            "Sell an umbrella before rainy season",
            "Sell a swimsuit for beach season",

        ],
        boss: [
            // Boss Mode - previous medium tier
            // B2B Software & Services
            "Pitch a project management platform to a 30-person marketing agency that's currently using spreadsheets and missing deadlines",
            "Sell an HR management platform to the HR director of a 150-person company that's still tracking employee data in Excel files",
            "Pitch a CRM platform to a B2B sales team of 20 reps who lose track of leads and have no visibility into their pipeline",
            "Sell a marketing automation platform to a SaaS company whose marketing team spends 15 hours/week on manual email campaigns",
            "Pitch cloud accounting software to a freelance photographer earning €80,000/year who's been doing taxes on paper",
            "Sell endpoint security software to an IT manager whose company just had a ransomware scare",
            "Pitch a team messaging platform to a 50-person company with offices in 3 cities whose teams communicate only by email",
            "Sell cloud migration services to a manufacturer whose on-premise servers are 10 years old and failing",
            "Pitch a data visualisation platform to a retail chain whose managers make decisions based on gut feeling instead of data",
            "Sell an enterprise e-commerce platform to a home goods retailer with 5 physical stores who wants to launch online but has no tech team",

            // Professional Services
            "Pitch management consulting to a family-owned furniture company that's grown to €20M revenue but feels chaotic",
            "Sell startup legal services to a 3-person fintech that just raised €500K and needs to incorporate properly",
            "Pitch your digital marketing agency to a DTC skincare brand that's spent €50K on Facebook ads with no results",
            "Sell executive recruiting services to a tech company that's spent 6 months failing to find a VP of Engineering",
            "Pitch CFO-for-hire services to a startup founder who raised €2M but has no idea how to manage the money",
            "Sell diversity and inclusion training to a law firm that just lost a discrimination lawsuit",
            "Pitch crisis PR services to a restaurant chain whose CEO was caught on video yelling at an employee",
            "Sell managed IT services to a 25-person accounting firm whose 'IT guy' is actually the receptionist's nephew",
            "Pitch a complete brand redesign to a 40-year-old insurance company whose logo looks like it's from 1985",
            "Sell Lean Six Sigma consulting to a hospital whose A&E waiting times average 4 hours",

            // Consumer Technology
            "Pitch a smart thermostat to a homeowner who complains about high heating bills",
            "Sell an Apple Watch to a 45-year-old who just started running for weight loss",
            "Pitch the latest iPhone to an Android user who's frustrated with their Samsung's camera quality",
            "Sell a MacBook Air to a first-year university student studying graphic design",
            "Pitch a video doorbell camera to parents of teenagers who come home to an empty house after school",
            "Sell a professional mirrorless camera to someone who's been using their phone for photography but wants professional results for their travel blog",
            "Pitch the Nintendo Switch to a 35-year-old parent who hasn't played games since the PlayStation 2 but wants to play with their 8-year-old",
            "Sell an iPad Pro to a real estate agent who needs to show property listings during client meetings",
            "Pitch premium noise-cancelling headphones to an open-office worker who can't concentrate",
            "Sell a multisport GPS watch to a triathlon enthusiast who's currently using a basic fitness tracker",

            // Financial Products
            "Pitch a premium travel credit card to a consultant who flies internationally 10+ times per year",
            "Sell a low-cost index fund portfolio to a 28-year-old software engineer who keeps all savings in a checking account",
            "Pitch comprehensive home insurance to a homeowner whose neighbour just had flood damage",
            "Sell a pension transfer to a 50-year-old who just changed jobs and has an old pension sitting dormant",
            "Pitch a high-yield savings account to a recent college graduate who wants to save €10,000 for emergencies",
            "Sell a 15-year fixed mortgage to a couple buying their first home who are nervous about long-term debt",
            "Pitch a business current account with no fees to a freelance designer who just set up their limited company",
            "Sell term life insurance to a 32-year-old father whose wife stays home with two young children",
            "Pitch wealth management services to a doctor earning €300,000/year who has no investment strategy beyond savings",
            "Sell a small business loan to a bakery owner who wants to open a second location across town",

            // Healthcare & Wellness
            "Pitch a corporate wellness programme with gym discounts and mental health days to an HR director at a 200-person tech company with high burnout rates",
            "Sell a telemedicine subscription to a working single parent who has trouble taking time off for doctor's appointments",
            "Pitch a private health insurance plan to a self-employed graphic designer who currently has no coverage and is worried about a pre-existing condition",
            "Sell a confidential employee counselling service to a startup CEO whose team is showing signs of stress and anxiety",
            "Pitch a 12-week nutrition coaching programme to a 40-year-old office worker who has pre-diabetes and needs to change eating habits",
            "Sell a continuous glucose monitor to a Type 2 diabetic who struggles to track blood sugar consistently",
            "Pitch a sleep and meditation app subscription to a finance executive who sleeps poorly and checks emails at 2am",
            "Sell in-home physical therapy sessions to a 70-year-old recovering from hip replacement surgery",
            "Pitch a dental insurance plan to a company of 50 employees who currently have no dental coverage",
            "Sell a premium gym membership to a partner at a law firm who wants to prioritise health but needs flexibility and high-end amenities",

            // Real Estate & Property
            "Pitch a 500 m² retail space on a busy shopping street to a clothing boutique owner looking for their first physical location",
            "Sell a 4-bedroom house with a garden in the suburbs to a young family with two kids who currently live in a cramped city flat",
            "Pitch property management services to an expat who owns three rental flats but lives abroad and can't deal with tenant issues",
            "Sell a 2-bedroom beachfront flat in Barcelona to an investor looking for short-term rental income from tourists",
            "Pitch a modern studio flat near the university to a graduate student starting their PhD programme",
            "Sell a mixed-use development project with retail on ground floor and 20 residential units to a real estate investment group",
            "Pitch a coworking membership to a 5-person marketing agency that's outgrown their founder's living room",
            "Sell a ski chalet in the Alps that generates €40,000/year in rental income to an investor who wants a holiday home that pays for itself",
            "Pitch a corner location with high foot traffic to a coffee shop owner looking to open their third location",
            "Sell a 2,000 m² warehouse lease to an e-commerce company that's doubled their inventory and needs more fulfilment space",

            // Education & Training
            "Pitch a 2-day sales training workshop to a software company whose sales team is underperforming on cold calls",
            "Sell an online data science certificate to a marketing manager who wants to transition into analytics",
            "Pitch a Project Management Professional (PMP) certification to an engineer who manages projects but has no formal credentials",
            "Sell a business English programme to a German manufacturing company whose engineers struggle in international meetings",
            "Pitch a 6-month executive leadership programme to a newly promoted VP who's never managed managers before",
            "Sell a cloud certification bootcamp to an IT team that needs to migrate their company's infrastructure",
            "Pitch an Executive MBA at a top European business school to a 35-year-old entrepreneur who wants to scale their startup internationally",
            "Sell a 3-day Excel mastery workshop to an accounting team still doing manual data entry",
            "Pitch a 16-week full-stack coding bootcamp to a 30-year-old teacher who wants to switch to tech",
            "Sell a healthcare compliance training programme to a hospital that just received a warning from regulators",

            // Marketing & Advertising
            "Pitch a full-page ad in a major fashion magazine to a luxury watch brand launching a new collection",
            "Sell a 6-month Instagram and TikTok management package to a local restaurant that has no social media presence",
            "Pitch an e-commerce email marketing platform to an online furniture store whose abandoned cart rate is 75%",
            "Sell SEO services to a dentist whose website doesn't appear in Google's first 5 pages for 'dentist near me'",
            "Pitch a blog and video content strategy to a B2B SaaS company that relies entirely on outbound sales",
            "Sell an influencer marketing campaign with 10 micro-influencers to a sustainable skincare brand launching in the US",
            "Pitch title sponsorship of a local marathon to a health insurance company wanting community visibility",
            "Sell a €50,000 Google Ads campaign to an e-commerce business that's only used organic social media",
            "Pitch a co-branded product line to a coffee company that wants to partner with a popular breakfast cereal brand",
            "Sell a premium booth at a major electronics trade show to a consumer electronics startup launching their first product",

            // Sustainability & Green Products
            "Pitch a 10kW rooftop solar system with battery storage to a homeowner who spent €4,000 on electricity last year",
            "Sell a Tesla Model 3 to a consultant who drives 30,000 km/year and is tired of spending €400/month on fuel",
            "Pitch plastic-free packaging made from seaweed to a cosmetics brand that's facing backlash for excessive plastic waste",
            "Sell LEED certification consulting to a commercial developer building a new office tower who wants to attract eco-conscious corporate tenants",
            "Pitch a carbon offset programme to an airline that wants to offer passengers a way to offset their flight emissions",
            "Sell recycled paper products and refillable pens to a law firm that wants to improve their environmental image",
            "Pitch a 100% renewable energy contract to a data centre operator whose clients are asking about sustainability",
            "Sell a line of bamboo toothbrushes and zero-waste toiletries to a supermarket chain looking to compete with eco-stores",
            "Pitch waste audit and reduction services to a manufacturing plant that's paying €100,000/year in waste disposal fees",
            "Sell an electric delivery van fleet to a courier company whose diesel lorries are banned from entering the city centre",

            // Miscellaneous Boss Sales
            "Pitch a partnership between your craft brewery and a local pizza restaurant to offer beer and pizza pairing events",
            "Sell your 200-person capacity rooftop venue to a tech company planning their annual staff party in December",
            "Pitch a McDonald's franchise opportunity to a former corporate executive with €500,000 to invest who wants to run their own business",
            "Sell a Spotify Premium Family plan upgrade to a user who's been on the free tier and complains about ads",
            "Pitch an upgrade from a team messaging platform's free tier to its paid plan to a marketing team that's hit the message limit",
            "Sell a 3-year maintenance contract to a hospital that just purchased €2 million worth of medical imaging equipment",

            // Additional Boss - HR & Talent Solutions
            "Pitch an applicant tracking system to an HR director who's tracking 500 applicants per month in a shared inbox",
            "Sell an employee engagement survey platform to a People team whose rating on employer review sites dropped from 4.2 to 3.1",
            "Pitch a performance management platform to a scale-up that just hit 200 employees and has no formal review process",
            "Sell an online course library for teams to a training manager who needs to upskill 50 customer service reps but has no budget for in-person training",
            "Pitch a payroll platform to a bakery owner with 12 employees who's been calculating wages by hand",
            "Sell a background screening service to a home healthcare company that had an employee arrested for theft",
            "Pitch a benefits administration platform to a startup whose HR person spends 20 hours per month on health insurance paperwork",
            "Sell a time-tracking system to a restaurant chain whose managers suspect timecard fraud is costing €50K/year",
            "Pitch a digital onboarding platform to an HR manager who takes 2 weeks to complete new hire paperwork",
            "Sell a workplace mindfulness subscription to an HR director at a tech company where 40% of employees report burnout in surveys",

            // Additional Boss - Manufacturing & Industrial
            "Pitch a €200,000 CNC milling machine to a machine shop owner who's turning away orders because their 15-year-old equipment is too slow",
            "Sell certified fall-protection harnesses to a construction company whose safety inspector just issued a warning",
            "Pitch automated quality-inspection cameras to a car parts manufacturer whose defect rate is 3x the industry average",
            "Sell inventory management software to a distributor who lost €100K last year because they didn't know what was in stock",
            "Pitch a supply chain planning system to a logistics director whose company just missed deliveries to a major supermarket chain and got a penalty",
            "Sell a fleet management system to a trucking company with 50 vehicles and no idea where half of them are",
            "Pitch a predictive maintenance contract for factory robots to a plant manager who had 2 weeks of downtime from unexpected failures",
            "Sell a €500K robotic palletising system to a warehouse that can't find workers for the night shift",
            "Pitch a warehouse management system to an e-commerce fulfilment centre that ships 10,000 orders/day but has 5% pick errors",
            "Sell industrial cleaning services to a food processing plant that just failed a health inspection",

            // Additional Boss - Hospitality & Travel
            "Pitch a global booking platform's partner programme to a travel agency that's still booking hotels via phone and fax",
            "Sell a restaurant reservation platform to a popular restaurant that takes reservations on paper and double-books tables every weekend",
            "Pitch an enterprise ticketing platform to a 5,000-seat concert venue that's still using Excel for ticket sales",
            "Sell a restaurant point-of-sale system to a bar owner who's using a 20-year-old cash register that breaks weekly",
            "Pitch a corporate travel management platform to a CFO who discovered employees spent €500K on last-minute flights last year",
            "Sell a guest experience survey platform to a hotel chain whose TripAdvisor rating is 3.5 stars and falling",
            "Pitch a hotel loyalty programme to a 15-location hotel group with zero repeat booking data",
            "Sell outsourced food service management to a university whose canteen has been losing €200K/year",
            "Pitch a property management system to a boutique hotel managing 3 booking platforms manually with constant overbookings",
            "Sell housekeeping management software to a 300-room hotel whose guests complain about rooms not being ready at check-in",

            // Additional Boss - Legal & Compliance
            "Pitch a law practice management system to a 10-lawyer firm where partners can't track billable hours accurately",
            "Sell a contract lifecycle management system to a legal team that's managing 2,000 contracts in shared folders with no version control",
            "Sell an e-discovery platform to a law firm handling a class action with 5 million documents to review",
            "Pitch a legal document management system to a corporate legal department that accidentally sent a draft contract to the wrong party",
            "Pitch GDPR compliance consulting to a European retailer that just received a €500K fine for data mishandling",
            "Sell a professional legal research service to a solo practitioner who's been using free legal research and missing cases",
            "Sell a data privacy compliance platform to an e-commerce company that has no idea how customer data flows through their systems",

            // Additional Boss - Creative Services
            "Pitch a €15K brand identity package to a startup that's using a logo their founder made in PowerPoint",
            "Sell a €50K corporate video production to a B2B company whose sales team has no visual content for pitches",
            "Pitch a €10K website redesign to a dentist whose website looks like it's from 2005 and doesn't work on mobile",
            "Sell professional photography services to a real estate agent whose listings use dark, blurry iPhone photos",
            "Sell a complete rebrand to a 20-year-old accounting firm that's trying to attract younger clients",
            "Pitch a €20K animated explainer video to a fintech whose product is too complex for customers to understand",
            "Sell podcast production services to a thought leader who records audio in their echo-filled kitchen",
            "Pitch virtual event production to a conference organiser whose last online event had 50% drop-off due to technical issues",

            // Additional Boss - Retail Solutions
            "Pitch a retail inventory system to a clothing boutique that runs out of bestsellers while sitting on €30K of dead stock",
            "Sell an online store platform to a vintage furniture store with 2 locations that wants to sell online but has no tech skills",
            "Pitch a coffee-chain rewards app to a 10-location coffee chain that has no customer data",
            "Sell foot traffic analytics to a department store that can't explain why sales dropped 20%",
            "Pitch a staff scheduling app to a retail manager who spends 8 hours per week building the staff schedule by hand",
            "Sell planogram optimisation services to a supermarket chain whose end caps underperform by 40%",
            "Pitch AI-powered loss prevention cameras to an electronics retailer losing €200K/year to theft",
            "Sell a workforce management system to a clothing retailer that always has too many or too few staff on the floor",
            "Pitch an enterprise commerce platform to a specialist retailer that has separate systems for online and in-store inventory",
            "Sell a customer feedback platform to a retail chain whose NPS score dropped but nobody knows why",

            // Additional Boss - Construction & Trades
            "Pitch a construction management platform to a general contractor managing 15 simultaneous projects with paper and WhatsApp messages",
            "Sell €50K in sustainable building materials to a developer whose clients want LEED-certified buildings",
            "Pitch a €20K HVAC upgrade to a property manager whose tenants complain about temperature every summer",
            "Sell emergency plumbing services to a building owner whose old pipes just flooded the ground floor",
            "Pitch LED lighting retrofit to a facility manager whose electricity costs increased 30% this year",
            "Sell a complete roof replacement to a warehouse owner whose current roof leaks every time it rains",
            "Pitch a €10K annual landscaping contract to a corporate campus that looks neglected and overgrown",
            "Sell interior painting services to an office manager whose walls haven't been painted in 15 years",
            "Pitch a €200K office renovation to a law firm that wants to attract young talent but has 1980s decor",
            "Sell a preventive maintenance contract to a building manager who's been fixing things only when they break",

            // Additional Boss - Food & Beverage Industry
            "Pitch a cloud-based till system to a taqueria owner whose current POS crashes during the lunch rush",
            "Sell a food inventory system to a restaurant that threw away €2,000 in spoiled produce last month",
            "Pitch a €30K commercial convection oven to a bakery that can't keep up with demand using home equipment",
            "Sell craft beer distribution to a trendy bar that only stocks major brands and is losing customers to competitors",
            "Pitch food safety certification training to a restaurant whose food hygiene rating just dropped two points",
            "Sell Instagram marketing services to a family restaurant with amazing food but zero online presence",
            "Pitch a food delivery platform partnership to a popular lunch spot that loses customers to delivery-friendly competitors",
            "Sell menu engineering consulting to a restaurant with 50 menu items but only 10 that actually sell",
            "Pitch catering management software to a catering company managing 20 weekly events with paper and memory",
            "Sell a table-booking and waitlist app to a hot restaurant that's either empty or has 2-hour waits with no booking system",

            // Additional Boss - Automotive
            "Pitch a dealership management system to a car dealer whose sales and service departments use completely different systems",
            "Sell a managed fleet service to a plumbing company with 15 vans that have no maintenance schedule",
            "Pitch your independent repair shop services to a BMW owner who's tired of paying dealer prices",
            "Sell GPS vehicle tracking to a courier company whose drivers take long lunches but claim traffic delays",
            "Pitch an unlimited car wash membership to a commuter who washes their car 3x per month at €15 each",
            "Sell OEM brake parts to an independent repair shop that's been using cheap aftermarket parts that customers complain about",
            "Pitch annual vehicle inspection services to a fleet manager who missed an expired safety certificate and got fined",
            "Sell a €300 full interior detailing to an estate agent who drives clients in a car with coffee stains and dog hair",
            "Pitch bulk tyre replacement to a logistics company whose delivery vans have worn tyres that increase fuel costs",
            "Sell a 3-year vehicle lease programme to a sales team of 10 who currently use personal cars and request mileage reimbursement",

            // Additional Boss - Nonprofit & Association
            "Pitch a donor management system to a charity whose major donor hasn't been thanked in 6 months and stopped giving",
            "Sell an online fundraising platform to a local animal shelter that raised €5,000 last year but could raise €50,000 with better tools",
            "Sell a volunteer management tool to a food bank that coordinates 100 volunteers weekly via email threads",
            "Pitch a grant management platform to a foundation that reviews 500 applications per year with emailed PDFs",
            "Sell an online ticketing platform to a nonprofit gala organiser who still mails paper invitations and tracks RSVPs on a spreadsheet",
            "Pitch a nonprofit donor platform to a charity that has donor data in 5 different systems that don't talk to each other",
            "Sell a digital advocacy platform to a political organisation that wants members to contact legislators but has no easy way",
            "Pitch nonprofit accounting software to a church treasurer who's been using personal budgeting software for a €500K annual budget",
            "Sell an online giving platform to a museum that only accepts donations by cheque and is missing out on impulse gifts"
        ]
    }
};

/**
 * Medium = the Easy prompt plus one instruction about how much to say. Baking
 * both tiers into the file duplicated every prompt (~1,650 rows) and meant an
 * edit to a prompt had to be made twice, so the scaffolds live here and are
 * applied on read.
 *
 * `explanatory` is deliberately absent: its medium tier is hand-written
 * (see the file header) and must never take a scaffold.
 */
export const MEDIUM_SCAFFOLDS = {
    relatable: [
        "Explain your answer, then add one real-life detail.",
        "Answer with two details and one personal opinion.",
        "Include two details and explain why it matters to you.",
        "Say why, and add one detail that helps us picture it.",
        "Mention one detail people might notice and one small personal opinion.",
        "Give one reason and one specific example from your life.",
        "Add one real example and explain how you feel about it.",
        "Include one useful detail and one example from your life.",
    ],
    philosophical: [
        "Explain your view with a simple reason and one everyday example.",
        "Give one personal example and one reason someone might disagree.",
        "Answer simply, then explain how this idea appears in daily life.",
        "Give your opinion and one situation that shaped it.",
    ],
    argument: [
        "Choose a side and support it with two reasons and one real-life example.",
        "Make your case, then answer one simple objection.",
        "Explain which option you prefer, when it works best, and why.",
        "Give two arguments and one situation where the other side might be better.",
    ],
    compare: [
        "Use two clear differences, then say which one fits a specific situation better.",
        "Judge them by convenience, comfort, or usefulness, then choose one.",
        "Give one similarity, two differences, and your preference.",
        "Explain when each option would be the better choice.",
    ],
    hypothetical: [
        "Describe what you would do first, what problem might appear, and whether you would enjoy it.",
        "Explain one benefit, one risk, and what you would choose.",
        "Say how daily life would change and what would be hardest.",
        "Give a short plan and one possible consequence.",
    ],
    story: [
        "Include a clear beginning, a problem, and how it ended.",
        "Include where it happens, what goes wrong, and one feeling.",
        "Tell it with two characters, a small conflict, and a clear ending.",
        "Add a turning point and one detail that makes the story believable.",
    ],
    roleplay: [
        "Add one specific detail, ask one follow-up question, and respond politely if there is a small problem.",
        "Be polite, explain your preference, and ask for one alternative.",
        "Include a small misunderstanding and clear it up.",
        "Ask for clarification, make one request, and close the conversation naturally.",
    ],
    analysis: [
        "Explain the pattern, one benefit, and one downside.",
        "Explain two reasons, then give one example and one exception.",
        "Identify two factors and say which one matters most.",
        "Give a simple cause-and-effect explanation and one real example.",
    ],
    interview: [
        "Answer in 45-60 seconds with one concrete detail and a short connection to the role.",
        "Give a clear answer, one example, and what it says about you professionally.",
        "Answer directly, then add one detail that makes the answer memorable.",
        "Connect your answer to the kind of work environment where you do well.",
    ],
    presentation: [
        "Use three main points and one example or short story.",
        "Structure it with an opening, two key points, and a short conclusion.",
        "Include one personal example and one practical recommendation.",
        "Use a clear intro, one comparison, and one takeaway.",
    ],
    salespitch: [
        "Name the customer, explain two benefits, handle one objection, and close politely.",
        "Explain the problem, how the offer helps, and ask for a next step.",
        "Tailor the pitch to the buyer with one feature and one emotional benefit.",
        "Give a 30-second pitch with a hook, proof, and a call to action.",
    ],
};

/** Join a prompt to its scaffold without doubling the sentence punctuation. */
const withScaffold = (prompt, scaffold) =>
    `${prompt}${/[?.!]$/.test(prompt.trim()) ? ' ' : '. '}${scaffold}`;

/**
 * The prompt list for a theme + difficulty, deriving Medium where it isn't stored.
 * Returns an empty array for an unknown theme; callers handle the fallback.
 */
export const getTopicList = (themeId, difficulty) => {
    const themeTopics = topics[themeId];
    if (!themeTopics) return [];
    const stored = themeTopics[difficulty];
    if (stored && stored.length > 0) return stored;
    if (difficulty !== 'medium') return [];
    const scaffolds = MEDIUM_SCAFFOLDS[themeId];
    if (!scaffolds || scaffolds.length === 0) return themeTopics.easy;
    return themeTopics.easy.map((prompt, i) => withScaffold(prompt, scaffolds[i % scaffolds.length]));
};

/**
 * Get a random topic for a given theme and difficulty
 * @param {string} themeId - The theme identifier
 * @param {string} difficulty - The difficulty level (easy, medium, boss)
 * @returns {string} A random topic
 */
export const getRandomTopic = (themeId, difficulty = 'medium') => {
    const levelTopics = getTopicList(themeId, difficulty);
    if (levelTopics.length > 0) {
        return levelTopics[Math.floor(Math.random() * levelTopics.length)];
    }
    const fallback = getTopicList('relatable', difficulty);
    return fallback[0] ?? topics.relatable.easy[0];
};

/**
 * Get multiple unique random topics for a theme and difficulty
 * @param {string} themeId - The theme identifier
 * @param {string} difficulty - The difficulty level
 * @param {number} count - Number of topics to return
 * @returns {string[]} Array of random topics
 */
export const getRandomTopics = (themeId, difficulty = 'medium', count = 3) => {
    const levelTopics = getTopicList(themeId, difficulty);
    const pool = levelTopics.length > 0 ? levelTopics : getTopicList('relatable', difficulty);
    if (pool.length === 0) return [topics.relatable.easy[0]];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
};
