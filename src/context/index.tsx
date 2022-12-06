import { ReactNode } from "react";
import { UserProvider } from "./authProvider";
import { MessageProvider } from "./messagesProvider";
import { TaskProvider } from "./taskProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <MessageProvider>
        <TaskProvider>{children}</TaskProvider>
      </MessageProvider>
    </UserProvider>
  );
};
