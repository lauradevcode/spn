import Navbar from './components/Navbar'
import Ilutracao from './assets/imagens/ilustracao1.png'

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className='m-0 z-0'>

        {/* banner */}
        <div className='bg-blue-500 py-1' id='home'>
          <div className='container'>
            <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-10 mt-28'>
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

        {/* Sessão 01 */}
        <div className='grid grid-cols-3 gap-1 ml-20 mt-12'>

          <div className='col-span-auto'>
            imagem
          </div>

          <div className='col-span-1'>
            <h1 className='text-2xl font-bold text-blue-500'>CONSTRUINDO O FUTURO</h1>
            <h1 className='text-2xl font-bold text-blue-500'>UM CLIENTE DE CADA VEZ</h1>
            <h2 className='text-lg font-bold text-zinc-500 mt-4'>Movidos por inovação e ambição</h2>
            <div className='gap-y-2 mt-4'>
              <p className='indent-0'>O que nos move é a maneira como ajudamos cada um de
                nossos clientes a transformarem suas ideias em realidade,
                ajudando-o assim a construir um futuro a partir da tecnologia que muda o mundo.
              </p>

              <p className='indent-0'>Desenvolvemos as melhores soluções para as
              marcas através da expertise e colaboração de toda a nossa equipe
              que se baseia em um propósito: O sucesso do projeto e consequentemente
              do cliente baseado em uma vontade incessante de mudar o mundo.
              </p>
            </div>
          </div>

        </div>
        {/* fim sessão 01 */}

        {/* sessão 02 */}
        <div className='bg-blue-500 justify-center text-center mt-12'>

          <div className='pt-20 pb-14'>
            <h1 className='text-3xl text-slate-100 font-bold'>TEMOS PREÇOS ESPECIAIS PARA MICRO E PEQUENAS EMPRESAS</h1>
          </div>
          
        </div>
        {/* fim sessão 02 */}



      </div>
    </main>
  )
}
