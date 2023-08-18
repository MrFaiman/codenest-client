// import Avatar from "./Avatar";

const Navbar: React.FC = (): JSX.Element => {
	return (
		<div className="px-[3.6rem] w-100% h-navbar flex flex-row justify-between bg-navbar border-b-2 border-[#E8E8E8] ">
			<div className="flex flex-row items-center gap-[5rem]">
				<span className="font-medium text-sm text-blue ">Overview</span>
				<span className="font-bold text-sm">My Account </span>
			</div>
			{/* <Avatar /> */}
		</div>
	);
};

export default Navbar;
