import React, { useEffect, useState } from 'react';

const Details = (props) => {


    const [time, setTime] = useState (props.markRead)
    const [title, setTitle] = useState ([])

    useEffect (() => {

        const prvTime = localStorage.getItem ('time');


        if (prvTime) {

            setTime (prvTime)




        }

        
    }, [props.markRead])


    useEffect (() => { 


        const title = localStorage.getItem ('title')


        if (title) { 

            const newItem = title.concat()

           setTitle (newItem)



        }


        else {


            localStorage.setItem ('title', props.title)
            setTitle (props.title)

        }






    })










    return (
        <div>



<div>

            
</div>
 <div className='space-y-5 my-5'>

    <div className='bg-indigo-300 p-5 rounded-lg'>

         <h4 className='text-indigo-600'>Spent Time on read : {time}  min</h4>



     </div>

     <div className='space-y-3'>

        <h4 className='text-2xl font-bold'>Bookmarked Blogs : {props.title} </h4>

     <div className='text-xl font-bold bg-slate-400 p-2'>


      <p></p>



   </div>



 </div>
</div>
            
        </div>
    );
};

export default Details;