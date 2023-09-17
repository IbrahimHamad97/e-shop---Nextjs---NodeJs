import Image from "next/image";
import React from "react";

const Brands = ({ data }) => {
  return (
    <section>
      <h1>{data.name}</h1>
      <div>
        {data.items.map((item: any) => {
          return (
            <div className="flex items-center flex-col gap-2">
              <Image
                src={item.image}
                alt={item.name}
                quality={100}
                width={120}
                height={120}
                className="rounded-full"
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
