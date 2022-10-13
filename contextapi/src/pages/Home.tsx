import { FC, useContext } from "react";
import Prac from "../components/Prac";
import ResultContext from "../contexts/Result";

const Home: FC = () => {
  const { state } = useContext(ResultContext);
  return (
    <section id="">
      <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Context API Prac</p>
      <span>Result: {state.result} </span>
      <Prac />
    </section>
  );
};

export default Home;
