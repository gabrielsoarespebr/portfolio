window.onload = () => {

    // UNDERSCORE ANIMATION
    const underscore = document.getElementById("underscore");

    if (underscore) {
        setInterval(function () {
            underscore.classList.toggle("invisible");
        }, 500);
    }

}