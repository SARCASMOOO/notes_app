import React from "react";

// SVG
import addIcon from "../../../assets/images/add.svg";

//Styles
import styles from './AddTask.module.css';

const addTask = () => (<img src={addIcon} className={styles.AddTask} alt=""/>);

export default addTask;