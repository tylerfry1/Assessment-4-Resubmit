const goals = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortune = [
      "A faithful friend is a strong defense",
      "A lifetime of happiness lies ahead of you",
      "A soft voice may be awfully persuasive",
      "Adventure can be real happiness",
      "Any day above ground is a good day",
    ];
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];

    res.status(200).send(randomFortune);
  },
  postGoal: (req, res) => {
    const { goalsValue } = req.body;
    if (goalsValue) {
      goals.push(goalsValue);
      res.status(200).send(goalsValue);
      return;
    }
    res.status(400).send("No Goal was submitted");
  },
  getSuggestion: (req, res) => {
    const goalSuggestion = [
      "Master a difficult skill ",
      "Read two books every month ",
      "Expand your vocabulary ",
      "Learn how to code",
    ];
    let randomIndex = Math.floor(Math.random() * goalSuggestion.length);
    let randomGoal = goalSuggestion[randomIndex];
    res.status(200).send(randomGoal);
  },

  getEncouragement: (req, res) => {
    const encouragement = [
      "Hang in there",
      "Don't give up",
      "Keep pushing",
      "Keep fighting",
      "Stay strong",
    ];
    let randomIndex = Math.floor(Math.random() * encouragement.length);
    let randomEncouragement = encouragement[randomIndex];
    res.status(200).send(randomEncouragement);
  },
};
