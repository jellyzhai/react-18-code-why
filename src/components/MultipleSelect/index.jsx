import React, { useEffect, useState } from "react";
import TopLineHOC from "../TopLineHOC";

function MultipleSelect() {
  const [hobbies, setHobbies] = useState([]);

  const [selected, setSelected] = useState(['sing', 'rap'])

  const toggleCheck = (e) => {
    const newSelected = Array.from(e.target.selectedOptions, item => item.value);
      setSelected(newSelected);
  };

  useEffect(() => {
    setTimeout(() => {
      setHobbies([
        {
          label: "唱",
          value: "sing",
        },
        {
          label: "跳",
          value: "dance",
        },
        {
          label: "rap",
          value: "rap",
        },
      ])
    }, 1000);
  
    return () => {
    }
  }, [])
  

  return (
    <form>
      爱好：
      <select value={selected} onChange={(e) => toggleCheck(e)} multiple>
        {hobbies.map((item, i) => (
          <option key={i} value={item.value}>{item.label}</option>
        ))}
      </select>
      <div>
        需要使用 shift 或 Ctrl 配合鼠标实现多选。
      'selected:'{
         selected.toString()
      }
      </div>
    </form>
  );
}

export default TopLineHOC(MultipleSelect);
