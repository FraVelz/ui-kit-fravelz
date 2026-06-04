import type { ReactNode } from "react";
import {
  Badge,
  CallToAction,
  Card,
  Code,
  Container,
  Divided,
  Grid,
  IconArrowRight,
  List,
  ProgressBar,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  Title,
} from "../../../../kit";

export function renderMoleculePreview(id: string): ReactNode | null {
  switch (id) {
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
      return (
        <Code
          codeContent="import { Button } from '@fravelz/ui-kit-fravelz';"
          language="javascript"
        />
      );

    case "container":
      return (
        <Container
          size="sm"
          variant="compact"
          className="border border-dashed border-gray-700 rounded-lg"
        >
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

    default:
      return null;
  }
}
