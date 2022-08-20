import {useRef} from "react";

export default function TermTextarea(props) {
	let ref=useRef();
	let stateRef=useRef({});
	let state=stateRef.current;

	function putc(c) {
		let textarea=ref.current;
		/*if (c=="\n")
			textarea.append(document.createElement("br"));*/

		if (c.charCodeAt(0)==0x1b) {
			state.escaping=true;
			state.escapeSequence="";
		}

		else if (state.escaping) {
			state.escapeSequence+=c;

			if (c!="[" &&
					(state.escapeSequence.length==1 || c.charCodeAt(0)>=0x40)) {
				state.escaping=false;
				console.log(state.escapeSequence);

				if (state.escapeSequence=="7") {
					console.log(textarea.textContent.length);
					state.textContent=textarea.textContent;
				}

				if (state.escapeSequence=="8") {
					textarea.textContent=state.textContent;
				}
			}
		}

		else {
			textarea.innerHTML+=c;
		}
	}

	function puts(data) {
		let textarea=ref.current;

		for (let c of data)
			putc(c);

		textarea.scrollTop=textarea.scrollHeight;
	}

	props.putsref.current=puts;

	return (
		<pre {...props} ref={ref} />
	);
}