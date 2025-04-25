import React from "react";
import Button from "../atoms/Button";

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p>Welcome to my React app!</p>
      <Button color="accent" title="Test" />
      <Button color="primary" title="Test" />
      <Button color="secondary" title="Test" />
    </>
  );
};

export default Home
