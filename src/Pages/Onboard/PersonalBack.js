import React, { useContext, useEffect } from "react";
import Select from "react-select";
import "./Onboard.css";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

const questions = [
  {
    id: "community",
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
    id: "maritalStatus",
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
    id: "drinks",
    text: "Drinking",
    type: "dropdown",
    options: ["yes", "no"],
  },
  {
    id: "smokes",
    text: "Smoking",
    type: "dropdown",
    options: ["yes", "no"],
  },
  {
    id: "religion",
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
    id: "personality",
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
    id: "hobbies",
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
    id: "immigration",
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
    id: "diet",
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

function PersonalBack({ setIsValid }) {
  const { answers, updateAnswer } = useContext(AnswersContext);

  const handleInputChange = (id, value) => {
    updateAnswer(id, value);
  };

  const handleMultiSelectChange = (id, selectedOptions, maxSelections) => {
    if (selectedOptions.length <= maxSelections) {
      updateAnswer(
        id,
        selectedOptions.map((option) => option.value)
      );
    }
  };

  useEffect(() => {
    // Validate inputs
    const isValid = questions.every(question => {
      if (question.type === "multi") {
        return answers[question.id] && answers[question.id].length <= question.maxSelections;
      }
      return answers[question.id];
    });
    setIsValid(isValid);
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1>Personal Details</h1>
      <form>
        {questions.map((question) => (
          <div key={question.id} className="question my-3">
            <label htmlFor={question.id} className="mx-2">
              {question.text}
            </label>
            {question.type === "dropdown" ? (
              <select
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                style={{border:'none', backgroundColor:"rgb(243,243,243)"}}
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
                id={question.id}
                options={question.options.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={question.options
                  .filter((option) => answers[question.id]?.includes(option))
                  .map((option) => ({ value: option, label: option }))}
                onChange={(selected) =>
                  handleMultiSelectChange(
                    question.id,
                    selected,
                    question.maxSelections
                  )
                }
                placeholder="Select options..."
              />
            ) : (
              <input
                type={question.type}
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                style={{border:'none', backgroundColor:"rgb(243,243,243)"}}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default PersonalBack;
