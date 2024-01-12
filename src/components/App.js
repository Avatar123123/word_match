import React from 'react';
import Task from './Task';
import styles from '../styles/App.module.css';


function App()
{
  return (
    <div className="App">
      <h1 className={styles.banner}>Word match</h1>
        <Task/>
    </div>
  );
}
export default App;
