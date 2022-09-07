import "../style/listTask.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removeTaskByStatus } from "../store/tasks";
import TaskItem from "./TaskItem";
const ListTask = () => {
  const dispatch = useDispatch();
  const [listTask, setListTask] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);
  const tasks = useSelector((state) => state.tasks.value);
  useEffect(() => {
    if (tasks) {
      const listNewTask = tasks.map((item) => {
        return {
          ...item,
          isOpened: false,
        };
      });
      const sortByDate = listNewTask.sort((a, b) => {
        let c = new Date(a.date);
        let d = new Date(b.date);
        return c - d;
      });
      setCurrentTask(sortByDate);
      setListTask(sortByDate);
    }
  }, [tasks]);
  const handlerSearch = (e) => {
    const newData = listTask.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCurrentTask(newData);
  };
  const remove = () => {
    console.log("vao");
    dispatch(removeTaskByStatus());
  };

  return (
    <>
      <div className="tasks">
        <div className="title d-flex align-items-center justify-content-center">
          To Do List
        </div>
        <div className="search">
          <input
            type="text"
            name="content"
            placeholder="Search..."
            onChange={handlerSearch}
          />
        </div>
        <div className="list-task">
          {currentTask.map((value, index) => {
            return (
              <TaskItem
                task={value}
                index={index}
                key={index}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
              />
            );
          })}
        </div>
        <div className="bulk-action">
          <span>Bulk Action:</span>
          <div className="action">
            <button className="aqua">Done</button>
            {tasks.filter((item) => item.status === true).length > 0 ? (
              <button className="red" onClick={remove}>
                Remove
              </button>
            ) : (
              <button className="gray">Remove</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListTask;
