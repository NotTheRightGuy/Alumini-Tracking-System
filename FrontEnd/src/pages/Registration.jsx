import Form from "../components/Form"
import alumni from "../images/alumni.webp"
export default function Registration() {
    return(
        <div>
            <h1 className="flex justify-center text-3xl ">Registration</h1>
            <div className="flex p-10">
                <div>
                    <img src={alumni} className="w-11/12 ml-12"/>
                </div>
                <Form 
                    username="true"
                    password="true"
                    firstName="true"
                    lastName="true"
                    email="true"
                    confirmPassword="true"
                />
                </div>
        </div>
    )
}