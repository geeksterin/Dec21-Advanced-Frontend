import React, { useState } from "react";

export default function HookRadio() {
  const [checked, setChecked] = useState(false);

  const changeVal = () => {
    setChecked(!checked);
  };
  console.log(checked);

  return (
    <div>
      <input type="radio" checked={checked} onClick={changeVal} />
      <button onClick={changeVal}>click</button>
    </div>
  );
}
