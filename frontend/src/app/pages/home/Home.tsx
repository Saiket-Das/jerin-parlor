import Hero from "../../components/home/Hero";
import Input from "../../components/shared/AppInput";
import Card from "../../components/shared/Card";

const Home = () => {
  return (
    <div>
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
