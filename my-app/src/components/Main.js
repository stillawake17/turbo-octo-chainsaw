import React from 'react';



function Main(props) {
   
    return ( 

<>        
           
            <main>
            <h1 className="main-header">{props.title}</h1>
            
            <p>Joanna Booth. Web Developer. 
           
            <img className="profile" src="profile.jpg" /></p>
           
            <p ><strong>GitHub User Name: </strong>
            <a href="https://github.com/stillawake17" >stillawake17</a></p>
            <p ><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/joanna-booth-8587492/">Profile</a></p>
            <p ><strong>Email: </strong>jboothform@gmail.com</p>
            <div className="text-box">
                <p>As a front-end web developer with expertise in HTML, CSS, JavaScript, React.js, and Node.js, 
                    I bring a wealth of technical skills and creative energy to every project. With degrees in politics and law, I have a unique perspective on problem-solving and attention to detail. As a book editor, I have honed my communication skills and ability to work with clients to deliver outstanding results. Whether crafting a stunning website or editing a manuscript, 
                I am passionate about delivering high-quality work that exceeds expectations.</p>
                </div>
                    </main>
                    <hr />
                    <div className="pdf-link-box">  <a href="CV.pdf" target="_blank">Download CV</a>
</div>
                    
                
    
        </>

    )
}

export default Main;