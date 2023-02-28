import { useEffect, useState } from "react";
import Loading from "./app/components/shared/Loading";
import Layout from "./app/layout/Layout";
import ReactRoutes from "./app/routes/ReactRoutes";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
