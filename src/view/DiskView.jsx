import Template from "./Template.jsx";
import {BsInput, BsGroupInput} from "../utils/bs-util.jsx"

export default function KeyboardView({model}) {
	return <>
		<Template model={model}>
			<div class="text-start">
				<p class="mb-4 text-center">
					Where do you want to install?
				</p>

				<BsGroupInput title="Installation type" type="select" 
						options={{
							1: "Install on entire disk",
							2: "Install on existing partition"
						}}
				/>

				<BsGroupInput title="Disk" type="select" 
						options={{
							1: "TOSHIBA MQ01ABF0 (/dev/sda)",
						}}
				/>

				<BsGroupInput title="Partition" type="select" 
						options={{
							1: "Partition #1 (/dev/sda1, 123GB)", 
							1: "Partition #2 (/dev/sda1, 123GB)", 
						}}
				/>
			</div>
		</Template>
	</>;
}