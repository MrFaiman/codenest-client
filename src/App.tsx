import Navbar from "@components/Navbar";
import Test from "@components/Test";

import Authentication from "@pages/Authentication";


import Landing from "@pages/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />
	},
	{
		path: "/auth",
		element: <Authentication />
	}
]);

const App = (): JSX.Element => {
	return (
		/*
		<>
			<Navbar />
			<Test />
			<Landing/>	
		</>
		*/
	
		<RouterProvider router={router} />

	);

};

export default App;
