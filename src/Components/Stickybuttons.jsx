import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Stickybuttons.css";

const StickyButtons = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="sticky-buttons">
      <button className="sticky-button" onClick={scrollToTop}>
        <i class="bi bi-arrow-up-circle"></i>
      </button>
      <button className="sticky-button" onClick={scrollToBottom}>
        <i class="bi bi-arrow-down-circle"></i>
      </button>
    </div>
  );
};

export default StickyButtons;
