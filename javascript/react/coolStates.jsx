import React, {useState} from 'react';

const HelloWorld = () => {
    const [name, setName] = useState('🐢');

    return (
        <>
            <h1>Hello, {name}!</h1>
            <input onChange={event => setName(event.currentTarget.value)} />
        </>
    );
}

export default HelloWorld;
