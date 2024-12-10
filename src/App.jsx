import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { username, tag, location, avatar, stats } from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friendsList={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
