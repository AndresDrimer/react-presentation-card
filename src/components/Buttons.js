import emailLogo from "../images/email.svg";
import linkedinLogo from "../images/linkedini.svg";

export default function Buttons() {
  return (
    <div className="buttons-cont">
      <button type="text">
        {" "}
        <a href="mailto:andresdrimer@hotmail.com" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={emailLogo} alt="" /> Email{" "}
        </a>{" "}
      </button>
      <button type="text" id="btn-linkedin">
        {" "}
        <a href="https://www.linkedin.com/in/andres-drimer/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={linkedinLogo} alt=""  /> LinkedIn{" "}
        </a>{" "}
      </button>
    </div>
  );
}
