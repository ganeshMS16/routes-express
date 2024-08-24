import { useState,useEffect } from 'react'
//timeout-sending time dymically from quiz component 
// onTimeOut - notifying the quiz component when the timer is over
function QuestionTimer({ timeOut, onTimeOut }) {
    const [timeRemaining, setTimeRemaining] = useState(timeOut);
    
 useEffect(()=>{
     console.log("setTimeOut")
    const timer= setTimeout(onTimeOut, timeOut)
    return ()=>{clearTimeout(timer)}
 },[timeOut,onTimeOut])//runs when there is any changes in any one dependency as the quiz notifies using onTimeOut function and then this runs

    useEffect(()=>{
        console.log("setInterval")
       const interval= setInterval(() => {
            setTimeRemaining(timeRemaining => timeRemaining - 100)
        }, 100)

        return ()=>{clearInterval(interval)}//since it is called twice everytime so need to clear new one hence runs twice speed if not used clean up function
    },[])

    return <progress id="question-time" max={timeOut} value={timeRemaining} />
}

export default QuestionTimer