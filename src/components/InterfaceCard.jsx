import React from "react";
import "./InterfaceCard.css";

const InterfaceCard = ({ embedLink, title }) => (
  <div className="interface-card">
    <iframe
      src={`${embedLink}?autoplay=1&mute=1`}
      allow="autoplay; encrypted-media"
      frameBorder="0"
      title={title}
    ></iframe>
    <div
      className="video-title"
      onClick={() => window.open(embedLink, "_blank")}
    >
      {title}
    </div>
  </div>
);

export default InterfaceCard;
