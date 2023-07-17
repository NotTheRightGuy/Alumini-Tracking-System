import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Stack,
    Divider,
    Image,
    Heading,
} from "@chakra-ui/react";

function UserCard({ data }) {
    return (
        <Card
            maxW="sm"
            className="cursor-pointer hover:-translate-y-4 transition-all"
        >
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Koi toh hai"
                    borderRadius="lg"
                />
                <div className="font-bebas text-3xl ml-1 mt-2">
                    {data.first_name + " " + data.last_name}
                </div>
                <div className="font-poppins text-md ml-1 mt-1 opacity-50">
                    {"@" + data.username}
                </div>
                <div className="flex gap-2 items-center">
                    <div className="font-poppins text-md ml-1 mt-1 font-bold">
                        {data.degree}
                    </div>
                    <div className="font-poppins text-sm ml-1 mt-1">
                        {data.passout_year}
                    </div>
                </div>
            </CardBody>
            <Divider />
        </Card>
    );
}

export default UserCard;
