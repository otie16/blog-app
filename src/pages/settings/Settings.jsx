import SideBar from "../../components/sidebar/SideBar";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form action="" className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-pic">
            <img
              src={require("../../assets/images/camera.jpg")}
              alt=""
              className="profile-pic"
            />
            <label htmlFor="fileInput">
              <i className="settings-profile-pic-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Debbie" />
          <label>Email</label>
          <input type="email" placeholder="debbie@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Debbie" />
          <button className="settings-btn">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
