import "bootstrap";
import bootswatch from "bootswatch/dist/slate/bootstrap.min.css";
import Template from "../view/Template.jsx";
import AppModel from "../model/AppModel.js";
import {useInstance, useEventUpdate} from "../utils/react-util.jsx";

import WelcomeView from "../view/WelcomeView.jsx";
import KeyboardView from "../view/KeyboardView.jsx";
import TimezoneView from "../view/TimezoneView.jsx";
import UserView from "../view/UserView.jsx";
import DiskView from "../view/DiskView.jsx";

const routes={
	"Welcome": WelcomeView,
	"Keyboard": KeyboardView,
	"Timezone": TimezoneView,
	"User": UserView,
	"Disk": DiskView,
	"Install": null, //InstallView
}

export default function InstallerApp() {
	let model=useInstance(AppModel,routes);
	useEventUpdate(model,"change");

	let Component=model.getCurrentRouteComponent();

	return <>
		<link rel="stylesheet" href={bootswatch} />
		<Component model={model}/>
	</>;
}