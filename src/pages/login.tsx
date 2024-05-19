import Login from '@/common/components/module/auth/Login';
import { NextSeo } from 'next-seo';

const login = () => {
    const PAGE_TITLE = 'Login';
    return (
        <section>
            <NextSeo title={`${PAGE_TITLE} - Winarno`} />
            <Login></Login>
        </section>
    )
}

export default login