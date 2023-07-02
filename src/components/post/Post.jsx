import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={require("./background.jpg")} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Lifestyle</span>
                <span className="postCat">Travel</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">2 days ago</span>
        </div>
        <p className='postDesc'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam architecto illo, sit minima recusandae voluptates 
            dolores rerum deleniti reiciendis adipisci dolorum doloremque
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam architecto illo, sit minima recusandae voluptates 
            dolores rerum deleniti reiciendis adipisci dolorum doloremque
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam architecto illo, sit minima recusandae voluptates 
            dolores rerum deleniti reiciendis adipisci dolorum doloremque
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam architecto illo, sit minima recusandae voluptates 
            dolores rerum deleniti reiciendis adipisci dolorum doloremque 
        </p>
    </div>
  )
}
