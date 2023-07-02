import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Ramblings of the Soul</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={require("./nature.jpg")} alt="" />
    </div>
  )
}
