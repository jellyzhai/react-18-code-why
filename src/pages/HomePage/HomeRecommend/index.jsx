import React from "react";
import { useNavigate } from "react-router-dom";

function HomeRecommend() {
  const navigate = useNavigate();
  const songs = [
    {
      id: "111",
      name: "ice rain",
    },
    {
      id: "222",
      name: "lemon tree",
    },
    {
      id: "333",
      name: "hundred miles",
    },
  ];
  return (
    <div>
      <h4>HomeRecommend</h4>
      <ul>
        {songs.map((item) => (
          <li key={item.id} onClick={e => navigate(`/details/${item.id}?name=${item.name}`, {
            state: item
          })}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeRecommend;
