import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, finishTask } from "../features/task";

const TaskCard = ({ id, todoText, isCompleted }) => {
  console.log({ id, todoText, isCompleted });
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  const handleComplete = () => {
    dispatch(finishTask(id));
  };
  return (
    <div className="flex items-center gap-4  border-b py-2 my-4">
      <input type="checkbox" checked={isCompleted} onChange={handleComplete} />
      <div className={`flex-1 ${isCompleted && "line-through"}`}>
        <p className="text-lg break-all">{todoText}</p>
      </div>
      <div
        onClick={handleDelete}
        className="p-2 rounded-full cursor-pointer hover:bg-gray-200"
      >
        <MdDelete size={20} className="text-red-500" />
      </div>
    </div>
  );
};

export default TaskCard;
