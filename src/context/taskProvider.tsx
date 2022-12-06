import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface taskProviderProps {
  children: ReactNode;
}

interface taskContextData {
  data: Itask[];
  setData: Dispatch<SetStateAction<Itask[]>>;
  getTasks: () => Promise<void>;
  createTask: (description: IcreateTask) => Promise<void>;
  editTask: (id: IeditTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  handleEditTask: () => void;
  handleAddTask: () => void;
  setGetId: Dispatch<SetStateAction<string>>;
  setTask: any;
  task: any;
  getId: string;
  loading: boolean;
  addTask: boolean;
  isEditTask: boolean;
}
interface Itask {
  id: string;
  done: boolean;
  description: string;
}
interface IcreateTask {
  description: string;
}

interface IeditTask {
  id: string;
  done?: boolean;
  description?: string;
}

const TaskContext = createContext<taskContextData>({} as taskContextData);
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within an TaskProvider");
  }
  return context;
};
export const TaskProvider = ({ children }: taskProviderProps) => {
  const [data, setData] = useState<Itask[]>([]);
  const [loading, setLoading] = useState(false);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [isEditTask, setIsEditTask] = useState<boolean>(false);
  const [getId, setGetId] = useState("");
  const [task, setTask] = useState();

  const handleAddTask = () => {
    return addTask ? setAddTask(false) : setAddTask(true);
  };

  const handleEditTask = () => {
    return isEditTask ? setIsEditTask(false) : setIsEditTask(true);
  };

  const getTasks = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("@Coopers:token");
    await api
      .get(`tasks/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  const createTask = useCallback(
    async (data: IcreateTask) => {
      setLoading(true);

      const token = localStorage.getItem("@Coopers:token");
      await api
        .post(`tasks/create`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          toast.success("Task created with success");
          getTasks();
        })
        .catch((err) => {
          toast.error(err.response.data.messagee);
        });
    },
    [getTasks]
  );

  const editTask = useCallback(
    async (data: IeditTask) => {
      setLoading(true);

      const token = localStorage.getItem("@Coopers:token");

      const id = data.id;
      const content = { done: data.done, description: data.description };

      await api
        .patch(`tasks/edit/${id}`, content, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        })
        .then((_) => {
          getTasks();
          setIsEditTask(false);
          toast.success("Task edited with success");
        })
        .catch((err) => toast.error(err.response.data.message));
    },
    [getTasks]
  );

  const deleteTask = useCallback(
    async (id: string) => {
      setLoading(true);
      const token = localStorage.getItem("@Coopers:token");
      await api
        .delete(`tasks/delete/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        })
        .then((_) => {
          getTasks();
          toast.success("Task deleted");
        })
        .catch((err) => toast.error(err.response.data.message));
    },
    [getTasks]
  );

  return (
    <TaskContext.Provider
      value={{
        data: data,
        setData,
        getTasks,
        createTask,
        editTask,
        deleteTask,
        handleAddTask,
        handleEditTask,
        setGetId,
        setTask,
        task,
        getId,
        addTask,
        isEditTask,
        loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
