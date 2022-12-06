import { Header } from "../../components/header";
import { List } from "../../components/lists";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useUser } from "../../context/authProvider";
import { useTask } from "../../context/taskProvider";
import { AddTask } from "../../components/addtask";
import { EditTask } from "../../components/editTask";
import { useNavigate } from "react-router-dom";

/* Page with the user lists and tasks */
export const UserSpace = () => {
  const userLogged = localStorage.getItem("@Coopers:token");
  const navigate = useNavigate();
  const { signOut } = useUser();
  const { data, getTasks, handleAddTask, handleEditTask, addTask, isEditTask } =
    useTask();

  const [doneTask, setDoneTask] = useState(data); /*Complete tasks */
  const [todoTask, setTodoTask] = useState(data); /*Incomplete tasks */

  /* useEffect that separates complete tasks and incompletes */
  useEffect(() => {
    getTasks();
    setTodoTask(data.filter((el) => el.done === false));
    setDoneTask(data.filter((el) => el.done === true));
  }, [data, getTasks]);

  return (
    <>
    {/* if there is now user, it will be redirected to home page*/}
      {userLogged ? (
        <Container>
          {/* Toggle the popup to create a new tasks */}
          {addTask === false ? <></> : <AddTask close={handleAddTask} />}

          {/* Toggle the popup to edit a new tasks */}
          {isEditTask === false ? <></> : <EditTask close={handleEditTask} />}
          <Header onClick={() => signOut()} text="Exit" />
          <div className="list--container">
            <List
              id="todo"
              array={todoTask}
              className="to-do"
              color="#E88D39"
              text="Take a breath."
              subtext="Start doing."
              title="To-do"
              checked={false}
              readOnly={false}
              onClick={handleAddTask}
            />

            <List
              id="done"
              array={doneTask}
              className="done"
              color="#4AC959"
              text=" Congratulions!"
              subtext={`You have done ${doneTask.length} tasks`}
              title="Done"
              checked
              readOnly={false}
            />
          </div>
        </Container>
      ) : (
        <>{navigate("/")}</>
      )}
    </>
  );
};
