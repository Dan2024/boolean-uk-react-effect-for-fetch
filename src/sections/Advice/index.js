import { useEffect, useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [reqNewAdv, setReqNewAdv] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!reqNewAdv) return;
    setReqNewAdv(false);

    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      });
  }, [reqNewAdv]);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice && advice.advice}</p>
        <button onClick={() => setReqNewAdv(true)}>Get More Advice</button>
        <button onClick={() => setFavorites([...favorites, advice])}>
          Save to Favourties
        </button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favorites &&
            favorites.map((advice, index) => (
              <li key={index}>{advice.advice}</li>
            ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
