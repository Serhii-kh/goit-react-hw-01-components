import { Profile } from './Profile/Profile.jsx';
import user from 'components/user.json';

import { Statistics } from './Statistics/Statistics.jsx';
import data from 'components/data.json';

import { FriendList } from './FriendList/FriendList.jsx';
import friends from 'components/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';
import transactions from 'components/transactions.json';

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
      <TransactionHistory items={transactions}/>
    </>
  );
};
