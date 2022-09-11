import img from '../img/spotify-logo.png'
export const Footer = () => {

  const empresa=['Sobre','Empregos','For the Record']
  const comunidade = ['Para Artistas', 'Desenvolvedores','Publicidade','Investidores','Fornecedores']
  const uteis=['Ajuda','Player da Web','Aplicativo móvel grátis']
  const privacit = ['Legal','Centro de Privacidade','Política de Privacidade', 'Cookies','Sobre anúncios']

  const social = [<i className='fab fa-instagram'></i>,<i className='fab fa-twitter'></i>,<i className='fab fa-facebook-f'></i>]
  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-6 bg-black text-white p-4 md:p-20'>
        <div class='md:col-span-1 pt-10 md:pt-0'>
          <a href=".">
            <img src={img} alt="" className='w-20 md:w-132px'/>
          </a>
        </div>
      
      <div class='md:col-span-1 pt-10 md:pt-4'>
        <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Empresa</h3>
        <ul>
          {
            empresa.map((item,index)=>(
              <li className='mb-5' key={index}><a href=".">{item}</a></li>
            ))
          }
        </ul>
      </div>
      <div class='md:col-span-1 pt-10 md:pt-4'>
        <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Comunidade</h3>
        <ul>
          {
            comunidade.map((item,index)=>(
              <li className='mb-5' key={index}><a href=".">{item}</a></li>
            ))
          }
        </ul>
      </div>
      <div class='md:col-span-1 pt-10 md:pt-4'>
        <h3 className='uppercase text-gray-500 font-bold text-xs tracking-widest mb-5'>Links Úteis</h3>
        <ul>
          {
            uteis.map((item,index)=>(
              <li className='mb-5' key={index}><a href=".">{item}</a></li>
            ))
          }
        </ul>
      </div>
      {/*==== SOCIAL ====*/}
      <div class='md:col-span-2 pt-10 md:pt-4'>
        <ul className='flex md:justify-end'>
        {
          social.map((item,index)=>(
            <li key={index}  className='flex items-center justify-center text-2xl bg-gray-900 w-12 h-12 rounded-full hover:text-green-main mx-2'><a href=".">{item}</a></li>
          ))
        }
        </ul>
      </div>
      <div class='md:col-span-4 mt-20'>
        <ul>
          {
            privacit.map((item,index)=>(
              <li  key={index} className='inline-block text-xs text-gray-600 mr-4'><a href=".">{item}</a></li>
            ))
          }
        </ul>
      </div>
      <div class='md:col-span-2 mt-20'>
        <p className='flex justify-end text-gray-500 text-xs'>&copy; 2022 Spotify AB</p>
      </div>
      </div>
    </footer>
  )
}
