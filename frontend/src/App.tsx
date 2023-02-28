import { useState } from "react";
import Loading from "./app/components/shared/Loading";
import Layout from "./app/layout/Layout";
import ReactRoutes from "./app/routes/ReactRoutes";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    <Loading />;
    setLoading(false);
  }, 2000);
  return (
    <div className="app">
      {!loading && (
        <Layout>
          <ReactRoutes />
        </Layout>
      )}
    </div>
  );
};

export default App;
