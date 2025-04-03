import ShoppingList from './ShoppingList';
import Subscribe from './Subscribe';
import MainCarousel from './MainCarousel';

export default function Home() {
  return (
    <div className='home'>
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}
