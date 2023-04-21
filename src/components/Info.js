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
        <h1 className="card__name">Laura Smith</h1>
        <h2 className="card__job">Frontend Developer</h2>
        <p className="card__site">laurasmith.website</p>

        <a href="#" className="card__btn">
          <img src={mail} alt="email logo" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
