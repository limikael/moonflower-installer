import EventEmitter from "events";

export default class AppModel extends EventEmitter {
	constructor(routes) {
		super();

		this.routes=routes;
		this.currentRouteIndex=0;

		this.keyboardLayout="us";
		this.keyboardVariant="us";
	}

	getCurrentRouteComponent() {
		let k=Object.keys(this.routes)[this.currentRouteIndex];
		return this.routes[k];
	}

	next=()=>{
		this.currentRouteIndex++;
		this.emit("change");
	}

	back=()=>{
		this.currentRouteIndex--;
		this.emit("change");
	}

	setCurrentRouteIndex=(index)=>{
		this.currentRouteIndex=index;
		this.emit("change");
	}

	setKeyboardLayout=(layout)=>{
		if (layout!=this.keyboardLayout) {
			this.keyboardLayout=layout;
			this.keyboardVariant=layout;
			this.emit("change");
		}
	}

	setKeyboardVariant=(variant)=>{
		this.keyboardVariant=variant;
		this.emit("change");
	}
}
