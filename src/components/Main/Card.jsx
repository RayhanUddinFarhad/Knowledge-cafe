import React from 'react';

const Card = (props) => {


    const { picture, author, authorpicture, ReadTime, publish, title } = props.data;
    const markRead = props.time;
    const bookmark = props.bookmark;






    return (
        <div>

<div className="card bg-base-100 shadow-xl max-w-max lg:w-full ">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body space-y-3">

                    <div className='flex justify-between'>

                        <div className='flex items-center space-x-3'>


                            <img className='w-11 rounded-full' src={authorpicture} alt="" />

                            <div>

                                <h3 className='font-bold'>{author}</h3>
                                <p className='text-xs'>{publish}</p>


                            </div>



                        </div>

                        <div className='flex items-center space-x-3'>
                            <p className='text-sm'> {ReadTime} minutes read</p>

                            <div>

                                <svg onClick={() => bookmark (title)}   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>

                            </div>
                            <div>


                            </div>





                        </div>





                    </div>
                    <h2 className="card-title text-4xl font-bold">{title}</h2>
                    <div className="card-actions justify-start">
                        <a onClick={() => markRead (ReadTime)} className="link link-primary">Mark as read</a>         </div>
                </div>
            </div>

            
        </div>
    );
};

export default Card;