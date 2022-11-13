import React from 'react'
/*
Welcome page including backgorund and links to social media for contact 
*/

const Welcome = () => {
  const myStyle={
    backgroundImage: 
"url('http://127.0.0.1:8000/media/Posted_images/backgroundliquer.jpg')",
};
  return (
    <div style={myStyle}>
     
      <h1 align="center" style={{padding:"50px"}}><strong> E-commerce Liqueur store</strong></h1><br></br>
      
      <h4 align="center">This web app is a final proj for Python Full Stack development course<br></br> Done using Django for server side , React/Redux - client side<br></br>

      enjoy your visit and cheers!!! </h4>
      <h4 align="center" style={{margin:"150px"}}>Contact Me:<br></br>
      <a href="https://www.linkedin.com/in/michaelmog/"><img src="http://127.0.0.1:8000/media/Posted_images/linkedin.png" height="25px"></img></a>{"    "}
      <a href="https://github.com/michael71161/"><img src="http://127.0.0.1:8000/media/Posted_images/github-logo.png" height="25px"></img></a>{"    "}
      <a href="mailto:michael71161@gmail.com/"><img src="http://127.0.0.1:8000/media/Posted_images/gmail.png" height="25px"></img></a>{"    "}
      
      
      </h4>
      <h5 align="center">
        created by <a href="">Michael Mogilianski</a></h5>

      <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br><br></br>
      <br></br>
      <br></br>
      

      </div>
  )
}

export default Welcome