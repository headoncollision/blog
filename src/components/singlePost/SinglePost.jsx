import { Link } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={require("./cover.jpg")} alt="" className="singlePostImg" />
        </div>
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <Link to = "/post/:postId"></Link>
            <div className="singlePostEdit">
                <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>John Doe</b></span>
            <span className="singlePostDate">2 days ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem, illo temporibus sit enim beatae officiis 
            omnis eum eius deserunt maiores nisi distinctio? Distinctio, 
            quibusdam vero. Dolorem sapiente quisquam ab quod?
        </p>
    </div>
  )
}
