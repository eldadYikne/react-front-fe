export interface RepositoryData {
  id: string; // Unique identifier for the image
  name: string; // Name of the image/repository
  url: string; // URL of the image on Docker Hub
  created_date_timestamp: number; // Timestamp for when the image was created
  type: string; // Type of the data (e.g., 'image')
  number_of_layers: number; // Number of layers in the image
  architecture: string; // Architecture type (e.g., 'arm')
  source: string; // Source of the image (e.g., 'dockerhub')
}

export interface RepositoryToImage {
  [key: string]: string;
}
export interface RepositoryProps {
  repositoryToImage: RepositoryToImage;
}
