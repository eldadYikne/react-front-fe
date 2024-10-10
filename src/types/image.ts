export interface ImageData {
  id: string;
  name: string;
  url: string;
  created_date_timestamp: number;
  number_of_layers: number;
  architecture: string;
  updated_date_timestamp: number;
  scan_id: number;
  highest_severity: string;
  total_findings: number;
  scan_date_timestamp: number;
  source: string;
}
export interface ImageToRepository {
  [key: string]: string;
}
export interface ImagesProps {
  imageToRepository: ImageToRepository;
}
