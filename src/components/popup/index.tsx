import { Dispatch, ReactNode } from "react";
import { Box, Container } from "./styles";

/*Interface for Popup props */
interface IProps {
  children: ReactNode;
  onClick: Dispatch<React.SetStateAction<Boolean>>;
}

/*Modal for register, login, edit and create forms*/
export const Popup = ({ children, onClick }: IProps) => {
  return (
    <>
      <Container></Container>
      <Box>
        <div className="close">
          <button className="close--button" onClick={() => onClick(false)}>
            close
          </button>
        </div>
        {children}
      </Box>
    </>
  );
};
