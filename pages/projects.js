//Import components
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 500,
  border: "1px black solid",
  borderRadius: "9px",
};

// Projects page
export default () => (
  <Layout>
    <div className="projectsPage">
      <div className="para">
        <h2>Projects</h2>
        <p>
          These are some of my recent projects. I've deployed a few to their own
          URL's with <a href="">Heroku</a> and for some of them, you can look at
          my code on <a href="https://github.com/evanmalherbe">Github</a>.
        </p>
        <p>
          <ul>
            <li>
              <b>My online resume:</b> <br />
              <a href="https://evanmalherbe.github.io/Evan_Malherbe_resume/">
                https://evanmalherbe.github.io/Evan_Malherbe_resume/
              </a>{" "}
            </li>
            <br />
            <li>
              <b>Basic online store with shopping cart:</b>{" "}
              <a href="https://evanmalherbe.github.io/capstoneProject2/">
                https://evanmalherbe.github.io/capstoneProject2/
              </a>{" "}
              (source code on Github)
            </li>
            <br />
            <li>
              <b>Minesweeper game</b> <br />
              <a href="https://secret-inlet-96684.herokuapp.com/">
                https://secret-inlet-96684.herokuapp.com/
              </a>{" "}
              (Heroku)
            </li>
            <br />
            <li>
              <b>My iTunes app </b>
              <br />
              <a href="https://ancient-scrubland-76228.herokuapp.com/">
                https://ancient-scrubland-76228.herokuapp.com/
              </a>{" "}
              (Heroku)
            </li>
          </ul>
          Feel free to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>{" "}
          if you have any questions about my projects above.
        </p>
      </div>{" "}
      <div className="image">
        <Image
          src="/static/images/workPic.jpg"
          alt="Man working on laptop"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for projects page */}
    <style jsx>{`
      .projectsPage {
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
