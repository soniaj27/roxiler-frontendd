import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3000/proxy")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const makeupper = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };
  function setPrevpage() {
    if (endIndex > 10) {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
      setPageNumber(pageNumber - 1);
    }
  }

  function setNxtpage() {
    if (startIndex < 41) {
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
      setPageNumber(pageNumber + 1);
    }
  }
  let pageData = [];
  if (data && data.length !== 0) {
    pageData = data.slice(startIndex, endIndex);
  } else {
    pageData = data;
  }

  return (
    <>
      <h1>Roxiler Assignment </h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Instock</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td> {makeupper(item.category)}</td>
                  <td>{item.price}</td>
                  <td>{item.sold ? "Available" : "Out of stock"}</td>
                  <td>
                    {" "}
                    <img style={{ width: "100px" }} src={item.image} />{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={setPrevpage} disabled={data && data.length < 10 ? true : false}>
        Previous Page
      </button>
      <button onClick={setNxtpage} disabled={data && data.length > 10 ? false : true}>
        Next Page
      </button>
    </>
  );
};

export default Dashboard;