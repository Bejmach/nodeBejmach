import React from "react";

const Buy: React.FC = () => {
  const gamePrice: string = "$50";

  const handleBuy = (): void => {
    alert("Thanks for the money, looser!");
  };

  return (
    <div className="container">
      <h1>Buy Game</h1>
      <p>Price: {gamePrice}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default Buy;
