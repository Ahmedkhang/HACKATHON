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
    var resume_HTML = "\n       <h2><b>Resume</b><h2>\n       <h3>Personal Infromation</h3>\n\n       <p><b>Name:</b>".concat(name, "</p>\n       <p><b>Email:</b>").concat(email, "</p>\n       <p><b>Phone:</b>").concat(phone, "</p>\n\n       <h3>Education</h3>\n\n       <p>").concat(education, "</p>\n\n\n       <h3>Work Experience</h3>\n\n       <p>").concat(experience, "</p>\n\n       <h3>Skills</h3>\n\n\n       <p>").concat(skills, "</p>\n       ");
    if (resume_display) {
        resume_display.innerHTML = resume_HTML;
    }
    else {
        console.log('Somethin Went Wrong');
    }
});
