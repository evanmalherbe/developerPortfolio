//Import components
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
import Link from "next/link";

// Styling for image
const imgStyle = {
  width: 300,
  border: "1px black solid",
  borderRadius: "9px",
};

// Home page
export default (props) => (
  <Layout>
    <div className="indexDiv">
      <div className="para">
        <h2>Home</h2>
        <p>
          {" "}
          My name is Evan Malherbe and I'm a Full Stack Web Developer. Feel free
          to browse through the pages of this site to learn more about my
          background and recent projects. I'm proficient with the following
          technologies/frameworks:
          <ul>
            <li>HTML and CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Next.js</li>
            <li>REST APIs</li>
            <li>Git and Github</li>
          </ul>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>{" "}
          with any questions or if you believe I would be a good fit for your
          business.
        </p>
      </div>
      <div className="image">
        <Image
          src="/static/images/evanPic.jpg"
          alt="Evan Malherbe"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for home page */}
    <style jsx>{`
      .indexDiv {
        display: flex;
        flex-direction: row;
        padding: 1rem 4rem 1rem 4rem;
      }
      .para {
        flex: 2;
      }
      .image {
        flex: 1;
        margin-left: 3rem;
      }
    `}</style>
  </Layout>
);
