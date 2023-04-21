import tw from "../img/tw.png";
import fb from "../img/fb.png";
import gh from "../img/gh.png";
import ins from "../img/ins.png";
import lin from "../img/lin.png";

export default function Footer() {
  return (
    <footer className="card__footer">
      <ul className="social__list">
        <li className="social__item">
          <a href="https://sr-rs.facebook.com/branko.bozovic.35">
            <img src={fb} alt="fb logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="#">
            <img src={ins} alt="instagram logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="http://www.linkedin.com/in/brankoboz">
            <img src={lin} alt="linkedin logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="https://github.com/brankobozo">
            <img src={gh} alt="twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
