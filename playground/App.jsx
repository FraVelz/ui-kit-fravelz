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
} from "./kit.js";

function PlaygroundBlock({ title, children }) {
  return (
    <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900/60 p-6">
      <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-cyan-400">{title}</h3>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  );
}

function CurriculumList({ className, children }) {
  return (
    <ol className={className}>
      {children}
    </ol>
  );
}

const ROADMAP_STEPS = [
  { title: "Fundamentos", description: "HTML, CSS y JavaScript." },
  { title: "React", description: "Componentes y estado." },
  { title: "UI Kit", description: "Atoms, molecules y organisms." },
];

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-cyan-500/20 bg-gray-950/90 backdrop-blur">
        <Container className="py-4">
          <Title headingLevel="h1" className="text-2xl">
            <GradientText>UI Kit Fravelz</GradientText>
          </Title>
          <Text variant="muted" className="mt-1 text-sm">
            Playground local — importa desde <code className="text-cyan-400">src/</code>
          </Text>
        </Container>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Section title="Atoms" subtitle="Componentes base">
          <PlaygroundBlock title="Alert">
            <div className="flex w-full flex-col gap-3">
              <Alert type="info" title="Info">
                Mensaje informativo.
              </Alert>
              <Alert type="success">Operación correcta.</Alert>
              <Alert type="warning" title="Aviso">
                Revisa los datos.
              </Alert>
              <Alert type="error">Algo falló.</Alert>
            </div>
          </PlaygroundBlock>

          <PlaygroundBlock title="Badge · Tag · Note">
            <Badge variant="cyan">Cyan</Badge>
            <Badge variant="purple">Purple</Badge>
            <Tag variant="cyan">Cyan</Tag>
            <Tag variant="purple">Purple</Tag>
            <Note>Nota al pie del componente.</Note>
          </PlaygroundBlock>

          <PlaygroundBlock title="Button">
            <Button variant="primary" size="sm">
              Primary sm
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="outline" size="lg">
              Outline lg
            </Button>
            <Button variant="ghost">Ghost</Button>
          </PlaygroundBlock>

          <PlaygroundBlock title="Text · GradientText · Line · Divider">
            <Text>Texto por defecto</Text>
            <Text variant="muted">Texto muted</Text>
            <GradientText className="text-xl font-bold">Gradiente</GradientText>
            <Line className="w-full" />
            <Divider label="o continúa" className="w-full max-w-xs" />
          </PlaygroundBlock>

          <PlaygroundBlock title="Link · Input · Tooltip">
            <Link href="https://github.com/FraVelz" target="_blank">
              Enlace externo
            </Link>
            <Input
              placeholder="Escribe algo…"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Tooltip content="Texto del tooltip" position="top">
              <Button variant="secondary" size="sm">
                Hover
              </Button>
            </Tooltip>
          </PlaygroundBlock>

          <PlaygroundBlock title="Image">
            <Image
              source="https://placehold.co/120x80/1e293b/06b6d4?text=Kit"
              alternateText="Placeholder"
              width={120}
            />
          </PlaygroundBlock>

          <PlaygroundBlock title="AnimationDevelopment">
            <Card variant="minimal" hoverable={false} className="max-w-md">
              <Text variant="muted" className="text-sm">
                Requiere <code>@lottiefiles/dotlottie-react</code> y el archivo{" "}
                <code>AnimationDeveloment.lottie</code> en el proyecto consumidor. No incluido en
                el playground.
              </Text>
            </Card>
          </PlaygroundBlock>
        </Section>

        <Section title="Molecules" subtitle="Composiciones" variant="highlighted">
          <PlaygroundBlock title="Card">
            <Card title="Título" subtitle="Subtítulo" className="max-w-sm">
              Contenido de la card.
            </Card>
            <Card title="Elevated" variant="elevated" className="max-w-sm">
              Variante elevated.
            </Card>
          </PlaygroundBlock>

          <PlaygroundBlock title="Title · Code">
            <Title headingLevel="h2">Título h2</Title>
            <Code codeContent="const x = 42;" language="javascript" />
          </PlaygroundBlock>

          <PlaygroundBlock title="List · ProgressBar">
            <List>
              <li>Elemento uno</li>
              <li>Elemento dos</li>
            </List>
            <ProgressBar value={65} label="Progreso" className="w-full max-w-xs" />
          </PlaygroundBlock>

          <PlaygroundBlock title="Grid">
            <Grid cols={3} gap="md" responsive={false} className="w-full">
              {[1, 2, 3].map((n) => (
                <Card key={n} variant="minimal" title={`Celda ${n}`} className="text-center">
                  Grid item
                </Card>
              ))}
            </Grid>
          </PlaygroundBlock>

          <PlaygroundBlock title="Table">
            <Table className="w-full">
              <TableHeader headers={["Nombre", "Estado"]} />
              <tbody>
                <TableRow>
                  <TableCell>Button</TableCell>
                  <TableCell>
                    <Badge variant="success">OK</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Card</TableCell>
                  <TableCell>
                    <Badge variant="highlight">OK</Badge>
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </PlaygroundBlock>

          <PlaygroundBlock title="CallToAction · Divided">
            <CallToAction href="#" icon="→">
              Llamada a la acción
            </CallToAction>
            <Divided
              secondaryContent={
                <Card variant="gradient" title="Aside" className="w-full max-w-xs">
                  Contenido secundario
                </Card>
              }
            >
              <Text>Columna principal del layout Divided.</Text>
            </Divided>
          </PlaygroundBlock>

          <PlaygroundBlock title="DynamicLink (react-router)">
            <nav className="flex gap-4">
              <DynamicLink to="/">Inicio</DynamicLink>
              <DynamicLink to="/atoms">Atoms</DynamicLink>
              <DynamicLink to="/molecules">Molecules</DynamicLink>
            </nav>
            <Routes>
              <Route path="/" element={<Text className="text-sm">Ruta: /</Text>} />
              <Route path="/atoms" element={<Text className="text-sm">Ruta: /atoms</Text>} />
              <Route
                path="/molecules"
                element={<Text className="text-sm">Ruta: /molecules</Text>}
              />
            </Routes>
          </PlaygroundBlock>
        </Section>

        <Section title="Organisms" subtitle="Patrones de página">
          <PlaygroundBlock title="Structure">
            <Structure>
              <Title headingLevel="h3">Bloque Structure</Title>
              <Text>Contenedor de página tipo notas.</Text>
            </Structure>
          </PlaygroundBlock>

          <PlaygroundBlock title="CurriculumAside · CurriculumFull">
            <div className="flex w-full flex-col gap-6 2xl:flex-row">
              <div className="flex-1">
                <Structure>
                <CurriculumFull curriculumContent={CurriculumList} />
                <Text>Contenido principal con curriculum responsive.</Text>
                </Structure>
              </div>
              <CurriculumAside curriculumContent={CurriculumList}>
                <li className="text-gray-300">Introducción</li>
                <li className="text-gray-300">Componentes</li>
                <li className="text-gray-300">Publicar</li>
              </CurriculumAside>
            </div>
          </PlaygroundBlock>

          <PlaygroundBlock title="Message">
            <Button variant="primary" onClick={() => setShowMessage(true)}>
              Abrir modal
            </Button>
            {showMessage && (
              <Message title="Ejemplo" onClose={() => setShowMessage(false)}>
                Contenido del modal Message.
              </Message>
            )}
          </PlaygroundBlock>

          <PlaygroundBlock title="Roadmap">
            <Roadmap steps={ROADMAP_STEPS} />
          </PlaygroundBlock>
        </Section>
      </main>

      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <code>npm run dev</code> — cambios en <code>src/</code> se recargan al guardar
      </footer>
    </div>
  );
}
