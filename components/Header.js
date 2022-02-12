// Import link component from next
import Link from "next/link";

// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const logoStyle = {
  marginTop: 15,
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 15,
  width: 70,
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
    <h1>Evan Malherbe - Developer Portfolio</h1>

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

    {/* Styling for header */}
    <style jsx>{`
    a {
        margin-right: 1rem;
    }
    .logoAndHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #dedede;
    }
    .linksClass {
        margin-left: auto;
        margin-right: 1rem;
    }
    h1 {
        display: inline;
        margin-right: 1rem;
    }
      }
    `}</style>
  </div>
);

export default Header;
