const form = document.getElementById("form") as HTMLFormElement;
const resume_display = document.getElementById("resume-display") as HTMLDivElement;


form.addEventListener('submit', (event: Event) => {
       event.preventDefault();

       const name = (document.getElementById("name") as HTMLInputElement).value;
       const email = (document.getElementById("email") as HTMLInputElement).value;
       const phone = (document.getElementById("phone") as HTMLInputElement).value;
       const education = (document.getElementById("education") as HTMLInputElement).value;
       const experience = (document.getElementById("experience") as HTMLInputElement).value;
       const skills = (document.getElementById("skills") as HTMLInputElement).value;
//  Edits

       const resume_HTML = `
       
       <h2><b>Resume</b></h2>
       <h3>Personal Information</h3>

       <p><b>Name:</b><span contenteditable="true">${name}</span></p>
      <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

       <h3>Education</h3>

       <p contenteditable="true">${education}</p>


       <h3>Work Experience</h3>

       <p contenteditable="true">${experience}</p>

       <h3>Skills</h3>


       <p contenteditable="true">${skills}</p>
       `
       if(resume_display){
           resume_display.innerHTML = resume_HTML;
       }
       else{
          console.log('Somethin Went Wrong')
       }
})

