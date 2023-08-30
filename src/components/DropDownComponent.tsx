import { useState, useEffect } from "react";
import { Dropdown, InputGroup, Form } from "react-bootstrap"

interface DropDownProps {
    variant?: string;
    title: string;
    items?: { key: string; value: string; }[];
    onSelect?: (e: string | null) => void;
    enableSearch?: boolean;
    dropdownComponentStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    searchComponentStyle?: React.CSSProperties;
    searchInputStyle?: React.CSSProperties;
    placeholder?: string;
    //multi select options
}

const defaultProps: DropDownProps = {
    title: "My Dropdown",
    items: [{key: "Person 1", value: "1"}, {key: "Person 2", value: "2"}],
    enableSearch: true,
    placeholder: "Search...",
};


const DropDownComponent: React.FC<DropDownProps> = ({
    variant,
    title,
    items,
    onSelect,
    enableSearch,
    dropdownComponentStyle,
    searchComponentStyle,
    searchInputStyle,
    placeholder,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<{ key: string; value: string; }[] | undefined >(items);

    useEffect(() => {
        if (filteredData?.length === 0) {
            setFilteredData(items);
        }
    }, [filteredData]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const filter = items?.filter((item) => {
            return item.key.toLowerCase().includes(inputValue.toLowerCase());
        })
        setFilteredData(filter);
    };

    const clearInput = () => {
        setInputValue("");
        setFilteredData([]);
    }

    return (
        <Dropdown onSelect={onSelect} style={dropdownComponentStyle}>
            <Dropdown.Toggle variant={variant}>{title}</Dropdown.Toggle>
            <Dropdown.Menu>
                {enableSearch &&
                    <InputGroup style={searchComponentStyle}>
                        <Form.Control placeholder={placeholder} style={searchInputStyle} onChange={handleOnChange} value={inputValue} />
                        {(inputValue !== '') ?
                            <InputGroup.Text onClick={clearInput} style={{ cursor: 'pointer' }}>X</InputGroup.Text>
                            : <InputGroup.Text>🔍</InputGroup.Text>
                        }
                    </InputGroup>
                }
                {filteredData?.map(item => <Dropdown.Item eventKey={item.value}>{item.key}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

DropDownComponent.defaultProps = defaultProps;
export default DropDownComponent;