<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    // Appel style du thème enfant
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/style.css');
    // Mon code: ajout fichier JS
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/script.js');
    // Link Swiper's CSS et JS
    wp_enqueue_style('stylesheet','https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css');
    wp_enqueue_script('script-swiper','https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js');

}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
