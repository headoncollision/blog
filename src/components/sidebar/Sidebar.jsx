import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sideBarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img className='sidebarImg' src={require("./aboutMeImg.jpg")} alt="" />
                <p className='sidebarPara'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum
                    cupiditate sint blanditiis dolore veniam 
                </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Style</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className ="sidebarIcon fa-brands fa-instagram"></i>
                <i className ="sidebarIcon fa-brands fa-twitter"></i>
                <i className ="sidebarIcon fa-brands fa-linkedin"></i>
                <i className ="sidebarIcon fa-brands fa-github"></i>
            </div>
        </div>
    </div>
  )
}
