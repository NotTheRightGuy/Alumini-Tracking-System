import Form from "../components/Form"
export default function Registration() {
    return(
        <div>
            <h1 className="flex justify-center text-3xl mb-5">Registration</h1>
            <Form
                username="true"
                password="true"
                firstName="true"
                lastName="true"
                email="true"
                confirmPassword="true"
            />
        </div>
    )
}