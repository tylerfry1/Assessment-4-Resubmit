const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  postGoal,
  getSuggestion,
  getEncouragement,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goal", postGoal);
app.get("/api/goalsuggestion", getSuggestion);
app.get("/api/encouragement", getEncouragement);

app.listen(4000, () => console.log("Server running on 4000"));
