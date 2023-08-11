import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b min-w-max border-gray-500'>

      <div className="lg:flex bg-base-100 justify-between items-center">
        <div className="">
          <a className="btn btn-ghost normal-case text-2xl font-bold">Knowledge Cafe</a>

        </div>
        <div className="lg:flex items-center">
          <div className='lg:flex justify-around space-x-5 mr-2'>


          <a href="">About</a><a href="">Account</a><a href="">Blogs</a>

          </div>
          <button >

            <img className='rounded-full w-10' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" srcset="" />
          </button>
        </div>
      </div>



    </div>
    );
};

export default Navbar;