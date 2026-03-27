import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:sanghavisparsh1402@gmail.com"
                data-cursor="disable"
              >
                sanghavisparsh1402@gmail.com
              </a>
            </p>
            <p>+1 (857) 228-5257</p>
            <h4>Education</h4>
            <p>
              M.S. Computer Software Engineering, Northeastern University,
              Boston, MA — 2025
            </p>
            <p>
              B.E. Information &amp; Communication Engineering, Gujarat
              Technological University, India — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/sparsh-sanghavi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:sanghavisparsh1402@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sparsh Sanghavi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
