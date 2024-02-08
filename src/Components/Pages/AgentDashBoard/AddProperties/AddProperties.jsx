import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";


const AddProperties = () => {
    const inputRef = useRef();
    const [image, setImage] = useState("")
  const { register, handleSubmit } = useForm();

  const handelUploadImage = () =>{
    inputRef.current.click();
  }

  const handelImageChange = (event) =>{
    const file = event.target.files[0];
    setImage(file)
  }

  const handelAddProperty = (data) => {
    console.log(data);
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
                  value="Buyer"
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
                  value="Agent"
                  {...register("addType")}
                />
                <Typography variant="h6">
                  <p>For Rent</p>
                </Typography>
              </label>
            </div>

            <div className="flex justify-center items-center border-2 border-blue-400 border-dashed p-2 rounded-lg cursor-pointer min-h-72 w-[100%] overflow-hidden">
                {
                    image ? <> <img
                    onClick={handelUploadImage}
                    className="lg:w-[40%] object-cover rounded-lg"
                    src={URL.createObjectURL(image)}
                    alt=""
                  /></> : <> <div onClick={handelUploadImage} className="text-center">
                    <FaRegImage className="text-5xl w-fit mx-auto mb-3" />
                    <Typography variant="h6">
                        <p><span className="text-pink-600">Upload a Image</span> or drag and drop <br /> image size upto 20MB</p>
                    </Typography>
                    </div></>
                }
                <input type="file" ref={inputRef} onChange={handelImageChange} className="hidden" />
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-[48%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">Property Title<span className="text-red-600">*</span></p>
                  </Typography>
                </label>
                <input
                required
                  type="text"
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[48%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">Property Type<span className="text-red-600">*</span></p>
                  </Typography>
                </label>
               <select required className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400">
                <option disabled selected>Select Property Types</option>
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
                  <p className="font-semibold">Property Description<span className="text-red-600">*</span></p>
                </Typography>
              </label>

              <textarea
              required
                cols="30"
                rows="10"
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
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
              <div className="md:w-[45%] lg:w-[25%]">
                <label>
                  <Typography variant="body1">
                    <p className="font-semibold">Price/Rent<span className="text-red-600">*</span></p>
                  </Typography>
                </label>
                <input
                required
                  type="text"
                  placeholder="Type your property title"
                  className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400"
                />
              </div>
            </div>


          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddProperties;