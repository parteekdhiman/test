import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404Page from "./components/Error404Page";
import AboutSection from "./components/main/AboutSection";
import CourseList from "./components/CourseList";
import Course from "./components/Course";
import SupportSection from "./components/form/SupportSection";
import ScrollToTop from "./ScrollToTop";

// Create fallback components
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-700 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <ToastContainer />
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<SupportSection />} />
          <Route path="/CourseList" element={<CourseList />} />
          <Route path="/Course/:name" element={<Course />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Suspense>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
