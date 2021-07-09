import React from 'react';

const MyFirstComponent = () => {
  return <h1>I am a component</h1>;
};

const List = () => (
  <ul>
    {[1, 2, 3].map((x) => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => (
  <div>
    <p>Hello World!</p>
    <List />
    <MyFirstComponent/>
  </div>
);

export { App };
