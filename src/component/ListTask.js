import "../style/listTask.css";
const ListTask = () => {
  return (
    <>
      <div className="tasks">
        <div className="title d-flex align-items-center justify-content-center">
          To Do List
        </div>
        <div className="content-list">
          <input type="text" name="content" placeholder="Search..." />
        </div>
      </div>
    </>
  );
};
export default ListTask;
