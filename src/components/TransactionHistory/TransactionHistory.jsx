import PropTypes from 'prop-types'; 
import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={clsx(css.cell, css.head)}>Type</th>
      <th className={clsx(css.cell, css.head)}>Amount</th>
      <th className={clsx(css.cell, css.head)}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
    items.map(elem =>
    <tr key={elem.id}>
      <td className={css.cell}>{elem.type}</td>
      <td className={css.cell}>{elem.amount}</td>
      <td className={css.cell}>{elem.currency}</td>
    </tr>
    )
    }
  </tbody>
</table>
    )
}
 
TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(PropTypes.object),
}