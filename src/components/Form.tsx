import React, { useState } from "react";
import "./Form.scss";
import { SignIn } from "./forms/SignIn";
import { SignUp } from "./forms/SignUp";

enum FormType {
  SignIn = "signin",
  SignUp = "signup",
}

export type FormState = FormType.SignIn | FormType.SignUp;

export const Form = () => {
  const [formState, setFormState] = useState<FormState>(FormType.SignIn);

  const handleFormChange = (e, formType: FormState) => {
    setFormState(formType);
  };

  const renderFormBody = () => {
    switch (formState) {
      case FormType.SignIn: {
        return <SignIn changeForm={(e) => handleFormChange(e, FormType.SignUp)} />;
      }
      case FormType.SignUp: {
        return <SignUp changeForm={(e) => handleFormChange(e, FormType.SignIn)} />;
      }
      default: {
        return <SignIn changeForm={(e) => handleFormChange(e, FormType.SignUp)} />;
      }
    }
  };

  return <form className="Form">{renderFormBody()}</form>;
};
