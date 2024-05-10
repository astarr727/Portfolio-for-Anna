console.log("Hi! Welcome to my coded portfolio!")

$(".button").on("click", function () {
    alert("This button has been clicked!");
});

$(".button").on("click", function () {
    $(this).hide();
});

$(".item").on("mouseover", function () {
    $(this).parent().addClass("is-hovered");
});

$(".item").on("mouseout", function () {
    $(this).parent().removeClass("is-hovered");
});

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}