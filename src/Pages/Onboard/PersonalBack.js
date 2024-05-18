import React, { useState } from "react";
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
    text: "Personality Traits",
    type: "dropdown",
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
  },
  {
    text: "Hobbies",
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
