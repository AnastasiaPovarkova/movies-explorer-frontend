import React from "react";
import './NavTab.css';

function NavTab() {
  return (
    <nav class="navtab">
      <ul class="navtab__menu">
        <li><a href="#project" class="navtab__link">О проекте</a></li>
        <li><a href="#techs" class="navtab__link">Технологии</a></li>
        <li><a href="#about" class="navtab__link">Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;