import React from "react";

class ClassHelloWorld extends React.Component {
    render() {
      return <h1>Hello, World</h1>;
    }
}

const FunctionHelloWorld = function () {
    return <h1>Hello, World</h1>;
};

const ArrowHelloWorld = () => <h1>Hello, World</h1>;

export  {FunctionHelloWorld,ArrowHelloWorld,ClassHelloWorld};
