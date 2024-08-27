import React from "react";
import NewArrival from "./NewArrival";
import MostPopular from "./MostPopular";
import Recommended from "./Recommended";

const Home = () => {
  return (
    <>
      <NewArrival />
      <MostPopular />
      <Recommended />
    </>
  );
};

export default Home;
