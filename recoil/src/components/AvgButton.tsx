import { FC } from "react";
import { useRecoilState } from "recoil";
import { heights } from "../constants";
import { resultState } from "../recoil";

const AvgButton: FC = () => {
  const [avg, setAvg] = useRecoilState(resultState);

  const calculateAvg = () => {
    let sum = heights.reduce((a, c) => a + c);
    return sum / heights.length;
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => setAvg(calculateAvg())}>평균값</button>
    </div>
  );
};

export default AvgButton;
