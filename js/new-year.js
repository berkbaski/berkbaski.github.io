window.onload = function () {
	var snow = new Snowfall();
	snow.config({
		type: "solid",
		minSize: 3,
		maxSize: 10
	});
	snow.play();
}