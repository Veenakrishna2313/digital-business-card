import image from './photo.jpeg'

function ImageContainer(){
  return (
    <div className="detail-container">
      <div>
        <img className="image" src={image}/>
      </div>
      <h1>Veena Krishna</h1>
      <h2>Front End Developer</h2>
     <a href="https://veenakrishna2313.github.io/Portfolio-Website/" target="_blank"><h3>veenakrishna.website</h3></a> 
      <div className="email-button">
      <a className="email" href="mailto:veenakrishna.s@gmail.com" target="_blank"> <i className="fa fa-envelope"></i>Email</a> 
      </div>
     
    </div>
  );

}
export default ImageContainer;