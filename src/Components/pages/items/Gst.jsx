import React, { useState } from "react";

const GSTCalculator = () => {
  const [price, setPrice] = useState(0);
  const [gstRate, setGSTRate] = useState(0);
  const [inclusiveGST, setInclusiveGST] = useState(0);
  const [exclusiveGST, setExclusiveGST] = useState(0);

  const totalAmountIclu = price - inclusiveGST;
  const totalAmountExlcu = parseFloat(price) + parseFloat(exclusiveGST);
  console.log(typeof totalAmountExlcu + "11");

  const handlePriceChange = (e) => {
    const inputPrice = parseFloat(e.target.value);
    setPrice(inputPrice);
  };

  const handleGSTRateChange = (e) => {
    const inputRate = parseFloat(e.target.value);
    setGSTRate(inputRate);
  };

  const calculateInclusiveGST = () => {
    const exclusivePrice = price / (1 + gstRate / 100);
    const gstAmount = price - exclusivePrice;
    setInclusiveGST(gstAmount.toFixed(2));
  };

  const calculateExclusiveGST = () => {
    const gstAmount = (price * gstRate) / 100;
    const inclusivePrice = price + gstAmount;
    setExclusiveGST(gstAmount.toFixed(2));
  };

  return (
    <div>
      <label>Price:</label>
      <input type="number" value={price} onChange={handlePriceChange} />

      <label>GST Rate:</label>
      <input type="number" value={gstRate} onChange={handleGSTRateChange} />

      <button onClick={calculateInclusiveGST}>Calculate Inclusive GST</button>
      <p>Total Amount with Inclusive GST: {totalAmountIclu}</p>

      <button onClick={calculateExclusiveGST}>Calculate Exclusive GST</button>
      <p>Total Amount with Exclusive GST: {totalAmountExlcu}</p>
    </div>
  );
};

export default GSTCalculator;
