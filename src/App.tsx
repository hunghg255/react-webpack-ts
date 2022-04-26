import Todo from '@components/Todo';
import * as React from 'react';

import './App.css';

export default function App() {
  const onClick = () => {
    console.log('a');
  };
  return (
    <div>
      <Todo title='Props Title' todos={{ title: 'Todo' }} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}
