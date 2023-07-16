import Form from "./Form"

export default function CreateEvent(){
    return(
        <div>
            <Form
                title="true"
                description="true"
                category="true"
                date="true"
                time="true"
                contact="true"
            />
        </div>
    )
}