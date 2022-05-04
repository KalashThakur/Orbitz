import React, { useState } from 'react';
import styles from './Nav.module.css';

const Modal = ({ closemodal, closeLog }) => {
  return (
    <>
      <div className={styles.modal}>
        <div className='container'>
          <button onClick={() => closemodal(false)} className={styles.x}>
            X
          </button>
          <div className='tittle'>
            <h3>Members can access discounts, points and special features</h3>
            <div className='body'>
              <button className={styles.sign}> Login </button>
              <br />
              <button className={styles.free} onClick={closeLog}>
                {' '}
                Create a free Account{' '}
              </button>

              <div className='footer'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
