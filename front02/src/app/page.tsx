import Navbar from './components/Navbar'
import Ilutracao from './assets/imagens/ilustracao1.png'

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className='m-0 z-0'>
        
        {/* banner */}
        <div className='bg-blue-400 py-1' id='home'>
          <div className='container'>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-10 mt-28'>
              <div>
                
              </div>
              <div className='text-slate-100'>
                <h1 className='text-4xl font-bold'>A INOVAÇÃO LEVA-NOS</h1>
                <h1 className='text-4xl font-bold'>ATÉ AO <span className='text-yellow-400'>INFINITO!</span></h1>  

                <p>Somos uma empresa de tecnologia que tem como a maior <span className='text-yellow-400'>missão</span>
                tornar real e <span className='text-yellow-400'>impuldinoar</span> a ideia do seu negócio, com uso da
                <span className='text-yellow-400'>tecnologia</span> e <span className='text-yellow-400'>inovação</span>
                </p>            
              </div> 

              <div>
                <img src={Ilutracao} alt="Ilustração1" />
              </div>           
            </div>            
          </div>
        </div>
        {/* fim banner */}


      </div>
    </main>
  )
}
