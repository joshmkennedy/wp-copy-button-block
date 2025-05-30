<?php

/**
 * $attributes (array): The block attributes.
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */

if (!isset($attributes["term"]) || !isset($attributes["tax"])) return;

$slug = sanitize_title($attributes["term"]);
$term = get_term_by("slug", $slug, $attributes["tax"]);
if (!$term) return;
?>
<div
	<?php echo get_block_wrapper_attributes(); ?>>

	<div class="term-description__content">
		<?= $term->description; ?>
	</div>

</div>
