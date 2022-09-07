import { useState } from "react";
import "../style/task.css";
const TaskDetail = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      name: name,
      description: description,
      date: date,
      priority: priority,
    };
    console.log(newTask);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div className="task">
        <form onSubmit={addNewTask}>
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
                defaultValue="normal"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="hight">Hight</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-add">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default TaskDetail;
