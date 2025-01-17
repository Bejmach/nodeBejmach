import React from "react";

type Item = {
  name: string;
  price: string;
};

const Trade: React.FC = () => {
  const items: Item[] = [
    { name: "Item 1", price: "10g" },
    { name: "Item 2", price: "20g" },
    { name: "Item 3", price: "30g" },
  ];

  return (
    <div className="container">
      <h1>Trade</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trade;
