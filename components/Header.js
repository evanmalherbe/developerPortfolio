// Import link component from next
import Link from "next/link";

// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const logoStyle = {
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,
  width: 60,
};

/* I had difficulty getting the image to work, as it said it could not find the resource. Eventually changed 
the directory for "public/static/images" and it worked. Figured it out with this website's help:
https://stackoverflow.com/questions/49435368/nextjs-unable-to-load-images-from-static-folder */

const Header = () => (
  <div className="logoAndHeading">
    <Image
      src="/static/images/wolfLogo.png"
      alt="Wolf logo"
      style={logoStyle}
    />
    <h1>Developer Portfolio - Evan Malherbe</h1>

    <div className="linksClass">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>

    {/* Styling for header #dedede*/}
    <style jsx>{`
    a {
        margin-right: 1rem;
    }
    .logoAndHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.2rem;
        border-bottom: 1px solid #f0f0f0;
        box-shadow: 3px 0px 8px #f0f0f0;
    }
    .linksClass {
        margin-left: auto;
        margin-right: 1rem;
    }
    h1 {
        display: inline;
        margin-right: 1rem;
        font-size: 2rem;
    }
      }
    `}</style>
  </div>
);

export default Header;
