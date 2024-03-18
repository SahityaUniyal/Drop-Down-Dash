import { ArrowGroup, GameBoard } from "../components";

const Home = () => {
  return (
    <>
      {/* header height h-[5vh] md:h-[8vh] lg:h-[10vh] */}
      <main className="min-h-[60vh] sm:h-[60vh] mx-1 md:mx-0">
        <GameBoard />
      </main>
      <div className="min-h-[8vh] md:hidden flex justify-center items-center">
        <ArrowGroup />
      </div>
    </>
  );
};

export default Home;
