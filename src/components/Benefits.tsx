"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Brain, CreditCard, BarChart4, Percent } from "lucide-react";
import content from "../../public/benefits-data.json";

interface BenefitItem {
  icon: string;
  size: number;
  text: {
    span: string;
    paragraph: string;
  };
}

const Benefits: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Change threshold as per your requirement
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 benefits-section">
      {content.map((item: BenefitItem, index: number) => (
        <div
          className={`flex flex-row items-center space-x-4 benefit-item ${
            isVisible ? "slide-in" : ""
          }`}
          key={index}
          ref={benefitsRef}
        >
          <div>{renderIcon(item.icon, item.size)}</div>
          <p className="capitalize">
            <span className="text-[#D357FF] font-bold">{item.text.span}</span>{" "}
            {item.text.paragraph}
          </p>
        </div>
      ))}
    </section>
  );
};

function renderIcon(icon: string, size: number) {
  switch (icon) {
    case "Brain":
      return <Brain size={size} />;
    case "CreditCard":
      return <CreditCard size={size} />;
    case "BarChart4":
      return <BarChart4 size={size} />;
    case "Percent":
      return <Percent size={size} />;
    default:
      return null;
  }
}

export default Benefits;
