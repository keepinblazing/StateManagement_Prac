import { FC } from "react";
import Prac from "../components/Prac";
import useStore from "../useStore";

const Home: FC = () => {
  const { Result } = useStore();
  console.log(Result.result)
  console.log(Result.result)

  return (
    <section id="">
      <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>MobX Prac</p>
      <span>Result: {Result.result}</span>
      <Prac />
    </section>
  );
};

export default Home;
