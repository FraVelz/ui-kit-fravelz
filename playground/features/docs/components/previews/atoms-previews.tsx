import type { ReactNode } from "react";
import {
  Alert,
  Badge,
  Button,
  Divider,
  GradientText,
  IconCheck,
  Image,
  Input,
  Line,
  Link,
  Note,
  Tag,
  Text,
  Tooltip,
} from "../../../../kit";
import { DynamicLinkPreview, type PreviewState } from "./helpers";

export function renderAtomPreview(id: string, state: PreviewState): ReactNode | null {
  const { inputValue, setInputValue, tagVisible, setTagVisible } = state;

  switch (id) {
    case "alert":
      return (
        <div className="flex w-full flex-col gap-3">
          <Alert type="info" title="Info">
            Mensaje informativo.
          </Alert>
          <Alert type="success">Operación correcta.</Alert>
          <Alert type="warning" dismissible onDismiss={() => {}}>
            Con botón cerrar.
          </Alert>
        </div>
      );

    case "badge":
      return (
        <div className="flex flex-wrap gap-3">
          <Badge variant="cyan">Cyan</Badge>
          <Badge variant="purple">Purple</Badge>
          <Badge variant="success" icon={<IconCheck className="size-4" />}>
            Success
          </Badge>
        </div>
      );

    case "button":
      return (
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      );

    case "divider":
      return <Divider label="sección" variant="cyan" className="w-full max-w-md" />;

    case "gradient-text":
      return <GradientText className="text-2xl">Texto con degradado</GradientText>;

    case "input":
      return (
        <Input
          className="max-w-sm"
          label="Nombre"
          placeholder="Escribe…"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      );

    case "link":
      return (
        <Link href="https://github.com/FraVelz" target="_blank">
          Enlace externo
        </Link>
      );

    case "dynamic-link":
      return <DynamicLinkPreview />;

    case "image":
      return (
        <Image
          source="https://placehold.co/120x80/1e293b/06b6d4?text=Kit"
          alternateText="Placeholder"
          width={120}
        />
      );

    case "line":
      return <Line variant="cyan" className="w-full" />;

    case "note":
      return <Note>Nota secundaria en documentación.</Note>;

    case "tag":
      return (
        <div className="flex flex-wrap gap-3">
          <Tag variant="cyan">Etiqueta</Tag>
          {tagVisible && (
            <Tag variant="purple" removable onRemove={() => setTagVisible(false)}>
              Removable
            </Tag>
          )}
        </div>
      );

    case "text":
      return (
        <div className="space-y-1">
          <Text>Default</Text>
          <Text variant="muted">Muted</Text>
          <Text variant="accent">Accent</Text>
        </div>
      );

    case "tooltip":
      return (
        <Tooltip content="Ayuda contextual" position="top">
          <Button variant="secondary" size="sm">
            Hover o foco
          </Button>
        </Tooltip>
      );

    case "animation-development":
      return (
        <Text variant="muted" className="text-sm">
          No renderizado en playground. Instala @lottiefiles/dotlottie-react y el archivo .lottie en
          el consumidor.
        </Text>
      );

    default:
      return null;
  }
}
