const { getFortune, getSuggestion } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const goalsBtn = document.getElementById("goalForm");
const goalsText = document.getElementById("goal");
const goalsButton = document.getElementById("goalsButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment").then((res) => {
    const { data } = res;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune").then((res) => {
    const { data } = res;
    alert(data);
  });
};
const postGoal = () => {
  const goalsValue = goalsText.value;
  axios.get("http://localhost:4000/api/goal", { goalsValue }).then((res) => {
    const { status } = res;
    if (status === 200) {
      alert("Your goal has been added!");
    } else {
      alert("Something went wrong");
      console.error("status cam back with status code: ${status}");
    }
  });
};
const getSuggestion = () => {
  axios.get("http://loaclhost:4000/api/goalsuggestion").then((res) => {
    const { data } = res;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
goalsBtn.addEventListener("submit", postGoal);
goalsButton.addEventListener("click", getSuggestion);
