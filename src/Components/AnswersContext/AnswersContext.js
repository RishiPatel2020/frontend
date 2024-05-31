import React, { createContext, useState } from "react";

// Create the context
const AnswersContext = createContext();

// Create a provider component
const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});

  const updateAnswer = (field, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [field]: value,
    }));
  };

  return (
    <AnswersContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

export { AnswersContext, AnswersProvider };
