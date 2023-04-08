import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logOut = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logOut}>ログアウト</button>
    </div>
  );
};

export default Logout;
