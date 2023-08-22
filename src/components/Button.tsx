const Button = ({ onClick, children }: any) => {
	return (
		<button onClick = {onClick} className="bg-primary_dark flex justify-center items-center text-white gradient-1 font-bold p-[0.7rem] rounded-lg">
			{children}
		</button>
	);
};

export default Button;
