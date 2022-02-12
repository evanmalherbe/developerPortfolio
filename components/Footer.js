// Footer component for every page

const Footer = () => (
  /* I used the following website to get my footer to stay at the bottom of the pages:
  https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/ */
  <div className="footer">
    © Copyright Evan Malherbe 2022
    <style jsx>{`
      .footer {
        background-color: #d9e5ef;
        padding: 1rem;
        border-top: 1px solid #97afa3;
        border-bottom: 1px solid #97afa3;
        text-align: center;
        position: relative;
        bottom: 0;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Footer;
