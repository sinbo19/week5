
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Form = lazy(() => import("./pages/Form"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [message, setMessage] = useState("");

  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar message={message} />

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route
            path="/"
            element={<Home setMessage={setMessage} />}
          />

          <Route path="/form" element={<Form />} />

          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/items/:itemId" element={<ItemDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


