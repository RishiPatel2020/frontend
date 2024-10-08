import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <section className="p-5 bg-light" id="questions">
      <h2 className="text-center text-dark mb-4" style={{ fontSize: "42px" }}>
        FAQs
      </h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="bold">
              So there's no liking, swiping, or scrolling at all?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              None. Zilch. Zero. Nil. Hard to believe, but true. We believe in
              not wasting time with having to manually go through tons of
              profiles to check whether or not they fit your requirements. So,
              our team does the hard work behind the scenes to bring you
              candidates that only match your preferences.
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="bold">What does Ria stand for?</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              Rishta Interactions Assistant, read more about our origin story in
              our About page.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className="bold">
              How many South Asian communities are included?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              As of right now, we're covering a lot of the bases but if we're
              missing any particularities, we'll be adding them in soon.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <span className="bold">
              Do I have to be a premium member to receive matches?
            </span>
          </Accordion.Header>

          <Accordion.Body>
            <span className="light">
              No! Once your profile is added to our matchmaking database, our
              matchmakers will consider your profile for qualities and traits
              that premium members are looking for. It will just take a bit
              longer to get you matched with a free membership as a free member
              can only be matched with premium members, whereas premium members
              can be matched with both premium AND free members
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <span className="bold">When can I expect to receive matches?</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              Depending on your requirements for a match and the membership
              you've chosen, timing can vary. Premium members are matched faster
              as they can be paired with both free members and paying members.
              Free members on the other hand, are only matched with paying
              members.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <span className="bold">How am I notified of candidates?</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              Your profile is constantly checked against preferences of our
              premium members to see if there's a match. We'll email you of the
              candidate. Please be on the lookout in your email inbox from us!
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <span className="bold">
              I applied for a premium membership, how are premium members
              selected?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              Depending on the authenticity of your profile and the number
              of available seats at the time of your application, we decide
              whether or not to include you in the premium matching pool.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            <span className="bold">
              After my premium membership application, how long before I hear
              back?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              Our team will take 2-4 days to analyze your profile and the number
              of available memberships left, to get back to you.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            <span className="bold">
              I was waitlisted for the premium membership, how long before seats
              open up?
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <span className="light">
              As our premium members are either exiting after finding a match
              they feel confident about or their membership expires, we
              routinely open seats. You will receive an email to join the
              premium pool as soon as a seat is available.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>
            <span className="bold">I need other help, where do I go?</span>
          </Accordion.Header>

          <Accordion.Body>
            <span className="light">info@riameets.com</span>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="10">
          <Accordion.Header>
            <span className="bold"> Interested in partnering, who do I contact?</span>
          </Accordion.Header>

          <Accordion.Body>
            <span className="light">info@riameets.com</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Question;
