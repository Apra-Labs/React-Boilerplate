
interface InputProps {
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type, placeholder, onChange}) => {
    return(
        <div>
            <input 
            type={type} 
            placeholder={placeholder} 
            style={{padding: 10, border: 1, borderStyle: 'solid', display: 'block', margin: 10, borderRadius: 10}}
            onChange={onChange}
            />
        </div>
    )
}

export default Input