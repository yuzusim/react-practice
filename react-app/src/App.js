import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState("trun");
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coins) => (
          <li>
            {coins.name} ({coins.symbol}): ${coins.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
