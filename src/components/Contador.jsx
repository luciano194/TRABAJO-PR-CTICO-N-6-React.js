import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
    >
      <h2>Contador</h2>

      <h1>{count}</h1>

      <button onClick={incrementar}>+1</button>

      <button onClick={decrementar} disabled={count === 0}>
        -1
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Contador;
