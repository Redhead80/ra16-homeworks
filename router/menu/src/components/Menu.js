import {NavLink} from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <NavLink 
        className={({ isActive }) => {
          const linkClasses = ["menu__item"];
          if (isActive) linkClasses.push("menu__item-active");
          return linkClasses.join(" ");
        }} exact="true" to="/">
          Главная
      </NavLink>
      <NavLink className={({ isActive }) => {
          const linkClasses = ["menu__item"];
          if (isActive) linkClasses.push("menu__item-active");
          return linkClasses.join(" ");
        }} to="/drift">
          Дрифт-такси
      </NavLink>
      <NavLink className={({ isActive }) => {
          const linkClasses = ["menu__item"];
          if (isActive) linkClasses.push("menu__item-active");
          return linkClasses.join(" ");
        }} to="/timeattack">
          Time Attack
      </NavLink>
      <NavLink className={({ isActive }) => {
          const linkClasses = ["menu__item"];
          if (isActive) linkClasses.push("menu__item-active");
          return linkClasses.join(" ");
        }} to="/forza">
          Forza Karting
      </NavLink>
    </nav>
  );
}

export default Menu;
