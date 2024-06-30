export function scrollToFAQ(navigate) {
  if (window.location.pathname !== "/") {
    // Navigate to home page first
    navigate("/", { state: { scrollToFAQ: true } });
  } else {
    // Directly scroll to the FAQ section
    const faqSection = document.getElementById("questions");
    if (faqSection) {
      faqSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
}
export function scrollToReviews(navigate) {
    if (window.location.pathname !== "/") {
      // Navigate to home page first
      navigate("/", { state: { scrollToReviews: true } });
    } else {
      // Directly scroll to the Reviews section
      const reviewsSection = document.getElementById("reviews");
      if (reviewsSection) {
        reviewsSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }