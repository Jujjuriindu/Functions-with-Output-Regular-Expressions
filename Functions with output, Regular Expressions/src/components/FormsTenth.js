import React, { useRef } from "react";

function FormsTenth() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputref = useRef();
  let passwordInputref = useRef();
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();

  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let emailResultRef = useRef();
  let passwordResultRef = useRef();
  let englishResultRef = useRef();
  let teluguResultRef = useRef();
  let hindiResultRef = useRef();
  let mathsResultRef = useRef();
  let scienceResultRef = useRef();
  let socialResultRef = useRef();

  let resultLabelRef = useRef();

  let nameRegEx = /^[a-zA-Z\s]{2,30}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  let calculateResults = () => {
    let overallMarks = 30;
    return overallMarks;
  };
  let results = calculateResults();
  console.log(results);

  let calculateMarks = (
    engMarks,telMarks,hinMarks,matMarks,sciMarks,socMarks) => {
    let Marks = engMarks + telMarks + hinMarks + matMarks + sciMarks + socMarks;
    let percen = (Marks / 600) * 100;
    return { Marks, percen };
  };
  let result = calculateMarks(90, 50, 70, 80, 60, 89);
  console.log(result);

  let calculateResult = () => {
    let firstName = firstNameInputRef.current.value;
    let lastName = lastNameInputRef.current.value;
    let englishMarks = Number(englishInputRef.current.value);
    let teluguMarks = Number(teluguInputRef.current.value);
    let hindiMarks = Number(hindiInputRef.current.value);
    let mathsMarks = Number(mathsInputRef.current.value);
    let scienceMarks = Number(scienceInputRef.current.value);
    let socialMarks = Number(socialInputRef.current.value);
    let totalMarks =englishMarks +teluguMarks +hindiMarks +mathsMarks +scienceMarks +socialMarks;
    let percentage = (totalMarks / 600) * 100;
    resultLabelRef.current.innerHTML = `${firstName} ${lastName} got Total Marks are ${totalMarks} with ${percentage.toFixed(
      2
    )}%`;
    alert(`Total Marks are ${totalMarks} with ${percentage.toFixed(2)}%`);
  };
  let inputonFocus = (inputRef) => {
    inputRef.current.style.backgroundColor = "yellow";
  };
  let inputonChange = (inputRef, resultRef) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= 35) {
        resultRef.current.innerHTML = "Pass";
        resultRef.current.style.backgroundColor = "green";
      } else {
        resultRef.current.innerHTML = "Fail";
        resultRef.current.style.backgroundColor = "red";
      }
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "violet";
    }
  };
  let inputonBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "white";
  };

  let validateName = (nameStr, resultRef) => {
    let result = nameRegEx.test(nameStr);
    if (result == true) {
      resultRef.current.innerHTML = "Valid";
      resultRef.current.style.backgroundColor = "green";
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "red";
    }
  };
  let validateEmail = (emailStr, resultRef) => {
    let result = emailRegEx.test(emailStr);
    if (result == true) {
      resultRef.current.innerHTML = "Valid";
      resultRef.current.style.backgroundColor = "green";
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "red";
    }
  };
  let validatePassword = (passwordStr, resultRef) => {
    let result = passwordRegEx.test(passwordStr);
    if (result == true) {
      resultRef.current.innerHTML = "Valid";
      resultRef.current.style.backgroundColor = "green";
    } else {
      resultRef.current.innerHTML = "Invalid";
      resultRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            ref={firstNameInputRef}
            onChange={() => {
              validateName(firstNameInputRef.current.value, firstNameResultRef);
            }}
          ></input>
          <label ref={firstNameResultRef}>result</label>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            ref={lastNameInputRef}
            onChange={() => {
              validateName(lastNameInputRef.current.value, lastNameResultRef);
            }}
          ></input>
          <label ref={lastNameResultRef}>result</label>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            ref={emailInputref}
            onChange={() => {
              validateEmail(emailInputref.current.value, emailResultRef);
            }}
          ></input>
          <label ref={emailResultRef}>result</label>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            ref={passwordInputref}
            onChange={() => {
              validatePassword(
                passwordInputref.current.value,
                passwordResultRef
              );
            }}
          ></input>
          <label ref={passwordResultRef}>result</label>
        </div>
        <div>
          <label>English Marks:</label>
          <input
            type="number"
            ref={englishInputRef}
            onFocus={() => {
              inputonFocus(englishInputRef);
            }}
            onChange={() => {
              inputonChange(englishInputRef, englishResultRef);
            }}
            onBlur={() => {
              inputonBlur(englishInputRef);
            }}
          ></input>
          <label ref={englishResultRef}>result</label>
        </div>
        <div>
          <label>Telugu Marks:</label>
          <input
            type="number"
            ref={teluguInputRef}
            onFocus={() => {
              inputonFocus(teluguInputRef);
            }}
            onChange={() => {
              inputonChange(teluguInputRef, teluguResultRef);
            }}
            onBlur={() => {
              inputonBlur(teluguInputRef);
            }}
          ></input>
          <label ref={teluguResultRef}>result</label>
        </div>
        <div>
          <label>Hindi Marks:</label>
          <input
            type="number"
            ref={hindiInputRef}
            onFocus={() => {
              inputonFocus(hindiInputRef);
            }}
            onChange={() => {
              inputonChange(hindiInputRef, hindiResultRef);
            }}
            onBlur={() => {
              inputonBlur(hindiInputRef);
            }}
          ></input>
          <label ref={hindiResultRef}>result</label>
        </div>
        <div>
          <label>Maths Marks:</label>
          <input
            type="number"
            ref={mathsInputRef}
            onFocus={() => {
              inputonFocus(mathsInputRef);
            }}
            onChange={() => {
              inputonChange(mathsInputRef, mathsResultRef);
            }}
            onBlur={() => {
              inputonBlur(mathsInputRef);
            }}
          ></input>
          <label ref={mathsResultRef}>result</label>
        </div>
        <div>
          <label>Science Marks:</label>
          <input
            type="number"
            ref={scienceInputRef}
            onFocus={() => {
              inputonFocus(scienceInputRef);
            }}
            onChange={() => {
              inputonChange(scienceInputRef, scienceResultRef);
            }}
            onBlur={() => {
              inputonBlur(scienceInputRef);
            }}
          ></input>
          <label ref={scienceResultRef}>result</label>
        </div>
        <div>
          <label>Social Marks:</label>
          <input
            type="number"
            ref={socialInputRef}
            onFocus={() => {
              inputonFocus(socialInputRef);
            }}
            onChange={() => {
              inputonChange(socialInputRef, socialResultRef);
            }}
            onBlur={() => {
              inputonBlur(socialInputRef);
            }}
          ></input>
          <label ref={socialResultRef}>result</label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              calculateResult();
            }}
          >
            Calculate
          </button>
        </div>
        <div>
          <label style={{ width: "500px" }} ref={resultLabelRef}>
            Please Enter your Marks and Calculate
          </label>
        </div>
      </form>
    </div>
  );
}

export default FormsTenth;
