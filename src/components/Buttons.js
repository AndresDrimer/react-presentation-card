import emailLogo from "../images/email.svg";
import linkedinLogo from "../images/linkedini.svg";
import data from '../data'

export default function Buttons() {
  return (
    <div className="buttons-cont">
      <button type="text">
        {" "}
        <a href="mailto:andresdrimer@hotmail.com" target="_blank">
          {" "}
          <img src={emailLogo} alt="" /> Email{" "}
        </a>{" "}
      </button>
      <button type="text" id="btn-linkedin">
        {" "}
        <a href={data.linkedin} target="_blank">
          {" "}
          <img src={linkedinLogo} alt=""  /> LinkedIn{" "}
        </a>{" "}
      </button>
    </div>
  );
}
