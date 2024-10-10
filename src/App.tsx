import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Images from "./pages/images/Images";
import Header from "./components/header/Header";
import Repositories from "./pages/repositories/Repositories";
import Footer from "./components/footer/Footer";
import { ConnectionData, Data } from "./types/general";
import { ImageData, ImageToRepository } from "./types/image";
import { RepositoryData, RepositoryToImage } from "./types/repository";

function App() {
  const [images, setImages] = useState<ImageData[]>();
  const [repositories, setRepositories] = useState<RepositoryData[]>();
  const [connections, setConnections] = useState<ConnectionData[]>();
  const [imageToRepository, setImageToRepository] = useState<ImageToRepository>(
    {}
  );
  const [repositoryToImage, setRepositoryToImage] = useState<RepositoryToImage>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesResponse: ImageData[] = await fetch(
          "http://localhost:3001/images"
        ).then((res) => res.json());
        const repositoriesResponse: RepositoryData[] = await fetch(
          "http://localhost:3001/repositories"
        ).then((res) => res.json());
        const connectionsResponse: ConnectionData[] = await fetch(
          "http://localhost:3001/connections"
        ).then((res) => res.json());
        setRepositories(repositoriesResponse);
        setImages(imagesResponse);
        setConnections(connectionsResponse);

        let imgToRepository: ImageToRepository = {};
        let repositoryToImag: RepositoryToImage = {};
        connectionsResponse?.forEach((connection) => {
          imagesResponse?.forEach((image) => {
            if (image.id === connection.image_id) {
              imgToRepository[image.id] =
                repositoriesResponse?.find(
                  (repository) => repository.id === connection.repository_id
                )?.name ?? "";
            }
          });
          repositoriesResponse?.forEach((repository) => {
            if (repository.id === connection.repository_id) {
              repositoryToImag[connection.repository_id] =
                imagesResponse?.find(
                  (image) => image.id === connection.image_id
                )?.name ?? "";
            }
          });
        });

        if (imgToRepository && repositoryToImag) {
          setImageToRepository(imgToRepository);
          setRepositoryToImage(repositoryToImag);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="site-container">
      <div className="content-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/images" />} />
          <Route
            path="/images"
            element={<Images imageToRepository={imageToRepository} />}
          />
          <Route
            path="/images/:id"
            element={<Images imageToRepository={imageToRepository} />}
          />

          <Route
            path="/repositories"
            element={<Repositories repositoryToImage={repositoryToImage} />}
          />
          <Route
            path="/repositories/:id"
            element={<Repositories repositoryToImage={repositoryToImage} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
