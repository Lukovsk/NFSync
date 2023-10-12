import Navbar from "../components/navbar";
import Card from "../components/card";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="py-4 text-center text-slate-500 text-[2em] font-medium font-['Roboto']">
          Home
        </div>
        <div className="text-center text-black text-[15px] font-extralight font-['Roboto']">
          Suas notas fiscais
          <div></div>
        </div>
      </div>

      <div className="flex flex-inline justify-around items-center">
        <Card />
      </div>
    </div>
  );
};

export default Home;
