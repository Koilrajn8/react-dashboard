import "./App.css";
import { Suspense } from "react";
import GlobalErrorBoundary from "./ErrorBoundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
          <GlobalErrorBoundary>
            <RouterProvider router={router} />
          </GlobalErrorBoundary>
        </Suspense>
  );
}

export default App;
