import { Box, Container } from "@mui/material";
import AllPropertiesBanner from "../AllPropertiesBanner/AllPropertiesBanner";
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { useState } from "react";
import HorizontalCard from "../../Shared/HorizontalCard/HorizontalCard";
import useAllProperties from "../../../Hooks/useAllProperties";

const AllProperties = () => {
  const [allProperty] = useAllProperties();
  const printNumber = (num) => {
    console.log(num);
  };

  const [listCard, setListCard] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <AllPropertiesBanner printNumber={printNumber} />
      <Box className="bg-gray-200 lg:px-10 py-12  rounded-md">
        <Container>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <form>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
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
                className="bg-blue-600 text-white font-semibold px-10 py-2 rounded-md w-36"
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
              {listCard ? (
                <>
                  <FaList
                    onClick={() => setListCard(!listCard)}
                    className="text-xl cursor-pointer text-blue-600"
                  />
                </>
              ) : (
                <>
                  <FaList
                    onClick={() => setListCard(!listCard)}
                    className="text-xl cursor-pointer"
                  />
                </>
              )}
              {listCard == false ? (
                <>
                  <IoGrid
                    onClick={() => setListCard(!listCard)}
                    className="text-xl cursor-pointer text-blue-600"
                  />
                </>
              ) : (
                <>
                  <IoGrid
                    onClick={() => setListCard(!listCard)}
                    className="text-xl cursor-pointer"
                  />
                </>
              )}
            </div>
          </Box>
        </Box>
        <Box>
          {listCard ? (
            <>
              <Box className="space-y-3">
                {
                  allProperty.map(property => <>
                    <HorizontalCard
                    key={property._id}
                    img={property.propertyImage}
                    state={property.state}
                    country={property.country}
                    title={"Luxury House in Greenville"}
                    price={property.price}
                    description={
                      "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
                    }
                    bed={property.totalRoom}
                    bath={property. totalBathroom}
                    size={property.propertySize}
                    ownerImg={
                      property.ownerImage                    
                    }
                    ownerName={property.ownerName}
                    status={property.status}
                />
                  </>)
                }
              </Box>
            </>
          ) : (
            <>
              <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                  allProperty.map(property => <>
                    <PropertyCard
                    key={property._id}
                  img={property.propertyImage}
                  state={property.state}
                  country={property.country}
                  title={"Luxury House in Greenville"}
                  price={property.price}
                  description={
                    "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val"
                  }
                  bed={property.totalRoom}
                  bath={property. totalBathroom}
                  size={property.propertySize}
                  ownerImg={
                    property.ownerImage                    
                  }
                  ownerName={property.ownerName}
                  status={property.status}
                />
                  </>)
                }
              </Box>
            </>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default AllProperties;
