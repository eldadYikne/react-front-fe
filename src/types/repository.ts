export interface RepositoryData {
  id: string;
  name: string;
  url: string;
  created_date_timestamp: number;
  type: string;
  number_of_layers: number;
  architecture: string;
  source: string;
  size: number;
}

export interface RepositoryToImage {
  [key: string]: string;
}
export interface RepositoryProps {
  repositoryToImage: RepositoryToImage;
}
