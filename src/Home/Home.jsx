import React from "react";
import HomeIntroducao from "./HomeIntroducao.jsx";
import HomeSobre from "./HomeSobre.jsx";
import ReactSvg from "../../public/React.jsx";

const Home = () => {
  return (
    <main className="ovHidden">
      <ReactSvg className={"reactPic"} />
      <HomeIntroducao />
      <HomeSobre />
    </main>
  );
};

export default Home;
