import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="py-3 flex justify-center items-center flex-col bg-black-100">
        <h1 className="text-lg font-semibold">Yasvanth Hanumantu</h1>
        <div className="flex gap-3 items-center mt-2">
          <p>+91 8330930503</p>
          <span>|</span>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <Link to={link.link}>
                <div className="rounded-md bg-white">
                  <img src={link.icon} alt={link.name} width={24} height={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
