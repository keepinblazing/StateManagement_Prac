import { FC } from "react";
import { useRecoilValue } from "recoil";
import Prac from "../components/Prac";
import { resultState } from "../recoil";


const Home: FC = () => {
  const result = useRecoilValue(resultState);  

  return (
    <section id="">
      <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Recoil Prac</p>
      <span>Result: {result} </span>
      <Prac />
    </section>
  );
};

export default Home;
