// PersonalBack.js
import React, { useState } from "react";
import Select from "react-select";
import "./Onboard.css";

const questions = [
  {
    text: "Community",
    type: "dropdown",
    options: [
      "Bengali",
      "Gujarati",
      "Guyanese",
      "Hindi Speaking",
      "Kannada",
      "Kashmiri",
      "Malayali",
      "Maharashtrian",
      "Rajasthani",
      "Sindhi",
      "Shia",
      "Sunni",
      "Tamil",
      "Telugu",
      "Urdu",
      "Other",
    ],
  },
  {
    text: "Marital Status",
    type: "dropdown",
    options: [
      "Single, never married",
      "Divorced, no kids",
      "Divorced, with kids",
      "Widowed, no kids",
      "Widowed, with kids",
    ],
  },
  {
    text: "Drinking",
    type: "dropdown",
    options: ["yes", "no"],
  },
  {
    text: "Smoking",
    type: "dropdown",
    options: ["yes", "no"],
  },
  {
    text: "Religion",
    type: "dropdown",
    options: [
      "Hindu",
      "Christian",
      "Sikh",
      "Jain",
      "Buddhist",
      "Parsi",
      "Atheist",
      "Other",
    ],
  },
  {
    text: "Personality Traits (Select 3 max)",
    type: "multi",
    options: [
      "Outgoing",
      "Introverted",
      "Extroverted",
      "Adventurous",
      "Easygoing",
      "Ambitious",
      "Compassionate",
      "Spontaneous",
      "Analytical",
      "Creative",
      "Humorous",
      "Emotional",
      "Independent",
      "Dependent",
      "Assertive",
      "Thoughtful",
    ],
    maxSelections: 3,
  },
  {
    text: "Hobbies (Select 6 max)",
    type: "multi",
    options: [
      "Hiking",
      "Camping",
      "Cycling",
      "Gardening",
      "Rock Climbing",
      "Skiing / Snowboarding",
      "Kayaking",
      "Scuba diving",
      "Traveling to exotic destinations",
      "Running",
      "Yoga",
      "Swimming",
      "Tennis",
      "Soccer",
      "Football",
      "Volleyball",
      "Badminton",
      "Boxing",
      "Painting",
      "Photography",
      "Writing",
      "Singing",
      "Playing a musical instrument",
      "Cooking",
      "Reading",
      "Watching movies",
      "Gaming",
      "Crafting",
      "Board games",
      "Partying",
      "Clubbing",
      "Visiting museums",
      "Attending theater performances",
      "Exploring art galleries",
      "Learning about different cuisines",
      "Participating in cultural festivals",
      "Meditation",
      "Pilates",
      "Mindfulness retreats",
      "Reiki/healing practices",
      "Herbalism/natural remedies",
    ],
    maxSelections: 6,
  },
  {
    text: "Immigration Status",
    type: "dropdown",
    options: [
      "US Citizen",
      "Greencard Holder",
      "Work Visa",
      "Student Visa",
      "Other",
    ],
  },
  {
    text: "Dietary Practices:",
    type: "dropdown",
    options: [
      "Non-Vegetarian",
      "Vegetarian",
      "Vegan",
      "Jain / Swaminarayan",
      "Pescatarian",
    ],
  },
];

function PersonalBack({ answers, handleChange }) {
  const [responses, setResponses] = useState(Array(questions.length).fill(""));

  const handleInputChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleMultiSelectChange = (index, selectedOptions, maxSelections) => {
    if (selectedOptions.length <= maxSelections) {
      const newResponses = [...responses];
      newResponses[index] = selectedOptions.map((option) => option.value);
      setResponses(newResponses);
    }
  };

  return (
    <div className="question-container">
      <h1>Personal Details</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question my-3">
            <label htmlFor={`question-${index}`} className="mx-2">
              {question.text}
            </label>
            {question.type === "dropdown" ? (
              <select
                id={`question-${index}`}
                value={responses[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              >
                <option value="">Select an option</option>
                {question.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : question.type === "multi" ? (
              <Select
                isMulti
                id={`question-${index}`}
                options={question.options.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={question.options
                  .filter((option) => responses[index].includes(option))
                  .map((option) => ({ value: option, label: option }))}
                onChange={(selected) =>
                  handleMultiSelectChange(
                    index,
                    selected,
                    question.maxSelections
                  )
                }
                placeholder="Select options..."
              />
            ) : (
              <input
                type={question.type}
                id={`question-${index}`}
                value={responses[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default PersonalBack;
