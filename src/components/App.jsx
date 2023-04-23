import { Profile } from './Profile/Profile.jsx';
import user from 'data-json/user.json';

import { Statistics } from './Statistics/Statistics.jsx';
import data from 'data-json/data.json';

import { FriendList } from './FriendList/FriendList.jsx';
import friends from 'data-json/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from 'data-json/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
