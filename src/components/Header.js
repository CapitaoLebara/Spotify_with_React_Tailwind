//Image
import img from '../img/spotify-logo.png'
export const Header = () => {

  const spanList = <span className='border-r border-white'></span>
  const items = ['Premium', 'Ajuda',"baixar","Inscrever-se",spanList, 'Login In']
  return (
    <header className=''>
        <div className='flex fixed top-0 bg-black w-full px-3 md:px-20 py-4'>
          <div className="container flex items-center mx-auto">
            {/*==== LOGO ====*/}
          <div>
            <a href="." alt="Spotify">
              <img src={img} alt="" className='w-20 md:w-125px'/>
            </a>
          </div>
          {/*==== ICON BARS ====*/}
          <div className='flex justify-end flex-1 md:hidden text-white text-3xl'>
            <i className="fas fa-bars"></i>
          </div>
          {/*==== LIST ====*/}
          <div className=' items-end flex-1 text-white font-bold hidden md:flex'>
            <nav className='flex-1'>
              <ul className='flex justify-end flex-1'>
                {
                  items.map((item,index)=>(
                    <li key={index} className ='px-4'><a href="." className='hover:text-hoverspt text-sm'>{item}</a></li>
                  ))
                }
              </ul>
            </nav>
          </div>
          </div>
          
        </div>
    </header>
  )
}
