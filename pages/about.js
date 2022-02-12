//Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 300,
  border: "1px black solid",
  margin: "0rem 1rem 0rem 1rem",
  borderRadius: "9px",
};

// About page
export default () => (
  <Layout>
    <div className="aboutPage">
      <h2>About</h2>
      <div className="paraAndImage">
        <div className="para">
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
            I am currently (Jan 2022) completing a 3 month Full Stack Web
            Development Bootcamp through HyperionDev. My prior education is
            listed below:
            <br />
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
          <p>
            After school I worked at "Market Wizards" doing sales and technical
            support for 2 years. They were a company that trained people to
            successfully trade the South African stock market. I moved on to
            Impro Technologies, where I was one of their Business Development
            Managers. They specialised in Access Control and security systems.
            After Impro, I decided to study Education and worked at Winston Park
            Primary School for the year as an Intern, while I studied my Post
            Graduate Certificate in Education through Unisa. The following year,
            once I had graduated, I worked at Lyndhurst Primary School as a
            grade 4 and 5 teacher. I worked at Lyndhurst for 3 years before
            starting work as a staff trainer and copywriter at iX Online
            Motoring (they do websites and Social Media for the motor industry).
            I stayed for 3 years before moving to work as an Intern Estate Agent
            at Pam Golding Properties Westville. I worked as an agent for 2
            years and am now studying web Development through HyperionDev.
          </p>
        </div>
      </div>
    </div>

    {/* Styling for about page */}
    <style jsx>{`
      .aboutPage {
        display: flex;
        flex-direction: column;
        padding: 1rem 4rem 1rem 4rem;
      }
      .paraAndImage {
        display: flex;
        flex-direction: row;
      }
      .para {
        flex: 2;
      }
      .image {
        flex: 1;
        margin-left: auto;
      }
      .edu {
        flex: 1;
      }
      .work {
        flex: 1;
      }
      .eduAndWork {
        display: flex;
        flex-direction: row;
      }
      .priorEduDivs {
        background-color: #d9e5ef;
        margin: 0.5rem 1rem 0.5rem 0rem;
        padding: 0.5rem;
        border-radius: 8px;
      }
    `}</style>
  </Layout>
);
