const Input = ({ type, placeholder, id, onChange}: any): JSX.Element => {
    return (
        <input 
            type = {type} 
            placeholder = {placeholder} 
            id = {id} 
            onChange = {onChange} 
            className = "border-2 text-[#000] border-gray-300 rounded-md p-[0.5rem]"
        />

    )
}

export default Input