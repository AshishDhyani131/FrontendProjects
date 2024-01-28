import { useState, useEffect, useRef } from "react";
import axios from "axios";
import FlashCardList from "./FlashCardList";

function App() {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);
  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setQuestions(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [...questionItem.incorrect_answers, answer].map(
              (a) => decodeString(a)
            );
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex justify-end items-center flex-wrap bg-white px-6"
      >
        <div className="flex flex-col m-2">
          <label htmlFor="category" className="text-gray-500 mb-1">
            Category
          </label>
          <select name="" id="category" ref={categoryEl}>
            {categories.map((categoryEl) => {
              return (
                <option value={categoryEl.id} key={categoryEl.id}>
                  {categoryEl.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="amount" className="text-gray-500 mb-1">
            number of Questions
          </label>
          <input
            type="number"
            name=""
            id="amount"
            min={1}
            step={1}
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className="flex flex-col m-2 self-end">
          <button className="text-white mb-1 p-1 bg-black">Generate</button>
        </div>
      </form>
      <div className="container mt-8 ">
        <FlashCardList flashCards={questions}></FlashCardList>;
      </div>
    </>
  );
}

export default App;
