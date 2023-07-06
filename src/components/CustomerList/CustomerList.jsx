import style from "./CustomerList.module.css";
// eslint-disable-next-line react/prop-types
const CustomerList = ({ cList }) => {
  // eslint-disable-next-line react/prop-types
  const listItems = cList.map((ele, index) => {
    if (ele.tip !== 0 && ele.name !== "")
      return (
        <li key={index}>
          {" "}
          The Customer {ele.name} has paid Rs. {ele.tip}{" "}
        </li>
      );
  });
  return (
    <div className={style.box}>
      <h2 className={style.center}>Customer List</h2>
      <hr />
      <ul>{listItems} </ul>
    </div>
  );
};

export default CustomerList;
