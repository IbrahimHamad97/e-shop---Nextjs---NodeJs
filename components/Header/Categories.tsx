"use client";

import { category } from "@/models/models";
import { useState } from "react";

const Categories = ({ theme }) => {
  const [selected, setSelected] = useState(0);
  const list: category[] = [
    {
      id: 0,
      name: "Food",
    },
    {
      id: 1,
      name: "Art",
    },
    {
      id: 2,
      name: "Properties",
    },
    {
      id: 3,
      name: "Cars",
    },
    {
      id: 4,
      name: "Mobile Phones",
    },
    {
      id: 5,
      name: "Gaming",
    },
  ];
  return (
    <ul className="flex gap-4">
      {list.map((category) => {
        return (
          <li
            className="cursor-pointer p-2 gen-animation"
            style={{
              borderBottom:
                selected === category.id
                  ? theme === "dark"
                    ? "4px solid white"
                    : "4px solid black"
                  : "4px solid transparent",
            }}
            onClick={() => setSelected(category.id)}
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
