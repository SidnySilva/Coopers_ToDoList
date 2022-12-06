import { TaskCard } from "../todoTask";
import { ListContainer } from "./styles";
import { useRef } from "react";
import { useTask } from "../../context/taskProvider";
import { FaPlus } from "react-icons/fa";

/*Interface for list props validation */
interface listProps {
  title: string;
  text: string;
  subtext: string;
  id: string;
  className: string;
  color: string;
  array: any[];
  checked: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}

/* List of tasks created by user */
export const List = ({
  title,
  text,
  subtext,
  id,
  className,
  color,
  array,
  checked,
  readOnly,
  onClick,
}: listProps) => {
  const { editTask, deleteTask, task } = useTask();

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  /*On task drop, it validates where it`ve been dropped and validates it`s new position */
  const onMouseUp = (e: any) => {
    const data = e.currentTarget.className.split(" ");
    const refact =
      data[
        data.length - 1
      ]; /* capture the last part of the element class name */

    if (refact === "done") {
      /*validates the element table position */
      const data = {
        id: task.id,
        done: true,
        description: task.description,
      }; /* values captured after the drop of the element to edit it */
      editTask(data);
    } else {
      const data = { id: task.id, done: false, description: task.description };
      editTask(data);
    }
  };

  /* responsable function to clear one list */
  const eraseButtonFunction = () => {
    const param = id === "done" ? "true" : "false";
    deleteTask(param);
  };

  return (
    <ListContainer
      onDrop={(e) => onMouseUp(e)}
      color={color}
      className={className}
      onDragStart={() => (dragItem.current = 1)}
      onDragEnter={() => (dragOverItem.current = 1)}
      onDragOver={(e:any) => e.preventDefault()}
    >
      {id === "todo" ? (
        <button className="add_task" onClick={onClick}>
          <FaPlus />
        </button>
      ) : (
        <></>
      )}

      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
      <p className={`${className}-subtext`}>{subtext}</p>
      <ul color={color} className="cards" id={id}>
        {array.map((el, index) => {
          return (
            <TaskCard
              key={el.id}
              checked={checked}
              readOnly={readOnly}
              id={el.id}
              color={color}
              description={el.description}
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragOverItem.current = index)}
              onDragOver={(e: Event) => e.preventDefault()}
            />
          );
        })}
      </ul>

      <button onClick={eraseButtonFunction} className="erase--button">
        erase all
      </button>
    </ListContainer>
  );
};
