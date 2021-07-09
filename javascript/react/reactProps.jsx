import React from "react";

class ClassHelloWorld extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

const ArrowHelloWorld = props => <h1>Hello, {props.name}</h1>;

export default ArrowHelloWorld;
