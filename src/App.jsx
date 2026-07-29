import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (choice) => {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("🤝 It's a Draw!");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("🎉 You Win!");
      setUserScore(userScore + 1);
    } else {
      setResult("💻 Computer Wins!");
      setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="container">
      <h1>✊ Rock Paper Scissors ✋</h1>

      <div className="buttons">
        <button onClick={() => playGame("Rock")}>🪨 Rock</button>
        <button onClick={() => playGame("Paper")}>📄 Paper</button>
        <button onClick={() => playGame("Scissors")}>✂️ Scissors</button>
      </div>

      <div className="result">
        <h3>Your Choice: {userChoice}</h3>
        <h3>Computer Choice: {computerChoice}</h3>

        <h2>{result}</h2>

        <div className="score">
          <h3>You: {userScore}</h3>
          <h3>Computer: {computerScore}</h3>
        </div>
      </div>

      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;