import { Link } from "react-router-dom";
import QuizLogo from "../assets/images/quiz-logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={QuizLogo} alt="Learn with Sumit Logo" />
            <h3>Check Skill</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
