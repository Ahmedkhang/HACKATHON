const form =document.getElementById("form") as HTMLFormElement;
const resume_display = document.getElementById("resume-display") as HTMLDivElement;


form.addEventListener('submit', (event: Event)=>{
       event.preventDefault();

       const name = (document.getElementById("name") as HTMLInputElement).value;
       const email = (document.getElementById("email") as HTMLInputElement).value;
       const phone = (document.getElementById("phone") as HTMLInputElement).value;
       const education = (document.getElementById("education") as HTMLInputElement).value;
       const experience = (document.getElementById("experience") as HTMLInputElement).value;
       const skills = (document.getElementById("skills") as HTMLInputElement).value;

       const resume_HTML = `
       <h2><b>Resume</b><h2>
       <h3>Personal Infromation</h3>

       <p><b>Name:</b>${name}</p>
       <p><b>Email:</b>${email}</p>
       <p><b>Phone:</b>${phone}</p>

       <h3>Education</h3>

       <p>${education}</p>


       <h3>Work Experience</h3>

       <p>${experience}</p>

       <h3>Skills</h3>


       <p>${skills}</p>
       `
       if(resume_display){
           resume_display.innerHTML = resume_HTML;
       }
       else{
          console.log('Somethin Went Wrong')
       }
})

