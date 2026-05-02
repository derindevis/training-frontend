import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);
  return (
    <div>
      <p className="count">Count:{state}</p>
      <button
        className="increment "
        onClick={() => setState(state + 1)}
        disabled={state == 10}
      >
        Increment
      </button>
      <button
        className="decrement"
        onClick={() => setState(state - 1)}
        disabled={state == 0}
      >
        Decrement
      </button>
    </div>
  );
}
