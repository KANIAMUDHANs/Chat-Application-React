import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState('Kani')

  return (
    <div className="App">
      <Chat user={user} />
    </div>
  );
}

export default App;
