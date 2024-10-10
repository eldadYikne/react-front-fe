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
  name: string;
  createdAt: string;
  imageName?: string;
  size?: string;
  repositoryName?: string;
  //   severity?: 'high'|'medium'|'low';
  severity?: string;
}
