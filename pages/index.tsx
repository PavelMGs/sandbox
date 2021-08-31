
import { useList, useStore } from 'effector-react';
import React, { useEffect } from 'react'
import Header from '../components/Header/Header';
import { dataStore, fetchData } from '../effector/store/store';
import s from '../styles/Index.module.scss';

const Index = () => {


    return (
        <div className={s.root}>
            <Header />
            <div className={s.posts}>
                {
                    useList(dataStore, (post) => (
                        <div key={post.id} className={s.post}>
                            <h2>{post.title}</h2>
                            <article>{post.body}</article>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await fetchData();

    return {props: {data}}
}

export default Index;
