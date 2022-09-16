
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Listpage.module.scss';


function List() {
  return (
    <>
    <h1 className={s.headding}>Nguyen Thi Hau - FE</h1>
    <Link to="/guide">Guide / </Link>
    <Link to="/home">Home / </Link>
    <Link to="/about">About / </Link>
    </>
  );
}

export default List;
