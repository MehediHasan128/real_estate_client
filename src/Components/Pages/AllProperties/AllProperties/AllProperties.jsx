import { Box, Container } from "@mui/material";
import AllPropertiesBanner from "../AllPropertiesBanner/AllPropertiesBanner";
import img from "../../../../assets/Properties/property1.jpg";
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const AllProperties = () => {
  const printNumber = (num) => {
    console.log(num);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <AllPropertiesBanner printNumber={printNumber} />
      <Box className="bg-gray-200 lg:px-10 py-12  rounded-md">
        <Container>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <select className="select select-bordered w-full max-w-xs focus:outline-none">
                  <option disabled selected>
                    Badrooms
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered w-full max-w-xs focus:outline-none">
                  <option disabled selected>
                    Bathrooms
                  </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered w-full max-w-xs focus:outline-none">
                  <option disabled selected>
                    Areas
                  </option>
                  <option value="">Bayonne</option>
                  <option value="">Greenville</option>
                  <option value="">West Side</option>
                  <option value="">Upper East Side</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Min size (in sqft)"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-3">
              <input
                className="bg-blue-600 text-white font-semibold px-10 py-2 rounded-md w-72"
                type="submit"
                value="Filter"
              />
            </div>
          </form>
        </Container>
      </Box>
      <Container className="pb-24 pt-10">
        <Box className="flex justify-between px-10 py-5 rounded-md bg-white shadow-md shadow-blue-100 mb-10">
          <Box className="grid grid-cols-3 md:flex gap-5">
            <h1>Apartment</h1>
            <h1>Condos</h1>
            <h1>Villas</h1>
            <h1>Offices</h1>
            <h1>Retail</h1>
            <h1>Houses</h1>
          </Box>
          <Box className="hidden md:flex">
            <div className="flex gap-5">
             <FaList className="text-xl cursor-pointer" />
             <IoGrid className="text-xl cursor-pointer" />
            </div>
          </Box>
        </Box>
        <Box>
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
            <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
            <PropertyCard
              img={img}
              location={"Dhaka, Bangladesh"}
              title={"Luxury House in Greenville"}
              price={"860,000"}
              description={
                "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
              }
              bed={6}
              bath={5}
              size={190}
              ownerImg={
                "https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
              }
              ownerName={"Mehedi Hasan"}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AllProperties;
