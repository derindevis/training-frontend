import React from "react";

function Cookie() {
  const saveCookie = () => {
    document.cookie = "username=serin;max-age=3600; path=/";
    alert("cookie stored");
  };
  return (
    <div>
      <button onClick={saveCookie}>Store</button>
    </div>
  );
}

export default Cookie;
