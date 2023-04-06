import Header from '../../components/Header';
import Content from './Content';
import SideBar from './SideBar';

function MarketPlace() {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-2 flex flex-wrap sm:flex-nowrap xl:mx-auto'>
        <SideBar />
        <Content />
      </main>
    </>
  );
}

export default MarketPlace;
