import { Box, Container, Typography } from '@mui/material';
import './Register.css'

const Register = () => {
    return (
        <div className='registerBg'>
            <Container>
                <Box className="flex justify-center items-center min-h-screen">
                    <Box className="border w-full flex">
                    <Box className="w-[40%] text-white border flex justify-center items-center">
                        <div>
                        <Typography>
                            <p>Welcome to</p>
                        </Typography>
                        <Typography variant='h3'>
                            <p>LuxeLoom</p>
                        </Typography>
                        <Typography variant='body1'>
                            <p className='text-lg tracking-[0.85em]'>Properties</p>
                        </Typography>
                        </div>
                    </Box>
                    <Box className="w-[60%]">
                        <h1>Hello</h1>
                    </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Register;