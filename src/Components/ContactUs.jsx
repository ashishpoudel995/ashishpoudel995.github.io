import Logo from "../images/logo.png";

const ContactUs = () => {
  return (
    <div className="contactus" id="ContactUs">
      <h3>Contact Me:</h3>
      <div className="myLogo">
        <img src={Logo} alt="logo" />
        <div className="quote">Learning Everyday ...</div>
      </div>
      <div className="socialmedias">
        <a href="https://www.linkedin.com/in/ashish-poudel-500861193/" target="_new">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="https://twitter.com/ashish_poudel_" target="_new">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://github.com/ashishpoudel995" target="_new">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:ashishpoudel995@gmail.com">
          <i className="far fa-envelope" />
        </a>
      </div>
      <div className="copyright">
        Made by Ashish with <i className="fas fa-code" />
      </div>
    </div>
  );
};

export default ContactUs;
