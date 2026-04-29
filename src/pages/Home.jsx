import Hero from '../components/Hero';
import ProductSlider from '../components/ProductSlider';
import Features from '../components/Features';

const Home = ({ addToCart }) => (
  <>
    <Hero />
    <ProductSlider addToCart={addToCart}/>
    <Features />
  </>
);
export default Home;