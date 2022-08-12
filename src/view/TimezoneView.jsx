import Template from "./Template.jsx";
import {BsInput, BsGroupInput} from "../utils/bs-util.jsx"

export default function TimezoneView({model}) {
	return <>
		<Template model={model}>
			<div class="text-start">
				<p class="mb-4 text-center">What timezone are you in?</p>

				<BsGroupInput title="Region" type="select" options={{1: "One", 2: "Two"}}/>
				<BsGroupInput title="Timezone" type="select" options={{1: "One", 2: "Two"}}/>
			</div>
		</Template>
	</>;
}
