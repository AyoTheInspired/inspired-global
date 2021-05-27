import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
    const [questions, setQuestions] = useState(data)
      const {id, title, info} = data;
      return <main>
<div className="container">
  <h3>questions and anaswers about login</h3>
      <section className="info">
    {
      questions.map((question) => {
        return <SingleQuestion key={question.id} {...question}/>
      })
    }
      </section>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>


      </main>
}

export default App;
