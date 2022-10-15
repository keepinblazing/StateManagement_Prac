import { FC } from "react";
import { heights } from "../constants";
import useStore from "../useStore";

const AvgButton: FC = () => {
  const { Result } = useStore();
  let sum = heights.reduce((a, c) => a + c);

  const calculateAvg = () => {
    return sum / heights.length;
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => Result.resultMode(calculateAvg())}>평균값</button>
    </div>
  );
};

export default AvgButton;
