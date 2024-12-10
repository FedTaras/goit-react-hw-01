import { table, tableHead, tableColumn } from "./TransactionHistory.module.css";

function TransactionHistory({ transactions }) {
  return (
    <table className={table}>
      <thead className={tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={tableColumn}>{type}</td>
              <td className={tableColumn}>{amount}</td>
              <td className={tableColumn}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
