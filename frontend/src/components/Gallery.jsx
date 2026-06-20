import "./Gallery.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80",
    title: "Operating Theatre",
    tall: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80",
    title: "Patient Consultation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
    title: "Modern Lab",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&q=80",
    title: "Expert Team",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=500&q=80",
    title: "Paediatric Care",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <span className="section-label">Our World</span>

        <h2 className="gallery-title">
          Where Care <br />
          Meets Compassion
        </h2>

        <p className="gallery-subtitle">
          A glimpse into the dedicated professionals and modern
          facilities powering Medico Pro.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className={`gallery-card ${item.tall ? "tall" : ""}`}
          >
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;