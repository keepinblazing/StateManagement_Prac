import React from "react";
import { createContext, useState } from "react";

const ResultContext = createContext({
  state: { result : 0},
  actions: {
    setResult: (result: number) => {},
  },
});

export default ResultContext;

interface ResultProviderIProps {
  children: React.ReactNode;
}

function ResultProvider({ children }: ResultProviderIProps): JSX.Element {
  const [result, setResult] = useState(0);

  const value: any = {
    state: { result  },
    actions: { setResult },
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}
export { ResultProvider };
