import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import ItemCard from "./Components/ItemCard/ItemCard";

function App() {
  const heroImage =
    "https://images.unsplash.com/photo-1654652602883-5e0acb726f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80";
  const cardImageOne =
    "https://images.unsplash.com/photo-1628690530954-c065d38e74d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const cardImageTwo =
    "https://images.unsplash.com/photo-1612855190135-bdbacda2a2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const imageAltOne = "A photo of sunflowers";
  const imageAltTwo = "A photo of soap bubbles";
  const captionOne = "Ipsum Freugiat";
  const captionTwo = "Rhoncus Semper";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor porta ultrices. Phasellus at risus suscipit, ultricies lorem nec, accumsan eros. Aenean sit amet laoreet nisl. Pellentesque mi nisi, vehicula.";
  return (
    <div className="App">
      <Hero
        title="Title"
        textOne="Some about info"
        textTwo="in two lines"
        image={heroImage}
        button="Button"
      />
      <Portfolio title="Portfolio" description={description}>
        <ItemCard
          cardImage={cardImageOne}
          cardImageAlt={imageAltOne}
          caption={captionOne}
        />
        <ItemCard
          cardImage={cardImageOne}
          cardImageAlt={imageAltOne}
          caption={captionOne}
        />
        <ItemCard
          cardImage={cardImageOne}
          cardImageAlt={imageAltOne}
          caption={captionOne}
        />
        <ItemCard
          cardImage={cardImageTwo}
          cardImageAlt={imageAltTwo}
          caption={captionTwo}
        />
        <ItemCard
          cardImage={cardImageTwo}
          cardImageAlt={imageAltTwo}
          caption={captionTwo}
        />
        <ItemCard
          cardImage={cardImageTwo}
          cardImageAlt={imageAltTwo}
          caption={captionTwo}
        />
      </Portfolio>
    </div>
  );
}

export default App;
