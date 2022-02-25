//Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 220,
  margin: "0rem 1rem 0rem 1rem",
  border: "1px #c9c9c9 solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #c9c9c9",
};

// About page
export default () => (
  <Layout>
    <div className="breadcrumbs">
      <a href="/">Home</a> {">"} <b>About</b>
    </div>
    <div className="aboutPage">
      <div className="paraAndImage">
        <div className="para">
          <h2>About</h2>
          <p>
            My name is Evan Malherbe and I'm a friendly, easy going person who
            loves to meet new people. I enjoy challenges and find the world
            completely fascinating. I'm passionate about fitness, reading and
            web development. At various times in the last few years, I've done
            running, on road cycling, mountain biking and I'm currently enjoying
            powerlifting. It seems to take ages to make real progress in terms
            of fitness or increased muscle mass, but the journey is fun and
            rewarding. I'm motivated by the prospect of a fulfilling career in
            Full Stack Web Development and I'm loving the process of learning to
            build useful websites.
          </p>
        </div>
        <div className="image">
          <Image
            src="/static/images/evanSeated.jpg"
            alt="Evan seated"
            style={imgStyle}
          />
        </div>
      </div>
      <div className="eduAndWork">
        <div className="edu">
          <h3>Education</h3>
          <p>
            My prior education is listed below:
            <br />
            <div className="priorEduDivs">
              <b>HyperionDev</b> <br />
              Full Stack Web Developer Bootcamp <br />
              2022 <br />
              <a
                href="/certificate.pdf"
                alt="Evan Malherbe - HyperionDev Full Stack Web Dev Bootcamp - Completion Certificate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Completion Certificate
              </a>
            </div>
            <div className="priorEduDivs">
              <b>University of South Africa (UNISA)</b> <br />
              Post Graduate Certificate in Education (PGCE) <br />
              2011
            </div>
            <div className="priorEduDivs">
              <b>Stellenbosch University</b> <br />
              Bachelor of Arts (Humanities) <br />
              2007
            </div>
            <div className="priorEduDivs">
              <b>Westville Boys' High School</b> <br />
              Matric Exemption <br />
              2001
            </div>
          </p>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <div className="job">
            {" "}
            <b>Intern Estate Agent </b> <br />
            Pam Golding Properties Westville (Jul 2019 to Oct 2021) <hr />
            <p>
              Sold 10 homes in the Westville area. Performed all sales
              activities from lead generation to closing. Made extensive use of
              Social Media and Sunday show houses to attract buyers and increase
              reputation in area.
            </p>
          </div>
          <div className="job">
            <b>Training Manager and Website Copywriter</b> <br />
            iX Online Motoring (Jan 2015 to Oct 2018) <hr />
            <p>
              Trained all new staff and some clients on internal CRM systems and
              wrote all website content for over 100 South African car
              dealership websites.
            </p>
          </div>

          <div className="job">
            <b>Primary School Educator</b> <br />
            Lyndhurst Primary School (New Germany) (Jan 2012 to Dec 2014) <hr />
            <p>
              {" "}
              Taught grade 4 for 1 yr and grade 5 for 2 yrs. Coached mini-soccer
              and cricket several times per week.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Styling for about page */}
    <style jsx>{`
      .job p {
        line-height: 1.3rem;
        font-size: 0.9rem;
        padding-top: 0.5rem;
      }
      hr {
        padding: 0;
        margin: 0;
      }
      .aboutPage {
        display: flex;
        flex-direction: column;
        padding: 1rem 4rem 1rem 4rem;
      }
      .paraAndImage {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .para {
        width: 78%;
      }
      .image {
        margin-left: auto;
      }
      .edu {
        flex: 1;
      }
      .work {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .job {
        border: 1px solid #c4c4c4;
        border-radius: 8px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background-color: #f6f8fa;
      }
      .eduAndWork {
        display: flex;
        flex-direction: row;
      }
      .priorEduDivs {
        border: 1px solid #c4c4c4;
        background-color: #d9e5ef;
        margin: 0.5rem 1rem 0.5rem 0rem;
        padding: 0.5rem;
        border-radius: 8px;
      }
    `}</style>
  </Layout>
);

//#dedede
