$(document).ready(function() {
    var $post = $("#post"),
        $sideMenu = $("#side-menu"),
        $menuIcon = $sideMenu.find(".menu-icon");

    $sideMenu.find(".menu-button").on("click", function() {
        $sideMenu.toggleClass("hide");
        $post.toggleClass("fade");
        setTimeout(function() {
          $menuIcon.toggleClass("fa-bars");
        }, 600);

    })
});