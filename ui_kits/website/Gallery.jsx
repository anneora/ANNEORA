// Anneora website — the supplied artwork collection, shown as a seamless moving preview.
const IMAGES = [
  '1c1d5b24-25df-46bf-8456-77d3e544d3f2_20260207_205515_0000.png', '20230929_194230.jpg',
  '20231127_155722.jpg', '20240110_112720.jpg', '20240703_155342.jpg', '20240917_013910.jpg',
  '20240919_190416.jpg', '20241119_201030.jpg', '20250216_045903.jpg', '20250513_114813.jpg',
  '20250526_194419.jpg', '20250603_162240.jpg', '20250603_164638.jpg', '20250609_002435.jpg',
  '20250804_190422.jpg', '20250817_195637.jpg', '20250907_232808.jpg', '20260324_200817.jpg',
  '20260505_203638.jpg', '20260505_203659.jpg', 'motion_photo_8883218370549635857.jpg', 'Snapchat-429483661.jpg',
];

const imagePath = (image) => encodeURI(`../../pictures/art_gallery/${image}`);

function Gallery() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (selectedIndex !== null && event.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % IMAGES.length);
      if (selectedIndex !== null && event.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  return (
    <section id="visions" className="visions-gallery">
      <div className="visions-gallery__heading">
        <span>The collection</span>
        <window.SectionLabel>Visions</window.SectionLabel>
      </div>
      <div className="visions-gallery__viewport" aria-label="Anneora image gallery preview">
        <div className="visions-gallery__track">
          {[...IMAGES, ...IMAGES].map((image, index) => {
            const imageIndex = index % IMAGES.length;
            return (
              <button className="visions-gallery__tile" key={`${index}-${image}`} onClick={() => setSelectedIndex(imageIndex)} aria-label={`Open vision ${imageIndex + 1}`}>
                <img src={imagePath(image)} alt={`Vision ${imageIndex + 1}`} loading={index < 6 ? 'eager' : 'lazy'} />
              </button>
            );
          })}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Vision ${selectedIndex + 1}`} onClick={() => setSelectedIndex(null)}>
          <button className="image-lightbox__close" onClick={() => setSelectedIndex(null)} aria-label="Close full image">×</button>
          <img src={imagePath(IMAGES[selectedIndex])} alt={`Vision ${selectedIndex + 1}`} onClick={(event) => event.stopPropagation()} />
          <p>Use the arrow keys to browse</p>
        </div>
      )}
    </section>
  );
}

window.Gallery = Gallery;
