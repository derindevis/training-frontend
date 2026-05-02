import { useState } from "react";
import StudentCard from "./StudentCard";
import LoginForm from "./LoginForm";
function Toggle() {
  const [hidden, setHidden] = useState(false);
  return (
    <div>
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? "hide" : "show"}
      </button>
      {hidden && <LoginForm></LoginForm>}
    </div>
  );
}

export default Toggle;
