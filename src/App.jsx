import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className={`relative overflow-hidden min-h-screen h-full flex items-center justify-center bg-neutral-900 text-slate-200 py-2`}>
    <div className="absolute w-52 h-52 bg-amber-400 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
    <div className="absolute w-96 h-96 bg-amber-400 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
    <div className="absolute w-96 h-96 bg-amber-400 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-20 "></div>
    <form
      
        className="h-full md:max-w-xl px-4 py-12 flex flex-col justify-center gap-2 relative z-10"
      >
      <div className="flex justify-center">
        <h1 className='text-5xl text-center'>FELIZ CUMPLE MA 🥳</h1>
      </div >
        <Carousel
        className="grid justify-items-center mb-10 mt-10 rounded-xl"
        axis='horizontal'
        autoPlay='true'
        interval='2500'
        infiniteLoop='true'
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        width={'65%'}>
          <div className='rounded-xl'>
            <img className='rounded-xl' src='public/img2.jpeg'></img>
          </div>
          <div className='rounded-xl'>
            <img className='rounded-xl' src='public/img1.jpeg'></img>
          </div>
          <div className='rounded-xl'>
            <img className='rounded-xl' src='public/img3.jpeg'></img>
          </div >
          <div className='rounded-xl'>
            <img className='rounded-xl'src='public/img4.jpeg'></img>
          </div>
        </Carousel>
        <div>
          <p className='text-center'>
          La verdad que no pude pensar mucho en que regalarte porque me encantaria poder regalarte o devolverte tanto como me han dado vos y papa. Entonces bueno, al menos hago esto que es un poco de lo que si se hacer. Estoy un poco distanciado ultimamente porque estoy creciendo y empiezo a querer ser un poquitin mas independiente, aunque muchas veces me paso haciendo eso.
          </p >
          <br/>
          <p className='text-center'>El punto es que voy a intentar estar un poquito mas cerca tuyo porque se que lo necesitas, y quiero pedirte perdon por no estar en este tiempo. Para intentar compensarlo te dejo estas tarjetas para que las canjees cuando quieras porque te lo mereces. Esto y mucho mas.</p>
          <br/>
          <p className='text-center'>Pero bueno, no tengo mucho mas que decir. Solo que TE QUIERO MUCHO!💓 y FELIZ CUMPLEAÑOS🎂</p>
          <br/>
          <p className='text-center' >El mejor hijo je. Joaco 😉</p>
          <br/>
          <p className='text-center mt-20'>PD: decime quieeeen te haria tu propia pagina web jeje</p>
        </div>
        <div className='flex space-x-10 justify-center m-10 '>
          <div className='flex space-x-10 justify-center'>
          <img className='rounded-xl' src="public/tarjeta-conciert.png" alt="" />
          </div>
          <div className='flex space-x-10 justify-center'>
          <img className='rounded-xl' src="public/tarjetas-desayuno.png" alt="" />        
          </div>
        </div>

    </form>
    </div>

  )
}

export default App
