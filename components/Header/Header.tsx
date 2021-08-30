import React from 'react'
import Link from 'next/link';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.link}>
                <Link href='/'>
                    Home
                </Link>
            </div>
            <div className={s.link}>
                <Link href='/new'>
                    New Post
                </Link>
            </div>
        </div>
    )
}

export default Header;
