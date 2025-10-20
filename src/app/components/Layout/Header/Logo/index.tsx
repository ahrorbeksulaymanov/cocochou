import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center sm:gap-4 gap-2'>
      <Image
        src='/images/Logo/icon.png'
        alt='logo'
        width={50}
        height={50}
        className='sm:w-12 w-10 sm:h-12 h-10'
        quality={100}
      />
      <p className='text-black sm:text-2xl text-xl font-semibold '>COCOCHOU</p>
    </Link>
  )
}

export default Logo
