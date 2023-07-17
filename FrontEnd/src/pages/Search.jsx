import UserCard from "../components/UserCard";
import NavbarHelper from "../components/NavbarHelper";
import {
    Input,
    InputRightAddon,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";

import { useState, useEffect, useRef } from "react";

function Search() {
    const handleSearch = (college) => {
        setIsSearching(true);
        fetch(`http://localhost:3000/api/search/college`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                college_name: college,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSearchResults(data);
                setIsSearching(false);
            });
    };
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const inputValue = useRef();
    return (
        <section>
            <NavbarHelper name={"search"} />
            <div>
                <InputGroup className="flex justify-center font-lilita">
                    <Input
                        rounded={"full"}
                        h="6vh"
                        w="60vw"
                        mt="5vh"
                        ref={inputValue}
                        placeholder="Search By College"
                        _placeholder={{
                            opacity: "0.5",
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch(inputValue.current.value);
                            }
                        }}
                    />
                </InputGroup>
            </div>
            <div className="h-[70vh] mt-16 pt-16 px-16">
                {isSearching ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>

                        <p className="text-2xl font-bold ml-4">Searching...</p>

                        <p className="text-2xl font-bold ml-4">
                            {inputValue.current.value}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {searchResults.map((college) => (
                            <UserCard data={college} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Search;
