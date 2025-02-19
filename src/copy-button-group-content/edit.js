import { __ } from "@wordpress/i18n";
import { useState, useRef, useCallback } from "@wordpress/element";
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
	const wrapperRef = useRef();
	const [isCopying, setIsCopying] = useState(false);
	const copy = useCallback(
		async function copy(e) {
			e.preventDefault();
			setIsCopying(true);
			await copyGroupContent(wrapperRef.current);
			setIsCopying(false);
		},
		[wrapperRef, setIsCopying],
	);

	return (
		<div
			{...useBlockProps(/*{ref:wrapperRef}*/)}
			className="wp-block-copy-button-copy-button-group-content"
		>
			<div class="copy-button-group__header">
				<button className="copy-button-group__button" onClick={copy}>
					{isCopying ? <CheckIcon /> : <CopyIcon />}
				</button>
			</div>

			<div class="copy-button-group__content">
				<InnerBlocks
					allowedBlocks={["core/paragraph", "core/heading"]}
					template={TEMPLATE}
				/>
			</div>
		</div>
	);
}
