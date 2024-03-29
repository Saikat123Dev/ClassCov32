import React from 'react';

const StartQuiz = () => {
  return (
    <div className=" mx-auto max-w-2xl p-6 border border-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Attempt the Quiz</h1>
      <hr/>
      <strong className="block my-4">Objective: The purpose of this quiz is to test your knowledge.</strong>
      <p className="my-4">
        Duration: You will have a limited amount of time to complete the quiz. The timer will start as soon as you click the "Start" button.
        <hr/>
        Questions: There will be a series of multiple-choice questions. Read each question carefully before selecting your answer.
        <hr/>
        Scoring: Each correct answer earns you two points. There is no penalty for incorrect answers, so it's in your best interest to attempt all questions.
        Navigation: You can navigate between questions using the "Next" button. Make sure to review your answers before submitting.
        Submission: Once you've answered all questions, click the "Submit" button to finalize your responses. You cannot make any changes after submission.
        Results: After submitting, you will receive your score along with feedback on your performance.
      </p>

      <p className="my-4">Enjoy: Most importantly, enjoy the quiz! It's a fun way to test your knowledge and learn something new.</p>

      <div className="instructions my-4">
        <h2 className="font-bold">Instructions for Starting the Quiz:</h2>
        <ol className="list-decimal pl-6">
          <li>Click the "Start" button below to initiate the quiz and start the timer.</li>
          <li>Once started, you'll be presented with the first question. Read the question carefully and select your answer.</li>
          <li>Continue answering questions until you've completed the quiz.</li>
          <li>After answering all questions, click the "Submit" button to view your results.</li>
        </ol>
        <p className="my-4">Note: Ensure that you have a stable internet connection and are in a distraction-free environment before starting the quiz.</p>
      </div>

      <a href="/quiz" className="start-button inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start
      </a>
    </div>
  );
}

export default StartQuiz;
