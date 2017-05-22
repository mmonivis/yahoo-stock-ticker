$(document).ready(function(){
    // console.log("Test");

    $('.yahoo-finance-form').submit(()=>{
        event.preventDefault();
        console.log("The form was just submitted.");
    });

});