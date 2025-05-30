import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  Spinner,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";
import "./editor.scss";
import "./view.scss";


export default function Edit({ attributes, setAttributes }) {
	console.log(attributes);
  const { tax, term } = attributes;

  const [selectedTaxonomy, setSelectedTaxonomy] = useState(tax);

  // Fetch taxonomies
  const taxonomies = useSelect((select) =>
    select("core").getTaxonomies()
    , []);

  // Fetch terms for selected taxonomy
  const terms = useSelect((select) =>
    selectedTaxonomy
      ? select("core").getEntityRecords("taxonomy", selectedTaxonomy, { per_page: -1 })
      : []
    , [selectedTaxonomy]);

  // Description fetching
  const termDescription = useSelect((select) => {
    if (!selectedTaxonomy || !term) return null;
    const matchingTerm = select("core").getEntityRecords("taxonomy", selectedTaxonomy, { per_page: -1 })?.find(
      (t) => t.slug === term
    );
		console.log(matchingTerm);
    return matchingTerm?.description ?? "";
  }, [selectedTaxonomy, term]);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Term Settings", "my-plugin")}>
          {!taxonomies ? (
            <Spinner />
          ) : (
            <SelectControl
              label={__("Select Taxonomy", "my-plugin")}
              value={tax}
              options={[
                { label: __("Select taxonomy", "my-plugin"), value: "" },
                ...taxonomies.map((t) => ({
                  label: t.name,
                  value: t.slug,
                })),
              ]}
              onChange={(value) => {
                setAttributes({ tax: value, term: "" });
                setSelectedTaxonomy(value);
              }}
            />
          )}

          {tax && !terms ? (
            <Spinner />
          ) : (
            tax && (
              <SelectControl
                label={__("Select Term", "my-plugin")}
                value={term}
                options={[
                  { label: __("Select term", "my-plugin"), value: "" },
                  ...terms.map((t) => ({
                    label: t.name,
                    value: t.slug,
                  })),
                ]}
                onChange={(value) => setAttributes({ term: value })}
              />
            )
          )}
        </PanelBody>
      </InspectorControls>

      <div className="term-description" {...useBlockProps()} >
        <div className="term-description__content">
 					{termDescription || "Select a term to view its description."}
        </div>
      </div>
    </>
  );
}
