const slogen = [
    "Don't let anyone ever make you feel like you don't deserve what you want.",
    "To find something, anything, a great truth or a lost pair of glasses, you must first believe there will be some advantage in finding it.",
    "You cannot live your life to please others. The choice must be yours.",
    "It's not destroying. It's making something new.",
    "All those moments will be lost in time… Like tears in rain.",
    "We all end up dead, it's just a question of how and why.",
    "Only if you find peace within yourself will you find true connection with others",
    "It's what you do right now that makes a difference.",
    "Why do we fall, Sir? So that we can learn to pick ourselves up.",
    "You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions. Their answers determined whether they were able to enter or not. ‘Have you found joy in your life?’ ‘Has your life brought joy to others?",
    "I know what I have to do now. I've got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?",
    "Our lives are defined by opportunities, even the ones we miss.",
    "If we didn't do what we loved, we wouldn't exist.",
    "No matter what anybody tells you, words and ideas can change the world.",
    "When you decide to be something, you can be it.",
    "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    "You had my curiosity. But now you have my attention.",
    "When will the lesson be learned! You cannot reason with a tiger when your head is in its mouth!",
    "You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate. If you want to control things in your life so bad, work on the mind. That’s the only thing you should be trying to control.",
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    "My momma always said, Life is like a box of chocolates, you never know what you're gonna get.",
    "It's only after we've lost everything that we're free to do anything.",
    "We walk away from our dreams afraid we may fail, or worse yet, afraid we may succeed.",
    "I live my life a quarter-mile at a time.",
    "When life gets you down, you know what you gotta do? Just keep swimming.",
    "When you're down here in the crowd and you look up, it looks pretty big and you don't think about it too much. But when you get a different vantage point it changes your perspective.",
    "Great men are not born great, they grow great.",
    "Keep your friends close, but your enemies closer.",
    "Some people can't believe in themselves until someone else believes in them first.",
    "What we do in life echoes in eternity.",
    "It is not our abilities that show what we truly are. It is our choices.",
    "Life is not the amount of breaths you take. It's the moments that take your breath away.",
    "Hope. It is the only thing stronger than fear. Little hope is effective. A lot of hope is dangerous. A spark is fine, as long as it's contained.",
    "Strange, isn't it? Each man's life touches so many other lives. When he isn't around he leaves an awful hole, doesn't he?",
    "When you want something in life, you just gotta reach out and grab it.",
    "You mustn't be afraid to dream up little bigger, darling.",
    "Sometimes it is the people who no one imagines anything of, who do the things that no one can imagine.",
    "Our survival instinct is our greatest source of inspiration.",
    "Love cannot be found where it doesn't exist, nor can it be hidden where it truly does.",
    "Oh yes, the past can hurt. But you can either run from it or learn from it."
];

const difficultSituations = [
    "Quarter-life",
    "Breakups",
    "Changing Friendship",
    "Failures",
    "Divorce",
    "Losing a Job",
    "Getting Older",
    "Getting Injured, Falling Sick",
    "Losing All That You Have in a Natural Disaster",
    "Death of a Loved One"
];

const positiveMindsets = [
    "Resilience",
    "Courage",
    "Optimism",
    "Gratitude",
    "Acceptance"
];


const randomSelect = arr => {
    return Math.floor(Math.random() * arr.length);
}

console.log(randomSelect(positiveMindsets));

const messages = () => {

}