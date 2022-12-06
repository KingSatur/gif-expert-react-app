import { useState } from "react";
import { GifExpertGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (e) => {
    if (categories.includes(e)) return;
    setCategories([e, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((cat) => (
        <GifExpertGrid key={cat} category={cat} />
      ))}
    </>
  );
};
