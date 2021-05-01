import "./Post.css";

const Post = () => {
  return (
    <div className="Post">
      <div className="post-head">
        <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
          <p>Username</p>
        </div>
        <p>Points Count</p>
      </div>
      <main>
        <img src="https://i.stack.imgur.com/y9DpT.jpg" />
      </main>
      <div>
        <p>like button</p>
        <p>likes count</p>
      </div>
      <div>
        <p>captions</p>
      </div>
    </div>
  );
};

export default Post;
