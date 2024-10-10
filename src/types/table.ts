export interface TableProps {
  th: ThTable[];
  data: TableData[];
}
export type ThTable =
  | "Created At"
  | "Name"
  | "Repository Name"
  | "Severity"
  | "Image Name"
  | "Size";

export interface TableData {
  id: string;
  name: string;
  createdAt: string;
  imageName?: string;
  size?: string;
  repositoryName?: string;
  severity?: Severity | "";
}

export type SeverityColor = {
  [Key in Severity]: "#f88610" | "#156daa" | "#f83910";
};
type Severity = "high" | "medium" | "low";
