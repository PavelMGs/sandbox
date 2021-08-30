import { useRouter } from 'next/dist/client/router';
import React, { FormEvent, useState } from 'react'
import Header from '../components/Header/Header';
import { newPost } from '../effector/events/events';
import s from '../styles/New.module.scss';

const New = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        newPost({
            title,
            body,
            id: Date.now()
        })
        setTitle('');
        setBody('');
        router.push('/');
    }

    return (
        <div>
            <Header />
            <form className={s.root} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Title' 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <textarea
                    placeholder='Body' 
                    rows={10}
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default New;
