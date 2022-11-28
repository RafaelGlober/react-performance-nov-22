import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fallback } from './components';

const Welcome = React.lazy(() => import("./routes/Welcome"));
const Debouncing = React.lazy(() => import("./routes/Debouncing"));
const Throttling = React.lazy(() => import("./routes/Throttling"));
const Fragments = React.lazy(() => import("./routes/Fragments"));
const InlineFunctions = React.lazy(() => import("./routes/InlineFunctions"));
const LazyLoading = React.lazy(() => import("./routes/LazyLoading"));
const Memoization = React.lazy(() => import("./routes/Memoization"));
const PureComponents = React.lazy(() => import("./routes/PureComponents"));
const Virtualization = React.lazy(() => import("./routes/Virtualization"));
const ErrorBoundaries = React.lazy(() => import("./routes/ErrorBoundaries"));


const data = {
  title: "Hello Pure Components",
  description: "This is about pure components"
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="debounce" element={<Debouncing />} />
          <Route path="throttle" element={<Throttling />} />
          <Route path="fragments" element={<Fragments />} />
          <Route path="inline-functions" element={<InlineFunctions />} />
          <Route path="lazy-loading" element={<LazyLoading />} />
          <Route path="memoization" element={<Memoization />} />
          <Route path="pure-components" element={<PureComponents data={data} />} />
          <Route path="virtualization" element={<Virtualization />} />
          <Route path="error-boundaries" element={<ErrorBoundaries />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
