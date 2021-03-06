var bio = {
    "name": "Beth Palmer",
    "role": "Creative and Website Designer",
    "contacts": {
        "mobile": "07523257537",
        "email": "hello@bethpalmerdesigns.co.uk",
        "github": "bethpalmer",
        "website": "www.bethpalmer.co.uk",
        "location": "Brighton and Hove"
    },
    "biopic": "images/profile.jpg",
    "welcomeMessage": "Thanks for visiting my online CV. Here you'll find my relevant work and project experience as well as education and training history.",
    "skills": ["HTML, CSS, JavaScript, JQuery, Optimisation, Git, SQL, Frameworks, Wordpress, UX, Illustrator",
        "Cross Browser and Device Testing, Scoping, Process Analysis, Troubleshooting, Desktop Support",
        "(some knowledge of) Ruby, Grunt, Infrastructure, SASS, BEM",
    ],
    "skillsImage": "images/awesomeness.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var website = HTMLwebsite.replace("%data%", bio.contacts.website);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(email, mobile, github, website, location);

        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        $(function() {
            $(".biopic").hover(
                function() {
                    $(".biopic").attr('src', 'images/liveWellOutlines1.jpg');
                },
                function() {
                    $(".biopic").attr('src', 'images/profile.jpg');
                }
            );
        });


        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);

        function displaySkills1() {
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        displaySkills1();

        var image = HTMLskillsImage.replace("%data%", bio.skillsImage);
        $("#skills").append(image);

        $("#skills").mouseover(function() {
            $(".skillstext").removeClass("show").addClass("hide");
            $(".awesome").removeClass("hide").addClass("show");
        });
        $("#skills").mouseout(function() {
            $(".awesome").removeClass("show").addClass("hide");
            $(".skillstext").removeClass("hide").addClass("show");
        });
    }
};

var work = {
    "jobs": [{
        "title": "Creative and Web Designer",
        "employer": "Freelance",
        "dates": "Jan 2017 - ongoing",
        "location": "Hove",
        "description":
            "<ul class='work'>" +
            "<li>Full website design services, creating bespoke web systems from conception of breif through to product launch and post launch support.</li>" +
            "<li>Databse support and integration, website optimisation, add on services as well as wordpress products if desired.</li>" +
            "<li>Additional design services such as Branding and Print Media.</li></ul>",
        "url": "http://www.bethpalmer.co.uk/"
    },
    {
        "title": "IT Coordinator",
        "employer": "Concordia Ltd",
        "dates": "Jun 2010 - Dec 2014",
        "location": "Portslade",
        "description":
            "<ul class='work'>" +
            "<li>Managed all aspects of IT provision and support for this organisation of 25, including IT strategy, database, infrastructure, customer portals and office tech.</li>" +
            "<li>Conceived, designed and managed the implementation of a £150k workflow management system to replace legacy database and customer portals.</li>" +
            "<li>Enabled customers to interface directly with the system reducing administration hours spent on data entry by at least 10% year.</li>" +
            "<li>Planned and managed the implementation of the virtualisation of internal infrastructure from an array of outdated servers, neutralising the risk of hardware failure.</li></ul>",
        "url": "http://www.concordia.org.uk/"
    }, {
        "title": "Service Desk Operator for the NHS",
        "employer": "Sussex HIS",
        "dates": "Nov 2009 - Jun 2010",
        "location": "Hastings / Durrington",
        "description": "<ul class='work'>" +
            "<li>Worked as part of team providing advice and tech help to a large body of NHS users.</li>" +
            "<li>Undertook basic infrastructure support and remote troubleshooting helping the team achieve its target first-line fix rates whilst providing great customer service.</li></ul>",
        "url": "#"
    }],
    
    "display": function() {
        work.jobs.forEach(function(workInfo) {
            $("#workExperience").append(HTMLworkStart);

            var workEmployer = HTMLworkEmployer.replace("%data%", workInfo.employer).replace("#", workInfo.url);
            var workTitle = HTMLworkTitle.replace("%data%", workInfo.title);
            var workEmployerAndTitle = workEmployer + workTitle;
            var workDates = HTMLworkDates.replace("%data%", workInfo.dates);
            var workLocation = HTMLworkLocation.replace("%data%", workInfo.location);
            var workDescription = HTMLworkDescription.replace("%data%", workInfo.description);
            $(".work-entry:last").append(workEmployerAndTitle, workDates, workLocation, workDescription);
        });

    }
};

var projects = {
    "projects": [{
        "title": "Essential Blends",
        "dates": "Jun 2017 - Jun 2017",
        "description": "<ul class='work'>" +
            "<li>Designing and developing a visually appealing wordpress single page landing site, channeling customers to other business social media and etsy shop.</li>" +
            "<li>The site displays effectively all screen sizes.</li></ul>",
        "images": ["../images/essblends-laptop.jpg", "../images/essblends-mobile.jpg"],
        "url": "http://www.myessentialblends.co.uk/"
    },{
        "title": "SFACA Accountancy Site",
        "dates": "Apr 2017 - Apr 2017",
        "description": "<ul class='work'>" +
            "<li>Designing and developing a visually appealing scrolling website based on analysis of existing website.</li>" +
            "<li>The site displays effectively all screen sizes. Tab panels are used to break up text heavy areas.</li></ul>",
        "images": ["../images/sfaca-laptop.jpg", "../images/sfaca-mobile.jpg"],
        "url": "https://www.sfaca.co.uk/"
    },{
        "title": "Mondays Child UK",
        "dates": "Jan 2017 - Mar 2017",
        "description": "<ul class='work'>" +
            "<li>Analysed existing site to inform scoping and defining brief with the client.</li>" +
            "<li>Fulfilled the brief by creating a fully responsive website using the bootstrap framework, retaining the urban edgy look of the brand, marrying it with simplicity and space.</li></ul>",
        "images": ["../images/mcuk-laptop.jpg", "../images/mcuk-mobile.jpg"],
        "url": "http://www.mondayschilduk.org"
    }],
    "display": function() {
        projects.projects.forEach(function(projectInfo) {
            $("#projects").append(HTMLprojectStart);

            var projectTitle = HTMLprojectTitle.replace("%data%", projectInfo.title).replace("#", projectInfo.url);
            var projectDates = HTMLprojectDates.replace("%data%", projectInfo.dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projectInfo.description);
            $(".project-entry:last").append(projectTitle, projectDates, projectDescription);
            for (var i = 0; i < projectInfo.images.length; i++) {
                var projectImage = HTMLprojectImage.replace("%data%", projectInfo.images[i]);
                $(".project-entry:last").append(projectImage);
            }
        });
    }
};

var education = {
    "schools": [{
        "name": "The Ashcombe Secondary School",
        "dates": "1994 - 1999",
        "location": "Dorking, Surrey",
        "degree": "GCSEs",
        "majors": ["English Lit (A)", "English Lang (B)", "Dual Science (A,A)", "Maths (B)", "French (A)", "Geography (A)", "Graphic Design (A)", "Music (A)"],
        "url": "http://www.ashcombe.surrey.sch.uk/"
    }, {
        "name": "Collyers College",
        "dates": "2000 - 2002",
        "location": "Horsham, West Sussex",
        "degree": "A-levels",
        "majors": ["Graphic Communication (B)", "Media Studies (B)", "Law (B)"],
        "url": "http://www.collyers.ac.uk/"
    }, {
        "name": "Cerco IT Training Centre",
        "dates": "Sept 2009, 4 week residential",
        "location": "Crewe",
        "degree": "CCSN (Cerco Certified Systems and Networks) Engineer",
        "majors": ["Hardware Systems and Networks"],
        "url": "https://cercoit.co.uk/"
    }],
    "onlineCourses": [{
        "title": "Front-end Developer Nanodegree",
        "school": "Udacity",
        "dates": "Jul 2016 - Jun 2017",
        "url": "https://www.udacity.com"
    }, {
        "title": "JavaScript Basics / Introduction to JQuery",
        "school": "Team Treehouse",
        "dates": "Aug - Sept 2016",
        "url": "https://teamtreehouse.com"
    }],
    "display": function() {
        education.schools.forEach(function(schoolInfo) {
            $("#education").append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace("%data%", schoolInfo.name).replace("#", schoolInfo.url);
            var schoolDegree = HTMLschoolDegree.replace("%data%", schoolInfo.degree);
            var nameAndDegree = schoolName + schoolDegree;
            var schoolDates = HTMLschoolDates.replace("%data%", schoolInfo.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", schoolInfo.location);
            $(".education-entry:last").append(nameAndDegree, schoolDates, schoolLocation);
            for (var i = 0; i < schoolInfo.majors.length; i++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", schoolInfo.majors[i]);
                $(".education-entry:last").append(formattedMajor);
            }
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(courseInfo) {
            $("#education").append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace("%data%", courseInfo.title).replace("#", courseInfo.url);
            var courseSchool = HTMLonlineSchool.replace("%data%", courseInfo.school);
            var titleAndSchool = courseTitle + courseSchool;
            var courseDates = HTMLonlineDates.replace("%data%", courseInfo.dates);
            var courseURL = HTMLonlineURL.replace("%data%", courseInfo.url).replace("#", courseInfo.url);
            $(".education-entry:last").append(titleAndSchool, courseDates, courseURL);
        });
    }
};

function inName(name) {
    name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
