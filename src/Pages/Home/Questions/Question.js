import React from "react";
import { Accordion } from "react-bootstrap";

const Question = () => {
  return (
    <section id="questions" className="p-5 bg-primary">
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
            check whether or not they fit your requirements. So, our team does
            the hard work behind the scenes to bring you candidates that only
            match your preferences.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What does Ria stand for?</Accordion.Header>
          <Accordion.Body>
            Rishta Interactions Assistant, read more about our origin story in
            our About page.
          </Accordion.Body>
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
            When can I expect to receive matches?
          </Accordion.Header>
          <Accordion.Body>
            Depending on your requirements for a match and the membership you've
            chosen, timing can vary. Premium members are matched faster as they
            can be paired with both free members and paying members. Free
            members on the other hand, are only matched with paying members.
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
            I applied for a premium membership, how are premium members
            selected?
          </Accordion.Header>
          <Accordion.Body>
            Depending on the authenticity of your profile and the number of
            available seats at the time of your application, we decided whether
            or not to include you in the premium matching pool.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            After my premium membership application, how long before I hear
            back?
          </Accordion.Header>
          <Accordion.Body>
            Our team will take 2-4 days to analyze your profile and the number
            of available memberships left, to get back to you.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            I was waitlisted for the premium membership, how long before seats
            open up?
          </Accordion.Header>
          <Accordion.Body>
            As our premium members are either exiting after finding a match they
            feel confident about or their membership expires, we routinely open
            seats. You will receive an email to join the premium pool as soon as
            a seat is available.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>I need other help, where do I go?</Accordion.Header>
          <Accordion.Body>support@riamatchmaking.com</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Question;
