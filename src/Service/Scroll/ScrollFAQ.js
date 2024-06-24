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
