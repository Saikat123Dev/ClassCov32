import Header from "../StudentDashboard/Header"
import Quiz from "./Quiz"
import "./QuizPage.css"
const QuizPage = () => {
  return (
    <>
     <Header/>
    <div className="quiz">
     
        <Quiz/>
    </div>
    </>
  )
}

export default QuizPage