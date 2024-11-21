import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid grid-row-3 h-screen'>
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-sroll' >
        <main className=' max-w-3xl mx-auto' >
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
