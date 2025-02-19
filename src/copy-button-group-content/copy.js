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
			".copy-button-group__content",
		)?.textContent;

	await navigator.clipboard.writeText(text).catch((err) => {
		console.error(err);
	});
	return new Promise((res) => {
		setTimeout(res, 2000);
	});
}
