/**
 * Copy the content of the block.
 *
 * @param {HTMLButtonElement} el The button inside of the block
 */
export async function copyGroupContent(el) {
	let text = el
		.closest(".wp-block-copy-button-copy-button-group-content")
		?.querySelector(
			// i realize this is gross
			".copy-button-group__content > .wp-block-copy-button-copy-button-group-content",
		)?.innerHTML;
		// innerHTML so we can keep the formatting. I realize textContent is safer

	if (!text) {
		// if we are in the editor
		text = el
			.closest(
				".wp-block-copy-button-copy-button-group-content",
			)
			?.querySelector(
				".copy-button-group__content .block-editor-block-list__layout"
			)?.innerHTML;
			// innerHTML so we can keep the formatting. I realize textContent is safer
	}

	await navigator.clipboard.writeText(text).catch((err) => {
		console.error(err);
	});
	return new Promise((res) => {
		setTimeout(res, 2000);
	});
}
