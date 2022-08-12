import fs from "fs";

let evdev=JSON.parse(fs.readFileSync("tools/evdev.json"));

let layoutObjs=[];
for (let layout of evdev.xkbConfigRegistry.layoutList.layout) {
	layoutObjs.push({
		name: layout.configItem.name,
		description: layout.configItem.description,
	});
}

layoutObjs.sort((a,b)=>{
	if (a.description<b.description)
		return -1;

	if (a.description>b.description)
		return 1;

	return 0
});

let layouts={};
let variants={};

for (let layoutObj of layoutObjs) {
	layouts[layoutObj.name]=layoutObj.description;
	variants[layoutObj.name]={};
	variants[layoutObj.name][layoutObj.name]=layoutObj.description;
}

delete layouts.custom;
//console.log(layouts);

for (let layout of evdev.xkbConfigRegistry.layoutList.layout) {
	if (layouts[layout.configItem.name] &&
			layout.variantList) {

		let a=layout.variantList.variant;
		if (!Array.isArray(a))
			a=[a];

		for (let variant of a) {
//			console.log(variant);
			variants[layout.configItem.name][variant.configItem.name]=variant.configItem.description;
		}
	}
}

//console.log(variants);

let s="";
s+="export const layouts="+JSON.stringify(layouts,null,2)+";\n\n";
s+="export const variants="+JSON.stringify(variants,null,2)+";\n\n";

fs.writeFileSync("src/data/keyboards.js",s);