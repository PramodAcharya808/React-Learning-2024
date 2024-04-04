import style from "./Items.module.css";
let Items = ({ items, btnOnClick }) => {
  return (
    <ul className="list-group">
      <li className={`list-group-item my-2 ${style.single_item}`}>
        <div className={`${style.entry}`}>{items}</div>
        <a href="/">
          <button
            type="button"
            className={`${style.bn632_hover} ${style.bn23}`}
            onClick={btnOnClick}
          >
            Buy
          </button>
        </a>
      </li>
    </ul>
  );
};
export default Items;
