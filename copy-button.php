<?php
/**
 * Plugin Name:       Copy Button Block
 * Description:       Adds a block that allows you to copy the content inside by clicking the button
 * Version:           0.1.4
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Josh Kennedy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       copy-button
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_copy_button_block_init() {
	register_block_type( __DIR__ . '/build/copy-button-group-content' );
}

add_action( 'init', 'create_block_copy_button_block_init' );
