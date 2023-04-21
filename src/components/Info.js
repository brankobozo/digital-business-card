import avatar from "../img/avatar.png";
// import mail from "../img/Mail.png";
import mail from "../img/mail.svg";
export default function Info() {
  return (
    <section className="card__info">
      <img
        src={avatar}
        alt="Nice looking user photo"
        className="card__avatar"
      />
      <div className="card__cred">
        <h1 className="card__name">Branko Bozovic</h1>
        <h2 className="card__job">Junior Frontend Developer</h2>
        <a
          href="https://mutko.github.io/portfolio-website/#"
          className="card__site"
        >
          brankobozo.website
        </a>
        <a href="bozobranko@gmail.com" className="card__btn">
          <img src={mail} alt="email logo" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
