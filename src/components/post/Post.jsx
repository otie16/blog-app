import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src={require("../../assets/images/Pencil.jpg")}
        alt="post-img "
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Life</span>
          <span className="post-cat">Tech</span>
        </div>
        <span className="post-title">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro
        iusto quis quam repellendus quod cumque saepe, dignissimos sequi maxime
        in maiores sunt unde nesciunt voluptatum, eius recusandae. Provident,
        est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro
        iusto quis quam repellendus quod cumque saepe, dignissimos sequi maxime
        in maiores sunt unde nesciunt voluptatum, eius recusandae. Provident,
        est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro
        iusto quis quam repellendus quod cumque saepe, dignissimos sequi maxime
        in maiores sunt unde nesciunt voluptatum, eius recusandae. Provident,
        est!
      </p>
    </div>
  );
};

export default Post;
