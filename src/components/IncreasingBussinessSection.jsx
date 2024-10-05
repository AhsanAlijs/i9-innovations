import React from "react";
import IncreasingBussinessCard from "./IncreasingBussinessCard";

const IncreasingBussinessSection = ({ cards, classNames, cardClassNames }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ${classNames}`}
    >
      {cards?.map((item, index) => (
        <IncreasingBussinessCard
          key={index}
          index={index}
          item={item}
          cardClassNames={cardClassNames}
        />
      ))}
    </div>
  );
};

export default IncreasingBussinessSection;
