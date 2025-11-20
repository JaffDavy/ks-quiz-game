import { useState } from "react";
import "./App.css";
import { useQuizStore } from "./store";

function App() {
  const [count, setCount] = useState(0);
  const store = useQuizStore();

  return (
    <div className="p-10 text-white bg-gray-900 min-h-screen">
      <h1>Quiz App Debugger</h1>
      <p>Screen: {store.screen}</p>
    </div>
  );
}

export default App;
