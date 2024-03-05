import React from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  // color?: string;
  onClick: () => void;
}

// The "?" after "color" tells the TypeScript compiler that the
// // "color" property is optional
// This allows us to set a default value of {color = "primary"}
// // and utilize it without any compiler errors!
// However, if "color?" is set to a "string" value, it can be set
// // to *any* string value -- even those which are invalid in terms
// // of Bootstrap (e.g., "danimo" or "purple")
// Instead of a general "string," we can specify that *if* a color
// // value is passed in, it *must* be one of these specific strings
// // separated by the "union" operator, "|"

const ButtonCWM = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCWM;

// Note that the {onClick} called function will be passed from the outside --
// // i.e., from the parent component (in this case, App.tsx) --
// // e.g., <ButtonCWM color="secondary" onClick={() => console.log("Clicked!")}>

// Instead of hard-coding "btn-primary" and making this component less reusable,
// // we can add *that* as a property as well to be specified in the application
// <className={"btn btn-" + color}> plus specifying a color of "primary" results in:
// <className="btn btn-primary">
