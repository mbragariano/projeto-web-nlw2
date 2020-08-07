import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/49031528?s=460&u=0ad492371ede4522e54a502f9a9290cc0a92e3f6&v=4" alt="Foto do Professor"/>
        <div>
          <strong>Matheus Braga</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, alias repudiandae? Incidunt suscipit voluptate 
        a sint eligendi earum assumenda facere distinctio modi! Sapiente tempore sed hic consectetur accusantium, illo quibusdam.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;