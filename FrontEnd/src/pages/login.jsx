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
import { useRef } from "react";

function Login() {
    const username = useRef();
    const password = useRef();
    const toast = useToast();
    const handleLogin = () => {
        const data = {
            email: username.current.value,
            password: password.current.value,
        };

        fetch("http://localhost:3000/api/auth/login", {
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
                        title: "Invalid Credentials",
                        description: "Please Try Again",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "Sign in completed",
                        description: "We are redirecting you to dashboard",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                    const email = username.current.value;
                    fetch("http://localhost:3000/api/user/getUser", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email }),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            const actualData = data[0];
                            const {
                                first_name,
                                last_name,
                                username,
                                email,
                                contact_number,
                                college_name,
                                address_line_1,
                                address_line_2,
                                date_of_birth,
                                pincode,
                                passout_year,
                                degree,
                            } = actualData;
                            localStorage.setItem("first_name", first_name);
                            localStorage.setItem("last_name", last_name);
                            localStorage.setItem("username", username);
                            localStorage.setItem("email", email);
                            localStorage.setItem(
                                "contact_number",
                                contact_number
                            );
                            localStorage.setItem("college_name", college_name);
                            localStorage.setItem(
                                "address_line_1",
                                address_line_1
                            );
                            localStorage.setItem(
                                "address_line_2",
                                address_line_2
                            );
                            localStorage.setItem(
                                "date_of_birth",
                                date_of_birth
                            );
                            localStorage.setItem("pincode", pincode);
                            localStorage.setItem("passout_year", passout_year);
                            localStorage.setItem("degree", degree);

                            window.location.href = "/dashboard";
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <section className="h-screen w-screen flex">
                <div className="left-section w-[55vw] ml-[5vw]">
                    <Box className="font-bebas font-bold text-5xl mt-[10vh]">
                        ALUMNET
                    </Box>

                    <Box className="font-koulen font-bold text-2xl mt-[5vh]">
                        Sign In
                    </Box>
                    <FormControl isRequired mt="10" w="500px">
                        <FormLabel className="font-poppins">Email</FormLabel>
                        <Input type="email" ref={username} />
                    </FormControl>
                    <FormControl
                        className="font-poppins"
                        mt="10"
                        w="500px"
                        isRequired
                    >
                        <FormLabel>Password</FormLabel>
                        <Input type="password" ref={password} />
                    </FormControl>
                    <Button
                        mt="10"
                        variant="outline"
                        size="md"
                        colorScheme="teal"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <a
                        href="/register"
                        className="font-poppins text-blue-500 block mt-5 w-fit"
                    >
                        Need an Account?
                    </a>
                </div>
                <div className="right-section w-[40vw] bg-blue-400">
                    <img
                        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHB6NHd6cWc4aWNjeWF1c2U5OXY2c3djaW9tZzRpcnVrM2hrYTJ4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CW16nFVXLSQxSMUEMd/giphy.gif"
                        className="h-[100vh] w-[40vw] object-fit"
                    />
                </div>
            </section>
        </div>
    );
}

export default Login;
