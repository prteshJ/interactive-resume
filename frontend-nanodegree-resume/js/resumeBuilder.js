// WORK EXPERIENCE INFORMATION
var work = {
    "jobs": [
        {
            "employer": "Illinois Institute Of Technology",
            "title": "Graduate Teaching Assistant",
            "dates": "Jan 2017 - May 2017",
            "location": "Chicago",
            "description": "Handled all teaching and grading responsibilities for graduate Java class as instructed by Professor."
        },
        {
            "employer": "Uniken Inc.",
            "title": "UI/UX Designer & Researcher Intern",
            "dates": "Jun 2016 - Aug 2016",
            "location": "Pune",
            "description": "Worked on design of an iOS Secure Messaging Application over the Summer."
        },
        {
            "employer": "Pune Textile Market Pvt. Ltd.",
            "title": "Senior Software Developer & Manager",
            "dates": "Aug 2014 - July 2015",
            "location": "Pune",
            "description": "Handled all managerial & I.T. responsibilities of the company."
        },
        {
            "employer": "Majestique Landmarks Pvt. Ltd.",
            "title": "Software Developer",
            "dates": "Aug 2013 - July 2014",
            "location": "Pune",
            "description": "Did front-end design and development as well as testing of in-house software."
        },
        {
            "employer": "Android Developer",
            "title": "Smart I Electronics Pvt. Ltd",
            "dates": "Aug 2012 - July 2013",
            "location": "Pune",
            "description": "Worked on development and testing of cloud based android application."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

// PROJECTS INFORMATION
var projects = {
    "projects": [
        {
            "title": "UI/UX Design of IIT's Health Website",
            "dates": "Jan 2016 - May 2016",
            "description": "Applied UX and HCI skills by working on re-design of university's health website.",
            "images": ["images/ITMD534/ImmunizationModuleSketch.png",
                       "images/ITMD534/RedesignedCalendarView.png"]
        }, {
            "title": "Real Estate Flat Booking System",
            "dates": "Jan 2016 - May 2016",
            "description": "Developed an real estate flat booking standalone application using Java.",
            "images": ["images/ITMD510/Login_Screen.png", "images/ITMD510/Customer_Login_View_Feedback.png"]
        }, {
            "title": "Smart To Do List",
            "dates": "Jan 2017 - May 2017",
            "description": "Developed an user friendly extensible To-do list android application.",
            "images": ["images/ITMD555/todoOverview.png", "images/ITMD555/todoIdea.png"]
        }
    ]
};

// Add Online Order Management System once I get reply from Prof. Scott.
// {
//             "title": "Online Order Management System",
//             "dates": "Aug 2016 - Dec 2016",
//             "description": "Developed an online order management system using Java EE 7.",
//             "images": []
// }

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        var imageArray = project.images;

        imageArray.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
        });

    });
};

projects.display();


// BIOGRAPHICAL INFORMATION
var skills = ["Back end","Front-end", "Entreprenuership", "Design", "Leadership", "Teaching", "User Experience"];

var bio = {
    "name": "Pritesh Jakhotia",
    "role": "Front End Developer",
    "contacts":
    {
        "mobile": "(+91) 9764309401",
        "email": "priteshjakhotia@gmail.com",
        "twitter": "priteshjakhotia",
        "skype": "pritesh199021",
        "github": "prteshJ",
        "linkedIn": "https://www.linkedin.com/in/priteshjakhotia/",
        "portfolio": "https://priteshjakhotia.000webhostapp.com/personal_portfolio/personal_portfolio/index.html",
        "location": "Chicago"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Experience is the best teacher.",
    "skills": skills
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedSkype = HTMLskype.replace("%data%", bio.contacts.skype);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
    var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedSkype);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLinkedIn);
    $("#footerContacts").append(formattedPortfolio);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(HTMLskills.replace("%data%", formattedSkill));
        formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    }
};

bio.display();

// EDUCATIONAL INFORMATION
var education = {
    "schools": [
        {
            "name": "Illinois Institute Of Technology",
            "degree": "Masters",
            "dates": "Jan 2016 - May 2017",
            "location": "Chicago",
            "major": "Information Technology Management specializing in Entreprenuership."
        }, {
            "name": "Binghamton University",
            "degree": "Masters",
            "dates": " Aug 2015 - Dec 2015",
            "location": "Binghamton",
            "major": "Computer Science"
        }, {
            "name": "Vishwakarma Institute Of Information Technology",
            "degree": "Bachelors",
            "dates": " Aug 2008 - May 2012",
            "location": "Pune",
            "major": "Information Technology"
        }
    ],
    "onlineClasses": [     
        {
            "title":"Android Basics Nanodegree",
            "school":"Udacity",
            "dates":"January 2017 - May 2017",
            "url":"https://in.udacity.com/course/android-basics-nanodegree-by-google--nd803/"
        },        
        {
            "title":"Programming Foundations with Python",
            "school":"Udacity",
            "dates":"June 2017",
            "url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
        },        
        {
            "title":"Intro to HTML and CSS",
            "school":"Udacity",
            "dates":"June 2017",
            "url":"https://www.udacity.com/courses/intro-to-html-and-css--ud304"
        },
        {
            "title":"JavaScript Basics",
            "school":"Udacity",
            "dates": "June 2017",
            "url":"https://www.udacity.com/courses/javascript-basics--ud804"
        },
        {
            "title":"HTML5 Canvas",
            "school":"Udacity",
            "dates": "June 2017",
            "url":"https://www.udacity.com/course/html5-canvas--ud292"
        }        
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedName);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates + "&nbsp;");

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineClasses.forEach(function(course) {

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
         $(".online-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
         $(".online-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
         $(".online-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
         $(".online-entry:last").append(formattedURL);
    });


};

education.display();

// ADD GOOGLE MAP
$("#mapDiv").append(googleMap);
