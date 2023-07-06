import Bill from "../Bill/Bill";
import CustomerDet from "../CustomerDet/CustomerDet";
import CustomerList from "../CustomerList/CustomerList";
import styles from "./TipCalculator.module.css";
import { useState } from "react";
const TipCalculator = () => {
  const [bill, setBill] = useState("");

  const [service, setService] = useState(0);

  const [cName, setCName] = useState("");

  const [list, setList] = useState([]);
  const billHandler = (amt) => setBill(amt);
  // console.log(bill)
  const serviceHandling = (rating) => setService(rating);
  // console.log(service)
  const nameHandling = (str) => setCName(str);
  // console.log(cName)
  const [totalTip, setTotalTip] = useState(0);
  const [customers, setCustomers] = useState(0);
  console.log(service);

  const addBtn = () => {
    if (bill !== 0 && service !== 0 && cName !== "") {
      setList([...list, { name: cName, tip: Math.round(bill * service) }]);
      setTotalTip(totalTip + Math.floor(bill * service));
      setBill("");
      setCName("");
    } else {
      alert("please enter valid details");
    }
  };
  const [finalTotal, setFinalTotal] = useState(0);
  const btnClick = () => {
    setFinalTotal(totalTip);
    setCustomers(list.length);
  };
  console.log(list);
  return (
    <>
      <Bill billChangeHandler={billHandler} message={bill} />
      <CustomerDet
        serviceHandler={serviceHandling}
        nameHandler={nameHandling}
        btnClick={addBtn}
        message={cName}
        msg={service}
      />
      <CustomerList cList={list} />
      <button onClick={btnClick} className={styles.calcBtn}>
        Calculate Tip and Customer
      </button>
      <table>
        <thead>
          <tr>
            {" "}
            <th>Total Customers</th>
            <th className={styles.wide}>Total tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customers}</td>
            <td>{finalTotal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TipCalculator;
