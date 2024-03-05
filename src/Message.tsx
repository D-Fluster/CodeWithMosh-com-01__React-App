
// Joy of Coding 2024
    // Part 3: Web Dev Internship Training
    // Ticket 4-a: Intro to React

// CodingWithMosh.com // Programming with Mosh (YouTube)
    // React Tutorial for Beginners: https://youtu.be/SqcY0GlETPk

// Creating a React component can be done by either:
    // creating a Javascript class, or a function.
// JS classes should only be used for legacy projects with that as the standard, 
    // while functions-based components are the new standard for modern projects
    // because they're more concise and easier to write. 


// Functions should be written in PascalCasing, wherein the
    // first letter of *every* word, including the first, is capitalized

// This function will describe the UI where this component will be used
function Message() {
    // This is "JSX," or JavaScript XML, syntax -- which is *not*
        // rendering HTML, but rather being compiled to JS "under the hood"
        // For an example, see: https://babeljs.io/repl
        // <h1>Hello, World!</h1> becomes:
        // React.createElement("h1", null, "Hello, World!")
        // Okay wow that whole line was filled in correctly for me with AI!
    const name = "Danimo";
    if (name) {
        return <h1>Hello, {name}!</h1>;
    } return <h1>Hello, World!</h1>;
        // Within the {braces}, you can write any JS expression -- i.e.,
            // any code that produces a value -- like the variable "name"
            // or a function like "getName()"

}

// To use it, need to export it as the default object from this module:
export default Message;

// This can now be used from the app component -- i.e., src > App.tsx