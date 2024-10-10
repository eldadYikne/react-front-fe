import { RepositoryData } from "./repository";

export interface ConnectionData {
  repository_id: string;
  image_id: string;
}
export interface Data {
  repositories: RepositoryData[];
  images: ImageData[];
  connections: ConnectionData[];
}
