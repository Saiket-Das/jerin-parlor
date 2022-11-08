import Hero from "../../components/home/Hero";
import Input from "../../components/shared/AppInput";
import Card from "../../components/shared/Card";

const Home = () => {
  return (
    <div className="mx-6 md:mx-20 lg:mx-36">
      <Hero />
      <Card />

      <Input
        type="text"
        name="Fname"
        placeholder="Enter your name"
        width="400px"
      />
    </div>
  );
};

export default Home;
