import "./view.scss";
import { copyGroupContent } from "./copy";
import { store, getContext, getElement } from "@wordpress/interactivity";

store("copy-button", {
	actions: {
		copy: async () => {
			const context = getContext();
			context.copying = true;
			const { ref } = getElement();
			await copyGroupContent(ref);
			context.copying = false;
		},
	},
});
