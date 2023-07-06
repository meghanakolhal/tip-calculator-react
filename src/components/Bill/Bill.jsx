import style from "./Bill.module.css";

// eslint-disable-next-line react/prop-types
const Bill = ({ billChangeHandler, message }) => {

  const billAmount = (e) => {
    billChangeHandler(e.target.value);
  };
  return (
    <div className={style.box}>
      <p className={style.para}>Enter your bill Amount</p>
      <input
        required
        value={message}
        className={style.padinp}
        onChange={billAmount}
        type="number"
      />
      <p className={style.line}></p>
    </div>
  );
};
export default Bill;
