/**
 * Funny Pastel Hangman - Word Database
 * Designed by Paniz (@panizteacher)
 * Theme: Pastel Pink, Purple & Cyan
 * CEFR Levels: A1, A2, B1, B2, C1, C2 with hilarious hints and fun definitions!
 */

const HANGMAN_WORDS = [
  // ==========================================
  // LEVEL A1 (Beginner - Everyday & Funny Words)
  // ==========================================
  {
    word: "BANANA",
    level: "A1",
    category: "Food & Fun",
    hint: "A yellow curved fruit that monkeys go bananas for, and clumsy people slip on in cartoons.",
    funnyComment: "Did you know humans share about 50% of their DNA with bananas? You're half banana!",
    emoji: "🍌"
  },
  {
    word: "PAJAMAS",
    level: "A1",
    category: "Everyday Life",
    hint: "The official uniform for working from home and binge-watching cartoons in bed.",
    funnyComment: "Putting on fresh pajamas after a shower is universally proven to add +10 happiness.",
    emoji: "🩳"
  },
  {
    word: "COOKIE",
    level: "A1",
    category: "Food & Snacks",
    hint: "A round baked treat that mysteriously vanishes when placed next to milk.",
    funnyComment: "Why does the Cookie Monster need to see a doctor? Because he feels crumbly!",
    emoji: "🍪"
  },
  {
    word: "MONKEY",
    level: "A1",
    category: "Animals",
    hint: "A playful animal with a long tail who loves swinging from trees and stealing tourists' sunglasses.",
    funnyComment: "Never play poker with a monkey—they always have a few tricks up their hairy sleeves.",
    emoji: "🐒"
  },
  {
    word: "ZOMBIE",
    level: "A1",
    category: "Funny Spooky",
    hint: "A slow-walking person who forgot their morning coffee and only craves 'braaaains'.",
    funnyComment: "Zombies are very polite—they always invite you over for a bite.",
    emoji: "🧟"
  },
  {
    word: "CHEESE",
    level: "A1",
    category: "Foods",
    hint: "What you yell before taking a family photo, and mice dream about.",
    funnyComment: "What do you call cheese that isn't yours? Nacho cheese!",
    emoji: "🧀"
  },
  {
    word: "PUDDLE",
    level: "A1",
    category: "Nature",
    hint: "A tiny temporary lake on the street that kids (and fun adults) are magnetically drawn to jump into.",
    funnyComment: "Your shoes will never forgive you, but the splash was 100% worth it.",
    emoji: "💦"
  },
  {
    word: "SOCKS",
    level: "A1",
    category: "Clothing",
    hint: "Foot coverings that go into the washing machine in pairs and mysteriously come out single.",
    funnyComment: "Somewhere in the universe, there is a planet made entirely of lost left socks.",
    emoji: "🧦"
  },

  // ==========================================
  // LEVEL A2 (Elementary - Silly & Familiar)
  // ==========================================
  {
    word: "KANGAROO",
    level: "A2",
    category: "Animals",
    hint: "An Australian jumper equipped with a built-in front pocket for babies and secret snacks.",
    funnyComment: "What do you call a lazy baby kangaroo? A pouch potato!",
    emoji: "🦘"
  },
  {
    word: "FLAMINGO",
    level: "A2",
    category: "Animals",
    hint: "A tall pink bird that stands on one leg because if it lifted both, it would fall over.",
    funnyComment: "Flamingos are pink because they eat so many pink shrimp—talk about 'you are what you eat'!",
    emoji: "🦩"
  },
  {
    word: "PINEAPPLE",
    level: "A2",
    category: "Food",
    hint: "A spiky tropical fruit that causes epic heated internet wars when placed on pizza.",
    funnyComment: "When you eat a pineapple, its enzymes try to digest you back. Mutual respect!",
    emoji: "🍍"
  },
  {
    word: "SPAGHETTI",
    level: "A2",
    category: "Food",
    hint: "Long wiggly edible ropes that look hilarious when slurped with red tomato sauce.",
    funnyComment: "What is an imposter noodle called? An impasta!",
    emoji: "🍝"
  },
  {
    word: "MOSQUITO",
    level: "A2",
    category: "Insects",
    hint: "A tiny vampire with wings that buzzes right in your ear at 3:00 AM in the dark.",
    funnyComment: "Mosquitoes are the only creature capable of turning everyone into a furious ninja in 2 seconds.",
    emoji: "🦟"
  },
  {
    word: "ASTRONAUT",
    level: "A2",
    category: "Jobs & Space",
    hint: "A person who wears a giant bubble helmet and eats floating freeze-dried ice cream.",
    funnyComment: "How do astronauts organize a party? They planet!",
    emoji: "👨‍🚀"
  },
  {
    word: "BOOMERANG",
    level: "A2",
    category: "Objects",
    hint: "A curved wooden stick that you throw away, but it has separation anxiety and flies right back.",
    funnyComment: "What do you call a boomerang that doesn't come back? A stick.",
    emoji: "🪃"
  },

  // ==========================================
  // LEVEL B1 (Intermediate - Quirky & Expressive)
  // ==========================================
  {
    word: "CHAMELEON",
    level: "B1",
    category: "Animals",
    hint: "A sneaky reptile that plays the ultimate game of hide-and-seek by changing its outfit.",
    funnyComment: "Did you know chameleons can look at two completely different memes on two screens at the same time?",
    emoji: "🦎"
  },
  {
    word: "HYPNOTIZE",
    level: "B1",
    category: "Magic & Mind",
    hint: "To swing a shiny pocket watch until your friend clucks like a goofy chicken.",
    funnyComment: "Look into my eyes... you are getting sleepy... you will bring Paniz ice cream now!",
    emoji: "🌀"
  },
  {
    word: "PROCRASTINATION",
    level: "B1",
    category: "Human Behavior",
    hint: "The miraculous art of cleaning your entire room and alphabetizing spice jars just to avoid studying.",
    funnyComment: "I was going to write a hilarious comment here, but I'll do it tomorrow.",
    emoji: "⏳"
  },
  {
    word: "AVOCADO",
    level: "B1",
    category: "Food & Millennial",
    hint: "A green fruit that is not ready for 3 days, perfectly ripe for 12 minutes, and then turns brown.",
    funnyComment: "Avocados are green butter made by mother nature with built-in stone armor.",
    emoji: "🥑"
  },
  {
    word: "SKELETON",
    level: "B1",
    category: "Anatomy",
    hint: "A collection of 206 bones inside you that enjoys wearing a coat of meat and skin.",
    funnyComment: "Why didn't the skeleton cross the road? Because he didn't have the guts!",
    emoji: "💀"
  },
  {
    word: "METRONOME",
    level: "B1",
    category: "Music & Tech",
    hint: "A mechanical ticking triangle that judge-silently judges every piano student's rhythm.",
    funnyComment: "Tick... tock... tick... wrong tempo! Play it again!",
    emoji: "🎼"
  },
  {
    word: "CONFUSED",
    level: "B1",
    category: "Emotions",
    hint: "The face you make when looking at your phone calculator trying to figure out 7 x 8.",
    funnyComment: "Don't worry, 90% of adults still check 4 + 7 on a calculator just in case math changed overnight.",
    emoji: "🤔"
  },

  // ==========================================
  // LEVEL B2 (Upper-Intermediate - Witty & Whimsical)
  // ==========================================
  {
    word: "BAMBOOZLE",
    level: "B2",
    category: "Funny Idioms",
    hint: "To completely trick, bewilder, or outsmart someone in a playful or sneaky manner.",
    funnyComment: "You have been bamboozled by Bob the pastel marshmallow!",
    emoji: "🪄"
  },
  {
    word: "SHENANIGANS",
    level: "B2",
    category: "Mischief",
    hint: "High-spirited, playful naughtiness or silly pranks executed with your best friends.",
    funnyComment: "Warning: 100% of shenanigans start with the words: 'Trust me, it will be hilarious'.",
    emoji: "🎪"
  },
  {
    word: "GOBBLEDYGOOK",
    level: "B2",
    category: "Language",
    hint: "Language that is so excessively complicated, jargon-filled, and pompous that nobody understands a word.",
    funnyComment: "Sounds like a turkey trying to read a 50-page legal terms of service contract.",
    emoji: "🦃"
  },
  {
    word: "CLUMSINESS",
    level: "B2",
    category: "Quirks",
    hint: "The special superpower of tripping over flat surfaces and dropping phones directly onto your nose.",
    funnyComment: "Gravity just happens to have a very passionate crush on you.",
    emoji: "🤕"
  },
  {
    word: "SKEDADDLE",
    level: "B2",
    category: "Old-School Slang",
    hint: "To run away or depart in a huge dramatic hurry when chores need to be done.",
    funnyComment: "When the teacher asks 'Who didn't do the homework?' -> Time to skedaddle!",
    emoji: "🏃"
  },
  {
    word: "CATASTROPHE",
    level: "B2",
    category: "Drama",
    hint: "A colossal disaster—like dropping your last scoop of pistachio gelato on a hot pavement.",
    funnyComment: "A moment of silence for all dropped pizzas and fallen ice cream cones.",
    emoji: "💥"
  },

  // ==========================================
  // LEVEL C1 (Advanced - Deliciously Sophisticated & Funny)
  // ==========================================
  {
    word: "DISCOMBOBULATE",
    level: "C1",
    category: "Advanced Quirks",
    hint: "To thoroughly confuse, fluster, and upset the mental composure of someone.",
    funnyComment: "Sherlock Holmes' favorite punch, and Paniz's favorite word to test students!",
    emoji: "😵‍💫"
  },
  {
    word: "KERFUFFLE",
    level: "C1",
    category: "Chaos",
    hint: "A noisy disturbance, commotion, or heated disagreement usually caused by conflicting silly views.",
    funnyComment: "Like the international kerfuffle over whether cereal or milk goes into the bowl first.",
    emoji: "🗯️"
  },
  {
    word: "FLUMMOX",
    level: "C1",
    category: "Perplexity",
    hint: "To bewilder, confound, or baffle someone to the point of speechless silence.",
    funnyComment: "If this Hangman round flummoxed you, Bob the Marshmallow sends pastel hugs!",
    emoji: "🤯"
  },
  {
    word: "BROUHAHA",
    level: "C1",
    category: "Noisy Drama",
    hint: "An episode of exaggerated, noisy excitement, public uproar, or enthusiastic hullabaloo.",
    funnyComment: "A brouhaha erupted when someone ate the last slice of cheesecake from the fridge.",
    emoji: "📢"
  },
  {
    word: "GOBSMACKED",
    level: "C1",
    category: "Expressions",
    hint: "Astounded, flabbergasted, and physically shocked as if struck right in the mouth ('gob').",
    funnyComment: "Paniz was completely gobsmacked when you guessed this C1 word on the first try!",
    emoji: "😲"
  },
  {
    word: "MALARKEY",
    level: "C1",
    category: "Nonsense",
    hint: "Meaningless talk, sheer nonsense, or exaggerated foolishness.",
    funnyComment: "That is a pure bunch of pastel malarkey!",
    emoji: "🎩"
  },

  // ==========================================
  // LEVEL C2 (Proficiency - Ultimate Linguistic Riddles)
  // ==========================================
  {
    word: "COLLYWOBBLES",
    level: "C2",
    category: "Grand Vocabulary",
    hint: "A hilarious vintage term for a stomachache, nervous belly butterflies, or intense intestinal fluttering.",
    funnyComment: "Got the collywobbles before your English speaking exam? Paniz has got your back!",
    emoji: "🦋"
  },
  {
    word: "TARADIDDLE",
    level: "C2",
    category: "Deception",
    hint: "A petty lie, childish fib, or pretentious piece of pretentious nonsense.",
    funnyComment: "'I swear the dog ate my English essay!' is a classic grade-A taradiddle.",
    emoji: "🤥"
  },
  {
    word: "QUIZZICAL",
    level: "C2",
    category: "Expressions",
    hint: "Indicating mild or amused puzzlement and skeptical curiosity through a raised eyebrow.",
    funnyComment: "The exact expression Bob the Marshmallow makes when you pick the letter 'Z' on round one.",
    emoji: "🤨"
  },
  {
    word: "BILLINGSGATE",
    level: "C2",
    category: "Archaic Wit",
    hint: "Coarsely abusive, foul, or vituperative language named after a notorious historic London fish market.",
    funnyComment: "Keep it classy—save the billingsgate for when you stub your pinky toe on the couch!",
    emoji: "🐟"
  },
  {
    word: "NINCOMPOOP",
    level: "C2",
    category: "Playful Insults",
    hint: "A delightfully silly, foolish, or utterly simple-minded person.",
    funnyComment: "Even Shakespeare would approve of calling your rival a gentle pastel nincompoop.",
    emoji: "🤡"
  },
  {
    word: "HULLABALOO",
    level: "C2",
    category: "Commotion",
    hint: "A chaotic, clamorous commotion and uproar of confused noises.",
    funnyComment: "What's all this hullabaloo about? Just Paniz's students mastering C2 English with ease!",
    emoji: "🥳"
  }
];

// Helper to filter words by level
function getHangmanWords(level = "All") {
  if (level === "All") return [...HANGMAN_WORDS];
  return HANGMAN_WORDS.filter(w => w.level.toUpperCase() === level.toUpperCase());
}

window.HANGMAN_WORDS = HANGMAN_WORDS;
window.getHangmanWords = getHangmanWords;
