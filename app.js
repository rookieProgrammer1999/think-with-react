// const container = document.getElementById('react-container');
// ReactDOM.render("Hello! Welcome to React", container);

// If the ablove code runs properly that means the react is setup up properly...

// <------------------------------------------------------------------------->
// Getting the same/similar output by using a FUNCTION

// Functional component
// {
// createElement --> takes 3 attributes -> (component,props,children)
// [
// **Component can be a react component - reusable piece of UI.
// **Props are properties of the component or element.
// **children can be a nested component or html element.
//  In the below code when you check the react element it has a div tag followed by null and a string called Hey ProGrads! Welcome to React Learning.
// The "div" tag refers to the component.
// "null" refers to the property and the statement is the children.
// The next "div" tag is the children.
// ]
// }

// const Container = () => {
//     return React.createElement(`div`, null, `Hey ProGrads! Welcome to React Learning`,
//         React.createElement(`div`, null, `Let's rock and roll`)
//     );
// }
// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container), container);

// <------------------------------------------------------------------------->
// Getting the same/similar output by using a CLASS

// class ReactContainer extends React.Component {
//     // constructor - to initialize the state 

//     // render method to render the react dom 
//     render() {
//         return React.createElement(`div`, null, `Hey ProGrads`,
//             React.createElement(`div`, null, `Let's rock and roll`)
//         );
//     }

// }
// const container = document.getElementById('react-container');
// // const x = React.createElement(ReactContainer);
// ReactDOM.render(React.createElement(ReactContainer), container);


// <------------------------------------------------------------------------->
// Getting the same/similar output with the use of babel

class ReactContainer extends React.Component {
    // JSX tags
    // JSX there should be one parent element
    render() {
        return (
            <div>Hello! Welcome to ProGrads
                <div>Let's rock and roll </div>
            </div>)
    };
}

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);    