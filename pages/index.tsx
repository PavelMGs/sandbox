
import { useList, useStore } from 'effector-react';
import React, { useEffect } from 'react'
import { fetchData } from '../effector/effects/effects';
import { dataStore } from '../effector/store/store';


const Index = () => {


    return (
        <div>
            sd
            {
                useList(dataStore, (post) => (
                    <div key={post.id}>
                        {post.title}
                        <br />
                        {post.body}
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    const data = await fetchData();

    return {props: {data}}
}

export default Index;
