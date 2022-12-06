import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTask } from "../../context/taskProvider";
import { Container } from "./styles";

/* interface for goal function props */
interface GoalProps {
  color: string;
  description: string;
  id: string;
  checked: boolean;
  readOnly?: boolean;
  onDragStart: any;
  onDragEnter: any;
  onDragOver: any;
}

/*task card created by user  */
export const TaskCard = ({
  color,
  description,
  id,
  checked,
  readOnly,
  onDragStart,
  onDragEnter,
  onDragOver,
}: GoalProps) => {
  const { deleteTask, editTask, handleEditTask, setGetId, setTask } = useTask();
  const [check, setCheck] = useState<boolean>(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  /* function that moves the card if the user just sign the checkbox */
  const checkBoxOn = () => {
    /* if mobile or tablet screen, it moves imediatly */
    if(window.screen.width < 1024){
      const data = {
        id: id,
        done: checked ? false : true,
        description: description,
      };
      editTask(data);
      return;
    }
    toast.success(
      "If you don't move your task, in 5 seconds it gonna move alone."
    );
    setCheck(checked ? false : true);

    setTimeout(() => {
      const data = {
        id: id,
        done: checked ? false : true,
        description: description,
      };
      editTask(data);
    }, 5000);
  };
  return (
    <Container
      color={color}
      onMouseEnter={(e) => {
        e.preventDefault();
        setTask({ id, checked, description });
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleEditTask();
          setGetId(id);
        }
      }}
      tabIndex={0}
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onClick={() => {
        handleEditTask();
        setGetId(id);
      }}
    >
      <div className="custom-checkbox">
        <input
          onChange={checkBoxOn}
          readOnly={readOnly}
          checked={check}
          id={id}
          type="checkbox"
        />
        <label htmlFor={id} />
      </div>
      <div className="goal">
        <p className="goal--name">{description}</p>
        <button
          className="goal--button"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(id);
          }}
        >
          delete
        </button>
      </div>
    </Container>
  );
};
