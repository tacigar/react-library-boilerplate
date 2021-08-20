import React from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <p>Hello, {name}!</p>
);

export default HelloWorld;
