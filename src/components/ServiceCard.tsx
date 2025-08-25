import React from "react";
import "./cards.css";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <article className="svc-card" tabIndex={0}>
      <div className="svc-card__image">
        <img src={image} alt={title} loading="lazy" />
        <div className="svc-card__glow" />
      </div>
      <div className="svc-card__body">
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
