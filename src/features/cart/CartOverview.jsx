import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity,getTotalCartPrice } from './cartSlice';
function CartOverview() {
  const totalCartQuantity= useSelector(getTotalCartQuantity)
  const totalCartPrice= useSelector(getTotalCartPrice);
  return (
    <div className='flex items-center justify-between bg-stone-800 text-white font-semibold uppercase p-4 text-sm sm:px-6 md:text-base '>
      <p  className='space-x-4'>
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
