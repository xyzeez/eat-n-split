import './index.css';

// components
import Sidebar from './components/sidebar';
import BillForm from './components/billForm';

// variables
import initialFriends from './utils';
import { useState } from 'react';

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [toSplitID, setToSplitID] = useState(null);

  const handleNewFriends = (newFriend) => {
    setFriends((fiends) => [...friends, newFriend]);
  };

  const handleSplitID = (id) => {
    let newId = id;
    if (toSplitID === newId) newId = '';
    setToSplitID(newId);
  };

  const resetSplitID = () => {
    setToSplitID(null);
  };

  const updateFriendData = (id, updatedData) => {
    setFriends((friends) =>
      friends.map((friend) => (friend.id === id ? updatedData : friend))
    );
  };

  return (
    <main className="app">
      <Sidebar
        toSplit={toSplitID}
        splitIdHandler={handleSplitID}
        AddFormHandler={handleNewFriends}
        friends={friends}
      />
      {toSplitID && (
        <BillForm
          splitID={toSplitID}
          splitIdHandler={resetSplitID}
          friends={friends}
          formHandler={updateFriendData}
          key={toSplitID}
        />
      )}
    </main>
  );
};

export default App;
