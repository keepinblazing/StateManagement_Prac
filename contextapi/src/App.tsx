import { Route, Routes } from "react-router-dom";
import { ResultProvider } from "./contexts/Result";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <ResultProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ResultProvider>
  );
}

export default App;
