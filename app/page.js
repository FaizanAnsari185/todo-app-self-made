"use client";
import { useState } from "react";

export default function Home() {
  const [array, setArray] = useState([]);
  const [string, setString] = useState("");

  const handleChange = (e) => {
    setString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setArray([...array, string]);
    setString("");
  };

  const handleDelete = (DeleteIndex) => {
    setArray((newArray) => newArray.filter((_, index) => index !== DeleteIndex));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={string}
          className="border-2 border-lime-500 p-2 m-10"
        />
        <button
          onClick={handleClick}
          className="border-2 border-lime-500 bg-lime-200 p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <ul className="ml-10 flex flex-col gap-5">
        {array.map((todo, index) => (
          <li className="flex items-center gap-5" key={index}>
            {todo}
            <button
              onClick={()=>handleDelete(index)}
              className="border-2 border-red-500 bg-red-200 p-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
