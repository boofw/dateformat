function getSelectionText() {
	if (window.getSelection) {
		return window.getSelection().toString();
	} else if (document.selection && document.selection.createRange) {
		return document.selection.createRange().text;
	}
	return '';
}

function OnSelectEvent() {
	var ts = new Date(getSelectionText() * 1000);
	console.log(ts.toJSON());
	console.log(ts.toLocaleString());
}

var body = document.getElementsByTagName("body")[0];
body.addEventListener("dblclick", OnSelectEvent, false);