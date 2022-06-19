import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <span className="side-bar-title">WRITERS BIO</span>

        <img
          className="writer"
          src={require("../../assets/images/camera.jpg")}
          alt="writer-pic"
        />
        <span className="writer-name">Debbie Stone</span>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perspiciatis aspernatur explicabo, aliquid mollitia
          eius quibusdam!
        </p>
        <img
          className="writer"
          src={require("../../assets/images/camera.jpg")}
          alt="writer-pic"
        />
        <span className="writer-name">Debbie Stone</span>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perspiciatis aspernatur explicabo, aliquid mollitia
          eius quibusdam!
        </p>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">CATEGORIES</span>
        <ul className="side-bar-list">
          <li className="side-bar-list-item">Life</li>
          <li className="side-bar-list-item">Inspiration</li>
          <li className="side-bar-list-item">Tech</li>
          <li className="side-bar-list-item">Life</li>
          <li className="side-bar-list-item">Inspiration</li>
          <li className="side-bar-list-item">Tech</li>
        </ul>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">FOLLOW US</span>
        <div className="social-media-icons">
        <i className="top-icon fa-brands fa-twitter-square"></i>
        <i className="top-icon fa-brands fa-facebook-square"></i>
        <i className="top-icon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
