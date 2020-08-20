// scroll to top for animation
window.onbeforeunload = () => { this.scrollTo(0,0) };

// // loading animation
// window.onload = () => {
//     let speed = 2000;

//     $("body").toggleClass("scroll-lock");

//     setTimeout(() => {
//         $("#loading-overlay").fadeOut(500, () => {
//             $("body").toggleClass("scroll-lock");
//         });
//     }, speed + 500);

//     $("#toprect").animate({
// 		y: "+=30",
// 		x: "-=30"
// 	}, speed);
// 	$("#bttmrect").animate({
// 		y: "-=30",
// 		x: "+=30"
//     }, speed);
// }

$(() => {
    $("#hamburger-containter").click(() => {
        $("#hamburger-containter").toggleClass("hamburger-open");
        $("#nav-slider").toggleClass("slider-open");
        $("#dark-overlay").fadeToggle(350);
        $("body").toggleClass("scroll-lock")
    });
});

