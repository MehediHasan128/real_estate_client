import { Box, Divider, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import axios from "axios";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperties = () => {
  const inputRef = useRef();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm();

  const handelUploadImage = () => {
    inputRef.current.click();
  };

  const handelImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handelAddProperty = async(data) => {
    setLoading(true);
    const {addType, title, type, description, room, bathroom, size, price, country, state} = data;
    const advertisementType = addType;
    const propertyTitle = title;
    const propertyType = type;
    const propertyDescription = description;
    const totalRoom = room;
    const totalBathroom = bathroom;
    const propertySize = size;

    const imageFile = inputRef.current.files[0];
    const formData = new FormData();
    formData.append('image', imageFile)

    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if(res.data.data.display_url){
      const propertyImage = res.data.data.display_url;
      const propertyDetails = {advertisementType, propertyImage, propertyTitle, propertyType, propertyDescription, totalRoom, totalBathroom, propertySize, price, country, state};
      console.log(propertyDetails);
      setLoading(false)
    }
  };

  return (
    <>
      <Box className="min-h-screen">
        <Typography variant="h5">
          <p className="flex items-center gap-3 bg-white p-5 rounded-lg">
            <IoMdAdd className="text-3xl" /> Add New Property
          </p>
        </Typography>

        {/* Add Property form */}
        <Box className="bg-white mt-5 p-5 rounded-lg">
          <form
            onSubmit={handleSubmit(handelAddProperty)}
            className="space-y-5"
          >
            <div className="flex gap-3">
              <label className="flex items-center gap-2 px-5 py-2 rounded-md border border-blue-400 cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="radio"
                  value="sell"
                  {...register("addType")}
                />
                <Typography variant="h6">
                  <p>For Sell</p>
                </Typography>
              </label>
              <label className="flex items-center gap-2 px-5 py-2 rounded-md border border-blue-400 cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="radio"
                  value="rent"
                  {...register("addType")}
                />
                <Typography variant="h6">
                  <p>For Rent</p>
                </Typography>
              </label>
            </div>

            <div
              onClick={handelUploadImage}
              className="flex justify-center items-center border-2 border-blue-400 border-dashed p-2 rounded-lg cursor-pointer min-h-72 w-[100%] overflow-hidden"
            >
              {image ? (
                <>
                  {" "}
                  <img
                    onClick={handelUploadImage}
                    className="lg:w-[40%] object-cover rounded-lg"
                    src={URL.createObjectURL(image)}
                    alt=""
                  />
                </>
              ) : (
                <>
                  {" "}
                  <div className="text-center">
                    <FaRegImage className="text-5xl w-fit mx-auto mb-3" />
                    <Typography variant="h6">
                      <p>
                        <span className="text-pink-600">Upload a Image</span> or
                        drag and drop <br /> image size upto 20MB
                      </p>
                    </Typography>
                  </div>
                </>
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handelImageChange}
                className="hidden"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-[48%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Property Title<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('title')}
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[48%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Property Type<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <select
                  required
                  {...register('type')}
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                >
                  <option disabled selected>
                    Select Property Types
                  </option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condos">Condos</option>
                  <option value="Villas">Villas</option>
                  <option value="Offices">Offices</option>
                  <option value="Retail">Retail</option>
                  <option value="Houses">Houses</option>
                </select>
              </div>
            </div>

            <div>
              <label>
                <Typography variant="body1">
                  <p className="font-semibold">
                    Property Description<span className="text-red-600">*</span>
                  </p>
                </Typography>
              </label>

              <textarea
                required
                cols="30"
                rows="10"
                {...register('description')}
                placeholder="Type a long description about your property"
                className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-row md:justify-center  gap-5">
              <div className="md:w-[45%] lg:w-[25%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Room<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('room')}
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[45%] lg:w-[25%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Bathroom<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('bathroom')}
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[45%] lg:w-[25%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Property Space (ft<sup>2</sup>)
                      <span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('size')}
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[45%] lg:w-[25%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Price/Rent<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('price')}
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
            </div>


            <div>
            <Divider>
              <Typography variant="body1">
                <p className="font-semibold">Location</p>
              </Typography>
            </Divider>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="md:w-[50%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      Country<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('country')}
                  placeholder="Enter your country"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[50%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">
                      State<span className="text-red-600">*</span>
                    </p>
                  </Typography>
                </label>
                <input
                  required
                  type="text"
                  {...register('state')}
                  placeholder="Enter your state"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex justify-center px-5 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:text-white hover:bg-blue-400 duration-500 w-[100%] md:w-[25%] lg:w-[15%]">
                {
                  loading ? <span className="loading loading-dots loading-md"></span> : 'Add Properties'
                }
                </button>
            </div>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddProperties;