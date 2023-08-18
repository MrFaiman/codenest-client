import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

const Test = () => {
	return (
		<Tab.Group>
			<Tab.List>
				<Tab className={"mx-5 ui-selected:text-blue border-b-2"}>
					Class 1
				</Tab>
				<Tab className={"ui-selected:text-blue"}>Class #2</Tab>
			</Tab.List>
			<Tab.Panels>
				<Tab.Panel>
					<table>
						<thead>
							<tr>
								<th>Student</th>
								<th>Lang</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Student 1</td>
								<td>Lang 1</td>
								<td>Description 1</td>
							</tr>
						</tbody>
					</table>
				</Tab.Panel>
				<Tab.Panel></Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	);
};

export default Test;
