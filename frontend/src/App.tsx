import Card from "./app/components/shared/Card";
import Footer from "./app/components/shared/Footer";
import Header from "./app/components/shared/Header";
import Loading from "./app/components/shared/Loading";
import Button from "./app/components/shared/AppButton";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Loading /> */}

      <Button>Explore more</Button>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
