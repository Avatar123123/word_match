// is there an way to use props
// what about object destructuring what is that, what is it used for?
import {React, useState} from 'react';
import { firstWordList, wordData } from "../data/wordData"
import { secondWordList } from '../data/wordData';
import styles from '../styles/firstWordButton.module.css';

export default function FirstWordButton()
{
    const [firstButton, setFirstButton] = useState(null);
    const [secondButton, setSecondButton] = useState(null);
    const [answer, setAnswer] = useState(null);
    
    function handleFirstClick (event)
    { 
        if (firstButton === event.target.value) {
            setFirstButton(null)
        } else {
            setFirstButton(event.target.value)
        }
    }
   
    function handleSecondClick (event)
    {
        if (secondButton === event.target.value)
        {
            setSecondButton(null);
        } else
        {
            setSecondButton(event.target.value)
        }
    }


   const handleCheckAnswer = () => {

        for (let i = 0; i < wordData.length; i++) {
            if (wordData[i].firstWord === firstButton && wordData[i].secondWord === secondButton){
    
                setAnswer('Correct');
                return // look into the how this fixed the code 
                
             } else {
                setAnswer('Try again');

             }
        }
   }


    const firstButtons = firstWordList.map((button, index) => {
        return <button key={index} value={button} className={firstButton === button ? styles.token__selected : styles.token} onClick={handleFirstClick}>{button}</button>
    })
    const secondButtons = secondWordList.map((button, index) => {
        return <button key={index} value={button} className={secondButton === button ? styles.token__selected : styles.token} onClick={handleSecondClick}>{button}</button>
    });

    return (
        <div className={styles.list__wrapper}>    
            <div className={styles.list__container}>
                <p className={styles.firstList}>{firstButtons}</p>
                <p className={styles.secondList}>{secondButtons}</p>
            </div>

            <div className={styles.check__container}>
                <button className={styles.check__button} onClick={handleCheckAnswer}>Check</button>
            </div>

            <div className={styles.answer__label}>
                <p>First word: {firstButton}</p>
                <p>Second word: {secondButton}</p>
                <p className={styles.result}>Answer: {answer && answer}</p> 
            </div>
        </div>
    )
}