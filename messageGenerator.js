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
const randNumber = () => Math.floor(Math.random() * 75);

const genFact = () => {
    var dispFact = fact[randNumber()];
    return "Fact of the day: " + dispFact;
}

console.log(genFact());