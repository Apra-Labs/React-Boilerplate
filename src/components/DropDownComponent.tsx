import { useState, useEffect } from "react";
import { Dropdown, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

interface DropDownProps {
    label: string;
    items: { key: string; value: string; }[];
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    onSelect?: (e: string | null) => void;
    enableSearch?: boolean;
    dropdownComponentStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    searchComponentStyle?: React.CSSProperties;
    searchInputStyle?: React.CSSProperties;
    placeholder?: string;
    className?: string;
    id?: string;
    //multi select options
}

const defaultProps: Partial<DropDownProps> = {
    variant: "primary",
    enableSearch: true,
    placeholder: "Search...",
    dropdownComponentStyle: {marginLeft: 300, marginTop: 50},
    dropdownMenuStyle: {padding: 10},
    searchInputStyle: {outline: "none", boxShadow: "none"}
};


const DropDownComponent: React.FC<DropDownProps> = ({
    variant,
    label,
    items,
    onSelect,
    enableSearch,
    dropdownComponentStyle,
    dropdownMenuStyle,
    searchComponentStyle,
    searchInputStyle,
    placeholder,
    className,
    id
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
        <Dropdown onSelect={onSelect} style={dropdownComponentStyle} className={className} id={id}>
            <Dropdown.Toggle variant={variant}>{label}</Dropdown.Toggle>
            <Dropdown.Menu style={dropdownMenuStyle}>
                {enableSearch &&
                    <InputGroup style={searchComponentStyle}>
                        <Form.Control placeholder={placeholder} style={searchInputStyle} onChange={handleOnChange} value={inputValue} />
                        {(inputValue !== '') ?
                            <InputGroup.Text onClick={clearInput} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faXmark} />
                            </InputGroup.Text>
                            : <InputGroup.Text>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputGroup.Text>
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