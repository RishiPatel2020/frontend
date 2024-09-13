import React, { useContext, useEffect } from "react";
import Select, { components } from "react-select";
import "./Onboard.css";
import { AnswersContext } from "../../Components/AnswersContext/AnswersContext";

// Custom Input component to disable typing
const CustomInput = (props) => <components.Input {...props} readOnly />;

const questions = [
  {
    id: "previousMaritalStatus",
    text: "Previous Marital Status",
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
    id: "personality",
    text: "Personality Traits",
    type: "multi",
    options: [
      "Disciplined",
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
    text: "Dietary Practices",
    type: "dropdown",
    options: [
      "Non-Vegetarian",
      "Vegetarian",
      "Vegan",
      "Jain / Swaminarayan",
      "Pescatarian",
      "Halal",
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
    let validationMessage = "";

    if (!answers.community) {
      validationMessage = "Please select Community";
    } else if (!answers.religion) {
      validationMessage = "Please select Religion";
    } else if (!answers.drinks) {
      validationMessage = "Please select Drinking";
    } else if (!answers.smokes) {
      validationMessage = "Please select Smoking";
    } else {
      // Loop through all questions to validate them
      for (const question of questions) {
        const answer = answers[question.id];

        // Check for dropdown or single-select type questions
        if (!answer) {
          validationMessage = `Please select ${question.text}`;
          break;
        }

        // For multi-select, check max selections
        if (question.type === "multi" && answer.length < 1) {
          validationMessage = `Please select at least 1 option for ${question.text}`;
          break;
        }
      }
    }
    // Set validation message or mark as valid
    setIsValid(validationMessage.length > 0 ? validationMessage : null);
  }, [answers, setIsValid]);

  return (
    <div className="question-container">
      <h1 className="text-dark" style={{ fontWeight: "bold" }}>
        Detailed Info
      </h1>
      <form>
        <div className="city-state-container">
          {/* Community */}
          <div className="question state-input">
            <label htmlFor="community">Community</label>
            <select
              id="community"
              name="community"
              value={answers.community || ""}
              onChange={(e) => handleInputChange("community", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {[
                "Bengali",
                "Gujarati",
                "Guyanese",
                "Hindi Speaking",
                "Jatt",
                "Kannada",
                "Kashmiri",
                "Malayali",
                "Marathi",
                "Marwari",
                "Odia",
                "Punjabi",
                "Rajasthani",
                "Shia",
                "Sindhi",
                "Sunni",
                "Tamil",
                "Telugu",
                "Urdu",
              ].map((community_, index) => (
                <option key={index} value={community_}>
                  {community_}
                </option>
              ))}
            </select>
          </div>

          {/* Religeon */}
          <div className="question city-input">
            <label htmlFor="religion">Religion</label>
            <select
              id="religion"
              name="religion"
              value={answers.religion || ""}
              onChange={(e) => handleInputChange("religion", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {[
                "Hindu",
                "Christian",
                "Sikh",
                "Jain",
                "Buddhist",
                "Parsi",
                "Atheist",
                "Other",
              ].map((religion_, index) => (
                <option key={index} value={religion_}>
                  {religion_}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="city-state-container">
          {/* Drinking */}
          <div className="question state-input">
            <label htmlFor="drinks">Drinking</label>
            <select
              id="drinks"
              name="drinks"
              value={answers.drinks || ""}
              onChange={(e) => handleInputChange("drinks", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {["Yes", "No"].map((drinks_, index) => (
                <option key={index} value={drinks_}>
                  {drinks_}
                </option>
              ))}
            </select>
          </div>

          {/* Smoking */}
          <div className="question city-input">
            <label htmlFor="smokes">Smoking</label>
            <select
              id="smokes"
              name="smokes"
              value={answers.smokes || ""}
              onChange={(e) => handleInputChange("smokes", e.target.value)}
              className="border-0 border-bottom rounded-1"
            >
              <option value="">Select</option>
              {["Yes", "No"].map((smokes_, index) => (
                <option key={index} value={smokes_}>
                  {smokes_}
                </option>
              ))}
            </select>
          </div>
        </div>

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
                className="question-input"
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
                className="light"
                placeholder="Select options"
                components={{ Input: CustomInput }}
                styles={{
                  control: (base) => ({
                    ...base,
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    boxShadow: "none",
                    backgroundColor: "rgb(243, 243, 243)",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    cursor: "pointer",
                  }),
                  input: (base) => ({
                    ...base,
                    pointerEvents: "none", // Disable typing
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "rgb(243, 243, 243)",
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? "rgb(190, 156, 92)"
                      : "rgb(243, 243, 243)",
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
              />
            ) : (
              <input
                type={question.type}
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                className="question-input"
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default PersonalBack;
