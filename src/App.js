import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "@/components/Portfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
