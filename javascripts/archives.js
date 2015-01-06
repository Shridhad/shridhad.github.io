$(document).ready(function() {
    var $posts = $(".posts");

    $posts.shuffle({
        itemSelector: ".post",
        easing: 'ease-out',
        speed: 250
    })
});