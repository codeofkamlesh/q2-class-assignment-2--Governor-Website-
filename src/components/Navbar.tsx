import React from 'react';
import styles from '../styles/navbar.module.css';
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navitems}>
        <p>Tuition Free Education Program on Latest Technologies</p>
        <div className={styles.menus}>
          <p>Home</p>
          <p>Apply</p>
          <p>Jobs</p>
          <p>Result</p>
          <div className={styles.coursearrow}>
          <p>Courses</p>
          <FaAngleDown />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar