import css from "./Category.module.css";
export const Category = () => {
  return (
    <>
      <select className={css.category}>
        <option>Supermercado</option>
        <option>Work</option>
      </select>
    </>
  );
};
