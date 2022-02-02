$(document).ready(() => {
    $("img").fadeOut(800, () => {
        $("img").fadeIn(800);
    })
})

$("#btn2").click(() => {
    $(".cars").slideUp(1000)
})
