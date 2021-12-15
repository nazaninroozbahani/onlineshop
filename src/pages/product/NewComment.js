import React, {useState} from 'react';
import styles from "./Product.module.scss"
import {BiCommentAdd} from "react-icons/all";
import axios from "axios";


const NewComment = ({id, comments}) => {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCom = {
            id: 3,
            comments: [...comments,
                {
                    author: 'شهرام محمدی',
                    text: "خوب بود ارزش خریدن داشت"
                }
            ]

        }

        axios.put("https://my-json-server.typicode.com/roozbahani92/onlineshopFakeComments/comments/3", newCom)
            .then(res =>
                console.log(res)
            )
            .catch(error =>
                console.log(error)
            )
    };

    return (
        <form className="row g-3 needs-validation mt-5" onSubmit={e => handleSubmit(e)}>
            <div className="d-flex">
                <BiCommentAdd size="1.5rem" className="mx-2 text-secondary"/>
                <h5>افزودن دیدگاه</h5>
            </div>
            <div className="col-md-12">
                <label className="form-label">نام کامل</label>
                <input type="text" className="form-control" value="Mark" required/>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-12">
                <label className="form-label">متن</label>
                <textarea className="form-control" value="Otto" rows={4} required/>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className={`col-12 ${styles.newComment}`}>
                <button type="submit">ثبت نظر</button>
            </div>
        </form>
    );
};

export default NewComment;