import { FC, useContext } from "react";
import { heights } from "../constants";
import ResultContext from "../contexts/Result";

const ModeButton: FC = () => {
  const { actions } = useContext(ResultContext);
  const calculateMode = () => {
    return Math.min.apply(null, heights);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => actions.setResult(calculateMode())}>
        MODE(최빈값)
      </button>
    </div>
  );
};

export default ModeButton;
