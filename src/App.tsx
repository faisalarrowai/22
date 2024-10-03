import React from 'react';
import Clock from './components/ui/clock';

function App() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1>Welcome to the CodeBolt Clock Application</h1>
      <Clock />
    </div>
  );
}

export default App;