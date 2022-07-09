console.log()
$(document).ready(function() {  
    $("p").css("background-color", "pink");  
    $("p").css("font-family", "arial");  
    $("p").css("font-weight", "bold");   
    $("p").css("font-style", "italic");  
    $("p").text("Text changed using backgroung jquery");  


    });  
//     let done=0
//     function func(){
//         $("p").toggle(2000 , function(){
//             console.log("done")
//             done ++;
//         });
//     func();
//    }
// function func(){
//     $("p").fadeToggle(2000 , function(){
//         // $("p").fadeOut(2000 , function(){
//         // $("p").fadeIn(2000 , function(){
//         console.log("done")
//         // done ++;
//     });
// func();
// }
function func(){
        $("p").animate({
            opacity: 0.8,
            height: "250px",
            backgroundColor : "black"
            // done ++;
        },2000);
    // func();
   }