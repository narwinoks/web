import { MENU_ITEMS } from '@/common/constant/menu';
import { MenuItemProps } from '@/common/types/menu';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface MobileMenuButtonProps {
    setExpandMenu: (expand: boolean) => void;
}

const MobileMenu = ({ setExpandMenu }: MobileMenuButtonProps) => {
    return (
        <motion.div
            className='justify-center text-center px-5 py-10'
            initial={{ y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className='justify-center text-center'>
                <h1 className='text-center mb-10 font-medium text-lg'>Navigation</h1>
                {MENU_ITEMS.map((data: MenuItemProps, index) => (
                    <div className="mt-5 justify-center text-center flex" key={index}>
                        <Link href={data.href} onClick={() => setExpandMenu(false)} className='text-center font-medium text-lg' passHref>
                            {data.title}
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default MobileMenu;
