import { useContext } from "react";
import AuthContext from "../../Components/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import React from "react";
import "./Terms.css"; // Importing CSS for styles
import { scrollToTop } from "../../Service/Scroll/ScrollTop";
import { sendAnalytics } from "../../Service/Api";
const Terms = () => {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    scrollToTop();
    sendAnalytics("Terms", "Page", "View");
  });
  return (
    <div className="terms-conditions">
      <h1 className="text-center">Welcome to Ria</h1>
      <p>
        The premier South Asian match-making platform. These Terms and
        Conditions govern your use of our website and services. By accessing or
        using our website and services, you agree to comply with and be bound by
        these Terms and Conditions. If you do not agree with these Terms and
        Conditions, please do not access the website or use our services.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old to register an account and use our
        website and services. By using our website and services, you represent
        and warrant that you are at least 18 years old and have the legal
        capacity to enter into these Terms and Conditions.
      </p>

      <h2>2. Registration and Account Security</h2>
      <p>
        You are required to create an account to access certain features of our
        website and services. When you register an account, you agree to provide
        accurate, current, and complete information about yourself as prompted
        by the registration form. You are responsible for maintaining the
        confidentiality of your account credentials and for all activities that
        occur under your account.
      </p>

      <h2>3. User Conduct</h2>
      <p>
        You agree to use our website and services for lawful purposes only and
        to comply with all applicable laws and regulations. You further agree
        not to:
      </p>
      <ul>
        <li>
          Use our website and services in any manner that could interfere with,
          disrupt, or impair the functionality or security of the website or
          services.
        </li>
        <li>Transmit any viruses, worms, or other malicious code.</li>
        <li>Harass, intimidate, or threaten other users.</li>
        <li>
          Impersonate any person or entity or misrepresent your affiliation with
          any person or entity.
        </li>
        <li>
          Engage in any activity that could be considered unethical, deceptive,
          or fraudulent.
        </li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content and materials available on our website, including text,
        graphics, logos, images, and software, are the property of Ria or its
        licensors and are protected by copyright, trademark, and other
        intellectual property laws. You may not reproduce, modify, distribute,
        or otherwise use any content from our website without the prior written
        consent of Ria.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Ria shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages,
        including but not limited to loss of profits, data, or goodwill, arising
        out of or in connection with your use of our website and services.
      </p>

      <h2>6. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Ria and its officers,
        directors, employees, and agents from and against any and all claims,
        liabilities, damages, losses, costs, or expenses, including reasonable
        attorneys' fees, arising out of or in connection with your use of our
        website and services or your violation of these Terms and Conditions.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to our website
        and services at any time and for any reason without prior notice or
        liability.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of New York, without regard to its conflict of
        law principles.
      </p>

      <h2>9. Changes to These Terms and Conditions</h2>
      <p>
        We reserve the right to update or change these Terms and Conditions at
        any time. Any changes will be effective immediately upon posting the
        revised Terms and Conditions on this page. We encourage you to review
        these Terms and Conditions periodically for any updates.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions
        or our practices, please contact us at{" "}
        <strong>support@riamatchmaking.com</strong>.
      </p>

      <p>
        By using our website and services, you agree to comply with these Terms
        and Conditions. Thank you for using Ria.
      </p>

      <div className="d-flex justify-content-center mb-3 text-center">
        {!isAuthenticated && (
          <Link to="/onboard">
            <Button
              variant="dark"
              className="text-primary mt-3 bold"
              style={{
                height: "50px",
                width: "171px",
                borderRadius: "15px",
                fontSize: "20px",
                boxShadow: "2px 2px 2px rgb(0,0,0)",
              }}
              onClick={() => {
                sendAnalytics("Terms", "Join Ria Button", "Click");
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

export default Terms;
