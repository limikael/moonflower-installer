import {bindArgs} from "../utils/js-util.js";

export default function Template({model, children}) {
	let buttonEls=Object.keys(model.routes).map((k,i)=>{
		let divCls="p-2 px-3 text-decoration-none";
		let aCls="text-decoration-none";

		if (i==model.currentRouteIndex) {
			divCls+=" bg-body";
			aCls+=" text-body";
		}

		else {
			aCls+=" text-muted";
		}

		return (
			<div class={divCls}>
				<a href="#" class={aCls} onclick={bindArgs(model.setCurrentRouteIndex,i)}>
					<b>{k}</b>
				</a>
			</div>
		)
	});

	return <>
		<div class="d-flex flex-row" style="width: 100%; height: 100%">
			<div class="bg-primary" style="height: 100%; width: 33%">
				<div style="height: 5rem"></div>
				{buttonEls}
			</div>
			<div class="flex-grow-1 p-3" style="height: 100%">
				<div class="d-flex flex-column text-center" style="height: 100%">
					<div class="flex-grow-1">
						<h1>Moonflower</h1>
						<hr/>
						{children}
					</div>
					<div class="row">
						<div class="col-6 text-start">
							<button class="btn btn-info btn-lg"
									onclick={model.back}>
								Back
							</button>
						</div>
						<div class="col-6 text-end">
							<button class="btn btn-info btn-lg"
									onclick={model.next}>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}