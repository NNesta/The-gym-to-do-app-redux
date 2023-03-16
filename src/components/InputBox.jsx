import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task";
import { nanoid } from "nanoid";

const InputBox = () => {
  const [todoText, setTodoText] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInvalidInput(false);
    setTodoText(event.target.value);
  };
  const handleAdd = () => {
    if (todoText) {
      dispatch(addTask({ todoText, isCompleted: false, id: nanoid() }));
      setTodoText("");
    } else {
      setInvalidInput(true);
    }
  };

  return (
    <div
      className={`flex items-center justify-between shadow-3xl m-4 rounded-full px-4 ${
        invalidInput && "border-red-500 border"
      }`}
    >
      <input
        onChange={handleChange}
        value={todoText}
        className="px-4 py-2 focus:outline-none flex-1"
        placeholder="add todoText..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAdd();
          }
        }}
      />

      {todoText && (
        <BsPlusCircleFill
          onClick={handleAdd}
          className="text-current-500 text-xl hover:scale-110 cursor-pointer"
        />
      )}
    </div>
  );
};

export default InputBox;
