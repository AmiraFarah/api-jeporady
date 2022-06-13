import { useState } from "react"
const Service = ({ result }) => {
    const [show,setShow]=useState(false)// hook to set initial toggle value with salse
    const [score,setScore]=useState(0) // hook to intiate the score value
    // const [subtract,setSub]= useState(score)

const setToZero=()=>{
setScore(0)}

    const handleDecrease=(ev)=>{
ev.preventDefault()
setScore(score-1)

    }

  const handleIncrease=(eve)=>{
   eve.preventDefault()
    setScore(score+1)
  }
    const handleClick = (eventt) => { // function fire on click the button
        eventt.preventDefault()
          setShow(!show ) // change the hook state to true to reveal the question when click the button
    }
    return (
        <div className="big-container">
            {result.map(ele => {
                return (
                    <div >
                        <h3>Score : {score}</h3>
                        <button onClick={handleIncrease}> increase</button>
                        <button onClick={setToZero}>Reset</button>

                        <button onClick={handleDecrease}>decrease</button>
                        <h2>Lets Play !</h2>
                         <h4>category : {ele.category.title}</h4>
                            <h1> answer : {ele.answer}</h1>
                        <div>
                            <button onClick={handleClick}> click to reveal the question</button>  
                        </div>

                            {(show===true)? <h1>quesion is {ele.question}</h1> : null}
                    </div>
                )
                    }
            )

            }
        </div>
        )
}
export default Service