import styles from "./CustomerDet.module.css";
// eslint-disable-next-line react/prop-types
const CustomerDet = ({ serviceHandler, nameHandler, btnClick, message }) => {
  const serviceChange = (e) => serviceHandler(e.target.value);

  const nameChange = (e) => nameHandler(e.target.value);

  return (
    <div className={styles.Cdata}>
      <span className={styles.span}>How was the service</span>

      <select required onChange={serviceChange} className={styles.chooseBtn}>
        <option default value="0">
          Choose..
        </option>
        <option value="0.2">Excellent</option>
        <option value="0.1">Average</option>
        <option value="0.05">Poor</option>
      </select>

      <input
        type="text"
        value={message}
        onChange={nameChange}
        placeholder="Customer Name"
      />

      <button onClick={btnClick} className={styles.addBtn}>
        Add Customer
      </button>
    </div>
  );
};
export default CustomerDet;
