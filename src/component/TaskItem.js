import "../style/listTask.css";
import { useDispatch } from "react-redux";
import { removeTask, updateStatusTask } from "../store/tasks";
import TaskDetail from "./TaskDetail";
import { useState } from "react";
const TaskItem = (props) => {
  const { task, index, currentTask, setCurrentTask } = props;
  const [statusTask, setStatusTask] = useState(task.status);
  const dispatch = useDispatch();
  const removeTaskById = (id) => {
    dispatch(removeTask(id));
  };
  const handleOpening = (index) => {
    if (currentTask[index].isOpened == true) {
      let tempTask = [...currentTask];
      tempTask[index].isOpened = false;
      setCurrentTask(tempTask);
      return;
    }
    const listTaskCopy = [...currentTask];
    listTaskCopy.map((item, index) => {
      item.isOpened = false;
      return item;
    });
    listTaskCopy[index].isOpened = true;
    setCurrentTask(listTaskCopy);
  };
  const handleStatusTask = (e) => {
    setStatusTask(e.target.checked);
    const body = {
      id: task.id,
      status: e.target.checked,
    };
    dispatch(updateStatusTask(body));
  };
  return (
    <>
      <div className="content-item">
        <div className="item">
          <div className="task-name">
            <input
              className="check-box"
              type="checkbox"
              checked={statusTask}
              onChange={handleStatusTask}
            />
            <span>{task.name}</span>
          </div>
          <div className="action-task">
            <button className="aqua" onClick={() => handleOpening(index)}>
              Detail
            </button>
            <button className="red" onClick={() => removeTaskById(task.id)}>
              Remove
            </button>
          </div>
        </div>
        {task.isOpened ? (
          <div
            className="content-detail"
            style={{ height: task.isOpened ? `auto` : "0px" }}
          >
            <TaskDetail task={task} />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default TaskItem;
