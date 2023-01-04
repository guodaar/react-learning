import "./Hero.scss";

const Hero = ({ title, textOne, textTwo, image, button }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1>{title}</h1>
      <p>{textOne}</p>
      <p>{textTwo}</p>
      <button>{button}</button>
    </div>
  );
};

export default Hero;
