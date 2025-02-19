/**
 * Copy the content of the block.
 *
 * @param {HTMLButtonElement} el The button inside of the block
 */
export async function copyGroupContent(el) {
	let text = el
		.closest(".wp-block-copy-button-copy-button-group-content")
		?.querySelector(
			".wp-block-copy-button-copy-button-group-content, .copy-button-group__content"
		)?.innerHTML;

	// keeps line breaks without the tags
	text = text.trim().replace(/<br>/g, "\n");
	const div = document.createElement("div");
	div.innerHTML = text;
	text = div.textContent;

	await navigator.clipboard.writeText(text).catch((err) => {
		console.error(err);
	});
	return new Promise((res) => {
		setTimeout(res, 2000);
	});
}
