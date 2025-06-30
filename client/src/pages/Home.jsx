import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>we are the people of best id coder</p>
              <h1>welcome to sunny coder lie</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus laudantium, atque, provident in aliquid enim dolores
                voluptas ipsam nobis voluptate, corporis repellat. Fuga minus,
                eum voluptatem maxime porro velit nobis.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            
            {/* hero images */}
            <div className="hero-image">
                <img src="/images/home.png" alt="coding togheter" width="400" height="500" />
            </div>
          </div>
        </section>
      </main>


      {/* 2nd section */}

      <Analytics />

      {/* hero section */}
      <section className="section-hero">

          <div className="container grid grid-two-cols">
            {/* hero images */}
            <div className="hero-image">
                <img src="/images/design.png" alt="coding togheter" width="400" height="500" />
            </div>

            <div className="hero-content">
              <p>we are the people of best id coder</p>
              <h1>welcome to sunny coder lie</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus laudantium, atque, provident in aliquid enim dolores
                voluptas ipsam nobis voluptate, corporis repellat. Fuga minus,
                eum voluptatem maxime porro velit nobis.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            
            
          </div>
        </section>
    </>
  );
};
