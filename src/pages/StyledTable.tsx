// src/pages/StyledTable.tsx
import styles from './StyledTable.module.css';

const dummyData = [
  { id: 1, name: 'Mouse', price: '$20', category: 'Electronics' },
  { id: 2, name: 'Shampoo', price: '$5', category: 'Personal Care' },
  { id: 3, name: 'Notebook', price: '$3', category: 'Stationery' },
];

const StyledTable = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Styled Product Table</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StyledTable;
