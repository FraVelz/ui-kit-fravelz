import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Alert,
  Badge,
  Button,
  CallToAction,
  Card,
  Code,
  Container,
  CurriculumAside,
  CurriculumFull,
  Divider,
  Divided,
  DynamicLink,
  GradientText,
  Grid,
  IconArrowRight,
  IconCheck,
  Image,
  Input,
  Line,
  Link,
  List,
  Message,
  Note,
  ProgressBar,
  Roadmap,
  Section,
  Structure,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Tag,
  Text,
  Title,
  Tooltip,
  cn,
} from "../kit.js";

function CurriculumList({ className, children }) {
  return <ol className={className}>{children}</ol>;
}

const ROADMAP_STEPS = [
  { title: "Fundamentos", description: "HTML, CSS y JavaScript." },
  { title: "React", description: "Componentes y estado." },
  { title: "UI Kit", description: "Atoms, molecules y organisms." },
];

export function ComponentPreview({ id }) {
  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tagVisible, setTagVisible] = useState(true);

  switch (id) {
    case "cn":
      return (
        <p className={cn("rounded-lg border px-4 py-2", "border-cyan-500/40 bg-cyan-500/10 text-cyan-200")}>
          Clase generada con cn()
        </p>
      );

    case "icons":
      return (
        <div className="flex flex-wrap items-center gap-4 text-cyan-300">
          <IconCheck className="size-6" />
          <IconArrowRight className="size-6" />
          <Text variant="muted" className="text-sm">
            Ver Alert, Tag o Code para más iconos en contexto.
          </Text>
        </div>
      );

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
      return (
        <div className="w-full">
          <nav className="mb-2 flex gap-4">
            <DynamicLink to="/">Inicio</DynamicLink>
            <DynamicLink to="/docs-preview">Docs</DynamicLink>
          </nav>
          <Routes>
            <Route path="/" element={<Text className="text-sm">Ruta: /</Text>} />
            <Route path="/docs-preview" element={<Text className="text-sm">Ruta: /docs-preview</Text>} />
          </Routes>
        </div>
      );

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

    case "call-to-action":
      return (
        <CallToAction href="#" icon={<IconArrowRight className="size-5" />}>
          Llamada a la acción
        </CallToAction>
      );

    case "card":
      return (
        <Card title="Card" subtitle="Subtítulo" className="max-w-sm">
          Contenido de ejemplo.
        </Card>
      );

    case "code":
      return <Code codeContent="import { Button } from '@fravelz/ui-kit-fravelz';" language="javascript" />;

    case "container":
      return (
        <Container size="sm" variant="compact" className="border border-dashed border-gray-700 rounded-lg">
          <Text size="sm">Container size=sm</Text>
        </Container>
      );

    case "divided":
      return (
        <Divided
          secondaryContent={
            <Card variant="minimal" title="Aside" className="max-w-xs">
              Secundario
            </Card>
          }
        >
          <Text>Columna principal.</Text>
        </Divided>
      );

    case "grid":
      return (
        <Grid cols={3} gap="md" responsive={false} className="w-full">
          {[1, 2, 3].map((n) => (
            <Card key={n} variant="minimal" title={`${n}`} className="text-center text-sm">
              Celda
            </Card>
          ))}
        </Grid>
      );

    case "list":
      return (
        <List>
          <li>Primer ítem</li>
          <li>Segundo ítem</li>
        </List>
      );

    case "progress-bar":
      return <ProgressBar value={65} label="Progreso" className="w-full max-w-xs" />;

    case "table":
      return (
        <Table className="w-full max-w-lg">
          <TableHeader headers={["Componente", "Estado"]} />
          <tbody>
            <TableRow>
              <TableCell>Button</TableCell>
              <TableCell>
                <Badge variant="success">OK</Badge>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      );

    case "title":
      return <Title headingLevel="h2">Título de sección</Title>;

    case "section":
      return (
        <Section title="Section" subtitle="Ejemplo compacto" variant="minimal" className="!py-4 !px-0">
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
      return <Text variant="muted">Sin vista previa.</Text>;
  }
}
