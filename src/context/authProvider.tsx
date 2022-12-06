import "react-toastify/dist/ReactToastify.css";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface userProviderProps {
  children: ReactNode;
}

interface Iuser {
  email: string;
  password: string;
  accountId: string;
}

interface AuthState {
  token: string;
  user: Iuser;
}

interface signInCredentials {
  email: string;
  password: string;
}

interface registerCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface AuthContextData {
  token: string;
  signIn: (credentials: signInCredentials) => Promise<void>;
  createUser: (credentials: registerCredentials) => Promise<void>;
  signOut: () => void;
}

const UsersContext = createContext<AuthContextData>({} as AuthContextData);

const useUser = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUser must be used within an userProvider");
  }
  return context;
};

const UserProvider = ({ children }: userProviderProps) => {
  const navigate = useNavigate();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Coopers:token");
    const user = localStorage.getItem("@Coopers:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const createUser = useCallback(
    async ({
      username,
      email,
      password,
      confirmPassword,
    }: registerCredentials) => {
      await api
        .post("/user/register", {
          username,
          email,
          password,
          confirmPassword,
        })
        .then((_) => {
          signIn({ email, password });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: signInCredentials) => {
    await api
      .post("/user/login", { email, password })
      .then((res) => {
        const { token } = res.data;

        toast.success("Welcome boss!");

        localStorage.setItem("@Coopers:token", token);
        localStorage.setItem("@Coopers:user", JSON.stringify(email));

        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Coopers:token");
    localStorage.removeItem("@Coopers:user");
    navigate("/");
    setData({} as AuthState);
  }, [navigate]);

  return (
    <UsersContext.Provider
      value={{ token: data.token, signIn, signOut, createUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UserProvider, useUser };
