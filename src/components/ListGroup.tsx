// import { Fragment } from "react";

// import { MouseEvent } from "react";
// May not be necessary anymore, as my code seemed to work without it
// // but with a different event "ID" -- instead of "ListGroup.tsx:83"
// // it was "ListGroup.tsx?t=#####:19"

import { useState } from "react";

// To make this compoonent more reusable, we can pass properties -- or
// // "props" -- through the ListGroup() function rather than hard-coding them
// This is an object containing two properties which, together, define the "shape"
// // of the component -- the items array (of strings), and the heading string
// Here, we utilize a TypeScript feature to define this "shape"/interface --
// // "string[]" (an array of strings) and "string" (a single string)
// This is using "type" annotation to specify the *types* of the properties
// Called "Props" by convention, but could be more specific, e.g. "ListGroupProps"
// Can (and must) then pass these properties into App.tsx in HTML format
// Will otherwise get a compiler error therein, which is another benefit of using
// // TypeScript (catching potential erros at compile time, before running the application)
// Note that we first define "function ListGroup(props: Props)" but then we don't
// // have access to the contents of "items" or "heading" within our LG() function
// // without prefixing everything with "props." -- e.g., "props.items.length"
// Instead, we can use "function ListGroup({ items, heading }: Props)" to
// // define this component and maintain dynamic usability of these properties
// // without prefixing each instance individually
// In a real-world application, we would probably want this click to lead to an
// // action, such as redirecting to another webpage, setting a filter status, etc.
// We want to define that in the "parent" of this component -- i.e., App.tsx --
// // rather than here in ListGroup.tsx so that this component maintains flexibility
// // and can be used to take other actions in different places of the application
// However, App.tsx doesn't have access to the "return" value of this component,
// // so we need to create a function property that will notify the "consumer"/"parent"
// // that an item has been selected
// By convention, event handlers (?) like onClick begin with "on" -- so we call this
// // function "onSelectItem," which takes one string-type parameter and returns "void"
// Once defined in the parent application, we should treat these props as immutable
// // e.g., it's considered an "anti-pattern" in React to redefine "heading = X;" in LG()

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // The HTML "class" tag must be changed to "className" (or other),
  //  // as "class" is a reserved word in JavaScript
  /*
            <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    */

  // let items = [
  //   "Denmark",
  //   "Athens",
  //   "New Mexico",
  //   "Ibiza",
  //   "Mississippi",
  //   "Orlando",
  // ];

  // By initializing to -1 in JS, we're declaring a null value:
  // // let selectedIndex = -1;
  // However, this is not available to the in-line onClick function in our output
  // Rather, it's local to the function component and React is not aware of it --
  // // like a "secret" only inside this component [[BUT not sure why "item" works?]]
  // The "useState" function is called a "hook" -- which allows us to tap into
  // // built-in features in react -- like this "state hook," which tells React that
  // // this component will have data (or a "state") which will change over time
  // Calling it -- e.g., "useState(-1)" -- returns an array of two elements
  // The first element will hold the initialized value of a "state variable", while the
  // // other can be used as a function to dynamically change the state of that variable
  // This "updater function" will be used to re-render the componenet and thus
  // // change the DOM "under the hood"
  // With React, we almost never have to deal with the DOM directly -- but rather, we
  // // think in terms of components with given states and, when these states change,
  // // React will update the DOM to match the new component state

  // useState;
  // const arr = useState(-1);  // where arr[0] = variable and arr[1] = updater function
  // Equivalent to the de-structured declaration:
  // // const [selectedIndex, setSelectedIndex] = useState(-1);
  // Similarly, if we wanted to create a dynamic "name" variable, we could use:
  // // const [name, setName] = useState("");   // initialized with an empty string

  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* Creating an "outside" conditional in case of an empty list
  items = [];

  // Having the "if" statement outside of the whole thing forces us to duplicate
  // // the heading tag -- and duplication in code is considered bad practice
  if (items.length === 0) {
    return (
      <>
        <h1>List Group</h1>
        <p>
          No Items Found
          <em>
            <strong>!</strong>
          </em>
        </p>
      </>
    );
  }
  */

  /* Using JS functions & variables to render inside the "return" statement
  // Although this functions *as* a function, within this function
  // // it seems like we must create it as a variable with arrow notation
  // This function will be passed into our JSX element -- i.e., what's being
  // // returned below -- in order to run JS amongst the HTML & React
  // We could also define a variable -- like "const message =" -- assigned to the
  // // same ternary operator string
  // The benefit of using a function here is that we could include arguments/
  // // parameters and use them to return different messages as needed
  // In this case, we can just insert the one line of code in the JSX element
  // // for easiest readability
  const getMessage = () => {
    return items.length === 0 ? (
      <p>
        No Items Found
        <em>
          <strong>!</strong>
        </em>
      </p>
    ) : null;
  };
  // Then we'd replace the {} under <h1> with:  
  // // {getMessage()}
  */

  /*
  {items.length === 0 ? <p>No Items Found! (ternary operator)</p> : null}
    is the same as
  {items.length === 0 && <p>No Items Found! ("and" logic)</p>}
    because "true && (anything)" evaluates to "anything," while
    "false && (anything)" evaluates to "false"
  As a result, the <p> will be rendered iff there are no items in the list
  Equivalent to setting the "else" condition to "null" but more concise
  */

  /*
  // Create an event handler function to -- as they sound -- handle certain events
  // This helps keep our JSX element cleaner
  // Important to note that the funciton is *NOT* called with ()s in the {evaluator}
  // // but rather we're passinga  reference telling React to call the function
  // // only whenever the user clicks on that item later, at run time
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  */

  return (
    // Prettier automatically wrapped this in ()s for us, which is necessary to
    // // return more than one line
    // Additionally, we will get an error if trying to add any other elements --
    // // e.g., an <h1> -- because the compiler can only return one at at time
    // However, we can get away with it by wrapping all sub-elements inside of
    // // one larger element, like a <div> container!
    // This can be done using "> Emmet: Wrap with Abbreviation" and typing "div"
    // However, that creates an unneccesary wrapper just to make React happy,
    // // which will affect the DOM structure
    // Instead, we can import "{ Fragment }" using "import { Fragment } from "react";"
    // // and wrap it in a <Fragment> element </Fragment>
    // However, there's an even better shorthand that doesn't involve importing anything
    // You can use empty angle brackets to indicate to React you're using a Fragment
    // Additionally, only HTML elements or other React components can be intermingled;
    // // to add JS expressions, for example, wrap them in the evaluator brackets {}
    // When using ".map" on an array, each element must be given a unique ID
    // In real-world applications, APIs may provide an ".id" property so, e.g., key={item.id}

    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// ~40 minutes into tutorial, we could use console.log("Clicked") -- which would log the
// // string literal "Clicked" to the F12 > Console and up-count any time any item is clicked
// We could also expand to onClick={(event) => console.log(item, index, event)
// // to log the contents of each item, its index within the list, and the full event data

// ~45 mintues in, note that "list-group-item" and "active" are two separate classes;
// // must be separated by only a blank space in/within HTML
// // *but* can also be rendered dynamically with useState

// ~50 minutes in, update away from onClick={handleClick} to
// // onClick={() => {selectedIndex = index;}} and then to
// // onClick={() => { setSelectedIndex(index); }}

// ~60 minutes in, with a function added to our properties that will notify the parent
// // App.tsx that an item has been selected, we add a function call thereto as part
// // of our onClick specification

// Export from this module:
export default ListGroup;
