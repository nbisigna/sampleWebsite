import React, { Fragment, Suspense, lazy, useState } from 'react';
const Navbar = lazy(() => import('./components/Navbar'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Home = lazy(() => import('./components/Home'));
const Footer = lazy(() => import('./components/Footer'));
const Errors = lazy(() => import('./components/Errors'));
const Success = lazy(() => import('./components/Success'));
const Loading = (
  <div className="section">
    <div className="loader" />
  </div>
);
const App = () => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);

  return (
    <Fragment>
      <Suspense fallback={Loading}>
        <Navbar />
        <Errors errors={errors} setErrors={setErrors} />
        <Success success={success} setSuccess={setSuccess} />
        <div className="section-container">
          <Home />
          <About />
          <Contact setErrors={setErrors} setSuccess={setSuccess} />
          <Footer />
        </div>
      </Suspense>
    </Fragment>
  );
};
export default App;
