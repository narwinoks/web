import { motion } from 'framer-motion';
import Link from 'next/link';

import { MENU_ITEMS } from '@/common/constant/menu';
import { MenuItemProps } from '@/common/types/menu';
interface MobileMenuButtonProps {
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenu = ({ setExpandMenu }: MobileMenuButtonProps) => {
  return (
    <motion.div
      className="justify-center px-5 py-10 text-center"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="justify-center text-center">
        <h1 className="mb-10 text-center text-lg font-medium">Navigation</h1>
        {MENU_ITEMS.map((data: MenuItemProps, index) => (
          <div className="mt-5 flex justify-center text-center" key={index}>
            <Link
              href={data.href}
              onClick={() => setExpandMenu(false)}
              className="text-center text-lg font-medium"
              passHref
            >
              {data.title}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
