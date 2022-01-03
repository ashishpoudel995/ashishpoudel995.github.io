import { MyBlogs } from "./BlogsLists";

export const Blogs = () => {
  const mapBlogs = () => {
    return MyBlogs.map((blog) => {
      return (
        <div className="card">
          <div className="cover">
            <img src={blog.Cover} />
          </div>
          <div className="title">
            <h3>{blog.Title}</h3>
          </div>
          <div className="link">
            <a href={blog.Link} target="_new">
              Read Blog...&nbsp;<i className="far fa-hand-point-right"></i>
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="blogs">
      <h3>My Blogs:</h3>
      <div className="blog">{mapBlogs()}</div>
    </div>
  );
};
