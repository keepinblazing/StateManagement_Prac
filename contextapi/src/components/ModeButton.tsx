import { FC } from "react";
import { heights } from "../constants";

const ModeButton: FC = () => {

  function calculateMode() {
    console.log(Math.min.apply(null, heights))
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={calculateMode}>MODE(최빈값)</button>
    </div>
  );
};

export default ModeButton;
