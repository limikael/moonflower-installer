import {useRef} from "react";

export default function TermTextarea(props) {
	let ref=useRef();

	function putc(c) {
		let textarea=ref.current;

		textarea.value+=c;
		textarea.scrollTop=textarea.scrollHeight;
	}

	function puts(data) {
		let textarea=ref.current;

		textarea.append(data);

//		textarea.value+=data;
		textarea.scrollTop=textarea.scrollHeight;

		/*for (let c of data)
			putc(c);*/
	}

	props.putsref.current=puts;

	return (
		<textarea {...props} ref={ref} />
	);
}