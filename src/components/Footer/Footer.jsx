import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";
import footerLogo from "../../assets/images/hogash-logo.png";
import { contactInfo, myAccount } from "../../utils/footerInfo";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer__header">
            <div className="footer__header-logo">
              <img src={footerLogo} alt="" />
            </div>
            <div className="footer__header-contact">
              <input type="text" placeholder="Họ và tên" />
              <input type="text" placeholder="Email hoặc số điện thoại" />
              <button>Submit</button>
            </div>
          </div>
          <hr />
          <div className="footer__body">
            <div className="footer__body-side">
              <h5 className="footer__body-side-title">CONTACT INFO</h5>
              {contactInfo.map((item) => {
                const { id, text } = item;
                return (
                  <p className="footer__body-side-text" key={id}>
                    {text}
                  </p>
                );
              })}
            </div>
            <div className="footer__body-side">
              <h5 className="footer__body-side-title">MY ACCOUNT</h5>
              {myAccount.map((item) => {
                const { id, text } = item;
                return (
                  <p className="footer__body-side-text" key={id}>
                    {text}
                  </p>
                );
              })}
            </div>
            <div className="footer__body-side">
              <h5 className="footer__body-side-title">MY ACCOUNT</h5>
              {myAccount.map((item) => {
                const { id, text } = item;
                return (
                  <p className="footer__body-side-text" key={id}>
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="footer__icons">
            <span className="footer__icon">
              <ImFacebook />
            </span>
            <span className="footer__icon">
              <ImTwitter />
            </span>
            <span className="footer__icon">
              <ImLinkedin2 />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
