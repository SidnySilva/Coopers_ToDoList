import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import * as yup from "yup";
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
  description: string;
}


export const AddTask = ({ close }: IProps) => {
  const { createTask } = useTask();

  const formSchema = yup.object().shape({
    description: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: taskCredentials) => {
    createTask(data);
  };
  return (
    <Popup onClick={close}>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2 className="task_title">Create your task!</h2>
        <Input
          name="Name your task:"
          type="text"
          register={{ ...register("description") }}
          error={
            errors.description?.message && (
              <span className="error">{errors.description?.message}</span>
            )
          }
        />
        <button type="submit">Create task</button>
      </Form>
    </Popup>
  );
};
