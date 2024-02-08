import { Container, Typography } from "@mui/material";

const Test = () => {

  return (
    <div className="bg-gray-200 flex items-center min-h-screen">
      <Container>
        <div className="flex justify-center gap-3">
          <div className="w-[25%]">
            <label>
              <Typography variant="body1">
                <p className="font-semibold">
                  Country<span className="text-red-600">*</span>
                </p>
              </Typography>
            </label>

            <select className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400">
              <option value="">Select Country</option>
            </select>
          </div>
          <div className="w-[25%]">
            <label>
              <Typography variant="body1">
                <p className="font-semibold">
                  State<span className="text-red-600">*</span>
                </p>
              </Typography>
            </label>

            <select className="border px-5 py-3 rounded-md w-[100%] mt-2 focus:outline-1 outline-blue-400">
              <option value="">Select State</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Test;
