import Template from "./Template.jsx";

export default function WelcomeView({model}) {
	return <>
		<Template model={model}>
			<p>Welcome to the Moonflower installer!</p>
		</Template>
	</>;
}