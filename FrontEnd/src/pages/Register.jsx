import {
    Box,
    Button,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { useRef, useState } from "react";

function Register() {
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const email = useRef();
    const [registering, setRegistering] = useState(false);
    const toast = useToast();

    const handleRegister = async () => {
        setRegistering(true);
        const data = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            username: username.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
            email: email.current.value,
        };
        await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    toast({
                        title: "An error occurred. Please Check all your fields",
                        description: "Unable to create your account.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "Account created.",
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setRegistering(false);
    };

    return (
        <div>
            <section className="h-screen w-screen flex">
                <div className="left-section w-[55vw] ml-[5vw]">
                    <Box className="font-bebas font-bold text-5xl mt-[10vh]">
                        ALUMNET
                    </Box>

                    <Box className="font-koulen font-bold text-2xl mt-[5vh]">
                        Register Yourself
                    </Box>
                    <Stack direction="row" marginTop="30px">
                        <FormControl isRequired>
                            <FormLabel className="font-poppins">
                                First name
                            </FormLabel>
                            <Input type="text" ref={firstName} />
                        </FormControl>
                        <FormControl
                            className="font-poppins"
                            mr={"10px"}
                            isRequired
                        >
                            <FormLabel>Last name</FormLabel>
                            <Input type="text" ref={lastName} />
                        </FormControl>
                    </Stack>
                    <Stack direction="row" mt="5">
                        <FormControl isRequired>
                            <FormLabel className="font-poppins">
                                Username
                            </FormLabel>
                            <Input type="text" ref={username} />
                            <FormHelperText className="font-poppins">
                                Pick something Unique
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            className="font-poppins"
                            mr={"10px"}
                            isRequired
                        >
                            <FormLabel>Email</FormLabel>
                            <Input type="email" ref={email} />
                            <FormHelperText className="font-poppins">
                                We will never share your email.
                            </FormHelperText>
                        </FormControl>
                    </Stack>
                    <Stack direction="row" mt="5">
                        <FormControl isRequired>
                            <FormLabel className="font-poppins">
                                Password
                            </FormLabel>
                            <Input type="password" ref={password} />
                            <FormHelperText className="font-poppins">
                                Pick something that you can remember
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            className="font-poppins"
                            mr={"10px"}
                            isRequired
                        >
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" ref={confirmPassword} />
                            <FormHelperText className="font-poppins">
                                Just to be sure
                            </FormHelperText>
                        </FormControl>
                    </Stack>
                    <Button
                        mt="10"
                        variant="outline"
                        size="md"
                        colorScheme="teal"
                        onClick={handleRegister}
                        isLoading={registering}
                        loadingText="Registering"
                    >
                        Register
                    </Button>
                    <a
                        href="/login"
                        className="font-poppins text-blue-500 block mt-5 w-fit"
                    >
                        Already Have an Account?
                    </a>
                </div>
                <div className="right-section w-[40vw] bg-blue-400">
                    <img
                        src="https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47d0nsbvexpwl29uwwqj8eeq8r9cm4k3ycyqlo0cbq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        className="h-[100vh] w-[40vw] object-fit"
                    />
                </div>
            </section>
        </div>
    );
}

export default Register;
