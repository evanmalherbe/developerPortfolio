//Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 500,
  border: "1px black solid",
  borderRadius: "9px",
};

// Contact page
export default () => (
  <Layout>
    <div className="contactPage">
      <div className="para">
        <h2>Contact</h2>
        <p>
          <ul>
            <li>
              <b>Name:</b> Evan Malherbe
            </li>
            <li>
              <b>Cell:</b> 084 514 2998
            </li>
            <li>
              <b>Email:</b>{" "}
              <a href="mailto:evanmalherbe@gmail.com">evanmalherbe@gmail.com</a>
            </li>
            <li>
              <b>Github:</b>{" "}
              <a href="https://github.com/evanmalherbe">
                https://github.com/evanmalherbe
              </a>
            </li>
            <li>
              <b>Linkedin:</b>{" "}
              <a href="http://www.linkedin.com/in/evan-malherbe">
                www.linkedin.com/in/evan-malherbe
              </a>
            </li>
          </ul>
        </p>
      </div>
      <div className="image">
        <Image
          src="/static/images/codeImg.jpg"
          alt="Code on screen"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for contact page */}
    <style jsx>{`
      .contactPage {
        display: flex;
        flex-direction: row;
        padding: 1rem 4rem 1rem 4rem;
      }
      .para {
        flex: 2;
        padding: 1rem;
      }
      .image {
        flex: 1;
        margin-left: 1rem;
      }
    `}</style>
  </Layout>
);
