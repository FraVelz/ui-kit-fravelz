import { useState } from "react";
import { useLocale } from "../../../../i18n/LocaleContext";
import { Text } from "../../../../kit";
import { renderAtomPreview } from "./atoms-previews";
import { type PreviewState } from "./helpers";
import { renderMoleculePreview } from "./molecules-previews";
import { renderOrganismPreview } from "./organisms-previews";
import { renderUtilsPreview } from "./utils-previews";

export function ComponentPreview({ id }: { id: string }) {
  const { t } = useLocale();
  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tagVisible, setTagVisible] = useState(true);

  const state: PreviewState = {
    inputValue,
    setInputValue,
    tagVisible,
    setTagVisible,
    showMessage,
    setShowMessage,
  };

  return (
    renderUtilsPreview(id) ??
    renderAtomPreview(id, state) ??
    renderMoleculePreview(id) ??
    renderOrganismPreview(id, state) ?? (
      <Text variant="muted">{t("docs.noPreview")}</Text>
    )
  );
}
