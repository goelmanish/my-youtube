import React from "react";
import Button from "./Button";

const Buttonlist = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Entertainment" />
      <Button name="Sports" />
      <Button name="Movies" />
      <Button name="Reals" />
      <Button name="Technology" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Politics" />
    </div>
  );
};

export default Buttonlist;
