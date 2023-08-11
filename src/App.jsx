import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Main/Header/Navbar'
import Card from './components/Main/Card'
import Details from './components/Main/Details'

function App() {
  const [cart, setCart] = useState([])
  const [time, setTime] = useState (0)
  const [title, setTitle] = useState ([])


  useEffect ( ( ) => {

    fetch ('fakejson.json')
    .then (response => response.json ())
    .then (data =>setCart (data))


  }, [])


  const markRead = (time) => {

    const isRead = localStorage.getItem ('time')

    if (isRead) { 

      const sum = parseInt(time) + parseInt(isRead);

      localStorage.setItem ('time', sum)
      setTime (sum)






    }

    else {

      localStorage.setItem ('time', time)

      setTime (time)



    }



  }

  const bookmark = (title) => {

    const newBook = [...title, title ]






    // const prevTitle = localStorage.getItem ('title');

    // if (prevTitle) { 


    //   const newTitle = [...prevTitle]
    //   setTitle (newTitle)
    // }

    // const title = localStorage.getItem ('title')


    // if (title) { 

    //    setTitle (title)



    // }


    // else {


    //     localStorage.setItem ('title', props.title)
    //     setTitle (props.title)

    // }

    setTitle (newBook)


  





   }
console.log (title)



  return (
    <div className="App">
      <div>

        <Navbar></Navbar>


        <div className='grid lg:grid-cols-4 '>

          <div className='col-span-3'>


            {
              cart.map (cart  =>  <Card data = {cart} time = {markRead} bookmark = {bookmark}></Card>
              )


            }
            


          </div>


          <Details title = {title} markRead = {time} ></Details>




        </div>




      </div>
    </div>
  )
}

export default App
