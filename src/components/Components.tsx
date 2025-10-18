import React from "react";
import { Button, ButtonEnum, LoaderEnum, Input } from "ui-design-system";
import "./Components.scss";

export const Components = () => {
  return (
    <div className="Components">
      <div className="Components__buttons">
        <Button
          variant={ButtonEnum.Primary}
          loading={true}
          loader={{ type: LoaderEnum.Dots, size: 10 }}
          clickHandler={() => { }}
        >
          Loading button
        </Button>
        <Button
          variant={ButtonEnum.Secondary}
          loading={true}
          loader={{ type: LoaderEnum.Spinner, mainColor: "rgb(240, 200, 0)", subColor: "rgb(90, 110, 240)" }}
          clickHandler={() => { }}
        >
          Loading button
        </Button>
        <Button
          variant={ButtonEnum.Secondary}
          disabled={true}
          clickHandler={() => { }}
        >
          Disabled button
        </Button>
        <Button variant={ButtonEnum.Primary} clickHandler={() => { }}>
          Primary button
        </Button>
        <Button variant={ButtonEnum.Secondary} clickHandler={() => { }}>
          Secondary button
        </Button>
      </div>
      <div className="Components__inputs">
        <Input input={{type: "text", value: "", changeHandler: () => {}}} label={{text: "test label"}} borderColor={"rgb(10, 100, 100)"} textColor={"rgb(100, 10, 100)"} />
        <Input
          input={{
            type: "text",
            value: "input one",
            changeHandler: () => { },
          }}
          label={{ text: "label one" }}
          borderColor={"rgb(140, 20, 10)"}
          textColor={"rgb(10, 120, 10)"}
          error={{
            show: true,
            text: "Something went wrong!",
          }}
        />
        <Input
          input={{ type: "number", value: 0, changeHandler: () => { } }}
          label={{ text: "label two" }}
        />
      </div>
    </div>
  );
};
