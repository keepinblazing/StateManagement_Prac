import { FC } from "react";
import { heights } from "../constants";
import useStore from "../useStore";

const ModeButton: FC = () => {
  const { Result } = useStore()

  const calculateMode = () => {
    return Math.min.apply(null, heights);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => 
        Result.resultMode(calculateMode())}>최소값</button>
    </div>
  );
};

export default ModeButton;
