import "./App.css";

import { useEffect, useState } from "react";

import Layout from "./app/layout/Layout";

import ReactRoutes from "./app/routes/ReactRoutes";

import { Loading } from "./app/components/shared/index";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <ReactRoutes />
        </Layout>
      )}
    </div>
  );
};

export default App;
