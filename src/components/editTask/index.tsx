import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { useTask } from "../../context/taskProvider";
import { Popup } from "../popup";
import { Form } from "./styles";

/* popup close button*/
interface IProps {
  close: () => void;
}
/*Interface for useForm schema validation */ 

interface taskCredentials {
  id: string;
  done: boolean;
  description: string;
}
export const EditTask = ({ close }: IProps) => {
  const { editTask, getId } = useTask();

  const formSchema = yup.object().shape({
    description: yup.string().notRequired(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: taskCredentials) => {
    const newData = { id: getId, description: data.description };

    editTask(newData);
  };
  return (
    <Popup onClick={close}>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2 className="task_title">Edit your task!</h2>
        <Input
          name="Name your task"
          type="text"
          register={{ ...register("description") }}
          error={
            errors.description?.message && (
              <span className="error">{errors.description?.message}</span>
            )
          }
        />
        <button type="submit">Edit task</button>
      </Form>
    </Popup>
  );
};
