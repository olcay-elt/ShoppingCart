import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
    return (
        <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-semibold'>

            </h1>

            <div>
                <FiShoppingCart className='text-2xl' />
                <span className='bg-red-500 text-white'>0</span>
            </div>
        </div>
    )
}

export default Header