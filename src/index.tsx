/**
 * UI Kit Fravelz
 * Main export file for all components
 */

export { cn } from "./lib/cn";
export {
  IconInfo,
  IconSuccess,
  IconWarning,
  IconError,
  IconClose,
  IconCheck,
  IconCopy,
  IconArrowRight,
  alertIcons,
} from "./lib/icons";

export type {
  AlertType,
  BadgeVariant,
  ButtonVariant,
  CardVariant,
  CodeLanguage,
  ContainerSize,
  ContainerVariant,
  CurriculumContentComponent,
  DividerOrientation,
  DividerVariant,
  GradientTextAs,
  GradientTextVariant,
  GridCols,
  GridGap,
  IconProps,
  InputVariant,
  LineVariant,
  LinkVariant,
  ListType,
  MessageVariant,
  ProgressBarVariant,
  RoadmapStep,
  SectionVariant,
  SizeSmMdLg,
  SizeSmMdLgXl,
  TableCellAlignment,
  TagVariant,
  TextSelectability,
  TextSize,
  TextVariant,
  TitleHeadingLevel,
  TitleVariant,
  TooltipPosition,
  TooltipVariant,
} from "./types";

export { default as AnimationDevelopment } from "./atoms/Animations/AnimationDeveloment";
export { default as Alert } from "./atoms/Alert";
export { default as Badge } from "./atoms/Badge";
export { default as Button } from "./atoms/Button";
export { default as Divider } from "./atoms/Divider";
export { default as GradientText } from "./atoms/GradientText";
export { default as Input } from "./atoms/Input";
export { default as Link } from "./atoms/Link";
export { default as DynamicLink } from "./atoms/DynamicLinks";
export { default as Image } from "./atoms/Image";
export { default as Line } from "./atoms/Line";
export { default as Note } from "./atoms/Note";
export { default as Tag } from "./atoms/Tag";
export { default as Text } from "./atoms/Text";
export { default as Tooltip } from "./atoms/Tooltip";

export { default as CallToAction } from "./molecules/CallToAction";
export { default as Card } from "./molecules/Card";
export { default as Code } from "./molecules/Code";
export { default as Container } from "./molecules/Container";
export { default as Divided } from "./molecules/Divided";
export { default as Grid } from "./molecules/Grid";
export { default as List } from "./molecules/List";
export { default as ProgressBar } from "./molecules/ProgressBar";
export {
  default as SegmentedControl,
  type SegmentedControlOption,
  type SegmentedControlProps,
} from "./molecules/SegmentedControl";
export { Table, TableHeader, TableRow, TableCell } from "./molecules/Table";
export { default as Title } from "./molecules/Title";

export { default as Section } from "./organisms/Section";
export { default as Structure } from "./organisms/Structure";
export { default as CurriculumAside } from "./organisms/CurriculumAside";
export { default as CurriculumFull } from "./organisms/CurriculumFull";
export { default as Message } from "./organisms/Message";
export { default as Roadmap } from "./organisms/Roadmap";
export { default as SiteHeader } from "./organisms/SiteHeader";
export { default as SiteFooter, SiteFooterColumn } from "./organisms/SiteFooter";
