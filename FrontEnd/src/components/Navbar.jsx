import { Button } from "@chakra-ui/react";
function Navbar() {
    return (
        <div className="navbar h-16 w-screen flex items-center shadow-sm bg-gray-100 border-2 justify-between">
            <div className="font-bebas text-4xl ml-8">AlumNet</div>
            <div className="flex gap-4 mr-10">
                <Button
                    height={"30px"}
                    colorScheme="black"
                    variant="outline"
                    borderRadius={"20px"}
                    padding={"0px 15px"}
                    _hover={{
                        bg: "black",
                        color: "white",
                    }}
                    onClick={() => {
                        window.location.href = "/login";
                    }}
                >
                    Login
                </Button>
                <Button
                    height={"30px"}
                    colorScheme="black"
                    variant="outline"
                    borderRadius={"20px"}
                    padding={"0px 15px"}
                    _hover={{
                        bg: "black",
                        color: "white",
                    }}
                    onClick={() => {
                        window.location.href = "/register";
                    }}
                >
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
