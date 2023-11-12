import "./statistics.css"
const Statistics = ({ month, data,pageNumber }) => {

  let totalCost = 0;
  let totalSold = 0;
  let totalUnSold = 0;
  for (let i = 0;i<data.length;i++) {
    totalCost += data[i].productPrice;
    if (data[i].productSold) {
      totalSold++;
    }
    else {
      totalUnSold++;
    }

  }
  const months = {
     "all" : "All Transactions", "01" : "January","02" : "February","03" : "March","04" : "April","05" : "May","06" : "June","07" : "July","08" : "August","09" : "September","10" : "October","11" : "November","12" : "December"}
  return (
    <div className="stats">
      <div className="statistics">
        <h2>
          <u>Statistics - {months[month]} (page {pageNumber})</u>
        </h2>
        <div className="total flex">
          <h4>Total Sales </h4>
          <h4>${totalCost.toFixed(2)}</h4>
        </div>
        <div className="sold flex">
          <h4>Total sold items</h4>
          <h4>{totalSold} </h4>
        </div>
        <div className="unsold flex">
          <h4>Total not sold items</h4>
          <h4>{totalUnSold} </h4>
        </div>
      </div>
    </div>
  );
}

export default Statistics