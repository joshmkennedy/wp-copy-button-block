<?php

/**
 * $attributes (array): The block attributes.
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */

if (!isset($content)) return;

?>
<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="copy-button"
	<?php echo wp_interactivity_data_wp_context(['copying' => false]); ?>>

	<div class="copy-button-group__header">
		<div class="copy-button-group__header-item">
			<div data-wp-bind--hidden="!context.copying" class="copy-button-group__status">
				<div>Copied</div>
			</div>
			<button
				data-wp-on--click="actions.copy"
				class="copy-button-group__button">
				<!-- clipboard icon -->
				<svg data-wp-bind--hidden="context.copying" xmlns="http://www.w3.org/2000/svg" class="copy-button-group__icon--clipboard" viewBox="0 0 384 512">
					<path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
				</svg>

				<!-- check icon -->
				<svg data-wp-bind--hidden="!context.copying" hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="copy-button-group__icon--check">
					<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
				</svg>

			</button>
		</div>
	</div>

	<div class="copy-button-group__content">
		<?= $content; ?>
	</div>
</div>
