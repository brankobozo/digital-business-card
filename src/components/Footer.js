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
          <a href="#">
            <img src={tw} alt="twitter logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="#">
            <img src={fb} alt="twitter logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="#">
            <img src={ins} alt="twitter logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="#">
            <img src={lin} alt="twitter logo" />
          </a>
        </li>

        <li className="social__item">
          <a href="#">
            <img src={gh} alt="twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
