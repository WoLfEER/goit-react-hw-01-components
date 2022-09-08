import React from 'react';

import Profile from '../components/Profile/Profile';
import Statistics from './Statistics/Statistic';
import FriendsList from './Friends/Friends';
import TransactionHistory from './Transactions/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        overflow: 'scroll',
        padding: '20',
      }}
    >
      <Profile
        className="Profile"
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
