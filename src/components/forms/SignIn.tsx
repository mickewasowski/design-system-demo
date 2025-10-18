import React, { useState } from "react";
import { Input, Button, ButtonEnum } from "ui-design-system";
import { type FormState } from "../Form";

const INITIAL_STATE = {
  name: "",
  pass: "",
};

interface IProps {
  changeForm: (formType: FormState) => void;
}

export const SignIn = ({changeForm}: IProps) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
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
      alert("Successful login!");
    }, 2_000);
  };

  const disable = !form.name.length || !form.pass.length;

  return (
    <>
      <h2>Sign in</h2>
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
        <Button additionalClasses="btn-register" type="button" variant={ButtonEnum.Underline} clickHandler={changeForm}>
          Not registered yet? Sign up!
        </Button>
      </div>
    </>
  );
};
