import React, { useState } from 'react';
import styles from './Nav.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      <div className={styles.nav}>
        {/* sometime we have to use button to navigate  */}

        <Link to='/Home'>
          <img
            src='https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2'
            className={styles.img}
          />
        </Link>
        <select name='Moretravel' id='More' className={styles.More}>
          <option value=''>More travel</option>
        </select>

        <div>
          <Link
            to='/Esponanl'
            style={{ color: 'white', textDecoration: 'none' }}>
            Esponanl
          </Link>
        </div>
        <div>
          <Link
            to='/Support'
            style={{ color: 'white', textDecoration: 'none' }}>
            Customer Support
          </Link>
        </div>
        <div>
          <Link to='/List' style={{ color: 'white', textDecoration: 'none' }}>
            Advertise a Property{' '}
          </Link>
        </div>
        <div>
          <Link to='/Trip' style={{ color: 'white', textDecoration: 'none' }}>
            My Trip
          </Link>
        </div>
        <div>
          <Link
            to='/Login'
            style={{ color: 'white', textDecoration: 'none' }}
            onClick={() => setShow(true)}>
            Login
          </Link>
        </div>
      </div>
      {show && <Modal closemodal={setShow} />}
    </>
  );
};

{
  /*  <a href='/About' >About</a>   by implementin this the whole page wuill refreshing 
          so to avoide that we will render in BrowserRoute all componenets  and changing anchor tag tp link*/
}
export default Navbar;
// bra
