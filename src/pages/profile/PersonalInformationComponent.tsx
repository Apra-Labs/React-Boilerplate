import { InputGroup, Form } from "react-bootstrap";

interface PersonalInformationProps {
    title: string;
    value: string;
}

const PersonalInformationComponent: React.FC<PersonalInformationProps> = ({title, value}) => {
    return (
        <>
            <h5>{title}</h5>
            <InputGroup className='input-group w-25 mt-2 mb-2'>
                <Form.Control value={value} disabled />
            </InputGroup>
        </>
    )
}

export default PersonalInformationComponent;