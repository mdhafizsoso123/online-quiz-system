import React, { useState } from 'react'
import Questions from './questions'
import './Quiz.css'

 function Quiz(){
    const [ques,setQuestion] = useState({"id":"1","que":"To open PageMaker, what write in Run dialog box?.","opt1":"PageMaker","opt2":"pm70","opt3":"pgmaker7.0","opt4":"None of these","ans":"pm70","subject":"pagemaker","status":"active"})
    const handleNextBtn = ()=>{
        const showBtn = document.querySelector('#show-hide-btn')
        const answerBox = document.querySelector('#answer')
        answerBox.classList.add('hide-answer')
        showBtn.innerText = 'Show Answer'
        let num = Math.floor(Math.random()*Questions.length)
        setQuestion(Questions[num])
    } 
    const hideUnhideBtn = (e)=>{
        const showBtn = document.querySelector('#show-hide-btn')
        const answerBox = document.querySelector('#answer')
        if(answerBox.classList.contains('hide-answer')){
            answerBox.classList.remove('hide-answer')
            showBtn.innerText = 'Hide Answer'
        }else{
            answerBox.classList.add('hide-answer')
            showBtn.innerText = 'Show Answer'
        }
    }
    return (
        <div id="quiz-wrapper">
            <h2 id="answer" class="hide-answer">{ques.ans}</h2>
            <h2 id="heading">Online Quiz System</h2>
            <p id="question">{ques.que}</p>
            <ul id="options-box">
                <li>{ques.opt1}</li>
                <li>{ques.opt2}</li>
                <li>{ques.opt3}</li>
                <li>{ques.opt4}</li>
            </ul>
            <div id="quiz-footer">
                <button id="show-hide-btn" onClick={hideUnhideBtn}>Show Answer</button>
                <button id="next-btn" onClick={handleNextBtn}>Next</button>
            </div>
        </div>
    )
}
export default Quiz
