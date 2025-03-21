import s from './TransactionHistory.module.css';
import clsx from 'clsx';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={clsx(s.upCase, s.td)}>{type}</td>
            <td className={clsx(s.td, s.center)}>{amount}</td>
            <td className={clsx(s.td, s.center)}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
