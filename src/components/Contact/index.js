import React, { useState } from "react";
import { Grid, Button, Form, Message } from "semantic-ui-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = () => {
    //send email here
    // return <h1>Email sent!</h1>;
    if (nameVal.length > 0 && messageVal.length > 0 && isEmailValid) {
      setIsSubmitted(true);
    }

    console.log(
      "NameVal Length: ",
      nameVal.length,
      "messageVal Length: ",
      messageVal.length,
      "isEmailValid: ",
      isEmailValid,
      "isSubmitted: ",
      isSubmitted
    );
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
          <h1>Contact Me</h1>
          <Form success={isSubmitted}>
            <Form.Field>
              <Form.Input
                label="Full Name"
                placeholder="Full Name"
                name="fullName"
                required
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
                onChange={(e) => {
                  setEmailVal(e.target.value);

                  // if (!isEmailValid) {
                  //   setIsEmailValid(true);
                  // }
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
                required
                onChange={(e) => {
                  setMessageVal(e.target.value);
                }}
              />
            </Form.Field>
            {isSubmitted ? (
              <Message
                success
                header="Thank You!"
                content="Expect a response within 2 business days."
              />
            ) : (
              false
            )}

            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  );
};

export default Contact;
