import ListTask from "./component/ListTask";
import TaskDetail from "./component/TaskDetail";
import logo from "./logo.svg";
import "./style/App.css";
function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="create-task">
          <div className="title d-flex align-items-center justify-content-center">
            New Task
          </div>
          <TaskDetail />
        </div>
        <div className="list-task">
          <ListTask />
        </div>
      </div>
    </div>
  );
}

export default App;
