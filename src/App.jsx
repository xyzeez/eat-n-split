import './index.css';

// components
import Sidebar from './components/sidebar';
import BillForm from './components/billForm';

// variables
import initialFriends from './utils';
import { useState } from 'react';

const App = () => {
  const [friends, setFriends] = useState(initialFriends);

  const handleNewFriends = (newFriend) => {
    setFriends((fiends) => [...friends, newFriend]);
  };

  return (
    <main className="app">
      <Sidebar AddFormHandler={handleNewFriends} friends={friends} />
      <BillForm />
    </main>
  );
};

export default App;
