import { useContext } from "react";
import AuthContext from "../../Components/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import React from "react";
import "./Privacy.css"; // Importing CSS for styles
import scrollToTop from "../../Service/ScrollTop";

const Privacy = () => {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    scrollToTop();
  });
  return (
    <div className="privacy-policy">
      <h1 className="text-center">Welcome to Ria</h1>
      <p>
        The premier South Asian match-making platform. Protecting your privacy
        is paramount to us. This Privacy Policy outlines how we collect, use,
        disclose, and safeguard your personal information when you use our
        website and services.
      </p>
      <p>
        By accessing or using our website and services, you agree to the terms
        of this Privacy Policy. If you do not agree with the terms of this
        Privacy Policy, please do not access the website or use our services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> When you register an account
          with us, we collect personal information such as your name, email
          address, date of birth, gender, location, and preferences for
          potential matches.
        </li>
        <li>
          <strong>Profile Information:</strong> Users may choose to provide
          additional information on their profiles, including photos, hobbies,
          interests, and cultural background.
        </li>
        <li>
          <strong>Usage Information:</strong> We automatically collect
          information about how you interact with our website, including your IP
          address, browser type, pages visited, and device information.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>
          <strong>Matchmaking:</strong> We use the information you provide to
          match you with potential partners based on compatibility, preferences,
          and other factors.
        </li>
        <li>
          <strong>Communication:</strong> We may use your contact information to
          send you notifications about matches, messages from other users,
          updates to our services, and promotional offers. You can opt out of
          promotional communications at any time.
        </li>
        <li>
          <strong>Improvement of Services:</strong> We analyze user data to
          improve our services, develop new features, and enhance the user
          experience.
        </li>
      </ul>

      <h2>3. Information Sharing</h2>
      <ul>
        <li>
          <strong>Matching Candidates:</strong> In order to facilitate matches,
          we may share your profile information with other users who match your
          criteria.
        </li>
        <li>
          <strong>Service Providers:</strong> We may share your information with
          third-party service providers who assist us in operating our website,
          conducting business, or servicing you, as long as they agree to keep
          this information confidential.
        </li>
        <li>
          <strong>Legal Compliance:</strong> We may disclose your information if
          required to do so by law or in response to a subpoena, court order, or
          other legal process.
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We take the security of your personal information seriously and employ
        reasonable measures to protect it against unauthorized access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the internet or electronic storage is 100% secure, and
        we cannot guarantee absolute security.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or services. We
        are not responsible for the privacy practices or content of these third
        parties. We encourage you to review the privacy policies of these
        websites before providing any personal information.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        Our website and services are not intended for individuals under the age
        of 18. We do not knowingly collect personal information from children.
        If you are a parent or guardian and believe that your child has provided
        us with personal information, please contact us immediately.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or change this Privacy Policy at any
        time. Any changes will be effective immediately upon posting the revised
        Privacy Policy on this page. We encourage you to review this Privacy
        Policy periodically for any updates.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        practices, please contact us at{" "}
        <strong>support@riamatchmaking.com</strong>.
      </p>

      <p>
        By using our website and services, you consent to the terms of this
        Privacy Policy. Thank you for entrusting us with your privacy.
      </p>
      <div className="d-flex justify-content-center mb-3 text-center">
        {!isAuthenticated && (
          <Link to="/onboard">
            <Button
              variant="dark"
              className="text-primary mt-3"
              style={{
                height: "50px",
                width: "163px",
                borderRadius: "15px",
                fontSize: "20px",
                boxShadow: "2px 2px 2px rgb(0,0,0)",
              }}
            >
              Join for Free
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Privacy;
