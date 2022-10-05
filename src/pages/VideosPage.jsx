import { useState } from "react";
import { Link } from "react-router-dom"


function VideosPage (props) {

    <div>
       
    </div>
    console.log(props);
  const [ newForm, setNewForm ] = useState({
    name: "",
    url: "",
  });


  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props);
    props.createVideo(newForm);
    setNewForm({
      name: "",
      url: "",
       });
       console.log(event);
  };

  const loaded = () => {
    console.log(props.video);
    return props.video.map((video) => (
      <div key={video._id} className="video">
        {/* <Link to={`/videos/${video._id}`}><h1>{video.name}</h1></Link> */}
        <a href={video.url} alt={video.name} >{video.name}</a>
      
      </div>
    ));
  };

  const loading = () => {
    return <h1>Vibe Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="video name"
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="video URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add New Video" />
      </form>
      {props.video ? loaded() : loading()}
    </section>
  );
}

export default VideosPage;
//Help From Office Hrs