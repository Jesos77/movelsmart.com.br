import React, { useEffect } from "react";
import { Button } from "../Button";
import { Section, Container, ColumnLeft, ColumnRight } from "./InfoStyles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import "./Info.css";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  exist,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section ref={ref}>
      <Container>
        <ColumnLeft
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <div className={exist ? "btn-exist" : "btn-exist darkness"}><Button to="/Sobre">{buttonLabel}</Button></div>
        </ColumnLeft>
        <ColumnRight
          initial={initial}
          transition={{ delay: 0.7, duration: 0.6 }}
          animate={animation}
        >
          <img src={image} alt="home"></img>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
