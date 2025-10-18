import React, { useState } from "react";
import { Input, Button, ButtonEnum } from "ui-design-system";
import { type FormState } from "../Form";

const INITIAL_STATE = {
  name: "",
  pass: "",
  confirmPass: "",
};

interface IProps {
  changeForm: (formType: FormState) => void;
}

export const SignUp = ({ changeForm }: IProps) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetState = () => setForm(INITIAL_STATE);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      resetState();
      setLoading(false);
      alert("Successful registration!");
    }, 2_000);
  };

  const disable =
    !form.name.length || !form.pass.length || !form.confirmPass.length;

  return (
    <>
      <h2>Register</h2>
      <Input
        input={{
          type: "text",
          value: form.name,
          changeHandler: handleChange,
          attributes: {
            name: "name",
          },
        }}
        label={{
          text: "Name",
          name: "name",
        }}
      />
      <Input
        input={{
          type: "password",
          value: form.pass,
          changeHandler: handleChange,
          attributes: {
            name: "pass",
          },
        }}
        label={{
          text: "Password",
          name: "pass",
        }}
      />
      <Input
        input={{
          type: "password",
          value: form.confirmPass,
          changeHandler: handleChange,
          attributes: {
            name: "confirmPass",
          },
        }}
        label={{
          text: "Confirm Password",
          name: "confirmPass",
        }}
      />
      <div className="Form__buttons">
        <Button
          variant={ButtonEnum.Primary}
          disabled={disable}
          loading={loading}
          clickHandler={(e) => handleSubmit(e)}
          type="submit"
        >
          Submit
        </Button>
        <Button additionalClasses="btn-login" type="button" variant={ButtonEnum.Underline} clickHandler={changeForm}>
          Registered? Sign in!
        </Button>
      </div>
    </>
  );
};
