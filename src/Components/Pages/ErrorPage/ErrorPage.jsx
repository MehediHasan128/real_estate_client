import { Box, Container, Typography } from '@mui/material';
import errorImg from '../../../assets/404 Page/404.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Container>
                <Box className="flex justify-center items-center min-h-screen">
                    <Box className="w-full">
                    <img className='lg:w-[60%] mx-auto' src={errorImg} alt="" />
                    <Box className="text-center mb-20">
                        <Typography variant='h2'>
                            <p className='font-semibold'>Opps!</p>
                        </Typography>
                        <Typography variant='h3'>
                            <p className='font-medium my-5'>Page not found</p>
                        </Typography>
                        <Link to='/'>
                        <button className='border px-5 py-3 rounded-lg bg-[#1b1b1b] text-white'>Go Back</button>
                        </Link>
                    </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default ErrorPage;