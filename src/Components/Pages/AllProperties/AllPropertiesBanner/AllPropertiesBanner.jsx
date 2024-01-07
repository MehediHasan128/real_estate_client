import { Box, Typography } from "@mui/material";
import "./AllPropertiesBanner.css";

import { IoSearchOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const AllPropertiesBanner = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

  return (
    <div className="allPropertiesBanner py-72 text-white">
      <Box className="w-[70%] mx-auto space-y-5">
        <Box>
          <Typography variant="h2">
            <p className="text-center font-bold">
              Find you dream Properties Here!
            </p>
          </Typography>
        </Box>
        <Box className="w-[80%] mx-auto text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <input
                {...register('search')}
                className="w-full px-10 py-4 rounded-full text-lg outline-none focus:outline-none"
                type="text"
                placeholder="Search you dream"
              />
              <button className="absolute top-0 right-0 h-full rounded-r-full" type="submit">
                <IoSearchOutline className="text-2xl border-l w-full h-[50%] px-10" />
              </button>
            </div>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default AllPropertiesBanner;
