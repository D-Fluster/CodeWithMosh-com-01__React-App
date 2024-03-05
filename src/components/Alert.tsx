/*
With ES7+ extension, can use a shortcut instead of having to type
    an initialization like this out every time:

    function Alert() {};
    export default Alert;

Instead, we can type "rafce" -- which is short for "reactArrowFunctionExportComponent"
    (yes, in that order, oddly enough)
Per AI: This is a function that returns an arrow function that returns a React component
After hitting "enter," all instances of the component title will be selected for easy renaming
Press Esc to exit multi-cursor editing
*/

import { ReactNode } from "react";

// import React from "react";
// // Imported automatically with "rafce" but not necessary

// There's a special prop called "children," which all components support
// This allows you to pass rich text/contents into the component's container
// // within the "parent" application -- i.e., instead of passing plaintext
// // of a variable "text" of type "string" like "<Alert text="string" />",
// // you can speficiy a "children" property with type "ReactNode,"
// // which will allow you to use it more like any other HTML container,
// // like <Alert>rich text</Alert>
// It's worth noting I tried using HTML in the <Alert> container before
// // updating "children" from "string" type and it did work!

interface Props {
  children: ReactNode;
  // text: string;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
