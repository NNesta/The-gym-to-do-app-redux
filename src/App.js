import InputBox from "./components/InputBox";
import TaskCard from "./components/TaskCard";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector((state) => state.task.tasks);
  return (
    <main className="max-w-5xl mx-auto px-2">
      <h1 className="text-7xl max font-bold text-current-900 text-center">
        todos
      </h1>
      <InputBox />

      <div>
        {todoList.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </main>
  );
}

export default App;
