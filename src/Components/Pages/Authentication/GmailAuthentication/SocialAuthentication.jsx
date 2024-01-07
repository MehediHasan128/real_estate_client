import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import Swal from "sweetalert2";

const SocialAuthentication = () => {

  const {createUserAndLoginEithGmail} = useAuthProvider();

  // Google authentication
  const createOrLoginWithGoogle = () =>{
    createUserAndLoginEithGmail()
    .then(userCredential =>{
      const user = userCredential.user;
      console.log(user);
      if(user.accessToken){
        Swal.fire({
          icon: "success",
          title: "Create your account successfully",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <>
      <button onClick={createOrLoginWithGoogle} className="bg-slate-200 w-fit p-3 rounded-full cursor-pointer">
        <FcGoogle className="text-3xl" />
      </button>
      <button className="bg-slate-200 w-fit p-3 rounded-full cursor-pointer">
        <FaFacebookF className="text-3xl text-blue-600" />
      </button>
      <button className="bg-slate-200 w-fit p-3 rounded-full cursor-pointer">
        <FaTwitter className="text-3xl text-blue-600" />
      </button>
    </>
  );
};

export default SocialAuthentication;
