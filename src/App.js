import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  ErrorWrap,
  FormInputMessage,
  FormButton,
} from "./ContactFormElements";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //ini dengan cara ke google sheet

  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const { name, email, phone, message } = data;

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       "https://v1.nocodeapi.com/mfikri_/google_sheets/AbjCYjUIBePJWqnU?tabId=Sheet1",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify([
  //           [name, email, phone, message, new Date().toLocaleString()],
  //         ]),
  //       }
  //     );
  //     await response.json();
  //     setData({ ...data, name: "", email: "", phone: "", message: "" });
  //     toast.success("Success send message", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log("success");
  //   } catch (err) {
  //     toast.error(err, {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log(err);
  //   }
  // };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form
              action="#"
              // name="stj-contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormH1>Let's Talk</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                // name="name"
                // value={name}
                // onChange={handleChange}
                {...register("name", { required: true })}
              />
              <ErrorWrap>{errors.name && "You must enter your name"}</ErrorWrap>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="text"
                // name="email"
                // value={email}
                // onChange={handleChange}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "this needs to be a valid email address",
                  },
                })}
              />
              <ErrorWrap>
                {errors.email && "You must enter your email address"}
              </ErrorWrap>
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <FormInput
                type="phone"
                // name="phone"
                // value={phone}
                // onChange={handleChange}
                {...register("phone", { required: false })}
              />
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormInputMessage
                type="message"
                // name="message"
                // value={message}
                // onChange={handleChange}
                {...register("message", { required: true })}
              />
              <ErrorWrap>
                {errors.message && "You must enter your message"}
              </ErrorWrap>
              <FormButton type="submit">Send</FormButton>
              {/* <ToastContainer /> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default App;
