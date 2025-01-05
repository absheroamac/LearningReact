import "./App.css";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Img4 from "./assets/img4.jpg";
import Placeholder from "./assets/placeholder.webp";
import { LazyLoad } from "./LazyLoad";

function App() {
  const images = [
    { id: 1, src: Img1, alt: "I`m image 1" },
    { id: 2, src: Img2, alt: "I`m image 2" },
    { id: 3, src: Img3, alt: "I`m image 3" },
    { id: 4, src: Img4, alt: "I`m image 4" },
  ];

  return (
    <>
      <div>
        {images.map((image) => (
          <LazyLoad
            key={image.id}
            src={image.src}
            alt={image.alt}
            placeholder={Placeholder}
          />
        ))}
      </div>
    </>
  );
}

export default App;
