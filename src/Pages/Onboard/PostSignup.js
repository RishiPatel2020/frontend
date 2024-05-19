import "./PostSignUp.css";
import React from "react";
const PostSignup = () => {
  const onSelectPlan = (plan) => {
    alert(`You selected the ${plan} plan.`);
  };
  return (
    <div className="App my-1">
      <h5>
        Consider applying to be a premium member for an active, faster, and
        exclusive matchmaking experience!
      </h5>
      <div className="subscription-container">
        <div
          className="subscription-card free-plan"
          onClick={() => onSelectPlan("free")}
        >
          <h2>Free Member</h2>
          <p className="price">$0/year</p>
          <ul>
            <li>Can only be matched with paying members</li>
            <li>Unlimited # of Potential Matches</li>
          </ul>
          <button className="select-button">Choose Free Plan</button>
        </div>

        <div
          className="subscription-card premium-plan"
          onClick={() => onSelectPlan("premium")}
        >
          <h2>Premium Plan</h2>
          <p className="price">$499(one time)</p>
          <ul>
            <li>
              Can be matched with free and paying customers in the Ria database
            </li>
            <li>4X Speed of Finding Matches</li>
            <li>Unlimited # of Potential Matches</li>
            <li>
              Gold Standard Guarantee - Extra 6 months membership if no
              candidates found within first 12 months
            </li>
            <li>
              Follow-up detailed questionnaire to better understand your
              preferences
            </li>
            <li>
              External Searching via offline networks and channels for free, to
              find more candidates ($399.99 value)
            </li>
            <li>Monthly Progress Updates on how our search for you is going</li>
            <li>
              Select specific regions within the US (North East, South West,
              West, South East, or Midwest)
            </li>
            <li>
              3 Free Professional Photos Photoshoot through our extensive
              network of photographers to boost your profile ($299.99 value)
            </li>
            <li>
              50 Date Ideas in Your Area E-Book for free to help you impress
              your matches ($59.99 value w/ $199.99 worth of discounts inside)
            </li>
            <li>
              Body Language, Confidence, and Date Etiquette Manual for free to
              help you increase your communication on meetings ($59.99 value)
            </li>
            <li>
              2024 Outfits & Styling Ideas e-book for free to dazzle your
              matches ($29.99 value)
            </li>
            <li>
              Post-Date Feedback to help us better refine our search for you
            </li>
            <li>25 Seats available</li>
          </ul>
          <button className="select-button">Choose Premium Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PostSignup;
