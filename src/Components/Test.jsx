import { Container } from "@mui/material";

const role = 'buyer'

const Test = () => {
  return (
    <div className="bg-gray-200 flex items-center min-h-screen">
       <Container>
       <h1 className="border border-red-700 w-full">Body</h1>

       {
        (role == 'admin')?
        <><h1>Admin Route</h1></>:<>
          {
            (role == 'agent')? <><h1>Agent Route</h1></>:<><h1>Buyer Route</h1></>
          }
        </>
       }
       </Container>
    </div>
  );
};

export default Test;
