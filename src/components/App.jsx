import { BrowserRouter, Route, Routes  } from "react-router-dom"
import HomePage from "./pages/HomePage";
import { EnglishBase } from "./languages/English";
import { SpanishBase } from "./languages/Spanish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage language={EnglishBase} />} />
          <Route path="/en" element={< HomePage language={EnglishBase} />} />
          <Route path="/es" element={< HomePage language={SpanishBase} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
