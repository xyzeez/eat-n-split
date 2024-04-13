import { useState } from 'react';
import Button from './button';

const BillForm = ({ splitID, splitIdHandler, friends, formHandler }) => {
  const friend = friends.find((friend) => friend.id === splitID);

  const [bill, setBill] = useState('');
  const [userBill, setUserBill] = useState('');
  const [friendBill, setFriendBill] = useState('');
  const [payer, setPayer] = useState('user');

  const handleSetBill = (e) => {
    setBill(Number(e.target.value));
  };

  const handleSetUserBill = (e) => {
    const value = Number(e.target.value);

    if (value >= 0 && value <= bill) setUserBill(value);

    handleSetFriendBill();
  };

  const handleSetFriendBill = () => {
    const value = bill - userBill;
    setFriendBill(value);
  };

  const handleSetPayer = (e) => {
    setPayer(e.target.value);
  };

  const resetState = () => {
    setBill('');
    setUserBill('');
    setFriendBill('');
    setPayer('user');
  };

  const handlerForm = (e) => {
    e.preventDefault();

    if (payer === 'user') friend.balance = friendBill;
    else friend.balance = -userBill;

    formHandler(splitID, friend);

    resetState();

    splitIdHandler();
  };

  return (
    <form className="form-split-bill" onSubmit={handlerForm}>
      <h2>split a bill with {friend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" name="bill" id="bill" onChange={handleSetBill} />

      <label htmlFor="expenseA">🧍‍♂️ Your expense</label>
      <input
        type="text"
        name="expenseA"
        id="expenseA"
        value={userBill}
        onChange={handleSetUserBill}
      />

      <label htmlFor="expenseB">🧑‍🤝‍🧑 {friend.name} expense</label>
      <input
        type="text"
        name="expenseB"
        id="expenseB"
        value={friendBill}
        disabled
      />

      <label htmlFor="payer">🤑 Who is paying the bill</label>
      <select name="payer" id="payer" value={payer} onChange={handleSetPayer}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button type="submit">split bill</Button>
    </form>
  );
};

export default BillForm;
