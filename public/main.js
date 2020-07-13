// loading icon
window.onbeforeunload = () => { this.scrollTo(0,0) };

window.onload = () => {
    let speed = 2000;

    $("body").css("overflow", "hidden");

    setTimeout(() => {
        $("#loading-overlay").fadeOut(500, () => {
            $("body").css("overflow", "scroll");
        });
    }, speed + 500);

    $("#toprect").animate({
		y: "+=30",
		x: "-=30"
	}, speed);
	$("#bttmrect").animate({
		y: "-=30",
		x: "+=30"
    }, speed);
}

$(() => {
    $("#hamburger-containter").click(() => {
        $("#hamburger-containter").toggleClass("hamburger-open");
        $("#nav-slider").toggleClass("slider-open");
        $("#dark-overlay").fadeToggle(350);
    });
});

