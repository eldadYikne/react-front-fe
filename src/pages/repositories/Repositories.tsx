import { useEffect, useState } from "react";
import { RepositoryData, RepositoryProps } from "../../types/repository";
import { TableData, ThTable } from "../../types/table";
import styles from "./repositories.module.scss";
import { formatSize, getCurrentDate } from "../../utils";
import Table from "../../components/table/Table";
import { useParams } from "react-router";

export default function Repositories(props: RepositoryProps) {
  const thRepositoriesTable: ThTable[] = [
    "Name",
    "Created At",
    "Image Name",
    "Size",
  ];
  const [repositories, setRepositories] = useState<TableData[]>();
  const { id } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const repositoryData: RepositoryData[] = await fetch(
          "http://localhost:3001/repositories"
        ).then((res) => res.json());
        let newRepositories: TableData[] = repositoryData.map((repository) => {
          console.log("size", repository.size);
          return {
            id: repository.id,
            name: repository.name,
            createdAt: getCurrentDate(repository.created_date_timestamp),
            imageName: props.repositoryToImage[repository.id],
            size: repository.size ? formatSize(repository.size) : "-",
          };
        });
        if (id) {
          newRepositories = newRepositories.filter(
            (repository) => repository.id === id
          );
        }
        setRepositories(newRepositories);
        console.log("newRepositories", newRepositories);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    console.log("props", props);
  }, [id, props]);

  return (
    <div className={styles["images-container"]}>
      {repositories && <Table data={repositories} th={thRepositoriesTable} />}{" "}
    </div>
  );
}
