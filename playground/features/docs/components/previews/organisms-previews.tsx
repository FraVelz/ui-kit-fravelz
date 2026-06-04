import type { ReactNode } from "react";
import {
  Button,
  CurriculumAside,
  CurriculumFull,
  Message,
  Roadmap,
  Section,
  Structure,
  Text,
} from "../../../../kit";
import { CurriculumList, ROADMAP_STEPS, type PreviewState } from "./helpers";

export function renderOrganismPreview(id: string, state: PreviewState): ReactNode | null {
  const { showMessage, setShowMessage } = state;

  switch (id) {
    case "section":
      return (
        <Section
          title="Section"
          subtitle="Ejemplo compacto"
          variant="minimal"
          className="!py-4 !px-0"
        >
          <Text>Contenido dentro de Section.</Text>
        </Section>
      );

    case "structure":
      return (
        <div className="flex w-full flex-col gap-4 2xl:flex-row">
          <Structure className="flex-1">
            <CurriculumFull curriculumContent={CurriculumList} />
            <Text className="text-sm">Contenido con curriculum.</Text>
          </Structure>
          <CurriculumAside curriculumContent={CurriculumList}>
            <li className="text-gray-300 text-sm">Intro</li>
            <li className="text-gray-300 text-sm">API</li>
          </CurriculumAside>
        </div>
      );

    case "message":
      return (
        <>
          <Button variant="primary" size="sm" onClick={() => setShowMessage(true)}>
            Abrir Message
          </Button>
          {showMessage && (
            <Message title="Modal" onClose={() => setShowMessage(false)}>
              Contenido del modal.
            </Message>
          )}
        </>
      );

    case "roadmap":
      return <Roadmap steps={ROADMAP_STEPS} />;

    default:
      return null;
  }
}
