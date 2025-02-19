import { __ } from "@wordpress/i18n";
import { useState, useCallback } from "@wordpress/element";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import "./view.scss";
import { CopyIcon, CheckIcon } from "./icons";
import { copyGroupContent } from "./copy";

const TEMPLATE = [
	[
		"core/paragraph",
		{
			placeholder: "Place the content here that you would like copied",
		},
	],
];

export default function Edit() {
	const [isCopying, setIsCopying] = useState(false);
	const copy = useCallback(
		async function copy(e) {
			e.preventDefault();
			setIsCopying(true);
			await copyGroupContent(e.target);
			setIsCopying(false);
		},
		[setIsCopying],
	);

	return (
		<div
			{...useBlockProps()}
			className="wp-block-copy-button-copy-button-group-content"
		>
			<div class="copy-button-group__header">
				<button className="copy-button-group__button" onClick={copy}>
					{isCopying ? <CheckIcon /> : <CopyIcon />}
				</button>
			</div>

			<div class="copy-button-group__content">
				<InnerBlocks
					allowedBlocks={["core/paragraph", "core/heading", "core/preformatted"]}
					template={TEMPLATE}
				/>
			</div>
		</div>
	);
}
