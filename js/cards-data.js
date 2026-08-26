/**
 * Who Am I? What Am I? - Card Database
 * Designed & Curated for Paniz Marzban
 * CEFR Levels: A1, A2, B1, B2, C1, C2
 * Categories: Jobs ("Who Am I?"), Foods, Objects, Animals, Places & Concepts ("What Am I?")
 */

const DEFAULT_CARDS = [
  // ==========================================
  // LEVEL A1 (Beginner - 10 Cards)
  // ==========================================
  {
    id: "a1-job-teacher",
    answer: "Teacher",
    acceptedAnswers: ["teacher", "a teacher", "school teacher", "professor", "tutor"],
    type: "who",
    category: "jobs",
    level: "A1",
    emoji: "👩‍🏫",
    clues: [
      "I work in a school every day.",
      "I have many students in my classroom.",
      "I write on a whiteboard or chalkboard.",
      "I help people learn new things and give homework."
    ],
    options: ["Teacher", "Doctor", "Pilot", "Chef"],
    funFact: "The word 'teacher' comes from an Old English word meaning 'to show' or 'to point out'."
  },
  {
    id: "a1-job-doctor",
    answer: "Doctor",
    acceptedAnswers: ["doctor", "a doctor", "dr", "physician", "medic"],
    type: "who",
    category: "jobs",
    level: "A1",
    emoji: "👨‍⚕️",
    clues: [
      "I usually wear a white coat.",
      "I work in a hospital or clinic.",
      "I help people when they feel sick or hurt.",
      "I listen to your heart and give medicine."
    ],
    options: ["Doctor", "Nurse", "Dentist", "Police Officer"],
    funFact: "Doctors have been practicing medicine for more than 4,000 years!"
  },
  {
    id: "a1-job-singer",
    answer: "Singer",
    acceptedAnswers: ["singer", "a singer", "vocalist", "musician"],
    type: "who",
    category: "jobs",
    level: "A1",
    emoji: "🎤",
    clues: [
      "I make music with my voice.",
      "I hold a microphone on stage.",
      "People listen to my songs on the radio.",
      "You might hear me in concerts or musicals."
    ],
    options: ["Singer", "Actor", "Dancer", "Painter"],
    funFact: "Singing releases endorphins in your brain, making you feel happier instantly."
  },
  {
    id: "a1-food-apple",
    answer: "Apple",
    acceptedAnswers: ["apple", "an apple", "red apple", "green apple"],
    type: "what",
    category: "foods",
    level: "A1",
    emoji: "🍎",
    clues: [
      "I am a round and sweet fruit.",
      "I can be red, green, or yellow.",
      "I grow on trees in orchards.",
      "A famous saying says one of me a day keeps the doctor away."
    ],
    options: ["Apple", "Banana", "Orange", "Strawberry"],
    funFact: "There are over 7,500 different varieties of apples grown around the world!"
  },
  {
    id: "a1-food-pizza",
    answer: "Pizza",
    acceptedAnswers: ["pizza", "a pizza", "pizzas"],
    type: "what",
    category: "foods",
    level: "A1",
    emoji: "🍕",
    clues: [
      "I am round and flat, but cut into triangular slices.",
      "I am baked in a very hot oven.",
      "I come from Italy and am loved worldwide.",
      "I am topped with melted cheese, tomato sauce, and delicious toppings."
    ],
    options: ["Pizza", "Burger", "Sandwich", "Pasta"],
    funFact: "The most popular pizza topping in the world is pepperoni!"
  },
  {
    id: "a1-food-ice-cream",
    answer: "Ice Cream",
    acceptedAnswers: ["ice cream", "icecream", "an ice cream", "ice-cream", "gelato"],
    type: "what",
    category: "foods",
    level: "A1",
    emoji: "🍦",
    clues: [
      "I am sweet, creamy, and very cold.",
      "I melt quickly under the warm sun.",
      "I come in flavors like chocolate, vanilla, and strawberry.",
      "You can eat me in a crispy cone or a cup."
    ],
    options: ["Ice Cream", "Cake", "Yogurt", "Pudding"],
    funFact: "Vanilla is universally the most purchased flavor of ice cream."
  },
  {
    id: "a1-obj-clock",
    answer: "Clock",
    acceptedAnswers: ["clock", "a clock", "watch", "wall clock"],
    type: "what",
    category: "objects",
    level: "A1",
    emoji: "⏰",
    clues: [
      "I have a face and two or three hands, but no eyes.",
      "I make a ticking sound as the seconds pass.",
      "You look at me to know if you are early or late.",
      "I tell you what time of day it is."
    ],
    options: ["Clock", "Mirror", "Calendar", "Phone"],
    funFact: "Before modern clocks, people used sundials, water clocks, and burning candles to track time."
  },
  {
    id: "a1-obj-umbrella",
    answer: "Umbrella",
    acceptedAnswers: ["umbrella", "an umbrella", "parasol"],
    type: "what",
    category: "objects",
    level: "A1",
    emoji: "☂️",
    clues: [
      "You open me up when the sky turns gray.",
      "I have a curved handle and a canopy made of waterproof fabric.",
      "I keep your clothes dry on rainy days.",
      "You fold me down when the rain stops."
    ],
    options: ["Umbrella", "Raincoat", "Hat", "Tent"],
    funFact: "The word umbrella comes from the Latin word 'umbra', which means shadow or shade."
  },
  {
    id: "a1-anim-cat",
    answer: "Cat",
    acceptedAnswers: ["cat", "a cat", "kitten", "kitty", "feline"],
    type: "what",
    category: "animals",
    level: "A1",
    emoji: "🐱",
    clues: [
      "I am a small and furry pet animal.",
      "I love to take long naps in warm spots.",
      "I make a purring sound when I am happy.",
      "I say 'meow' and chase after playful mice."
    ],
    options: ["Cat", "Dog", "Rabbit", "Hamster"],
    funFact: "Cats spend about 70% of their entire lives sleeping!"
  },
  {
    id: "a1-obj-book",
    answer: "Book",
    acceptedAnswers: ["book", "a book", "novel", "story book"],
    type: "what",
    category: "objects",
    level: "A1",
    emoji: "📖",
    clues: [
      "I have a spine and many paper pages, but no bones.",
      "You can find thousands of me in a library.",
      "You turn my pages one by one from left to right.",
      "You open me to read stories, facts, and adventures."
    ],
    options: ["Book", "Newspaper", "Notebook", "Letter"],
    funFact: "The longest novel ever written contains over 1.2 million words: *In Search of Lost Time* by Marcel Proust."
  },

  // ==========================================
  // LEVEL A2 (Elementary - 10 Cards)
  // ==========================================
  {
    id: "a2-job-pilot",
    answer: "Pilot",
    acceptedAnswers: ["pilot", "a pilot", "airplane pilot", "aviator"],
    type: "who",
    category: "jobs",
    level: "A2",
    emoji: "👨‍✈️",
    clues: [
      "I spend most of my working hours high above the clouds.",
      "I wear a uniform with badges and speak with air traffic control.",
      "I sit in the cockpit and operate lots of switches and screens.",
      "I fly airplanes and transport passengers safely between countries."
    ],
    options: ["Pilot", "Flight Attendant", "Astronaut", "Captain"],
    funFact: "Commercial airline pilots are trained to handle emergencies in multi-million dollar realistic flight simulators."
  },
  {
    id: "a2-job-firefighter",
    answer: "Firefighter",
    acceptedAnswers: ["firefighter", "a firefighter", "fireman", "fire woman"],
    type: "who",
    category: "jobs",
    level: "A2",
    emoji: "🧑‍🚒",
    clues: [
      "I rush to emergencies when the siren sounds at my station.",
      "I wear a heavy heat-resistant suit, boots, and a helmet.",
      "I ride a big red truck equipped with long ladders and hoses.",
      "I put out dangerous fires and rescue people and pets."
    ],
    options: ["Firefighter", "Police Officer", "Paramedic", "Lifeguard"],
    funFact: "Firefighters' suits can withstand temperatures over 1,000 degrees Fahrenheit (540°C) for short durations."
  },
  {
    id: "a2-job-photographer",
    answer: "Photographer",
    acceptedAnswers: ["photographer", "a photographer", "cameraman", "photojournalist"],
    type: "who",
    category: "jobs",
    level: "A2",
    emoji: "📷",
    clues: [
      "I have a sharp eye for lighting, angles, and beautiful moments.",
      "I carry lenses, tripods, and memory cards.",
      "I often ask people to look at me and say 'Cheese!'.",
      "I capture special memories and portraits with my camera."
    ],
    options: ["Photographer", "Painter", "Director", "Journalist"],
    funFact: "The world's first photograph was taken in 1826 by Joseph Nicéphore Niépce and required an 8-hour exposure!"
  },
  {
    id: "a2-food-chocolate",
    answer: "Chocolate",
    acceptedAnswers: ["chocolate", "a chocolate", "cocoa", "chocolate bar"],
    type: "what",
    category: "foods",
    level: "A2",
    emoji: "🍫",
    clues: [
      "I am made from roasted cacao beans.",
      "I can be dark and slightly bitter, or sweet and milky.",
      "I melt smoothly at normal human body temperature.",
      "People love receiving me as a gift in boxes on Valentine's Day."
    ],
    options: ["Chocolate", "Caramel", "Candy", "Brownie"],
    funFact: "Ancient Aztecs valued cocoa beans so much that they used them as currency!"
  },
  {
    id: "a2-food-spaghetti",
    answer: "Spaghetti",
    acceptedAnswers: ["spaghetti", "pasta", "spagetti", "noodles"],
    type: "what",
    category: "foods",
    level: "A2",
    emoji: "🍝",
    clues: [
      "I am a traditional Italian staple food made from durum wheat flour.",
      "I look like long, thin, yellow strings when dry.",
      "You boil me in salted water until I am tender and 'al dente'.",
      "People twirl me around a fork and serve me with bolognese sauce and meatballs."
    ],
    options: ["Spaghetti", "Rice", "Lasagna", "Ramen"],
    funFact: "The word 'spaghetti' comes from the Italian word 'spaghetto', which means 'thin string' or 'twine'."
  },
  {
    id: "a2-obj-bicycle",
    answer: "Bicycle",
    acceptedAnswers: ["bicycle", "a bicycle", "bike", "cycle"],
    type: "what",
    category: "objects",
    level: "A2",
    emoji: "🚲",
    clues: [
      "I am an eco-friendly vehicle that does not need gasoline or electricity.",
      "I have two wheels, a metal frame, and handlebars to steer.",
      "You sit on my saddle and wear a helmet for safety.",
      "You push my two pedals with your feet to move forward."
    ],
    options: ["Bicycle", "Motorcycle", "Scooter", "Skateboard"],
    funFact: "There are more than one billion bicycles currently in use around the planet!"
  },
  {
    id: "a2-obj-camera",
    answer: "Camera",
    acceptedAnswers: ["camera", "a camera", "digital camera", "dslr"],
    type: "what",
    category: "objects",
    level: "A2",
    emoji: "📸",
    clues: [
      "I focus incoming light through glass lenses onto a digital sensor.",
      "I have a shutter button that clicks when pressed.",
      "I help you remember vacations, parties, and family smiles forever.",
      "Almost every modern smartphone has built-in versions of me on both sides."
    ],
    options: ["Camera", "Projector", "Binoculars", "Microscope"],
    funFact: "The first digital camera was built by Kodak engineer Steven Sasson in 1975, weighing 8 pounds (3.6 kg)."
  },
  {
    id: "a2-anim-dolphin",
    answer: "Dolphin",
    acceptedAnswers: ["dolphin", "a dolphin", "bottlenose dolphin"],
    type: "what",
    category: "animals",
    level: "A2",
    emoji: "🐬",
    clues: [
      "I swim gracefully in oceans and seas, but I am a mammal, not a fish.",
      "I breathe air through a blowhole on the top of my head.",
      "I am famous for my playful leaps above the water and high intelligence.",
      "I communicate with clicks and whistles and use echolocation."
    ],
    options: ["Dolphin", "Shark", "Whale", "Seal"],
    funFact: "Dolphins sleep with one half of their brain awake and one eye open to watch for predators."
  },
  {
    id: "a2-place-library",
    answer: "Library",
    acceptedAnswers: ["library", "a library", "public library", "bookstore"],
    type: "what",
    category: "places",
    level: "A2",
    emoji: "📚",
    clues: [
      "I am a quiet public building where you should speak in whispers.",
      "My rooms are filled with tall shelves categorized by subjects.",
      "You can borrow novels, encyclopedias, and audiobooks for free.",
      "You show your membership card at the front desk to check out reading materials."
    ],
    options: ["Library", "Museum", "Bookstore", "School"],
    funFact: "The Library of Congress in Washington, D.C. is the world's largest library with over 170 million items."
  },
  {
    id: "a2-obj-sunglasses",
    answer: "Sunglasses",
    acceptedAnswers: ["sunglasses", "shades", "sun glasses", "a pair of sunglasses"],
    type: "what",
    category: "objects",
    level: "A2",
    emoji: "🕶️",
    clues: [
      "You wear me on your face on bright sunny days.",
      "I have two tinted dark lenses that filter ultraviolet light.",
      "I protect your eyes from glare and make you look stylish at the beach.",
      "You fold my two arms and store me in a protective case."
    ],
    options: ["Sunglasses", "Goggles", "Reading Glasses", "Binoculars"],
    funFact: "In 12th-century China, judges wore smoky quartz glasses not against sunlight, but to conceal their facial expressions!"
  },

  // ==========================================
  // LEVEL B1 (Intermediate - 10 Cards)
  // ==========================================
  {
    id: "b1-job-journalist",
    answer: "Journalist",
    acceptedAnswers: ["journalist", "a journalist", "reporter", "news reporter", "correspondent"],
    type: "who",
    category: "jobs",
    level: "B1",
    emoji: "📰",
    clues: [
      "I investigate current events and interview witnesses, experts, and politicians.",
      "I write articles for newspapers, magazines, or online media portals.",
      "I must follow strict ethics to verify facts and avoid spreading fake news.",
      "I report breaking stories on television news broadcasts or podcasts."
    ],
    options: ["Journalist", "Novelist", "Politician", "Lawyer"],
    funFact: "The term 'Fourth Estate' refers to journalists and the press as a crucial watchdog of democracy."
  },
  {
    id: "b1-job-architect",
    answer: "Architect",
    acceptedAnswers: ["architect", "an architect", "building designer"],
    type: "who",
    category: "jobs",
    level: "B1",
    emoji: "🏛️",
    clues: [
      "I blend artistic creativity with mathematical and structural precision.",
      "I draw detailed blueprints and 3D computerized models on CAD software.",
      "I collaborate with structural engineers, urban planners, and builders.",
      "I design the layout, appearance, and functionality of houses, skyscrapers, and bridges."
    ],
    options: ["Architect", "Interior Designer", "Civil Engineer", "Surveyor"],
    funFact: "Famous architect Antoni Gaudí designed Barcelona's Sagrada Família, which has been under construction for over 140 years."
  },
  {
    id: "b1-job-detective",
    answer: "Detective",
    acceptedAnswers: ["detective", "a detective", "investigator", "private investigator", "pi"],
    type: "who",
    category: "jobs",
    level: "B1",
    emoji: "🕵️",
    clues: [
      "I am called when a mystery or crime needs to be solved.",
      "I collect fingerprints, analyze DNA evidence, and interview suspects.",
      "I follow hidden clues and piece together timelines of suspicious events.",
      "Sherlock Holmes and Hercule Poirot are famous fictional examples of me."
    ],
    options: ["Detective", "Police Officer", "Judge", "Security Guard"],
    funFact: "The word 'clue' originally meant a ball of thread that guided people out of labyrinths in ancient mythology."
  },
  {
    id: "b1-food-sushi",
    answer: "Sushi",
    acceptedAnswers: ["sushi", "sushi roll", "maki", "nigiri", "sashimi"],
    type: "what",
    category: "foods",
    level: "B1",
    emoji: "🍣",
    clues: [
      "I originated in Japan as a method of preserving fresh seafood in fermented rice.",
      "I am prepared with seasoned vinegar rice, nori seaweed, and fresh ingredients.",
      "I am often served in rolls (maki) or delicate hand-pressed bite-sized pillows (nigiri).",
      "Diners enjoy me dipped into soy sauce accompanied by spicy green wasabi and pickled ginger."
    ],
    options: ["Sushi", "Ramen", "Dim Sum", "Dumpling"],
    funFact: "Traditional sushi chefs in Japan undergo up to 10 years of rigorous training before earning the title of 'Itamae'."
  },
  {
    id: "b1-food-croissant",
    answer: "Croissant",
    acceptedAnswers: ["croissant", "a croissant", "crescent roll"],
    type: "what",
    category: "foods",
    level: "B1",
    emoji: "🥐",
    clues: [
      "I am a golden-brown pastry famous throughout Parisian bakeries and breakfast tables.",
      "I am baked from laminated dough folded repeatedly with layers of rich pure butter.",
      "When you bite into my crisp outer shell, hundreds of delicate airy layers crumble pleasantly.",
      "I am shaped like a distinctive crescent moon."
    ],
    options: ["Croissant", "Baguette", "Brioche", "Pretzel"],
    funFact: "Although synonymous with France, the croissant was actually inspired by the Austrian 'Kipferl' in Vienna."
  },
  {
    id: "b1-obj-microwave",
    answer: "Microwave",
    acceptedAnswers: ["microwave", "microwave oven", "a microwave", "a microwave oven"],
    type: "what",
    category: "objects",
    level: "B1",
    emoji: "📻",
    clues: [
      "I am a common kitchen electrical appliance found on countertops.",
      "I use electromagnetic radiation waves to vibrate water molecules inside food.",
      "I have a revolving glass turntable and a digital timer that beeps when finished.",
      "I can reheat yesterday's leftovers or pop a bag of popcorn in just two minutes."
    ],
    options: ["Microwave", "Toaster", "Blender", "Dishwasher"],
    funFact: "The microwave was discovered accidentally in 1945 by Percy Spencer when radar equipment melted a candy bar in his pocket!"
  },
  {
    id: "b1-obj-telescope",
    answer: "Telescope",
    acceptedAnswers: ["telescope", "a telescope", "optical telescope"],
    type: "what",
    category: "objects",
    level: "B1",
    emoji: "🔭",
    clues: [
      "I am an optical instrument mounted on a sturdy tripod or sent into deep orbit.",
      "I gather and focus distant light using curved lenses or parabolic mirrors.",
      "Galileo famously pointed an early version of me toward the night sky in 1609.",
      "Astronomers peer through me to observe craters on the Moon, Saturn's rings, and distant galaxies."
    ],
    options: ["Telescope", "Microscope", "Periscope", "Kaleidoscope"],
    funFact: "The James Webb Space Telescope uses 18 gold-plated hexagonal mirrors to view galaxies formed over 13 billion years ago."
  },
  {
    id: "b1-obj-compass",
    answer: "Compass",
    acceptedAnswers: ["compass", "a compass", "magnetic compass"],
    type: "what",
    category: "objects",
    level: "B1",
    emoji: "🧭",
    clues: [
      "I am a navigational instrument enclosed in a circular dial marked with 360 degrees.",
      "I have a lightweight magnetized needle that pivots freely on a frictionless pin.",
      "I rely on Earth's invisible magnetic field rather than satellite GPS signals.",
      "My needle consistently points toward magnetic North to guide explorers and sailors."
    ],
    options: ["Compass", "Protractor", "Barometer", "Hourglass"],
    funFact: "The magnetic compass was invented in China during the Han Dynasty (circa 200 BC) initially for geomancy and fortune-telling."
  },
  {
    id: "b1-anim-chameleon",
    answer: "Chameleon",
    acceptedAnswers: ["chameleon", "a chameleon"],
    type: "what",
    category: "animals",
    level: "B1",
    emoji: "🦎",
    clues: [
      "I am a fascinating tree-dwelling reptile found primarily in Madagascar and warm forests.",
      "My two eyes can pivot and focus independently in two completely different directions at once.",
      "I have a lightning-fast elastic tongue that shoots out to catch unsuspecting insects.",
      "I can change the color and pattern of my skin to regulate temperature and communicate mood."
    ],
    options: ["Chameleon", "Gecko", "Iguana", "Salamander"],
    funFact: "Chameleons change color mainly for social signaling (courtship, dominance, aggression) rather than camouflage!"
  },
  {
    id: "b1-place-airport",
    answer: "Airport",
    acceptedAnswers: ["airport", "an airport", "airfield", "aerodrome"],
    type: "what",
    category: "places",
    level: "B1",
    emoji: "🛫",
    clues: [
      "I am a sprawling transportation complex with long concrete runways and control towers.",
      "Travelers pass through my metal detectors, baggage drop counters, and passport control gates.",
      "My departure lounges are full of duty-free shops, flight information boards, and boarding gates.",
      "Massive commercial passenger jetliners land and take off from me day and night."
    ],
    options: ["Airport", "Train Station", "Seaport", "Bus Terminal"],
    funFact: "King Fahd International Airport in Saudi Arabia is the largest airport by land area, spanning over 776 square kilometers."
  },

  // ==========================================
  // LEVEL B2 (Upper-Intermediate - 10 Cards)
  // ==========================================
  {
    id: "b2-job-archaeologist",
    answer: "Archaeologist",
    acceptedAnswers: ["archaeologist", "archeologist", "an archaeologist", "an archeologist"],
    type: "who",
    category: "jobs",
    level: "B2",
    emoji: "🏺",
    clues: [
      "I spend months conducting systematic excavation fieldwork under intense sun and dust.",
      "I carefully brush away soil layers with trowels, brushes, and sieves to avoid damaging delicate relics.",
      "I utilize carbon-14 dating and stratigraphic analysis to date ancient civilizations.",
      "I unearth lost tombs, ceramic pottery, fossilized bones, and forgotten stone monuments."
    ],
    options: ["Archaeologist", "Geologist", "Historian", "Paleontologist"],
    funFact: "Archaeologists study human history through artifacts, while paleontologists study ancient animal/plant fossils like dinosaurs."
  },
  {
    id: "b2-job-pharmacist",
    answer: "Pharmacist",
    acceptedAnswers: ["pharmacist", "a pharmacist", "chemist", "apothecary", "druggist"],
    type: "who",
    category: "jobs",
    level: "B2",
    emoji: "💊",
    clues: [
      "I possess an expert understanding of biochemistry, drug mechanisms, and therapeutic dosages.",
      "I review doctors' prescriptions to prevent dangerous pharmaceutical contraindications or allergic reactions.",
      "I counsel patients on how and when to administer complex prescription therapies.",
      "I dispense tablets, vaccines, ointments, and medical compounds from behind the pharmacy counter."
    ],
    options: ["Pharmacist", "Doctor", "Toxicologist", "Biochemist"],
    funFact: "In historical times, pharmacists were known as 'apothecaries' who mixed herbal remedies and dried plant remedies by hand."
  },
  {
    id: "b2-job-curator",
    answer: "Curator",
    acceptedAnswers: ["curator", "a curator", "museum curator", "art curator"],
    type: "who",
    category: "jobs",
    level: "B2",
    emoji: "🖼️",
    clues: [
      "I am the intellectual custodian and visionary behind cultural exhibitions and galleries.",
      "I authenticate, acquire, preserve, and catalog rare historical masterpieces and modern artworks.",
      "I compose insightful educational plaques and thematic narratives for museum visitors.",
      "I decide which precious artifacts should be displayed in the spotlight or preserved in climate-controlled vaults."
    ],
    options: ["Curator", "Librarian", "Auctioneer", "Archivist"],
    funFact: "The title 'curator' comes from the Latin 'cura', meaning 'care' or 'to take care of'."
  },
  {
    id: "b2-food-souffle",
    answer: "Soufflé",
    acceptedAnswers: ["souffle", "soufflé", "a souffle", "a soufflé"],
    type: "what",
    category: "foods",
    level: "B2",
    emoji: "🍮",
    clues: [
      "I am a notoriously temperamental French culinary masterpiece baked in a porcelain ramekin.",
      "My airy texture relies on stiffly beaten egg whites folded gently into a velvety custard or béchamel base.",
      "I dramatically puff up and rise well above the rim of the dish while baking in the oven.",
      "If exposed to sudden drafts or loud vibrations, my delicate cloud-like dome will immediately deflate and collapse."
    ],
    options: ["Soufflé", "Crème Brûlée", "Mousse", "Panna Cotta"],
    funFact: "The word 'soufflé' is the past participle of the French verb 'souffler', which translates to 'to blow' or 'to puff up'."
  },
  {
    id: "b2-food-truffle",
    answer: "Truffle",
    acceptedAnswers: ["truffle", "a truffle", "black truffle", "white truffle", "truffles"],
    type: "what",
    category: "foods",
    level: "B2",
    emoji: "🍄",
    clues: [
      "I am one of the most expensive and prized subterranean culinary delicacies in the gastronomic world.",
      "I am an ectomycorrhizal fungus that grows exclusively underground near the roots of oak and hazel trees.",
      "Trained dogs or pigs are specially employed to detect my potent, pungent earthy aroma through the soil.",
      "Chefs shave microscopic paper-thin ribbons of me over fresh pasta, risotto, or scrambled eggs."
    ],
    options: ["Truffle", "Morel", "Caviar", "Saffron"],
    funFact: "A rare 3-pound Italian white truffle once sold at a gourmet auction for over $330,000!"
  },
  {
    id: "b2-obj-stethoscope",
    answer: "Stethoscope",
    acceptedAnswers: ["stethoscope", "a stethoscope"],
    type: "what",
    category: "objects",
    level: "B2",
    emoji: "🩺",
    clues: [
      "I am an indispensable acoustic diagnostic tool frequently draped around a clinician's neck.",
      "I feature a disc-shaped resonator with a diaphragm and bell connected to rubber sound-transmitting tubes.",
      "My binaural earpieces amplify internal biological sounds directly into medical practitioners' ears.",
      "Physicians place my cold metallic disc against a patient's chest to listen to heartbeats and lung breath sounds."
    ],
    options: ["Stethoscope", "Sphygmomanometer", "Otoscope", "Thermometer"],
    funFact: "The stethoscope was invented in France in 1816 by René Laennec because he felt awkward putting his ear directly to women's chests."
  },
  {
    id: "b2-obj-metronome",
    answer: "Metronome",
    acceptedAnswers: ["metronome", "a metronome", "mechanical metronome"],
    type: "what",
    category: "objects",
    level: "B2",
    emoji: "🎼",
    clues: [
      "I am a classic practice device found perched atop acoustic grand pianos.",
      "I contain an inverted pendulum mechanism with an adjustable sliding weight that regulates cadence.",
      "I produce precise, steady acoustic pulses measured strictly in Beats Per Minute (BPM).",
      "Musicians and conductors rely on my relentless clicks to maintain flawless timing and tempo discipline."
    ],
    options: ["Metronome", "Tuning Fork", "Synthesizer", "Chronometer"],
    funFact: "Ludwig van Beethoven was one of the earliest prominent composers to enthusiastically indicate metronome marks in his musical scores."
  },
  {
    id: "b2-obj-drone",
    answer: "Drone",
    acceptedAnswers: ["drone", "a drone", "uav", "quadcopter", "unmanned aerial vehicle"],
    type: "what",
    category: "objects",
    level: "B2",
    emoji: "🛸",
    clues: [
      "I am an unmanned aerial vehicle (UAV) powered by four or more high-speed spinning propellers.",
      "I am piloted remotely via radio frequency controllers, smartphone apps, or autonomous GPS waypoints.",
      "I carry stabilized 4K gimbal cameras to capture sweeping cinematic landscape footage from the sky.",
      "I am widely utilized for package deliveries, agricultural mapping, search-and-rescue operations, and filmmaking."
    ],
    options: ["Drone", "Helicopter", "Hovercraft", "Satellite"],
    funFact: "The term 'drone' in aviation originated in the 1930s from the loud humming sound made by radio-controlled target aircraft."
  },
  {
    id: "b2-concept-bioluminescence",
    answer: "Bioluminescence",
    acceptedAnswers: ["bioluminescence", "bioluminescent", "bio luminescence"],
    type: "what",
    category: "concepts",
    level: "B2",
    emoji: "✨",
    clues: [
      "I am a mesmerizing biochemical phenomenon where living organisms produce and emit natural cold light.",
      "I occur when a pigment called luciferin undergoes chemical oxidation catalyzed by the enzyme luciferase.",
      "I illuminate deep abyssal ocean waters where daylight never penetrates, as well as nighttime summer meadows.",
      "Fireflies, glowworms, anglerfish lures, and glowing dinoflagellate algae are famous natural examples of me."
    ],
    options: ["Bioluminescence", "Fluorescence", "Phosphorescence", "Incandescence"],
    funFact: "Over 75% of deep-sea creatures possess bioluminescence, using it for camouflage, hunting prey, and attracting mates."
  },
  {
    id: "b2-concept-mirage",
    answer: "Mirage",
    acceptedAnswers: ["mirage", "a mirage", "optical illusion", "fata morgana"],
    type: "what",
    category: "concepts",
    level: "B2",
    emoji: "🏜️",
    clues: [
      "I am a naturally occurring optical phenomenon caused by the atmospheric refraction of light rays.",
      "I occur when intense ground heat causes steep temperature gradients and density variations in the air above.",
      "I deceive weary travelers in scorching deserts or on asphalt highways into seeing shimmering puddles of water.",
      "I project inverted reflections of distant skies, oasis palm trees, or ships hovering above the horizon."
    ],
    options: ["Mirage", "Hallucination", "Rainbow", "Aurora"],
    funFact: "A complex, rapidly changing superior mirage seen across bodies of water is called 'Fata Morgana', named after the sorceress Morgan le Fay."
  },

  // ==========================================
  // LEVEL C1 (Advanced - 10 Cards)
  // ==========================================
  {
    id: "c1-job-calligrapher",
    answer: "Calligrapher",
    acceptedAnswers: ["calligrapher", "a calligrapher", "lettering artist"],
    type: "who",
    category: "jobs",
    level: "C1",
    emoji: "✒️",
    clues: [
      "I practice the meditative ancient discipline of visual craftsmanship and expressive lettering.",
      "I master varied stroke weights, flourishing ligatures, and ink viscosity using broad-edge nibs and reed pens.",
      "I render bespoke typographic artistry upon handmade Japanese washi parchment and calfskin vellum.",
      "I am commissioned to draft bespoke royal wedding proclamations, formal diplomas, and religious illuminations."
    ],
    options: ["Calligrapher", "Typographer", "Engraver", "Illustrator"],
    funFact: "Steve Jobs famously credited a college calligraphy class with inspiring the gorgeous typography and variable-width fonts in the original Mac computer."
  },
  {
    id: "c1-job-sommelier",
    answer: "Sommelier",
    acceptedAnswers: ["sommelier", "a sommelier", "wine steward", "wine expert"],
    type: "who",
    category: "jobs",
    level: "C1",
    emoji: "🍷",
    clues: [
      "I possess an encyclopedic sensory literacy regarding terroir, grape varietals, vintage nuances, and tannins.",
      "I curate extensive multi-million dollar cellar inventories in Michelin-starred gastronomic establishments.",
      "I evaluate bouquet, clarity, and finish through meticulous swirling, sniffing, and tasting rituals.",
      "I orchestrate harmonious enological pairings to elevate each course of an exquisite tasting menu."
    ],
    options: ["Sommelier", "Cicerone", "Barista", "Oenologist"],
    funFact: "The Master Sommelier diploma exam has one of the highest failure rates of any professional certification in the world."
  },
  {
    id: "c1-job-actuary",
    answer: "Actuary",
    acceptedAnswers: ["actuary", "an actuary", "risk analyst"],
    type: "who",
    category: "jobs",
    level: "C1",
    emoji: "📊",
    clues: [
      "I deploy advanced stochastic calculus, probability theory, and demographic statistics to quantify uncertainty.",
      "I construct predictive mathematical models to evaluate the financial ramifications of catastrophic future events.",
      "I compute morbidity rates, mortality tables, and capital reserve requirements for major insurance conglomerates.",
      "I determine precise premium pricings and solvency ratios to shield financial institutions against fiscal ruin."
    ],
    options: ["Actuary", "Economist", "Auditor", "Underwriter"],
    funFact: "Actuaries developed the earliest life tables in the 17th century based on mortality bills from the City of London."
  },
  {
    id: "c1-food-saffron",
    answer: "Saffron",
    acceptedAnswers: ["saffron", "saffron threads", "crocus sativus"],
    type: "what",
    category: "foods",
    level: "C1",
    emoji: "🌾",
    clues: [
      "I am gram-for-gram the most costly agricultural spice cultivated in human civilization.",
      "I consist solely of the delicate crimson stigmas harvested by hand from the purple *Crocus sativus* blossom.",
      "It requires approximately 75,000 individual flowers to produce just one single pound of my dried threads.",
      "I impart an unmistakable golden-yellow hue, bittersweet floral fragrance, and regal essence to paella and Persian tahdig."
    ],
    options: ["Saffron", "Cardamom", "Vanilla", "Turmeric"],
    funFact: "Iran produces upwards of 90% of the world's total saffron harvest, prized for its exceptionally high crocin content."
  },
  {
    id: "c1-food-caviar",
    answer: "Caviar",
    acceptedAnswers: ["caviar", "caviare", "sturgeon caviar", "black caviar"],
    type: "what",
    category: "foods",
    level: "C1",
    emoji: "🥣",
    clues: [
      "I am an opulent gastronomic delicacy synonymous with aristocratic luxury and high society.",
      "I consist of unfertilized, salt-cured roe harvested specifically from wild or sustainably farmed sturgeon.",
      "Traditional etiquette demands that I never touch metallic spoons—which oxidize my flavor—so I am served with mother-of-pearl.",
      "Beluga, Osetra, and Sevruga are among the most revered and protected varieties of my glistening pearls."
    ],
    options: ["Caviar", "Foie Gras", "Uni", "Escargot"],
    funFact: "Beluga sturgeon can live for over 100 years and take up to two decades to reach sexual maturity before producing roe."
  },
  {
    id: "c1-obj-astrolabe",
    answer: "Astrolabe",
    acceptedAnswers: ["astrolabe", "an astrolabe", "planispheric astrolabe"],
    type: "what",
    category: "objects",
    level: "C1",
    emoji: "📐",
    clues: [
      "I am an intricate brass astronomical instrument regarded as the sophisticated analog computer of antiquity.",
      "I feature an engraved mater, rotating rete with stellar pointers, and an alidade for measuring celestial altitudes.",
      "I enabled Islamic Golden Age scholars and Renaissance mariners to calculate prayer times, local solar time, and latitude.",
      "By measuring the angular elevation of stars or the Sun above the horizon, I model the entire cosmic sphere."
    ],
    options: ["Astrolabe", "Sextant", "Armillary Sphere", "Sundial"],
    funFact: "Geoffrey Chaucer, the renowned author of *The Canterbury Tales*, penned a comprehensive technical manual titled *A Treatise on the Astrolabe* in 1391 for his son."
  },
  {
    id: "c1-obj-kaleidoscope",
    answer: "Kaleidoscope",
    acceptedAnswers: ["kaleidoscope", "a kaleidoscope"],
    type: "what",
    category: "objects",
    level: "C1",
    emoji: "🔮",
    clues: [
      "I am an optical tube containing two or more longitudinal mirrors tilted toward each other at precise symmetric angles.",
      "At my distal end lies an object cell filled with loose fragments of colored glass, beads, and polished pebbles.",
      "When rotated toward an ambient light source, repetitive internal reflections generate kaleidoscopic mandala patterns.",
      "My name is derived from ancient Greek words meaning 'observation of beautiful forms'."
    ],
    options: ["Kaleidoscope", "Periscope", "Prism", "Stereoscope"],
    funFact: "The kaleidoscope was invented in 1816 by Scottish physicist Sir David Brewster while conducting experiments on light polarization."
  },
  {
    id: "c1-place-labyrinth",
    answer: "Labyrinth",
    acceptedAnswers: ["labyrinth", "a labyrinth", "maze"],
    type: "what",
    category: "places",
    level: "C1",
    emoji: "🏛️",
    clues: [
      "I am an intricate architectural structure consisting of baffling meandering passages and convoluting paths.",
      "In classical Greek mythology, Daedalus engineered me at Knossos to imprison the monstrous half-bull Minotaur.",
      "Unlike a multicursal puzzle maze filled with deceptive dead ends, my unicursal classical form follows a singular winding pilgrimage to the center.",
      "Theseus navigated my treacherous corridors successfully by unraveling Ariadne's thread."
    ],
    options: ["Labyrinth", "Catacomb", "Colosseum", "Amphitheater"],
    funFact: "Historic pavement labyrinths inlaid in the stone floors of medieval cathedrals like Chartres were used for symbolic spiritual pilgrimages."
  },
  {
    id: "c1-concept-aurora-borealis",
    answer: "Aurora Borealis",
    acceptedAnswers: ["aurora borealis", "northern lights", "aurora", "the northern lights", "polar lights"],
    type: "what",
    category: "concepts",
    level: "C1",
    emoji: "🌌",
    clues: [
      "I am an ethereal atmospheric light display manifesting in high-latitude geomagnetic zones.",
      "I am generated when coronal solar winds collide with gaseous atoms in Earth's upper magnetosphere.",
      "Excited oxygen and nitrogen particles emit luminous emerald green, violet, and crimson undulating ribbons across the Arctic night sky.",
      "Indigenous folklore interpreted my dancing curtains as celestial spirits or bridges to the cosmos."
    ],
    options: ["Aurora Borealis", "Zodiacal Light", "Solar Eclipse", "Supernova"],
    funFact: "The northern version is called Aurora Borealis, while its Southern Hemisphere counterpart is named Aurora Australis."
  },
  {
    id: "c1-concept-serendipity",
    answer: "Serendipity",
    acceptedAnswers: ["serendipity", "happy accident", "fortunate coincidence"],
    type: "what",
    category: "concepts",
    level: "C1",
    emoji: "🍀",
    clues: [
      "I am the delightful faculty or occurrence of making fortunate, unanticipated discoveries by happy accident.",
      "I often manifest in scientific history, leading to revolutionary breakthroughs like penicillin, Velcro, and Post-it Notes.",
      "The English author Horace Walpole coined my term in 1754, inspired by a Persian fairy tale about three wandering princes.",
      "I describe finding something wonderfully valuable when you were not actively seeking it."
    ],
    options: ["Serendipity", "Synchronicity", "Epiphany", "Kismet"],
    funFact: "The word was inspired by the ancient Persian name for Sri Lanka: 'Sarandib' in the tale *The Three Princes of Serendip*."
  },

  // ==========================================
  // LEVEL C2 (Proficiency / Mastery - 10 Cards)
  // ==========================================
  {
    id: "c2-job-cryptographer",
    answer: "Cryptographer",
    acceptedAnswers: ["cryptographer", "a cryptographer", "cryptanalyst", "cryptologist", "codebreaker"],
    type: "who",
    category: "jobs",
    level: "C2",
    emoji: "🔐",
    clues: [
      "I operate at the vanguard of elliptic curve discrete logarithms, number theory, and quantum-resistant algorithms.",
      "I design unbreakable cryptographic ciphers and public-key infrastructure to secure global banking and sovereign communications.",
      "Historical luminaries in my discipline decrypted the Spartan scytale, Caesar cipher, and World War II's Enigma machine.",
      "I conceal plaintext data within undecipherable ciphertext to ensure confidentiality, integrity, and non-repudiation."
    ],
    options: ["Cryptographer", "Stenographer", "Lexicographer", "Paleographer"],
    funFact: "Alan Turing and his team of codebreakers at Bletchley Park built electromechanical 'Bombes' that drastically shortened WWII."
  },
  {
    id: "c2-job-cartographer",
    answer: "Cartographer",
    acceptedAnswers: ["cartographer", "a cartographer", "mapmaker", "map maker"],
    type: "who",
    category: "jobs",
    level: "C2",
    emoji: "🗺️",
    clues: [
      "I synthesize geodesy, topographical telemetry, and graphic aesthetics to translate 3D spherical topology into 2D projections.",
      "I grapple with inherent spatial distortions—such as Mercator's polar exaggeration versus Peters' equal-area fidelity.",
      "My historic predecessors inscribed warnings like 'Hic Sunt Dracones' (Here Be Dragons) across unexplored oceanic terra incognita.",
      "I delineate borders, hypsometric contours, bathymetric depths, and thematic GIS cartographic maps."
    ],
    options: ["Cartographer", "Topographer", "Hydrographer", "Demographer"],
    funFact: "The Mercator projection, designed in 1569 for nautical navigation, makes Greenland appear roughly the same size as the entire African continent, even though Africa is actually 14 times larger!"
  },
  {
    id: "c2-job-taxidermist",
    answer: "Taxidermist",
    acceptedAnswers: ["taxidermist", "a taxidermist"],
    type: "who",
    category: "jobs",
    level: "C2",
    emoji: "🦌",
    clues: [
      "I combine biological anatomy, dermatological preservation, and sculptural artistry in my meticulous workshop.",
      "I tan animal hides, treat pelts with protective chemical reagents, and sculpt anatomically flawless polyurethane mannequins.",
      "I insert lifelike glass ocular prostheses and precisely groom fur, plumage, or scales to freeze life in lifelike dynamism.",
      "My completed mounts inhabit natural history museum dioramas and trophy collections worldwide."
    ],
    options: ["Taxidermist", "Osteologist", "Taxonomist", "Embalmer"],
    funFact: "The word taxidermy translates literally from Greek as 'arrangement of skin' (taxis = arrangement, derma = skin)."
  },
  {
    id: "c2-job-horologist",
    answer: "Horologist",
    acceptedAnswers: ["horologist", "a horologist", "watchmaker", "clockmaker", "master watchmaker"],
    type: "who",
    category: "jobs",
    level: "C2",
    emoji: "⌚",
    clues: [
      "I am an artisan of haute mechanical micro-engineering who works with ruby jewels, balance springs, and tourbillons.",
      "I calibrate esoteric horological complications such as perpetual calendars, minute repeaters, and lunar phases.",
      "Through a jeweler's loupe, I hand-finish microscopic Geneva stripes, chamfered bridges, and escapement wheels.",
      "I dedicate hundreds of hours to the science and artisanal craft of measuring chronological time."
    ],
    options: ["Horologist", "Gemologist", "Numismatist", "Lapidary"],
    funFact: "A high-end mechanical grand complication watch can contain over 1,000 microscopic handmade components functioning in concert without a battery."
  },
  {
    id: "c2-food-wagyu",
    answer: "Wagyu",
    acceptedAnswers: ["wagyu", "wagyu beef", "kobe beef", "kobe"],
    type: "what",
    category: "foods",
    level: "C2",
    emoji: "🥩",
    clues: [
      "I am an extraordinarily revered culinary specialty derived from four pristine Japanese cattle bloodlines (notably Tajima).",
      "I am renowned for my kaleidoscopic intramuscular fat marbling (known as 'sashi'), scoring up to A5 BMS 12 purity.",
      "My monounsaturated fat matrix has an exceptionally low melting point that literally dissolves like butter upon the tongue.",
      "Kobe and Matsusaka are the most strictly regulated and legendary regional denominations of my succulent lineage."
    ],
    options: ["Wagyu", "Prosciutto", "Biltong", "Pastrami"],
    funFact: "Authentic Japanese Wagyu cattle are registered with individual nose prints, which are as unique as human fingerprints!"
  },
  {
    id: "c2-food-aquafaba",
    answer: "Aquafaba",
    acceptedAnswers: ["aquafaba", "chickpea water", "aqua faba", "chickpea brine"],
    type: "what",
    category: "foods",
    level: "C2",
    emoji: "🧆",
    clues: [
      "I am an ingenious plant-based culinary revelation discovered by molecular gastronomists in the mid-2010s.",
      "I consist of the viscous starchy liquid leftover from boiling or soaking legume seeds, particularly chickpeas.",
      "My unique matrix of saponins and soluble proteins mimics the foaming, emulsifying, and structural properties of egg whites.",
      "Vegan pastry chefs vigorously whip me into pristine stiff peaks to bake delicate meringues, macarons, and mousses."
    ],
    options: ["Aquafaba", "Tempeh", "Seitan", "Agar-agar"],
    funFact: "The coined term 'aquafaba' blends the Latin roots 'aqua' (water) and 'faba' (bean)."
  },
  {
    id: "c2-obj-antikythera-mechanism",
    answer: "Antikythera Mechanism",
    acceptedAnswers: ["antikythera mechanism", "the antikythera mechanism", "antikythera", "antikythera device"],
    type: "what",
    category: "objects",
    level: "C2",
    emoji: "⚙️",
    clues: [
      "I am an awe-inspiring Hellenistic mechanical artifact recovered by sponge divers from a 2,000-year-old Mediterranean shipwreck in 1901.",
      "Composed of over 30 intricate bronze differential gears and dials, historians celebrate me as the world's first analog computer.",
      "I mechanically calculated the cycles of the Metonic and Saros eclipses, planetary movements, and four-year Olympiad cycles.",
      "No technological artifact matching my mechanical sophistication reappeared in history until 14th-century European astronomical clocks."
    ],
    options: ["Antikythera Mechanism", "Phaistos Disc", "Archimedes Screw", "Baghdad Battery"],
    funFact: "Modern 3D X-ray tomography revealed tiny inscribed Greek texts hidden deep within the corroded gear plates explaining its cosmic algorithms."
  },
  {
    id: "c2-obj-barometer",
    answer: "Barometer",
    acceptedAnswers: ["barometer", "a barometer", "torricellian barometer", "aneroid barometer"],
    type: "what",
    category: "objects",
    level: "C2",
    emoji: "🌡️",
    clues: [
      "I am a fundamental meteorological instrument that measures ambient atmospheric pressure.",
      "Evangelista Torricelli, a student of Galileo, constructed my earliest mercury-filled glass column iteration in 1643.",
      "When my dial reading drops precipitously, it portends impending squalls, cyclonic storm fronts, and heavy precipitation.",
      "A rising steady mercury column indicates dry, tranquil anticyclonic fair weather."
    ],
    options: ["Barometer", "Anemometer", "Hygrometer", "Hydrometer"],
    funFact: "Standard atmospheric pressure at sea level supports a column of mercury exactly 760 millimeters (29.92 inches) high."
  },
  {
    id: "c2-concept-zeitgeist",
    answer: "Zeitgeist",
    acceptedAnswers: ["zeitgeist", "the zeitgeist", "spirit of the age"],
    type: "what",
    category: "concepts",
    level: "C2",
    emoji: "⏳",
    clues: [
      "I am an evocative philosophical loanword originating in 18th-century German idealism and Hegelian philosophy.",
      "I encapsulate the intellectual, cultural, moral, and sociological climate characteristic of a specific historical epoch.",
      "Artists, philosophers, and trendsetters both reflect and shape my ever-evolving collective consciousness.",
      "My compound literal translation means the 'spirit of the time' (Zeit = time, Geist = spirit)."
    ],
    options: ["Zeitgeist", "Weltschmerz", "Schadenfreude", "Gestalt"],
    funFact: "German philosopher Johann Gottfried von Herder popularized the concept in 1769 to explain how art is bound to the historical era in which it is created."
  },
  {
    id: "c2-concept-metamorphosis",
    answer: "Metamorphosis",
    acceptedAnswers: ["metamorphosis", "holometabolism", "transformation"],
    type: "what",
    category: "concepts",
    level: "C2",
    emoji: "🦋",
    clues: [
      "I am a profound biological process of cellular dissolution and radical anatomical transformation post-embryonic development.",
      "Within a chrysalis or cocoon, imaginal discs assemble to transmute a humble creeping larva into a winged imago.",
      "In literature, Franz Kafka immortalized me in his haunting 1915 novella about Gregor Samsa turning into an insect.",
      "Ovid chronicled mythological tales of gods and humans changing form under my namesake Latin poem."
    ],
    options: ["Metamorphosis", "Symbiosis", "Osmosis", "Photosynthesis"],
    funFact: "Inside a butterfly's pupa, the caterpillar's body largely breaks down into a nutrient-rich soup before rebuilding itself as a butterfly!"
  }
];

// Helper to get cards by level and optional category
function getCards(level = "All", category = "all") {
  let cards = [...DEFAULT_CARDS];
  
  // Check localStorage for custom user cards
  try {
    const customCards = JSON.parse(localStorage.getItem("paniz_custom_cards") || "[]");
    if (Array.isArray(customCards) && customCards.length > 0) {
      cards = [...cards, ...customCards];
    }
  } catch (e) {
    console.warn("Could not load custom cards", e);
  }

  if (level !== "All") {
    cards = cards.filter(c => c.level.toUpperCase() === level.toUpperCase());
  }

  if (category !== "all") {
    if (category === "who") {
      cards = cards.filter(c => c.type === "who");
    } else if (category === "what") {
      cards = cards.filter(c => c.type === "what");
    } else {
      cards = cards.filter(c => c.category.toLowerCase() === category.toLowerCase());
    }
  }

  return cards;
}

window.DEFAULT_CARDS = DEFAULT_CARDS;
window.getCards = getCards;
