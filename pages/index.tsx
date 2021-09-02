
import { useList } from 'effector-react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react'
import Header from '../components/Header/Header';
import { $dataStore, fetchDataFx } from '../models/store/store';
import { IPost } from '../interfaces';
import s from '../styles/Index.module.scss';

const Index = () => {

    const router = useRouter();
    
    useEffect(() => {
        console.log('render')
    }, [])


    return (
        <div className={s.root}>
            <Header />
            <div className={s.posts}>
                {
                    useList($dataStore, (post: IPost) => (
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
    const data = await fetchDataFx(`https://mg-blog-api.herokuapp.com/api/blog`);

    return {
        props: {
            data
        },
        revalidate: 10
    }
}

export default Index;
