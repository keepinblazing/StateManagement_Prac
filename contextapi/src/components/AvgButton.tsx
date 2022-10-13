import { FC, createContext, useState, useContext } from "react";
import { heights } from "../constants";
import ResultContext from "../contexts/Result";

const AvgButton: FC = () => {
  const { actions } = useContext(ResultContext);
  const calculateAvg = () => {
    let sum = heights.reduce((a, c) => a + c);
    return sum / heights.length;
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => actions.setResult(calculateAvg())}>평균값</button>
    </div>
  );
};

export default AvgButton;
