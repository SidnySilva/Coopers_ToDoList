import tatiana from "../../assets/tatiana.png";
import envelop from "../../assets/envelop.png";
import * as yup from "yup";
import { Container, Form } from "./styles";
import { useMessage } from "../../context/messagesProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../input";
import { InputContainer } from "../input/styles";

/*Interface for useForm schema validation */

interface messageCredentials {
  username: string;
  email: string;
  telephone: string;
  message: string;
}

export const GetInTouch = () => {
  const { createMessage } = useMessage();

  const formSchema = yup.object().shape({
    username: yup.string().notRequired().nullable(),
    email: yup
      .string()
      .email("Insert a valid e-mail, ex: user@email.com")
      .required("Email is necessary"),
    telephone: yup
      .string()
      .required("Telephone to contact is required")
      .matches(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
        "Telephone format: (xx) 9xxxx-xxxx"
      ),
    message: yup.string().required("Insert your message").max(500),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<messageCredentials>({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data: messageCredentials) => {
    createMessage(data);
  };

  /* responsble for implementation of regex for each character typed */
  const handlePhone = (event: any) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };
  /* Telephone regex mask to format (xx) 9xxxx-xxxx */
  const phoneMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  return (
    <Container>
      <img
        className="tatiana-image"
        src={tatiana}
        alt="A woman at a computer"
      />
      <div className="greenBar"></div>
      <div className="getInTouch--box">
        <div className="title">
          <img className="envelop" src={envelop} alt="Envelope" />
          <h3>
            GET IN <br /> <b>TOUCH</b>
          </h3>
        </div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            id="username"
            name="Your name"
            type="text"
            placeholder="type your name here..."
            register={{ ...register("username") }}
            error={
              errors.username?.message && (
                <span className="error">{errors.username?.message}</span>
              )
            }
          />
          <div className="center">
            <Input
              id="email"
              name="Email*"
              type="email"
              placeholder="example@example.com"
              register={{ ...register("email") }}
              error={
                errors.email?.message && (
                  <span className="error">{errors.email?.message}</span>
                )
              }
            />

            <Input
              id="telephone"
              name="Telephone*"
              type="text"
              placeholder="(  ) ____-____"
              register={{ ...register("telephone") }}
              error={
                errors.telephone?.message && (
                  <span className="error">{errors.telephone?.message}</span>
                )
              }
              onChange={handlePhone}
              maxLength="15"
            />
          </div>
          <InputContainer className="message--box">
            <span>Message*</span>
            <textarea
              placeholder="Type what you want to say to us..."
              id="message"
              {...register("message")}
            ></textarea>
            {errors.message?.message && (
              <span className="error">{errors.message?.message}</span>
            )}
          </InputContainer>
          <button type="submit">SEND NOW</button>
        </Form>
      </div>
    </Container>
  );
};
