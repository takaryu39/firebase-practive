import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faFilePen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  console.log(isAuth);

  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {isAuth && (
        <Link to={"/createpost"}>
          <FontAwesomeIcon icon={faFilePen} />
          記事投稿
        </Link>
      )}
      <Link to={`${isAuth ? "/logout" : "/login"}`}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        {`${isAuth ? "ログアウト" : "ログイン"}`}
      </Link>
    </nav>
  );
};

export default Navbar;
