import React from 'react';
import FirstWordButton from './firstWordButton';
import styles from '../styles/Task.module.css'

export default function Task() {
    return (
        
        <div className={styles.card}>
            <div className={styles.instruction}>
                <h3>Instruction:</h3>
                <li>The task is to match the words that are related</li>
                <li>You can double click the button to unselect the options</li>
                <li>Click the check button to see the result</li>
                <li>Good luck!</li>
            </div>
            <FirstWordButton/>      
        </div>
    )

}


