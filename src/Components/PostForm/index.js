import "./PostForm.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  startLoading,
  stopLoading,
  showAlert,
  setSearchText,
} from "../../actions/index";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import AppNavbar from "../AppNavbar";
import Button from "../smallerComponents/Button";

const mapStateToProps = (state) => {
  return {
    error: state.error,
    searchText: state.searchText,
  };
};

const mapDispatchToProps = {
  startLoading: startLoading,
  stopLoading: stopLoading,
  showAlert: showAlert,
  setSearchText: setSearchText,
};

const PostForm = (props) => {
  const history = useHistory();

  const [tasks, setTasks] = useState([]);

  const [postData, setPostData] = useState({
    img: "",
    caption: "",
    taskId: "",
  });

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFileChange = (e) => {
    setPostData({
      ...postData,
      imgPath: e.target.value,
      img: e.target.files[0],
    });
  };

  useEffect(() => {
    props.startLoading();
    axios
      .get(`${process.env.REACT_APP_API_URL}/tasks/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTasks(response.data.data);
        props.stopLoading();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 401) {
          if (error.response.data.isTokenExpired == true) {
            localStorage.removeItem("token");
          }
          history.push("/login");
          props.showAlert(error.response.data.message);
        } else {
          props.showAlert("Failed to load data!, Try again later.");
        }
        props.stopLoading();
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startLoading();
    console.log("Going to send this ", postData);
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, postData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        history.push("/home");
        props.showAlert("Post uploaded Successfully!");
        props.stopLoading();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 403) {
          props.showAlert(error.response.data.message);
        } else if (error.response.status == 401) {
          if (error.response.data.isTokenExpired == true) {
            localStorage.removeItem("token");
          }
          history.push("/login");
          props.showAlert(error.response.data.message);
        } else {
          props.showAlert("Failed to upload Post!, Try again later.");
        }
        props.stopLoading();
      });
  };

  return (
    <div className="PostForm">
      <AppNavbar />
      <main>
        <h2>Upload Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-child">
            <label htmlFor="caption">Caption</label>
            <textarea
              id="caption"
              placeholder="Enter caption here"
              minLength="20"
              maxLength="150"
              required
              name="caption"
              value={postData.caption}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-child">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              required={true}
              name="category"
              value={postData.category}
              onChange={handleInputChange}
            >
              <option value="">select category</option>
              {tasks.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-child">
            <label htmlFor="post-image">Post related Image (optional)</label>
            <input
              id="post-image"
              type="file"
              accept="image/jpeg"
              name="postImage"
              value={postData.postImagePath}
              onChange={handleInputFileChange}
            />
          </div>
          <div className="post-btns">
            <Button buttonType="pri-btn">Book</Button>
            <Link to="/home">
              <Button buttonType="sec-btn">Cancel</Button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
