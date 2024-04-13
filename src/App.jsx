import './index.css';

// components
import Sidebar from './components/sidebar';
import BillForm from './components/billForm';

// variables
import initialFriends from './utils';
const friendsList = [...initialFriends];

const App = () => {
  return (
    <main className="app">
      <Sidebar friends={friendsList} />
      <BillForm />
    </main>
  );
};

export default App;
