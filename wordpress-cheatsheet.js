    // Script 

    Adding [wp_enque_style] into functions.php of a theme to link Material Icons externaly.
    wp_enqueue_style ('material-icons', '//fonts.googleapis.com/icon?family=Material+Icons'); 
    // <ul>
 	// <li><i class="material-icons">phone_android</i><a href="mailto:some@mail.com" target="_top">some@mail.com</a></li>
 	// <li><i class="material-icons">phone_android</i><a href="tel:+387 66 268 639" target="_top">tel:+387 66 268 639</a></li>
    // </ul>

    // Style

     wp_enqueue_script ('ime-skripte', 'neka-skripta');

     // Full codex here 
     // https://developer.wordpress.org/reference/functions/wp_enqueue_script/#Default_scripts_included_with_WordPress
     // Dev Guide Conflict free CSS and JavaScript
     // https://www.smashingmagazine.com/2011/10/developers-guide-conflict-free-javascript-css-wordpress/


     // Wordpress uses 90% of jpeg quality for images
     // Fix
     add_filter( 'jpeg_quality', 'smashing_jpeg_quality' );
    function smashing_jpeg_quality() {
        return 100;


    // Wordpress external Jquery and other scripts 
    https://wordpress.org/plugins/use-google-libraries/


    ////////////////////////////////////////////////////////////////////
    //////////////////////////// jQuery ////////////////////////////////
    ////////////////////////////////////////////////////////////////////

    // Worth mentioning that one must use jQuery instead of $ it is because WordPress may use $ for something other than jQuery, in the future, or now, and so you need to load jQuery in a way that the $ can be used only in a jQuery document ready callback.


    // Changing any text
    jQuery(document).ready(function () {
    jQuery(".nesto1").html("O Nama");
    });

    // Adding Css
    jQuery(document).ready(function () {
    jQuery(".nesto1").css("color", "red");
    });
