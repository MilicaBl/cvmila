import React, { useState } from "react";
import "./myProjects.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import { EffectCoverflow, Pagination } from "swiper";

export function MyProjects() {
  const [hoverFootprint, setHoverFootprint] = useState(false);
  const [hoverArgus, setHoverArgus] = useState(false);
  const [hoverRestaurant, setHoverRestaurant] = useState(false);
  const [hoverGridpainter, setHoverGridpainter] = useState(false);
  const [hoverFabry, setHoverFabry] = useState(false);
  const toggleHoverFootprint = () => {
    setHoverFootprint(!hoverFootprint);
  };
  const toggleHoverArgus = () => {
    setHoverArgus(!hoverArgus);
  };
  const toggleHoverRestaurant = () => {
    setHoverRestaurant(!hoverRestaurant);
  };
  const toggleHoverGridpainter = () => {
    setHoverGridpainter(!hoverGridpainter);
  };
  const toggleHoverFabry = () => {
    setHoverFabry(!hoverFabry);
  };
  return (
    <React.Fragment>
      <h2 className="myProjects">Mina projekt</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          onMouseEnter={toggleHoverFabry}
          onMouseLeave={toggleHoverFabry}
        >
          <a
            href="https://hcp.rethinkfabry.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./fabry.png" alt="rethinkfabry" />
            {hoverFabry
              ? <div
                  className="hoverImgShow"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Rethinkfabry</h3>
                  <p>
                    En multisite där vi har data på WordPress och frontenden är
                    byggd med Next.js. Det var ett stort projekt som jag gjorde
                    under min andra LIA. Rethinkfabry kommer snart att finnas
                    även på andra språk.
                  </p>
                </div>
              : ""}
          </a>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={toggleHoverFootprint}
          onMouseLeave={toggleHoverFootprint}
        >
          <a
            href="https://footprintrecords.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./footprint.png" alt="footprint" />
            {hoverFootprint
              ? <div
                  className="hoverImgShow"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Footprint records</h3>
                  <p>
                    Ett projekt jag gjorde på min första LIA. Det är en sida som
                    har en webbshopp. Den är byggd i Wordpress och webbshoppen i
                    WooCommerce. Sidan fick nytt fräscht utseende.
                  </p>
                </div>
              : ""}
          </a>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={toggleHoverArgus}
          onMouseLeave={toggleHoverArgus}
        >
          <a
            href="https://argusalternativ.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./argus.png" alt="argus alternativ" />

            {hoverArgus
              ? <div
                  className="hoverImgShow"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Argus alternativ</h3>
                  <p>
                    Mitt första LIA projekt. Sidan saknade mobilversion och vi
                    passade på att göra om designen lite. Sidan byggdes med
                    hjälp av WordPress och ACF. Jag använde Twig, PHP och
                    jQuery.
                  </p>
                </div>
              : ""}
          </a>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={toggleHoverRestaurant}
          onMouseLeave={toggleHoverRestaurant}
        >
          <a
            href="https://saraekman.github.io/React-Restaurant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./restaurant.png" alt="Restaurang skolprojekt" />
            {hoverRestaurant
              ? <div
                  className="hoverImgShow"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Pastolino restaurang</h3>
                  <p>
                    Grupparbete under utbildningen. Uppgiften var att bygga en
                    sida för en restaurang i React och jobba med API. Man ska
                    kunna boka och avboka ett bord som gäst. Ett bord har bara 6
                    sittplatser men besökaren ska kunna boka för mer än 6
                    personer. Det finns bestämd antal bord och 2 tider som man
                    kan boka. Som administratör ska man kunna se alla bokningar
                    ändra lägga till en bokning själv eller ta bort.
                  </p>
                </div>
              : ""}
          </a>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={toggleHoverGridpainter}
          onMouseLeave={toggleHoverGridpainter}
        >
          <a
            href="https://gridpainter.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./gridpainter.png" alt="gridpainter spel skolprojekt" />
            {hoverGridpainter
              ? <div
                  className="hoverImgShow"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3>Gridpainter</h3>
                  <p>
                    Grupparbete under utbildningen. Det är ett spel där 4
                    spelare målar samtidigt genom att klicka på rätt ruta med
                    sin tilldelade färg. Samtidigt kan spelarna chatta med
                    varandra. Chatten byggdes med hjälp av socket.io. Fokusen
                    låg på realtidskommunikation. Vi byggde både frontend och
                    backend. Mer om vilka paket vi använde kan ni läsa{" "}
                    <a
                      href="https://github.com/MilicaBl/gridpainter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gridpainterLink"
                    >
                      här
                    </a>.
                  </p>
                </div>
              : ""}
          </a>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
