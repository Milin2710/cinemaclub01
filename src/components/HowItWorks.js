import React from "react";
import "./HowItWorks.css";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

function HowItWorks() {
  const steps = [
    {
      image: work1,
      title: "Create an account",
      heading: "Create / login to an existing account to get started",
      description:
        "An account is created with your email and a desired password",
    },
    {
      image: work2,
      title: "Explore varieties",
      heading: "Shop for your favorites meal as e dey hot.",
      description:
        "Shop for your favorite meals or drinks and enjoy while doing it.",
    },
    {
      image: work3,
      title: "Checkout",
      heading: "When you are done, check out and get it delivered.",
      description: "When you done check out get it delivered with ease.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How the app works</h2>
      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.title}>
            <img src={step.image} alt={step.title} />
            <br /><br />
            <div className="content">
              <h3 className="h31">{step.title}</h3>
              <h3 className="h32">{step.heading}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
