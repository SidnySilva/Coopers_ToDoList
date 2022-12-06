import { InputContainer } from "./styles";

/*Interface for input props validation */
interface IProps {
  name: string;
  type: string;
  register: any;
  error: any;
  placeholder?: string;
  id?: string;
  maxLength?: string;
  onChange?: (value: string) => void;
}

/*Input component */
export const Input = ({
  name,
  type,
  register,
  error,
  placeholder,
  id,
  maxLength,
  onChange,
}: IProps) => {
  return (
    <InputContainer>
      <span>{name}</span>
      <div>
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
      {error ? error : <span></span>}
    </InputContainer>
  );
};
