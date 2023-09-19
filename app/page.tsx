"use-client";

import Brands from "@/components/Home/Brands";
import SwiperComp from "@/components/Home/Hero";
import { brand } from "@/models/models";

const Home = () => {
  const list: brand = {
    id: 0,
    name: "Food",
    items: [
      {
        id: 0,
        name: "Food",
      },
      {
        id: 0,
        name: "Food",
      },
      {
        id: 0,
        name: "Food",
      },
      {
        id: 0,
        name: "Food",
      },
    ],
  };
  return (
    <div>
      {/* <Brands data={list} /> */}
      <SwiperComp />
    </div>
  );
};

export default Home;
