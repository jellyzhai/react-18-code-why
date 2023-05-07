import React, { useState } from "react";
import TopLineHOC from "../TopLineHOC";

function MultipleCheckbox() {
  const [hobbies, setHobbies] = useState([
    {
      label: "唱",
      value: "sing",
      checked: false,
    },
    {
      label: "跳",
      value: "dance",
      checked: false,
    },
    {
      label: "rap",
      value: "rap",
      checked: true,
    },
  ]);

  const toggleCheck = (e, i) => {
    const newVal = [...hobbies];
    newVal[i].checked = !newVal[i].checked;
    setHobbies(newVal);
  };
  return (
    <div>
      爱好：
      {hobbies.map((item, i) => (
        <span key={i}>
          <label>
            <input
              type="checkbox"
              name={item.value}
              value={item.value}
              checked={item.checked}
              onChange={(e) => toggleCheck(e, i)}
            />
            {item.label}
          </label>
        </span>
      ))}
    </div>
  );
}

export default TopLineHOC(MultipleCheckbox);
