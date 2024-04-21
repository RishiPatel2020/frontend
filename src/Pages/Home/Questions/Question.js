import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <section id="questions" className="p-5 bg-light">
      <h2 className="text-center text-dark mb-4" style={{ fontSize: "42px" }}>
        FAQs
      </h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            So there's no liking, swiping, or scrolling at all?
          </Accordion.Header>
          <Accordion.Body>
            None. Zilch. Zero. Nil. Hard to believe, but true. We believe in not
            wasting time with having to manually go through tons of profiles to
            check whether or not they fit your requirements. So, our systems do
            the hard work behind the scenes to bring you profiles of folks that
            match your preferences.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is this a free matchmaking service?
          </Accordion.Header>
          <Accordion.Body>Yup. There's no charge. At all.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How many South Asian communities are included?
          </Accordion.Header>
          <Accordion.Body>
            As of right now, we're covering a lot of the bases but if we're
            missing any particularities, we'll be adding them in soon.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            When can I expect to receive the e-mails of the matches?
          </Accordion.Header>
          <Accordion.Body>
            We send out the e-mails at the end of each month. Be on the lookout!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Once I get the e-mail of the candidates, what's next?
          </Accordion.Header>
          <Accordion.Body>
            You'll be able to send interests for any of the candidates in the
            profiles and if they also do the same, you'll be invited to chat
            with each other! Make sure you also submit the profiles you're not
            interested in so that they don't roll over into the next cycle!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How do I message the candidates in the profiles?
          </Accordion.Header>
          <Accordion.Body>
            As soon as the candidate also sends an interest to connect with you,
            you'll be able to message one another!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Do I get the same profiles each month?
          </Accordion.Header>
          <Accordion.Body>
            Unless you've not selected interested or not interested on the
            profiles sent for a particular month, we won't send reoccurring
            profiles as an excuse to not work harder for you. The systems at Ria
            work around the clock to measure your profile with others as soon as
            they enter our systems.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            Did I miss the monthly e-mail of the matches?
          </Accordion.Header>
          <Accordion.Body>
            If there's no profiles that match your preferences in our system for
            a particular month, you won't be recieving an e-mail from us. Be on
            the lookout however, our systems are working 24/7 to constantly
            check against any profile that is added on our site.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Question;
