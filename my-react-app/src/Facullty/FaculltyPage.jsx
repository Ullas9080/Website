import "./FaculltyPage.css";
import { useState } from "react";

export default function Facullty() {
  const [principle, setPrinciple] = useState(false);
  const [kiranSir, setKiranSir] = useState(false);
  const [balramSir, setBalramSir] = useState(false);
  const [soumyaMAM, setSoumyaMAM] = useState(false);
  const [pratibhaMAM, setPratibhaMAM] = useState(false);

  return (
    <>
      <h1 className="college-website-heading1">
        <span className="span1">Faculty Members, BMSCCM</span>
      </h1>
      <div className="faculty-body">
        <h1 style={{ color: "white" }}>h</h1>

        <div className="faculty-members">
          {/* person1 */}
          <div className="faculty-image" id="faculty-image1"></div>

          <div className="faculty-information">
            <div className="faculty-member-heading">
              <p>Dr. Pankaj Choudhary</p>
              <p>Principal</p>
              <p>MBA, IMI Belgium, CPE, Ph.D.</p>
              <p>Principal@bmsccm.ac.in</p>
            </div>
            <button
              className="button-display"
              onClick={() => {
                setPrinciple(!principle);
              }}
            >
              <button className="cta">
                <span>Load More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </button>
            <div className="faculty-member-para  ">
              {principle ? (
                <div>
                  Dr. Pankaj Choudhary is a seasoned professional with 20+ Years
                  or experience in the field of Academics and Administration in
                  Educational Institutions across the country. He has completed
                  his PhD in Management from Vivekananda Global University,
                  Jaipur. He handles subjects like Management Accounting,
                  Corporate Accounting and Principles of Marketing. He has
                  published more than 15 research papers in renowned
                  international Journals and 3 papers in SCOPUS journals. One of
                  his research papers in Marketing won National Awards.
                </div>
              ) : null}
            </div>
          </div>
          {/* person2 */}
          <div className="faculty-image" id="faculty-image2"></div>

          <div className="faculty-information">
            <div className="faculty-member-heading">
              <p>Mr. Kiran Kumar MN</p>
              <p>Assistant Professor, Department of Computer Application</p>
              <p>MCA, MSW, SLET, (Ph. D).</p>
              <p>Kiran@bmsccm.ac.in</p>
            </div>
            <button
              className="button-display"
              onClick={() => {
                setKiranSir(!kiranSir);
              }}
            >
              <button className="cta">
                <span>Load More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </button>
            <div className="faculty-member-para  ">
              {kiranSir ? (
                <div>
                  Mr. Kiran Kumar MN is working as Assistant Professor in the
                  Department of Bachelor of Computer Applications having 12
                  years of teaching experience. Goal driven professional
                  educator with a solid commitment to the academic growth and
                  development of every student in the class. Guided UG students
                  through their project works. Motivated students to come up
                  with innovative ideas for project work as a part of academics.
                  He has authored the book “ Programming in C”.
                  <p>
                    <b>Area of Expertise:</b> C, C++, DBMS, Data Mining
                  </p>
                  <p>
                    {" "}
                    <b>Research Interests:</b> Artificial Intelligence and Data
                    Minin
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          {/* person3 */}
          <div className="faculty-image" id="faculty-image3"></div>

          <div className="faculty-information">
            <div className="faculty-member-heading">
              <p>Mr. BALARAM M</p>
              <p>Assistant Professor, Dept., of BCA</p>

              <p>balaram@bmsccm.ac.in</p>
            </div>
            <button
              className="button-display"
              onClick={() => {
                setBalramSir(!balramSir);
              }}
            >
              <button className="cta">
                <span>Load More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </button>
            <div className="faculty-member-para  ">
              {balramSir ? (
                <div>
                  Mr. Balram is working currently as an Assistant Professor with
                  7+ years of experience in teaching, hardworking and passionate
                  about teaching to make student a very Good citizen to the
                  society.
                  <p>
                    <b>Area of Expertise:</b>DBMS, NETWORKS, PYTHON
                  </p>
                  <p>
                    <b>Research Interests :</b> System Programming
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          {/* person4 */}

          <div className="faculty-image" id="faculty-image4"></div>

          <div className="faculty-information">
            <div className="faculty-member-heading">
              <p>Ms. Soumya.V</p>
              <p>Assistant professor</p>
              <p>V MA (Kannada),NET</p>
              <p>soumya@bmsccm.ac.in</p>
            </div>
            <button
              className="button-display"
              onClick={() => {
                setSoumyaMAM(!soumyaMAM);
              }}
            >
              <button className="cta">
                <span>Load More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </button>
            <div className="faculty-member-para  ">
              {soumyaMAM ? (
                <div>
                  Ms. Soumya is M.A, B.Ed. graduated from Bangalore university.
                  Having 6 years’ experience in teaching.
                  <p>
                    <b>Area of Expertise:</b> Kannada
                  </p>
                  <p>
                    <b>Research Interests:</b> Linguistics, cultural studies
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          {/* person5 */}
          <div className="faculty-image" id="faculty-image5"></div>

          <div className="faculty-information">
            <div className="faculty-member-heading">
              <p>Dr. Pratibha Singh</p>
              <p>Assistant Professor</p>
              <p>MA (English),Ph.D</p>
              <p>Pratibha@bmaccm.ac.in</p>
            </div>
            <button
              className="button-display"
              onClick={() => {
                setPratibhaMAM(!pratibhaMAM);
              }}
            >
              <button className="cta">
                <span>Load More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </button>
            <div className="faculty-member-para  ">
              {pratibhaMAM ? (
                <div>
                  Mrs. Pratibha is knowledgeable, kind, cooperative and open
                  minded! Passion for the subject. Knowledge of the subject.
                  <p>
                    {" "}
                    <b>Area of Expertise:</b>English language and literature
                  </p>
                  <p>
                    <b>Research Interests:</b> Literature
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <p className="white">
          Faculty at the college are a heady mix of youth & experience. Most of
          the faculties at the college regularly contribute to various national
          & international journals & conferences. Some faculty members regularly
          contribute to print media like Newspaper, Magazines & Journals. The
          student – faculty relationship at BMSCCM reaches a new pinnacle beyond
          the classroom, when they get together in organising key events at the
          institute.
        </p>
      </div>
    </>
  );
}
