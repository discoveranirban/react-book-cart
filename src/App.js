import React, { useState, useEffect } from "react";
import BookDetails from "./components/book-details";
import TabDetails from "./components/tabs";
import axios from "axios";

function App() {
  const colMap = {
    id: 0,
    title: 1,
    authors: 2,
    rating: 3,
    isbn: 4,
    language: 5,
    popularity: 6,
    price: 7,
  };

  const [bookData, setBookData] = useState();
  const [skipCol, setSkipCol] = useState([0]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
      );
      setBookData(res.data);
    }

    fetchData();
  }, []);

  const updateVisibleCols = (x) => {
    setSkipCol((oldVal) => [...oldVal, x]);
  };

  console.log(skipCol);
  return (
    <div>
      <TabDetails
        skipCol={skipCol}
        colMap={colMap}
        updateVisibleCols={updateVisibleCols}
      />
      {bookData &&
        bookData.map((book) => {
          return <BookDetails book={book} skipCol={skipCol} />;
        })}
    </div>
  );
}

export default App;
