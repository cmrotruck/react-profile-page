import React, { useState } from "react";
import { Grid, Button, Form, Message } from "semantic-ui-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (e) => {
    //send email here
    e.preventDefault();
    setIsEmailValid(validateEmail(emailVal));
    const SERVICE_ID = "service_2xzza0a";
    const TEMPLATE_ID = "template_cohxr1s";
    const USER_ID = "n6mv2Iois9UzkZVQh";

    if (nameVal.length > 0 && messageVal.length > 0 && isEmailValid) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setEmailVal("");
          setNameVal("");
          setMessageVal("");
          setIsEmailValid(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }

    console.log("isEmailValid: ", isEmailValid, "isSubmitted: ", isSubmitted);
  };

  const validateEmail = (email) => {
    const validEmail = new RegExp(`[a-z0-9]+@[a-z]+\.[a-z]{2,3}`);

    if (validEmail.test(email)) {
      return true;
    }
    return false;
  };

  return (
    <div className="contact">
      <Grid columns="3">
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <p>
            I can be reached at{" "}
            <span>
              <a href="mailto:crotruck@gmail.com">crotruck@gmail.com</a>
            </span>
          </p>
          <p className="centered">-- or --</p>
          <h1>Contact Me</h1>
          <Form
            onSubmit={handleSubmit}
            action="mailto:crotruck@gmail.com"
            method="post"
            enctyp="text/plain"
          >
            <Form.Field>
              <Form.Input
                label="Full Name"
                placeholder="Full Name"
                name="fullName"
                required
                value={nameVal}
                onChange={(e) => {
                  setNameVal(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Email"
                placeholder="Email"
                name="email"
                required
                value={emailVal}
                onChange={(e) => {
                  setEmailVal(e.target.value);

                  if (!isEmailValid) {
                    setIsEmailValid(true);
                  }
                }}
                onMouseLeave={(e) => {
                  setIsEmailValid(validateEmail(emailVal));
                }}
                error={
                  isEmailValid
                    ? false
                    : {
                        content:
                          "Invalid Email: Please enter a valid email address.",
                        pointing: "below",
                      }
                }
              />
            </Form.Field>
            <Form.Field>
              <Form.TextArea
                label="Message"
                placeholder="Message"
                name="Message"
                required
                value={messageVal}
                onChange={(e) => {
                  setMessageVal(e.target.value);
                }}
              />
            </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
          {isSubmitted ? (
            <Message
              success
              header="Thank You!"
              content="Expect a response within 2 business days."
            />
          ) : (
            // <Message
            //   error
            //   header="Error!"
            //   content="Ooops, something went wrong. Please try again or use the link above."
            // />
            false
          )}
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
};

export default Contact;
