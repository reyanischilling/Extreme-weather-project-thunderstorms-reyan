import Hero from '../Hero';
import heroImage from '@assets/stock_images/dramatic_thunderstor_0a0b530c.jpg';

export default function HeroExample() {
  return (
    <Hero
      title="Thunderstorms"
      subtitle="Understanding Nature's Most Powerful Atmospheric Phenomenon"
      backgroundImage={heroImage}
      onScrollClick={() => console.log('Scroll clicked')}
    />
  );
}
