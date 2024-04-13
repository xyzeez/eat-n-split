import Button from './button';

const Friend = ({ img, name, bal }) => {
  return (
    <li>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className={bal < 0 ? 'red' : bal > 0 ? 'green' : ''}>
        {bal < 0
          ? `You owe ${name} ${Math.abs(bal)}`
          : bal > 0
          ? `${name} owes you ${bal}`
          : `You and ${name} are even`}
      </p>
      <Button>select</Button>
    </li>
  );
};

export default Friend;

// {
//     id: 499476,
//     name: 'Anthony',
//     image: 'https://i.pravatar.cc/48?u=499476',
//     balance: 0,
//   },
