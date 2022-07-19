import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableBody,
  TableRaw,
  HeadCell,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TableRaw>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </TableRaw>
      </TableHead>
      <TableBody>
        {items.map(item => {
          return (
            <TableRaw key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRaw>
          );
        })}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionHistory.propType = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
