import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from '../../assets/images/logo.svg';
import backIgon from '../../assets/images/icons/back.svg';

import './styles.css';

interface IPageHeaderProps {
  title: string
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIgon} alt="Voltar"/>
        </Link>
          <img src={logoSvg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{ title }</strong>
        { children }
      </div>
    </header>
  );
}

export default PageHeader;