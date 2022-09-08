import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';
import s from '../Transactions/Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, id, amount, currency }) => (
          <tr key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
