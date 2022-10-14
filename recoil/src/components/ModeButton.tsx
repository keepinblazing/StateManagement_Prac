import { FC } from "react";
import { useRecoilState } from "recoil";
import { heights } from "../constants";
import { resultState } from "../recoil";

const ModeButton: FC = () => {
  const [min, setMin] = useRecoilState(resultState);
  const calculateMode = () => {
    return Math.min.apply(null, heights);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => setMin(calculateMode())}>최소값</button>
    </div>
  );
};

export default ModeButton;
