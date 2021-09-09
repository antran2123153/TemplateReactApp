import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-3 mx-auto">
            <ContactInfo />
          </div>
          <div className="col-10 col-md-9 mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
