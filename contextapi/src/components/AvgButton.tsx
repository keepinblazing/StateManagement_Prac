import { FC } from "react";
import { heights } from "../constants";

const AvgButton: FC = () => {

  function calculateAvg() {
    let sum = heights.reduce((a, c) => a + c);
    console.log(sum / heights.length);
  }
  
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={calculateAvg}>AVERAGE</button>
    </div>
  );
};

export default AvgButton;
