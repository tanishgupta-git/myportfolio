import React, { useState } from "react";
import "./contact.css";
import { Fade } from "react-awesome-reveal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { IContactSubmission } from "./types";

const Contact = () => {
  const [success, Setsuccess] = useState("");
  const [error, Seterror] = useState("");
  const [sending, Setsending] = useState(false);
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const ContactSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name cannot exceed 50 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
    message: Yup.string()
      .min(2, "Message must be at least 2 characters long")
      .max(2000, "Message cannot exceed 2000 characters")
      .required("Please enter your message"),
  });

  const handleSubmit = async (values: IContactSubmission) => {
    Setsuccess("");
    Seterror("");
    Setsending(true);
    console.log("here is your access key", process.env.NEXT_PUBLIC_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        username: values.username,
        email: values.email,
        message: values.message,
      }),
    });
    const result: any = await response.json();
    console.log("here is the result for you", result);
    if (result.success) {
      Setsuccess("Thank you! Your message has been successfully sent.");
      Seterror("");
      Setsending(false);
    } else {
      Seterror("Error in submitting the form,try again later");
      Setsuccess("");
      Setsending(false);
    }
  };
  return (
    <Fade direction="up" triggerOnce>
      <div className="contact" id="contact">
        <h1 className="section__heading">Contact</h1>
        <Formik
          initialValues={{
            username: "",
            message: "",
            email: "",
          }}
          validationSchema={ContactSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values: IContactSubmission) => {
            handleSubmit(values);
          }}
        >
          <Form className="contact__form">
            {success && (
              <p className="contact__message contact__message--success">
                {success}
              </p>
            )}
            {error && (
              <p className="contact__message contact__message--error">
                {error}
              </p>
            )}
            <input type="hidden" name="form-name" value="contact" />
            <ErrorMessage name="username">
              {(msg) => <p className="contact__message--field_error">{msg}</p>}
            </ErrorMessage>
            <Field
              className="contact__input"
              type="text"
              name="username"
              required={true}
              placeholder="Name"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="contact__message--field_error">{msg}</p>}
            </ErrorMessage>
            <Field
              className="contact__input"
              type="email"
              name="email"
              required={true}
              placeholder="Email"
              noValidate
            />
            <ErrorMessage name="message">
              {(msg) => <p className="contact__message--field_error">{msg}</p>}
            </ErrorMessage>
            <Field
              className="contact__input"
              name="message"
              rows={7}
              required={true}
              placeholder="Message"
              as="textarea"
            />
            <button
              className={
                sending
                  ? "contact__button contact__button_fade"
                  : "contact__button"
              }
              type="submit"
              disabled={sending}
            >
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </Fade>
  );
};

export default Contact;
