var form = document.getElementById("form");
var resume_display = document.getElementById("resume-display");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //  Edits
    var resume_HTML = "\n       \n       <h2><b>Resume</b></h2>\n       <h3>Personal Infromation</h3>\n\n       <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n       <h3>Education</h3>\n\n       <p contenteditable=\"true\">").concat(education, "</p>\n\n\n       <h3>Work Experience</h3>\n\n       <p contenteditable=\"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n\n\n       <p contenteditable=\"true\">").concat(skills, "</p>\n       ");
    if (resume_display) {
        resume_display.innerHTML = resume_HTML;
    }
    else {
        console.log('Somethin Went Wrong');
    }
});
