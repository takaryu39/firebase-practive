import { signInWithPopup } from "@firebase/auth";
import { useNavigate } from "react-router";
import { auth, provider } from "../firebase";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //googleログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
