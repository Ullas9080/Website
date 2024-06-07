import "./ContactPage.css";
export default function ContactPage() {
  return (
    <>
      <h1 className="college-website-heading">
        <span className="span">Contact Us</span>
      </h1>
      <div className="ContactPage-Body">
        <div className="space" style={{ color: "white" }}>
          s
        </div>
        <div className="ContactPage-Map">
          <iframe
            width="100%"
            height="500"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=no-97,kavi%20lakshmisha%20Rd,v.v.puram,%20Bengaluru%20560004+(College%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>

        <div className="Contact-info">
          <div className="College-details">
            <div className="Contact-icons">
              <img
                width="35"
                height="35"
                src="  https://img.icons8.com/?size=100&id=86397&format=png&color=F25081"
                alt="address"
              />
            </div>
            <div className="Contact-details">
              <p>
                BMS College of Commerce and
                <br />
                Management
              </p>
              <p className="Sub-contact-details">Bangalore India</p>
            </div>

            <div className="Contact-icons">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/ios-filled/50/F25081/phone.png"
                alt="phone"
              />
            </div>
            <div className="Contact-details">
              <p>+91 7826530189</p>
              <p className="Sub-contact-details">Monday to Saturday ,8am-5pm</p>
            </div>

            <div className="Contact-icons">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/fluency-systems-filled/48/F25081/new-post.png"
                alt="new-post"
              />
            </div>
            <div className="Contact-details">
              <p>principal@bmsccm.ac.in</p>
              <p className="Sub-contact-details">Email us for futher details</p>
            </div>
          </div>

          <div className="Student-details">
            <h2>Fill the Above Detail</h2>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
                id="name"
              />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>

            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
                id="name"
              />
              <label htmlFor="name" className="form__label">
                Phone Number
              </label>
            </div>

            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required=""
                id="name"
              />
              <label htmlFor="name" className="form__label">
                Email
              </label>
            </div>

            <button className="Submit">
              <p className="submit">submit</p>
            </button>
          </div>
        </div>

        <p className="field1">
          We’re a leading research university with a heart.Constitution was
          signed, we’re the nation’s university. oday we’re a forward-looking,
          diverse community devoted to social justice, restless inquiry and
          respect for each person’s individual needs and talents..
        </p>
      </div>
    </>
  );
}
