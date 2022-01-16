import React from "react";
import styles from "./Accordion.module.css";
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ title, bodyContent, setImage, image }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelectedInsideParent, setIsSelectedInsideParent] =
    React.useState(false);
  const bodyRef = React.useRef(null);
  const componentRef = React.useRef();

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      bodyRef.current.style.height = 0;
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (!ref.contains(e.target)) {
          // put your action here
          bodyRef.current.style.height = 0;
          setIsOpen(false);
        }
      }
    }
  }, []);

  return (
    <div
      className={`${styles.accordion} ${isOpen ? styles.open : ""} ${
        isSelectedInsideParent ? styles.active : ""
      }`}
      ref={componentRef}
    >
      <button
        onClick={handler}
        className={`${styles.accordion_btn}  pointer fs-18px white weight-5`}
      >
        {title}
        <span className="white">
          <BiChevronDown size={30} />
        </span>
      </button>
      <main ref={bodyRef}>
        <div className={styles.accordionBody}>
          {bodyContent &&
            bodyContent.map((data, index) => (
              <button
                key={index}
                className={`fs-16px white weight-4 ${
                  data.content.img === image ? styles.active : ""
                } `}
                onClick={() => {
                  // setIsSelectedInsideParent(

                  //   );
                  setImage(data.content.img);
                }}
              >
                {data.title}
              </button>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Accordion;