import { FC } from "react";
import Prac from "../components/Prac";

const Home: FC = () => {
  return (
    <section id="">
      <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Context API Prac</p>
      <span>Result: 0</span>
      <Prac />
    </section>
  );
};

export default Home;
