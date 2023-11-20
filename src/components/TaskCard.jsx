import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { deleteTask, finishTask, editTask } from "../features/task";

const TaskCard = ({ id, taskText, isCompleted }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  const handleComplete = () => {
    dispatch(finishTask(id));
  };
  const handleEdit = () => {
    dispatch(editTask({ id, editText }));
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-4  border-b py-2 my-4">
      <input type="checkbox" checked={isCompleted} onChange={handleComplete} />
      <div className={`flex-1 ${isCompleted && "line-through"}`}>
        {isEditing ? (
          <input
            ref={(input) => input && input.focus()}
            className="focus:outline-none text-lg w-full"
            type="text"
            onChange={(event) => setEditText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEdit();
              }
            }}
            value={editText}
          />
        ) : (
          <p className="text-lg break-all">{taskText}</p>
        )}
      </div>
      {isEditing ? (
        <div
          onClick={handleEdit}
          className="hover:bg-green-100 p-2 rounded-full"
        >
          <IoCheckmarkDoneCircleSharp
            size={25}
            className="bg-green-500 text-white rounded-full cursor-pointer"
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setIsEditing(true);
            setEditText(taskText);
          }}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <FiEdit size={25} />
        </div>
      )}
      <div
        onClick={handleDelete}
        className="p-2 rounded-full cursor-pointer hover:bg-red-200"
      >
        <MdDelete size={25} className="text-red-500" />
      </div>
    </div>
  );
};

export default TaskCard;
