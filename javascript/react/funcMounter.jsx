import React, {useEffect} from 'react';

const HelloWorld = props => {
    useEffect(() => {
        console.log('I am mounted');
        return () => console.log('component is being removed');
    }, []);

    useEffect(() => {
        console.log('props updated');
    }, [props]);

    return (<h1>Hello, {props.name}!</h1>);
};

export default HelloWorld;
