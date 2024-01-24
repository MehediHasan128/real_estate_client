import upload from "../../../../../assets/upload.png";
import { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAuthProvider from "../../../../Hooks/useAuthProvider";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

// Image hostion api
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ImageModal = () => {
  const { user, setUserProfileImage } = useAuthProvider();
  const axiosPublic = useAxiosPublic();
  const userEmail = user?.email;

  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handelUploadImage = () => {
    inputRef.current.click();
  };

  const handelImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handelHostImage = async () => {
    const imageFile = inputRef.current.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.data.display_url) {
      // Set userImage
      setUserProfileImage(user, res.data.data.display_url)

      // Set image url on database
      const updatedItems = { userPhoto: res.data.data.display_url };
      axiosPublic.patch(`/users/${userEmail}`, updatedItems).then((res) => {
        if (res.data.modifiedCount == 1) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div className="text-center">
      <div
        onClick={handelUploadImage}
        className="w-[80%] mx-auto border-2 border-dashed p-5 rounded-lg cursor-pointer"
      >
        <img
          className="object-cover rounded-lg"
          src={image ? URL.createObjectURL(image) : upload}
          alt=""
        />
      </div>
      <input
        type="file"
        ref={inputRef}
        onChange={handelImageChange}
        className="hidden"
      />
      <button
        onClick={handelHostImage}
        className="bg-blue-500 text-white px-5 py-2 mt-5 rounded-md font-semibold"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageModal;
