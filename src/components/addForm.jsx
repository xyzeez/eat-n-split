import { useState } from 'react';
import Button from './button';

const AddForm = ({ formHandler }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const resetState = () => {
    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  const handleForm = (e) => {
    e.preventDefault();

    const newFriend = { id: Date.now(), name, image, balance: 0 };

    formHandler(newFriend);

    resetState();
  };

  return (
    <form className="form-add-friend" onSubmit={handleForm}>
      <label htmlFor="friend">🧑‍🤝‍🧑 Friend's name</label>
      <input
        type="text"
        name="friend"
        id="friend"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="image">🖼️ Image URL</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <Button type="submit">add</Button>
    </form>
  );
};

export default AddForm;
