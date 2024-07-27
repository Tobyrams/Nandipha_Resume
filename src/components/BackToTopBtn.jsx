import React, { useState, useEffect, useRef } from "react";
import "animate.css";

const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        if (buttonRef.current) {
          buttonRef.current.classList.remove("animate__fadeInUp");
          buttonRef.current.classList.add("animate__fadeOutDown");
          setTimeout(() => setIsVisible(false), 500); // Wait for animation to finish
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 z-20 right-0 pr-4 pb-4">
          <button
            ref={buttonRef}
            onClick={scrollToTop}
            className={`h-12 w-12 sm:h-14 sm:w-14 transition ease-linear bg-base-100 hover:bg-base-300 shadow-md rounded-full ring-1 hover:ring-2 cursor-pointer ring-base-300 flex justify-center items-center
              animate__animated animate__fadeInUp animate__faster`}
            onAnimationEnd={() => {
              if (
                buttonRef.current &&
                buttonRef.current.classList.contains("animate__fadeOutDown")
              ) {
                buttonRef.current.classList.remove("animate__fadeOutDown");
                buttonRef.current.classList.add("animate__fadeInUp");
              }
            }}
          >
            <i className="fa-solid fa-arrow-up-long sm:text-3xl text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTopBtn;
