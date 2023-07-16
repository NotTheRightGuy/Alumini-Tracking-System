import Form from "../components/Form"
export default function SearchUser(){
    return(
        <div>
            <Form
                year="true"
                branch="true"
                enrollmentNo="true"
                name="true"
                email="true"
                contact="true"
            />
        </div>
    )
}