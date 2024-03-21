import { useState, useEffect } from "react";

export const useRows = () => {
  const [rowsBeforeBall, setRowsBeforeBall] = useState([]);
  const [rowsAfterBall, setRowsAfterBall] = useState([]);
  const correctMove = (correctPos) => {
    setRowsBeforeBall((prevRowsBeforeBall) => {
      const newRowsBeforeBall = [...prevRowsBeforeBall]; // Create a new array
      newRowsBeforeBall.shift(); // Remove the first element
      newRowsBeforeBall.push(correctPos); // Push the new correct position
      return newRowsBeforeBall; // Return the new array
    });

    setRowsAfterBall((prevRowsAfterBall) => {
      const newRowsAfterBall = [...prevRowsAfterBall]; // Create a new array
      newRowsAfterBall.shift(); // Remove the first element
      newRowsAfterBall.push(Math.floor(Math.random() * 12 + 1)); // Push a new random value
      return newRowsAfterBall; // Return the new array
    });
  };

  useEffect(() => {
    let rows = [];
    for (let i = 1; i <= 7; i++) {
      rows.push(Math.floor(Math.random() * 12 + 1));
    }
    setRowsBeforeBall(rows);
    rows = [];
    for (let i = 1; i <= 7; i++) {
      rows.push(Math.floor(Math.random() * 12 + 1));
    }
    setRowsAfterBall(rows);
  }, []);
  return [rowsBeforeBall, rowsAfterBall, correctMove];
};
