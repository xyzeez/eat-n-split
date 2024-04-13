import { useState } from 'react';

// components
import Friend from './friend';
import AddForm from './addForm';
import Button from './button';

const Sidebar = ({ AddFormHandler, friends }) => {
  const [toAdd, setToAdd] = useState(false);

  const handleToAdd = () => {
    setToAdd(!toAdd);
  };

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            img={friend.image}
            name={friend.name}
            bal={friend.balance}
            key={friend.id}
          />
        ))}
      </ul>
      {toAdd && <AddForm formHandler={AddFormHandler} />}
      <Button clickHandler={handleToAdd}>
        {toAdd ? 'close' : 'add friend'}
      </Button>
    </div>
  );
};

export default Sidebar;

// {
//     id: 499476,
//     name: 'Anthony',
//     image: 'https://i.pravatar.cc/48?u=499476',
//     balance: 0,
//   },
