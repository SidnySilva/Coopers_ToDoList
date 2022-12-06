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

interface messageProviderProps {
  children: ReactNode;
}

interface messageContextData {
  data: Imessage[];
  setData: Dispatch<SetStateAction<Imessage[]>>;
  getMessages: () => Promise<void>;
  createMessage: (data: Imessage) => Promise<void>;
  loading: boolean;
}

interface Imessage {
  username: string;
  email: string;
  telephone: string;
  message: string;
}

const MessageContext = createContext<messageContextData>(
  {} as messageContextData
);
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within an MessageProvider");
  }
  return context;
};
export const MessageProvider = ({ children }: messageProviderProps) => {
  const [data, setData] = useState<Imessage[]>([]);
  const [loading, setLoading] = useState(false);

  const getMessages = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("@GN:token");
    await api
      .get(`/messages`, {
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

  const createMessage = useCallback(async (data: Imessage) => {
    setLoading(true);
    const token = localStorage.getItem("@GN:token");
    await api
      .post(`/messages`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((_) => {
        toast.success("message created with success");
      })
      .catch((err) => {
        toast.error(err.response.data.messagee);
      });
  }, []);

  return (
    <MessageContext.Provider
      value={{
        data: data,
        setData,
        getMessages,
        createMessage,
        loading,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
