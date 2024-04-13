import Button from './button';

const Friend = ({ toSplit, splitIdHandler, id, img, name, bal }) => {
  return (
    <li className={toSplit === id ? 'selected' : ''}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className={bal < 0 ? 'red' : bal > 0 ? 'green' : ''}>
        {bal < 0
          ? `You owe ${name} $${Math.abs(bal)}`
          : bal > 0
          ? `${name} owes you $${bal}`
          : `You and ${name} are even`}
      </p>
      <Button clickHandler={() => splitIdHandler(id)}>
        {toSplit === id ? 'close' : 'select'}
      </Button>
    </li>
  );
};

export default Friend;
