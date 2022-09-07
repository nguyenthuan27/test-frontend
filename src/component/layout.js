import ListTask from "./ListTask";
import TaskDetail from "./TaskDetail";

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;