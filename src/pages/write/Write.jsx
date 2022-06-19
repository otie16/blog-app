
import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img src={require('../../assets/images/workspace.jpg')} alt="" className="write-img"/>
      <form action="" className="write-form">
        <div className="write-form">
          <div className="write-form-group">
            <div className="add-image">
            <span className="add-image-text">
              Add Image
            </span>
            <label htmlFor="fileInput">
              {/* <i class="fas fa-plus"></i> */}
            </label>
            <input type="file" id="fileInput" style={{display:""}} />
            </div>
            <input
              type="text"
              placeholder="Title"
              className="write-input"
              autoFocus={true}
            />
          </div>
          <div className="write-form-group">
            <textarea
              placeholder="Tell Your Story..."
              type="text"
              className="write-input write-text"
            ></textarea>
          </div>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
