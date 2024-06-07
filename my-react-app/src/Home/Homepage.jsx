import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="homepageBody">
        <h1 className="homeHeading">BMS COLLEGE OF COMMERCE AND MANAGEMENT</h1>
      </div>
      <p className="homepageparagraph">
        We’re a leading research university with a heart.Constitution was
        signed, we’re the nation’s university. oday we’re a forward-looking,
        diverse community devoted to social justice, restless inquiry and
        respect for each person’s individual needs and talents..{" "}
      </p>

      <div className="buttoncenter">
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>

      <div className="sub-homeBody">
        <div className="course-Homebody">
          <h1 className="home-course-heading">Courses we offer</h1>

          <p className="home-cousre-para">
            Explore the intersection of technology and society. Learn about
            environmental justice. Take the famous Problem of God course. Our
            innovative courses inspire and invite you to help solve some of
            today’s most pressing local, national and global issues.
          </p>

          <div className="home-course-offer">
            <div className="home-course-BCOM" id="home-course">
              <h3> Bachelor of Commerce (BCom)</h3>
              <p className="home-course-para">
                This is an undergraduate degree program in business, management,
                economics, or accounting. It is awarded in various countries,
                including Canada, Australia, India, and several Commonwealth
                nations1. BCom programs typically cover subjects related to
                finance
              </p>
            </div>
            <div className="home-course-BBA" id="home-course">
              <h3> Bachelor of Business Administration (BBA)</h3>
              <p className="home-course-para">
                A BBA is a bachelor’s degree that helps you establish a
                fundamental understanding of business and how various aspects of
                it apply to the real world. It’s a well-rounded degree currently
                in high demand because of its versatility1.
              </p>
            </div>
            <div className="home-course-BCA" id="home-course">
              <h3> Bachelor of Computer Application (BCA)</h3>
              <p className="home-course-para">
                It’s an undergraduate degree program that focuses on computer
                science, software development, The curriculum typically includes
                subjects like Java, C++, Python, web development, data
                structures, and database management systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-campus">
        <div className="home-campus-heading">
          <h1 className="h1-heading">BMS Group Of Institution</h1>
        </div>
        <div className="home-campus-para">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            sapiente dolor vero nihil dolores magni excepturi optio inventore
            quod temporibus ab neque obcaecati mollitia labore aperiam qui
            consequuntur aliquam sequi nam cum, quos maxime dolore. Asperiores
            ut inventore voluptas, unde ipsam exercitationem saepe cupiditate
            fuga.
          </p>
        </div>
        <div className="home-campus-img">
          <div className="img1" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS College of<br></br>Engineering
            </p>
          </div>
          <div className="img2" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS School of <br></br>Architecture
            </p>
          </div>
          <div className="img3" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS Evening College of<br></br>Engineering
            </p>
          </div>
          <div className="img4" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS College of <br></br>Law
            </p>
          </div>
          <div className="img5" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS College for<br></br>Women
            </p>
          </div>
          <div className="img6" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS College of<br></br>Commerce and Management
            </p>
          </div>
          <div className="img7" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS Evening College of<br></br>Arts and Commerce
            </p>
          </div>
          <div className="img8" id="img">
            <p className="home-course-img-para" id="home-course-img-para1">
              BMS Institute of <br></br>Technology
            </p>
          </div>
        </div>
      </div>
      <div className="Student-opinoin">
        <div className="Student-heading">
          <h1>Student Review</h1>
        </div>
        <div className="Student-review-para">
          We commit to meet the financial need of every admitted undergraduate
          student. We don’t consider your ability to pay when we review your
          application, and we don’t base our decision on whether you can cover
          the cost. If you’re accepted here, you belong here.
        </div>
        <div className="bio">
          <div className="Student-bio">
            <div className="Student-img">
              <div className="src-image" id="src-image1"></div>
            </div>
            <div className="Student-details">
              “BMS is home to me not because of the fancy buildings like Healy
              Hall, or its prestigious reputation, but rather because of the
              university’s care for the whole person as each of us attempts to
              live our lives for others.”
              <h2 className="student-name1"> Henry</h2>
            </div>
          </div>
          <div className="Student-bio">
            <div className="Student-img">
              <div className="src-image" id="src-image2"></div>
            </div>
            <div className="Student-details">
              “It’s likely that you will come to love some of the most amazing
              souls this campus has to offer. That love may come in the form of
              friendships that you know will last forever.”
              <h2 className="student-name2">Isabella</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="home-about">
        <div className="home-about-img">
          <div className="home-about-heading">
            <h1 style={{ color: "white" }}>About us</h1>
          </div>
          <div className="home-about-para">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              doloribus facere nam, reiciendis laborum ut similique dignissimos
              adipisci exercitationem, temporibus soluta qui eveniet! In
              repellendus minima quia perferendis, atque quo cumque consequatur
              inventore rerum beatae ea tempora aliquam maxime sunt aperiam
              error mollitia, obcaecati iure.
            </p>
          </div>
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Explore&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;Explore&nbsp;
            </span>
          </button>
        </div>
      </div>

      <div className="home-contact">
        <h1 className="home-contact-heading">Contact</h1>
      </div>

      <div className="home-contact-moblie">
        <div className="home-contact-icons">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/F25081/phone.png"
            alt="phone"
          />
        </div>
        <div className="home-contact-detail">
          <h2>9620225400-03</h2>
        </div>
      </div>
      <div className="home-contact-email">
        <div className="home-contact-icons">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency-systems-filled/48/F25081/new-post.png"
            alt="new-post"
          />
        </div>
        <div className="home-contact-detail">
          <h2>principal@bmsccm.ac.in</h2>
        </div>
      </div>
    </>
  );
}
