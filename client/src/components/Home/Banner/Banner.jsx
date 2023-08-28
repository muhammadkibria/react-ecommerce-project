import "./Banner.scss";
import bannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse earum
            id, officia recusandae deserunt voluptatem sed omnis soluta
            laudantium repellendus repellat.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img src={bannerImg} alt="" className="banner-img"/>
      </div>
    </div>
  );
};

export default Banner;
