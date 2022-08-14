import Template from "./Template.jsx";

export default function ConfirmView({model}) {
	return <>
		<div style="width: 100%; height: 100%" class="p-3">
			<h1 class="text-center">Installing Moonflower</h1>
			<hr/>

			<div class="progress" style="height: 2em">
				<div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
			</div>
		</div>
	</>;
}