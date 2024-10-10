import { useEffect, useState } from "react";
import styles from "./images.module.scss";

export default function Images() {
  const [images, setImages] = useState<any>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:3001/images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    console.log(images);
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images &&
          images.map((image: any) => (
            <li key={image.id}>
              <img src={image.url} alt={image.description} />
              <p>{image.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
