function animation(event) {
    // let elem = document.getElementById("nav-bar-div");
    let scroll = event.wheelDelta
    if (scroll >= 0) {
        console.log("scroll up")
    }
    else {
        console.log('Scroll down');
    }
}
let chat = document.getElementById("content-chat");
setInterval(function() {
    let size = window.innerWidth
    if (size < 720) {
        chat.style.display = "none";
    }
    else{
        chat.style.display = "block";
    }
},100);
function searchfunc() {
    let input = document.getElementById("post-search");
    var full_search = input.value;
    let googlesearch = "https://www.google.com/search?q=rowdyking gaming blogspot "+full_search;
    window.location.href = googlesearch;
}