import React, {useEffect, useState} from 'react';
import styles from "./Product.module.scss"
import {loadCommentsFromJsonServer} from "../../api/api-laptop";
import ContentLoader from "react-content-loader";
import NewComment from "./NewComment";
import { BiCommentDetail } from 'react-icons/bi';


const Comments = ({id}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        loadCommentsFromJsonServer(id, (isOk, data) => {
            setIsLoading(false);
            if (!isOk)
                return alert("ناموفق در گرفتن کامنت ها");
            setComments(data.comments);

        })
    }, []);

    return (
        <div className={styles.comments}>
            <div className="d-flex mb-5">
                <BiCommentDetail size="1.5rem" className="mx-2 text-secondary"/>
                <h5>دیدگاه های کاربران</h5>
            </div>
            <div style={{borderBottom: '1px solid #dfdfdf'}} className="mb-4 pb-4">
                {
                    !isLoading ?
                        comments.length !== 0 ?
                            comments.map((comment, index) => <div className="py-3 my-3 d-flex border rounded-3"
                                                                  key={index}>
                                <div className={styles.imgBox}>
                                    <img src={"/images/user.png"}/>
                                </div>
                                <div>
                                    <p className={styles.author}>{comment.author}</p>
                                    <p className={styles.comment}>{comment.text}</p>
                                </div>
                            </div>) :
                            <div className="d-flex justify-content-center">
                                <p>دیدگاهی در مورد این محصول ثبت نشده است.</p>
                            </div>
                        :
                        <ContentLoader
                            rtl
                            height={1200}
                            width={1060}
                            backgroundColor="#d9d9d9"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="44" cy="42" r="38"/>
                            <circle cx="44" cy="147" r="38"/>
                            <circle cx="44" cy="251" r="38"/>
                            <rect x="103" y="12" rx="3" ry="3" width="123" height="12"/>
                            <rect x="105" y="117" rx="3" ry="3" width="123" height="12"/>
                            <rect x="104" y="222" rx="3" ry="3" width="123" height="12"/>
                            <rect x="105" y="48" rx="3" ry="3" width="100%" height="20"/>
                            <rect x="102" y="152" rx="3" ry="3" width="100%" height="20"/>
                            <rect x="104" y="257" rx="3" ry="3" width="100%" height="20"/>
                        </ContentLoader>
                }
            </div>

            {
                !isLoading &&
                <NewComment id={id} comments={comments}/>
            }
        </div>
    )
        ;
};

export default Comments;