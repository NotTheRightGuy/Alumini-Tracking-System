import UserCard from "./UserCard";
import { useState, useEffect } from "react";

function OtherAlumini() {
    const [isLoading, setIsLoading] = useState(true);
    const [alumini, setAlumini] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:3000/api/search/college", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                college_name: localStorage.getItem("college_name"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setAlumini(data);
                console.log(data);
            });
        setIsLoading(false);
    }, []);
    return (
        <section className="h-screen px-16">
            <div className="font-lilita text-4xl pt-10 uppercase">
                Other Aluminis from your College
            </div>
            <div className="alumin-card grid grid-cols-4 gap-4 mt-16">
                {alumini.map((al) => {
                    if (al.username === localStorage.getItem("username"))
                        return <></>;
                    let data = {
                        first_name: al.first_name,
                        last_name: al.last_name,
                        email: al.email,
                        username: al.username,
                        degree: al.degree,
                        passout_year: al.passout_year,
                    };
                    return <UserCard data={data} />;
                })}
            </div>
        </section>
    );
}

export default OtherAlumini;
