import { useEffect, useState } from "react";
import "../style/task.css";
import { useDispatch } from "react-redux";
import { addNewTask, updateTask } from "../store/tasks";
import { v4 as newId } from "uuid";
const TaskDetail = (props) => {
  const { task } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const add = () => {
    if (!name) return alert("Please add task name");
    const newTask = {
      id: newId(),
      name: name,
      description: description,
      date: date,
      priority: priority,
      status: false,
    };
    dispatch(addNewTask(newTask));
    setName("");
    setDescription("");
    alert("Add new task success");
  };
  const update = () => {
    const taskDetail = {
      id: task.id,
      name: name,
      description: description,
      date: date,
      priority: priority,
    };
    dispatch(updateTask(taskDetail));
    alert("Update task success");
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  useEffect(() => {
    if (task) {
      setName(task.name);
      setDate(task.date);
      setDescription(task.description);
      setPriority(task.priority);
    }
  }, [task]);
  return (
    <>
      <div className="task">
        <div className="form">
          <input
            type="text"
            required
            name="taskName"
            placeholder="Add new task..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <div>
            <label>Description</label>
            <br />
            <textarea
              name="description"
              id="description"
              cols="50"
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="content-bottom w d-flex justify-content-space-between">
            <div className="due-date">
              <label>Due Date</label>
              <br />
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleDate}
              />
            </div>
            <div className="priority">
              <label>Priority</label>
              <br />
              <select
                name="priority"
                value={priority}
                defaultValue="normal"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="hight">Hight</option>
              </select>
            </div>
          </div>
          {task ? (
            <button type="submit" className="btn-add" onClick={() => update()}>
              Update
            </button>
          ) : (
            <button type="submit" className="btn-add" onClick={() => add()}>
              Add
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default TaskDetail;
