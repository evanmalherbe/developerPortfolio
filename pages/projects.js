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
    <div className="projectsPage" id="projects">
      <div className="para">
        <h2>Projects</h2>
        <div className="text">
          These are some of my recent projects. I've deployed a few to their own
          URL's with <a href="https://www.heroku.com/platform">Heroku</a> and
          others using <a href="https://github.com/evanmalherbe">Github</a>.
        </div>

        <div className="projectItem">
          {" "}
          <b>Basic online store with shopping cart</b> <br />
          Created with HTML, CSS and Javascript <br />
          URL:{" "}
          <a href="https://evanmalherbe.github.io/capstoneProject2/">
            https://evanmalherbe.github.io/capstoneProject2
          </a>{" "}
          <br /> Github repo (source code){" "}
          <a href="https://github.com/evanmalherbe/capstoneProject2">
            https://github.com/evanmalherbe/capstoneProject2
          </a>
        </div>

        <div className="projectItem">
          <b>Minesweeper game</b> <br />
          Created with HTML, CSS, Javascript and React <br />
          URL:{" "}
          <a href="https://secret-inlet-96684.herokuapp.com/">
            https://secret-inlet-96684.herokuapp.com
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/evanmalherbe/capstoneProject3">
            https://github.com/evanmalherbe/capstoneProject3
          </a>
        </div>

        <div className="projectItem">
          <b>My iTunes app </b>
          <br /> Created with HTML, CSS, Javascript, React, Node and Express{" "}
          <br />
          URL:{" "}
          <a href="https://ancient-scrubland-76228.herokuapp.com/">
            https://ancient-scrubland-76228.herokuapp.com
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/evanmalherbe/itunesApp">
            https://github.com/evanmalherbe/itunesApp
          </a>
        </div>

        <div className="projectItem">
          <b>Blog app</b>
          <br /> Created with HTML, CSS, Javascript, React, Node, Express,
          MongoDB and JWT <br />
          URL:{" "}
          <a href="https://hyperionblog.herokuapp.com/">
            https://hyperionblog.herokuapp.com
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/evanmalherbe/blog">
            https://github.com/evanmalherbe/blog
          </a>
        </div>

        <div className="text">
          Feel free to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>{" "}
          if you have any questions about my projects above.
        </div>
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
      .projectItem {
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        border: 1px solid #dedede;
        border-radius: 8px;
      }
      .text {
        padding: 0.8rem;
        margin-bottom: 0.5rem;
      }
      .image {
        flex: 1;
        margin-left: 1rem;
      }
      li {
        padding-bottom: 1rem;
      }
    `}</style>
  </Layout>
);

/* <div className="projectsPage">
      <div className="para">
        <h2>Projects</h2>
        <p>
          These are some of my recent projects. I've deployed a few to their own
          URL's with <a href="">Heroku</a> and others using{" "}
          <a href="https://github.com/evanmalherbe">Github</a>.
        </p>
        <p>
          <ul>
            <li>
              <b>Basic online store with shopping cart</b> <br />
              Created with HTML, CSS and Javascript <br />
              <a href="https://evanmalherbe.github.io/capstoneProject2/">
                https://evanmalherbe.github.io/capstoneProject2
              </a>{" "}
              (Github){" "}
            </li>

            <li>
              <b>Minesweeper game</b> <br />
              Created with HTML, CSS, Javascript and React <br />
              <a href="https://secret-inlet-96684.herokuapp.com/">
                https://secret-inlet-96684.herokuapp.com
              </a>{" "}
              (Heroku)
            </li>

            <li>
              <b>My iTunes app </b>
              <br /> Created with HTML, CSS, Javascript, React, Node and Express{" "}
              <br />
              <a href="https://ancient-scrubland-76228.herokuapp.com/">
                https://ancient-scrubland-76228.herokuapp.com
              </a>{" "}
              (Heroku)
            </li>

            <li>
              <b>Blog </b>
              <br /> Created with HTML, CSS, Javascript, React, Node, Express,
              MongoDB and JWT <br />
              <a href="https://hyperionblog.herokuapp.com/">
                https://hyperionblog.herokuapp.com
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

    {/* Styling for projects page */
// <style jsx>{`
//   .projectsPage {
//     display: flex;
//     flex-direction: row;
//     padding: 1rem 4rem 1rem 4rem;
//   }
//   .para {
//     flex: 2;
//     padding: 1rem;
//     border: 1px solid red;
//   }
//   .image {
//     flex: 1;
//     margin-left: 1rem;
//   }
//   li {
//     padding-bottom: 1rem;
//   }
// `}</style> */}
