import { useState } from 'react';

// components
import Friend from './friend';
import AddForm from './addForm';
import Button from './button';

const Sidebar = ({ toSplit, splitIdHandler, AddFormHandler, friends }) => {
  const [toAdd, setToAdd] = useState(false);

  const resetToAdd = () => {
    setToAdd(false);
  };

  const handleToAdd = () => {
    setToAdd(!toAdd);
  };

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            toSplit={toSplit}
            splitIdHandler={splitIdHandler}
            id={friend.id}
            img={friend.image}
            name={friend.name}
            bal={friend.balance}
            key={friend.id}
          />
        ))}
      </ul>
      {toAdd && (
        <AddForm toAddHandler={resetToAdd} formHandler={AddFormHandler} />
      )}
      <Button clickHandler={handleToAdd}>
        {toAdd ? 'close' : 'add friend'}
      </Button>
    </div>
  );
};

export default Sidebar;
