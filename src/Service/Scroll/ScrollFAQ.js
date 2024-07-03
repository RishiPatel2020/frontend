export function scrollToFAQ() {
  setTimeout(() => {
    // Directly scroll to the FAQ section
    const faqSection = document.getElementById("questions");
    if (faqSection) {
      faqSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 1);
}
export function scrollToReviews() {
  // Directly scroll to the Reviews section

  setTimeout(() => {
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) {
      console.log("REVIEW SECTION FOUND!!!");
      reviewsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 1); // Delay of
}
