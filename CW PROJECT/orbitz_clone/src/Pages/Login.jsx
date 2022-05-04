import React, { useState } from 'react';
import Modal from '../components/Modal';
import styles from './Log.module.css';
const Login = () => {
  const [person, setPerson] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });
  const [people, setPeople] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.surname && person.password) {
      const newperson = { ...person };
      setPeople([...people, newperson]);
      setPerson({ email: '', name: '', username: '', password: '' });
      console.log('setPerson:', setPerson);
    }
  };
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log('value:', value)
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <h1>Create an Account</h1>;
      <form className={styles.Login} onSubmit={formsubmit}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={person.email}
          onChange={handler}
        />
        <br /> <br /> <br />
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={person.name}
          onChange={handler}
        />
        <br /> <br /> <br />
        <input
          type='text'
          placeholder='Surname'
          name='surname'
          value={person.surname}
          onChange={handler}
        />
        <br /> <br /> <br />
        <input
          type='Password'
          placeholder='Password'
          name='password'
          value={person.password}
          onChange={handler}
        />
        <br /> <br /> <br />
        <div className={styles.check}>
          <input type='checkbox' />
          <p>
            By creating an account, I agree to the Orbitz Terms and Conditions
            and
            <br /> Privacy Notice , as well as the Orbitz Rewards Terms and
            Conditions .
          </p>
        </div>
        <br /> <br /> <br />
        <button className={styles.Continue}>Continue</button>
      </form>
    </>
  );
};
export default Login;
