const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require('./controller')


app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/wonders", (req, res) => {
  const wonders = [ 'Great Pyramid of Giza, Giza Necropolis, Egypt',
      'Great Wall of China, China',
      'Petra, Maan Jordan',
      'Colosseum, Rome, Italy',
      'Chichen Itza, Yucatan, Mexico',
      'Machu Picchu, Cuzco Region, Peru',
      'Taj Mahal, Uttar Pradesh, India',
      'Christ the Redeemer, Rio de Janeiro, Brazil',

  ];

  let randomWIndex = Math.floor(Math.random() * wonders.length);
  let randomWondCompliment = wonders[randomWIndex];
  res.status(200).send(randomWondCompliment); 
});

app.get("/api/inspo", (req, res) => {
  const fortune = [ `"Be yourself; everyone else is already taken" - Oscar Wilde`,
  `"Be the change that you wish to see in the world" - Mahatma Gandhi`,
  `"Live as if you were to die tomorrow.  Learn as if you were to live forever" - Mahatma Gandhi`,
  `"The opposite of love is not hate, it's indefference.  THe opposite of art is not ugliness, it's indefference.  The opposite of faith is not heresy, it's indefference.  And the opposite of life is not death, it's indefference." - Elie Wiesel`,
  `"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world" - Albert Einstein`,

  ];

  let randomIIndex = Math.floor(Math.random() * fortune.length);
  let randomWCompliment = fortune[randomIIndex];
  res.status(200).send(randomWCompliment); 
});



app.get("/api/fortune", (req, res) => {
  const fortune = ['Fortune favors the brave',
      'There is no greater pleasure than seeing your loved ones prosper',
      'Your ability for accomplishment will follow with success',
      'Joys are often the shadows, cast by sorrows',
      'Now is the time to try something new',
      'u r gr8',
  ];

  let randomFIndex = Math.floor(Math.random() * fortune.length);
  let randomCompliment = fortune[randomFIndex];
  res.status(200).send(randomCompliment); 
});

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment); 
});

app.get("/api/rFact", (req, res) => {
  const rndmFacts = [
    'A narhwals tusk reveals its past living conditions',
    'The first person convicted of speeding was going 8 mph',
    'The world wastes about 1 billion metric tons of food each year',
    'The worlds smallest reptile was discovered in 2021',
    'The moon has moonquakes',
    'A frog can hold its pee in for up to eight months',
    'Rabbits cant throw up'
  ];
  
  let randomFactIndex = Math.floor(Math.random() * rndmFacts.length);
  let randomFact = rndmFacts[randomFactIndex];
  res.status(200).send(randomFact); 
});


app.listen(4000, () => console.log("Server running on 4000"));
