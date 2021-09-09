import React from "react";
import { contactHome } from "utils/homeInfo";
import "./ContactHome.scss";

ContactHome.propTypes = {};

function ContactHome(props) {
  return (
    <section>
      <div className="contacthome">
        <div className="contacthome__description">
          <h1>{contactHome.title}</h1>
          <h2>{contactHome.header1}</h2>
          <p>{contactHome.text1}</p>
          <hr />
          <h2>{contactHome.header2}</h2>
          <p>{contactHome.text2}</p>
          <hr />
          <h2>{contactHome.header3}</h2>
          <p>{contactHome.text3}</p>
        </div>
        <div className="contacthome__form">
          <h1>{contactHome.formHeader}</h1>
          <input type="text" placeholder="Họ và tên" />
          <input type="text" placeholder="Số điện thoại" />
          <input type="text" placeholder="Địa chỉ Email" />
          <textarea type="text" placeholder="Lời nhắn ..." />
          <hr />
          <button className="contacthome__form-btn">Submit</button>
        </div>
      </div>
    </section>
  );
}

export default ContactHome;
