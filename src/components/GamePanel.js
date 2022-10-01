
function GamePanel(props) {
    
    const panelColour = props.correctAnswer;
    const style = { backgroundColor: panelColour }
    const answerElements = props.allAnswers.map((v, i)=>{
        const disabled = (props.answerCorrect === "true" );
        return <button disabled={disabled} key={i} value={v} onClick={props.handleAnswer}>{v}</button>
    })

    return (
        <div className="wrapper">
            <div className="colourPanel" style={style}></div>
            <div className="answers">
                {answerElements}
            </div>
            <div className="message">
                
                {
                    (props.answerCorrect === "true") 
                        ? 
                            <>
                                <h3 style={{color: "lightgreen"}}>Well Done!</h3>
                                <br/>
                                <button onClick={props.handleReset}>Reset</button>
                            </>
                        : 
                    (props.answerCorrect === "false") 
                        ? 
                            <h3 style={{color: "red"}}>Hard Luck</h3> 
                        :   ""
                }
            
            </div>
      
            
        </div>
    )
}

export default GamePanel