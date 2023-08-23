
interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button style={{padding: 10, border: 0, color: 'white', backgroundColor: '#068FFF', borderRadius: 10}}>{title}</button>
    )
}

export default Button