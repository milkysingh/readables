import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css';

const header = () => (
  <div className={classes.head}>
    <i className="fas fa-pencil-alt" style={{ marginTop: '5px', paddingRight: '10px' }} />
    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
      <p className={classes.headTitle}>READABLE</p>
    </Link>
  </div>
);
export default header;
