import React from "react"
import GamePanel from "./components/GamePanel"
import data from './service/data'


function App() {

    const [questState, setQuestState] = React.useState(setQuestion())
    const [result, setResult] = React.useState({ answerCorrect: "noAnswer" })


    React.useEffect(()=>{
        if(questState.userAnswer === questState.correctAnswer && questState.userAnswer !== "") {
            setResult((s)=>({ ...s, answerCorrect: "true" }))
        } else if(questState.userAnswer !== questState.correctAnswer && questState.userAnswer !== "") {
            setResult((s)=>({ ...s, answerCorrect: "false" }))
        } else {
            setResult((s)=>({ ...s, answerCorrect: "noAnswer" }))
        }
    }, [questState])


    function setQuestion() {
        const newArr = [...data]
        newArr.sort(()=>Math.random() - 0.5)
        const allAnswers = newArr.splice(newArr.length - 4)
        const randomIndex = Math.floor(Math.random() * allAnswers.length);
        
        return {
            allAnswers: [...allAnswers],
            correctAnswer: allAnswers[randomIndex],
            userAnswer: ""
        }
    }

    function handleAnswer(e) {
        setQuestState((s)=>({ ...s, userAnswer: e.target.value }))
    }

    function handleReset() {
        setQuestState(setQuestion())
        setResult({ answerCorrect: "noAnswer" })
    }


    return (
        <GamePanel {...questState} {...result} handleReset={handleReset} handleAnswer={handleAnswer}/>
    )
}

export default App