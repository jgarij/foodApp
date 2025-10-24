import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate()
  const handleSuccess = (credentialResponse) => {
    const userInfo = jwtDecode(credentialResponse.credential);
    console.log("User Info:", userInfo);
   localStorage.setItem("UserInfo", JSON.stringify(userInfo));
   navigate("/menu");
    // alert(Welcome ${userInfo.name});
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-xl mb-4">Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}