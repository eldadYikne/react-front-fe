import { useEffect, useState } from "react";
import styles from "./images.module.scss";
import { ImageData, ImagesProps } from "../../types/image";
import Table from "../../components/table/Table";
import { TableData, ThTable } from "../../types/table";
import { getCurrentDate } from "../../utils";
import { useParams } from "react-router";

export default function Images(props: ImagesProps) {
  const thImagesTable: ThTable[] = [
    "Name",
    "Created At",
    "Repository Name",
    "Severity",
  ];
  const [images, setImages] = useState<TableData[]>();
  const { id } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesResponse: ImageData[] = await fetch(
          "http://localhost:3001/images"
        ).then((res) => res.json());

        let newImages: TableData[] = imagesResponse.map((image) => {
          return {
            id: image.id,
            name: image.name,
            createdAt: getCurrentDate(image.created_date_timestamp),
            repositoryName: props?.imageToRepository[image.id],
            severity: image.highest_severity ?? "",
          } as TableData;
        });
        if (id) {
          newImages = newImages.filter((image) => image.id === id);
        }
        setImages(newImages);

        console.log("newImages", newImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    console.log("props", props);
  }, [id, props]);

  return (
    <div className={styles["images-container"]}>
      {images && <Table data={images} th={thImagesTable} />}{" "}
    </div>
  );
}
