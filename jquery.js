
///////////////////////////////////////////

// jQuery

///////////////////////////////////////////

// Targeting elements by type: by class: by id:
$(document).ready(function () {

    // Targeting elements by type: by class: by id:
    $("button").addClass("animated bounce");
    $("button"); // element to .addClass to // animated and bounce options are included before
    $(".some-class"); // adding to a class 
    $("#some-id"); // adding to an ID

    // Removing classes
    $("button").removeClass("some classes");

    // Changing of CSS
    $("button").css("color", "orange");

    // Disabling element // shows grayed out
    $("#target1").prop("disabled", true);

    // Editing text inside an element
    $("#target4").html("<em>#target4</em>");

    // Removing element
    $("#target4").remove();
}    
