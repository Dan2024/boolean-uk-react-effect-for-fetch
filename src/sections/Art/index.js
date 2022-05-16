import { useEffect, useState } from "react";

function ArtsSection() {
  const [artData, setArtData] = useState(null);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks`)
      .then((response) => response.json())
      .then((artObj) => {
        setArtData(artObj.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artData &&
            artData.map((artItem, index) => {
              return (
                <li key={index}>
                  <div className="frame">
                    <img
                      src={`https://www.artic.edu/iiif/2/${artItem.image_id}/full/843,/0/default.jpg`}
                    />
                  </div>
                  <h3>{artItem.title}</h3>
                  <p>Artist: {artItem.artist_title}</p>
                  <h4>Artistic Subjects:</h4>
                  <ul>
                    {artItem.subject_titles.map((title, index) => (
                      <li key={index}>{title}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
