import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
      .catch((err) => {
        setError(err); // Handle and store the error
      });
  }, []);
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} />}
      {error && <p>Error: {error.message}</p>} {/* Display the error if it exists */}
    </main>
  );
}

export default App;
