import NavbarHelper from "../components/NavbarHelper";
import UserProfile from "../components/UserProfile";
import OtherAlumini from "../components/OtherAlumini";

function Dashboard() {
    const data = {
        first_name: localStorage.getItem("first_name"),
        last_name: localStorage.getItem("last_name"),
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        contact_number: localStorage.getItem("contact_number"),
        college_name: localStorage.getItem("college_name"),
        address_line_1: localStorage.getItem("address_line_1"),
        address_line_2: localStorage.getItem("address_line_2"),
        date_of_birth: localStorage.getItem("date_of_birth"),
        pincode: localStorage.getItem("pincode"),
        // passout_year: localStorage.getItem("passout_year"),
        passout_year: 2019,
        // degree: localStorage.getItem("degree"),
        degree: "CSE (AI-ML)",
    };
    console.log(data);
    return (
        <div>
            <NavbarHelper name={"profile"} />
            <UserProfile data={data} />
            <OtherAlumini />
        </div>
    );
}

export default Dashboard;
