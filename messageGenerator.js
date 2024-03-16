const fact = ["Australia is wider than the moon.","Venus is the only planet to spin clockwise.","Allodoxaphobia is the fear of other people’s opinions.",
"Human teeth are the only part of the body that cannot heal themselves.","Competitive art used to be an Olympic sport.","The first person processed at Ellis Island was a 15-year-old girl from Ireland.",
"Google Images was created after Jennifer Lopez wore the green dress at the 2000 Grammys.","Lemons float, but limes sink.","The Eiffel Tower was originally made for Barcelona.",
"It would take 19 minutes to fall to the center of the Earth.","The real name for a hashtag is an octothorpe.","Neil Armstrong’s hair was sold in 2004 for $3,000.",
"The longest English word is 189,819 letters long.","The tiny pocket in jeans was designed to store pocket watches.","People once ate arsenic to improve their skin.","“The Terminator” script was sold for $1.",
"Penicillin was first called “mold juice.”","A fear of long words is called Hippopotomonstrosesquippedaliophobia.","The quickest commercial flight in the world is in Scotland.",
"The first commercial passenger flight lasted only 23 minutes.","No number before 1,000 contains the letter A.","There were active volcanoes on the moon when dinosaurs were alive.",
"Sudan has more pyramids than any country in the world.","The circulatory system is more than 60,000 miles long.","The Pope can’t be an organ donor.","The world’s longest concert lasted 453 hours.",
"It’s impossible to hum while holding your nose.","Africa is the only continent in all four hemispheres.","All mammals get goosebumps.","Japan has one vending machine for every 40 people.",
"McDonald’s once made bubblegum-flavored broccoli.","Finland has more saunas than cars.","The longest time someone has spent holding their breath underwater is 24 minutes and 37 seconds.",
"Bats are the only flying mammals. ","Tomatoes are a fruit, not a vegetable. ","Chihuahuas are the smallest dog breed. ","Snakes smell with their tongue.","Buzz Lightyear’s original name was Lunar Larry.",
"A chicken once lived for 18 months without its head. ","Ketchup was once sold as medicine. ","A sheep was the first animal to be cloned. ","Jupiter is the largest planet in the solar system. ",
"The closest planet to the sun is mercury.","A mile is 5,280 feet long. ","Platypuses sweat milk.","Massachusetts is the home of basketball and volleyball. ","Bananas glow blue under black lights.",
"A woman in the United Kingdom called the police when her ice cream didn’t have enough sprinkles.","Russia has 11 time zones.","Japan released sushi-inspired Kit Kats.","Comets smell like rotten eggs. ",
"Vatican City is the smallest country in the world.","Bees can fly higher than Mount Everest.","Cap’n Crunch’s full name is Horatio Magellan Crunch.","President Theodore Roosevelt had a pet hyena.",
"The Hollywood sign used to say Hollywoodland.","Peanuts aren’t a type of nut.","Blue whale tongues can weigh as much as an elephant.","Skin is the body’s largest organ.",
"The unicorn is the national animal of Scotland.","Fingernails grow faster than toenails.","Giraffe tongues can be 20 inches long.","Shrimp’s hearts are located in their heads.",
"The Burj Khalifa in Dubai is the world’s tallest building. ","The largest continent in the world is Asia. ","The fastest animal is a cheetah. ","Ants don’t have lungs.",
"There’s a planet made almost entirely of diamonds.","Rhode Island is the smallest state in the United States. ","Australia is home to the Great Barrier Reef. ",
"The largest animal in the world is the blue whale. ","Sea otters sleep while holding hands."];
const joke = ["What did one hat say to the other? You stay here. I'll go on ahead.","Where do pirates get their hooks? Secondhand stores.","Knock knock. Who's there? Boo. Boo who? Don't cry, I'm only joking!",
"What did the pirate say when he turned 80? Aye matey.","What do you call two birds in love? Tweethearts!","Why did the picture go to jail? Because it was framed.","What do you call a sad cup of coffee? Depresso.",
"Irish puns are the most O'ffensive.","I went to buy some camo pants but couldn’t find any.","Knock knock. Who's there? Adore. Adore who? Adore is between us, so please open up.",
"How do you organize a space party? You planet.","How did the telephone propose to his girlfriend? He gave her a ring.","What do horses say when they fall? Help, I’ve fallen and I can’t giddy up.",
"If a parsley farmer gets sued, can they garnish his wages?","Knock knock. Who's there? Candice. Candice who? Candice joke get any worse?","I couldn't figure out why the baseball kept getting larger. Then it hit me.",
"What runs but never goes anywhere? A refrigerator.","What do you call a beehive without an exit? Unbelievable.","What did the cucumber say to the pickle? You mean a great dill to me.","Why don’t we see elephants hiding in trees? Because they’re really good at it.",
"6:30 is the best time on a clock, hands down.","Which is faster, hot or cold? Hot, because you can catch a cold.","What did the tomato say to the other tomato during a race? Ketchup.","Knock, knock. Who’s there? Iva. Iva who? I’ve a sore hand from knocking.",
"What did one ocean say to the other ocean? Nothing, they just waved.","If attacked by a mob of clowns, go for the juggler.","Why can’t you trust duck doctors? They’re all quacks.",
"Knock, knock. Who’s there? Wooden shoe. Wooden shoe who? Wooden shoe like to hear another joke?","What’s the difference between a hippo and a zippo? One’s pretty heavy and the other’s a little lighter.",
"What do you call a ghost's sweetheart? A ghoul-friend.","Why can't a leopard hide? Because he's always spotted.","The rotation of Earth really makes my day.","A termite walks into the bar and asks, ”Is the bar tender here?”",
"Why are the Irish so wealthy? Because their capital is always Dublin.","Knock, knock. Who’s there? Cher. Cher who? Cher would be nice if you opened the door.","What do you call an alligator detective? An investi-gator.",
"Did you hear the one about the roof? Never mind, it's over your head.","If at first you don't succeed, then skydiving isn't for you.","Why didn't the melons get married? Because they cantaloupe.","I just flew into town and my arms are so tired.",
"How do you stop a bull from charging? Cancel its credit card.","I always wanted to be a doctor, but I didn't have the patients.","How you fix a broken pumpkin? With a pumpkin patch.","Knock, knock. Who’s there? Wa. Wa who? What are you so excited about?",
"Never buy anything with Velcro. It’s a total rip-off.","I was going to tell a time-traveling joke, but you didn't like it.","I buy all my guns from a guy called T-Rex. He’s a small arms dealer.","Why is the mushroom always invited to parties? He's a fungi.",
"I'm on a seafood diet: When I see food, I eat it.","What did the full glass say to the empty glass? You look drunk.","What did the snail riding on the turtle's back say? Wheeeeee!","Why are skeletons so calm? Because nothing gets under their skin.",
"Did you hear about the guy whose whole left side got amputated? He’s all right now.","What do you call a boomerang that won’t come back? A stick.","Knock, knock. Who’s there? Wooden shoe. Wooden shoe who? Wooden shoe like to hear another joke?",
"How does a rancher keep track of his cattle? With a cow-culator.","Geology rocks, but geography’s where it’s at.","Did you hear about the man who fell into an upholstery machine? He's fully recovered.",
"Did you hear the rumor about butter? Well, I'm not going to go spreading it!","Why don't sharks eat clowns? Because they taste funny.","Where do cows go on Friday nights? To the moo-vies.","Why don't lobsters like to share? They're shellfish.",
"Why don’t eggs tell jokes? They’d crack each other up.","One of the cows didn’t produce milk today. It was an udder failure.","A horse walks into a bar. The bartender says, 'Why the long face?'","What do you call a shoe made from a banana? A slipper.",
"Knock, knock. Who’s there? Banana. Banana who? Knock, knock. Who’s there? Banana. Banana who? Knock, knock. Who’s there? Orange. Orange who? Orange you glad I didn’t say banana?","What do you get from a pampered cow? Spoiled milk.",
"Why couldn't the pony talk? Because she was just a little hoarse.","What do you call a bee that can't make up its mind? A Maybe.","What do you call a bear without any teeth? A gummy bear.","What's a ninja's favorite type of shoes? Sneakers.",
"What did the two pieces of bread say on their wedding day? It was loaf at first sight.","A cheese factory exploded in France. Da brie was everywhere.","Knock, knock. Who’s there? Ida. Ida who? I think it’s pronounced Idaho."];
const wishes = ["Congratulations and good luck with everything!","Good luck! Wishing you nothing but the best.","Best of luck with everything that lies ahead.","Good luck, my dear!","You earned this. Good luck!","Good luck with everything—you’ve got this.","Good luck today!","Wishing you all the best with your endeavors.","Sending you lots of luck today and every day.","Good luck—I believe in you!","Wishing you good luck and sending you good vibes.","Best of luck, pal!","May good luck and good fortune follow you.","I’m so happy for you—best of luck, my friend!","Good luck on all your new adventures.","You’re going to crush it—good luck!","Crossing my fingers for you. Good luck!","Can’t wait to watch you win—good luck.","Good luck—I just know you’re going to succeed.","I’m so excited for you. Good luck!","Good luck, and may you have the best experience possible.","Good luck on your upcoming journey.","Wishing you the very best!","Good luck and best wishes.","Good luck on your path ahead!","I’m beyond proud of everything you’ve accomplished. Good luck—I’m rooting for you!","Good luck to the sweetest and most hardworking person I know. You’ve got this!","Good luck, my friend—may your adventures be grand and your worries be small.","You’re going to do so many great things, and I can’t wait to see you thrive. Good luck, rock star.","Good luck—you’re a special soul who deserves nothing but the best!","You deserve all this and more, my friend. Good luck with all that’s on your path.","Good luck! Whatever you do, you’ll do it with grace and excellence.","It’s your time. Good luck, and may the path to greatness be filled with grand adventures.","Good luck, dear—I hope this is everything you’ve ever wanted and more!","Go forth and shine bright in all you do. Good luck!","Fabulous things lie ahead. Good luck and enjoy–you deserve it.","Always remember that you are strong, brave and can do anything you put your mind to. Good luck!","Good luck with your latest excursion—may it be as lovely as you are.","You’ve worked so hard to get to this moment. Soak it all in and enjoy. Best of luck for what lies ahead!","Don’t ever doubt yourself—you’re right where you need to be, and everything will fall into place. Good luck with everything, my friend.","Good luck! Seize the day and give it everything you’ve got.","Believe in yourself and the rest will fall into place. Wishing you nothing but good luck for the future!","Sending heaps of good luck your way! I know you’re going to crush this. Can’t wait to hear all the details.","Wishing the best of luck to one of the greatest people I know. Enjoy this time and all that comes with it.","Good luck as you pave your own golden path to greatness.","I know this is everything you’ve ever wanted, and I’m honored to watch you get it. Good luck!","Good luck to a dear friend and phenomenal person. May your future be as bright as your smile!","My heart swells with pride just thinking of all you’ve accomplished and all you’re going to do. Good luck—your future awaits.","Good luck and go forward with confidence and elegance, my dear.","Best wishes and good luck with what comes next. Whatever the outcome is, know I’ve got your back!"]

const randNumber = () => Math.floor(Math.random() * 75);
const randWishNumber = () => Math.floor(Math.random() * 50);

const genFact = () => {
    var dispFact = fact[randNumber()];
    return "Fact of the day: " + dispFact;
}

const genJoke = () => {
    var dispJoke = fact[randNumber()];
    return "Joke of the day: " + dispJoke;
}

const genWish = () => {
    var dispWish = fact[randWishNumber()];
    return "Here is your message for the day: " + dispWish;
}

const genMessage = () => {
    return genFact() +"\n"+ genJoke() + "\n" + genWish();
}

console.log(genMessage());