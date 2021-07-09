import React from 'react';

class HelloWorld extends React.Component {

    componentDidMount() {
        console.log('I am mounted');
    } // The componentDidMount() method runs after the component output has been rendered to the DOM.
  
    componentWillUnmount() {
        console.log('component is being removed');
    } // The componentWillUnmount() method is used for component tear-down

    componentDidUpdate() {
        console.log('props or state updated');
    } // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  
    render() {
      return (
        <>
          <h1>Hello, {this.props.name}!</h1>
        </>
      );
    }
  }

export default HelloWorld;
