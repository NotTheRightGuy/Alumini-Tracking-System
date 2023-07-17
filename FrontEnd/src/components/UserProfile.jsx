import { AiOutlineEllipsis } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { ImBooks } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function UserProfile({ data }) {
    return (
        <>
            <section className="h-[30vh] bg-gradient-to-r from-indigo-500 to-blue-500"></section>
            <section className="h-[40vh] shadow-md rounded-xl outline-gray-600">
                <div className="flex relative justify-between  h-[4vh]">
                    <div className="absolute">
                        <img
                            src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=756&q=80"
                            className="h-[200px] w-[200px] rounded-full object-cover -translate-y-[10vh] translate-x-10 outline-white outline outline-8"
                        />
                    </div>
                    <div></div>
                    <div>
                        <AiOutlineEllipsis className="text-3xl hover:cursor-pointer mr-4" />
                    </div>
                </div>
                <section className="user-data mt-[14vh] pl-16">
                    <div className="font-koulen text-4xl">
                        {data.first_name + " " + data.last_name}
                    </div>
                    <div className="font-gochi">{"@" + data.username}</div>
                    <div className="mt-2 font-poppins text-lg opacity-70 flex gap-8">
                        <div className="">{data.college_name}</div>
                        <div className="flex gap-2 items-center">
                            <ImBooks />
                            {data.degree}
                        </div>
                        <div className="flex gap-2 items-center">
                            <SlCalender />
                            {data.passout_year}
                        </div>
                    </div>
                    <div className="mt-4">
                        <a
                            className="p-2 bg-blue-200 font-bebas rounded-lg hover:bg-blue-300 "
                            href={"tel:" + data.contact_number}
                        >
                            <BsFillTelephoneFill className="inline-block mr-2" />{" "}
                            Call{" "}
                            <span className="text-sm ml-2 font-poppins lowercase">
                                {"@" + data.username}
                            </span>
                        </a>

                        <a
                            className="p-2 bg-green-200 font-bebas rounded-lg ml-5 hover:bg-green-300"
                            href={"mailto:" + data.email}
                        >
                            <AiOutlineMail className="inline-block mr-2" /> Mail{" "}
                            <span className="text-sm ml-2 font-poppins lowercase">
                                {"@" + data.email}
                            </span>
                        </a>
                    </div>
                </section>
            </section>
        </>
    );
}

export default UserProfile;
