import "./App.css";
import Layout from "./app/layout/Layout";
import ReactRoutes from "./app/routes/ReactRoutes";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <ReactRoutes />
      </Layout>
    </div>
  );
};

export default App;
