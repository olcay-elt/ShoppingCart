import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
    return (
        <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-semibold'>
                React ve Tailwind CSS Sepet Uygulamasi
            </h1>

            <div>
                <FiShoppingCart className='text-2xl' />

            </div>
        </div>
    )
}

export default Header