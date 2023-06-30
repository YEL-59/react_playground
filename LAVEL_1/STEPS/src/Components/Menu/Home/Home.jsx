import React from "react";
import "../../../assets/css/style.css";

const Home = () => {

    const messages = [
        "Learn React ⚛️",
        "Apply for jobs 💼",
        "Invest your new income 🤑",
      ];

const step = 3

const handelPrevious=()=>{
   alert(`Hey it is!p :${step}`)
}

const handelNext=()=>{
    alert(`Hey it is!n :${step}`)
 }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step  === 1 ? "active":""}>1</div>
          <div className={step ===2 ? "active":""}>2</div>
          <div className={step === 3 ? "active":""}>3</div>
        </div>
        <p className="message">{step}:{messages[step-1] ? messages[step-1]:'no data in object.plz add '}</p>

        {/* <div className="buttons ">
              <button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </button>
            </div> */}

        <div className="buttons">
          <button className="bg-[#7950f2] text-[#fff]" onClick={handelPrevious}  >
            <span>👈</span> Previous
          </button>

          <button className="bg-[#7950f2] text-[#fff]" onClick={handelNext}>
            Next <span>👉</span>
            <span>🤓</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
