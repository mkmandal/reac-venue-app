
import Header from './components/header-footer/Header'
import './assets/css/styles.css';
import Features from './components/Features/Features';
import VenuNfo from './components/VenueInfo/VenuNfo';
import Hightlights from './components/Highlights/Hightlights';
import Price from './components/Pricing/Price';
import Location from './components/Location/Location';
import Footer from './components/header-footer/footer';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App" style={{height:"1300px",background:"cornflowerblue"}}>
    <Header></Header>
    <Element name="featured">
     <Features></Features>
   </Element>
   
   <Element name="venuenfo">
     <VenuNfo></VenuNfo>
    </Element>
   
    <Element name="highlights">
      <Hightlights></Hightlights>
   </Element>
   <Element name="pricing">
    <Price></Price>
   </Element>
   <Element name="location">
    <Location></Location>
    </Element>
   <Footer></Footer>
     </div>
  );
}

export default App;
