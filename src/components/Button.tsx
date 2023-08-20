const Button = ({children}: any) => {
    return (
        <button className="bg-primary_dark flex justify-content items-center text-white gradient-1 font-bold p-[0.7rem] rounded-lg">
            {children}
        </button>
    );
}

export default Button;