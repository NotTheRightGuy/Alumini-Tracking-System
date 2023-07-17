import { Button, Box, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { BsArrowUpRight } from "react-icons/bs";

function Home() {
    return (
        <section className="h-screen ">
            <Navbar />
            <Box className="h-[60vh] flex justify-center items-center flex-col mt-20">
                <span className="hero-text text-7xl w-[67vw] text-center uppercase font-koulen relative">
                    Connect With all your{" "}
                    <span className="font-lilita text-yellow-500 ">
                        Alumini
                    </span>{" "}
                    in less than 5 minutes
                    <div className="avatar">
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                className="h-[200px] rounded-full absolute top-[20rem] right-0"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                className="h-[200px] rounded-full absolute top-0 left-[-20rem]"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                className="h-[140px] rounded-full absolute top-[-10rem] left-[200px]"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                className="h-[200px] rounded-full absolute bottom-0 right-[-10rem]"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                className="h-[200px] rounded-full absolute top-[20rem] left-[-4rem]"
                            />
                        </div>
                        <div className="">
                            <img
                                src="https://images.unsplash.com/photo-1560439450-57df7ac6dbef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                className="h-[200px] rounded-full absolute bottom-[-25rem] right-[20rem] "
                            />
                        </div>
                    </div>
                </span>
                <span className="sub-text font-poppins mt-10 text-xl">
                    Ditch Manual Finding & Let us handle it for you
                </span>
                <Stack direction="row" spacing={4} marginTop="20px">
                    <Button
                        marginTop={"20px"}
                        colorScheme="facebook"
                        variant="outline"
                        className="font-poppins"
                        rightIcon={<BsArrowUpRight />}
                    >
                        Let's get you started
                    </Button>
                </Stack>
            </Box>
        </section>
    );
}

export default Home;
