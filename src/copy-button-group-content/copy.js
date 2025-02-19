/**
 * Copy the content of the block.
 *
 * @param {HTMLDivElement} el The parent element of the .copy-button-group__content element.
 */
export async function copyGroupContent(el) {
	const text = el.querySelector(".copy-button-group__content")?.textContent;
	await navigator.clipboard.writeText(text);
	return new Promise((res) => {
		setTimeout(res, 2000);
	});
}
