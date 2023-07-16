import Form from '../components/Form'

export default function Login(){
    return(
        <div className='h-full pt-24'>
            <Form
                username="true"
                password="true"
                login="true"
            />
        </div>
    )
}