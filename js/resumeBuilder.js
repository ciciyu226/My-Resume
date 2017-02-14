/* Author: Cici Yu
  * Date: 2.11.2017
  * This is the main javascript file for building my online resume. Jquery is used here.
  */

/** object bio **/
var bio = {
    name: 'Cici Yu',
    role: 'Web Developer',
    contacts: {
        mobile: '(619)-888-9962',
        email: 'ciciyu226@gmail.com',
        github: 'ciciyu226',
        linkedin: 'XXX',
        location: 'San Diego, CA'
    },
    welcomeMessage: 'Hi, this is Cici Yu. I have a great passion for website and web app development. Feel free to check all my projects! I am getting my bachlor degree in math-computer science in June, 2017 from UCSD and I am currently seeking for a full-time web(front-end) developer position.',
    skills: ['HTML', 'CSS', 'Bootstrap','Javascript','jQuery', 'AngularJS', 'Ionic Framework', 'Firebase','SQL'],
    biopic: 'images/fry.jpg',
    display: function(){
        $('#header').prepend(HTMLheaderName);
        $('#name').text(bio.name);


        $(HTMLheaderRole).insertAfter('#name');
        $('#name').next().text(bio.role);

        /* Contacts */
        /*TODO: create HTMLlinkedin with the generic one*/
        var HTMLlinkedin = HTMLcontactGeneric.replace('%contact%', 'linkedin');
        $('#topContacts').append(HTMLmobile, HTMLemail, HTMLgithub, HTMLlinkedin, HTMLlocation);
        /** fill out each contact info**/
        var index = 0;
        for(var property in bio.contacts){
            $('#topContacts li').eq(index).children().last().text(bio.contacts[property]);
            index++;

        }
        /* Profile picture */
        $('#header').append(HTMLbioPic);
        $('.biopic').attr('src', bio.biopic);
        $('.biopic').attr('alt', "Cici's profile picture");

        /* Welcome msg and skillset, I switched the order of welcome message and skill set on purpose. */
        $('#header').append(HTMLskillsStart);
        for(var i = 0; i < bio.skills.length; i++ ){
            $('#skills').append(HTMLskills);
            $('#skills li').eq(i).children().text(bio.skills[i]);

        }

        $('#header').append(HTMLwelcomeMsg);
        $('.welcome-message').text(bio.welcomeMessage);
        }

} //end of object bio

/** object work **/
var work = {
    jobs: [{
             employer: 'Own',
             title: 'Freelance Web Developer',
             location: 'San Diego, CA',
             dates: '09/2016 - Current',
             description: "I am a freelance web developer while i am still in pursuing of my bachlor's degree at UCSD. I have designed and developed websites and web apps for family and friends."
           },
           {
             employer: 'Department of Mathematics at UCSD',
             title: 'Matlab Tutor',
             location: 'San Diego, CA',
             dates: '01/2017 - Current',
             description: "I am a Matlab tutor for two lower-division math classes at UCSD: 'Differential equation' and 'Linear Algebra'. Solving programming problems for students in the computer lab was fun!"
            },{
             employer: 'Department of Mathematics at UCSD',
             title: 'Teaching Assistant',
             location: 'San Diego, CA',
             dates: '09/2016 - 12/2016',
             description: "I was a teaching asistant for one of the math professors. My main tasks were: Teach two weekly discussion sections of 35 students, reviewing class material and solving practice problems for students; Hold weekly office hours; Grade exams of 300 students; Help the professor with course administration."
            }],
    display: function(){
        /* Work experience */
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = '';
        var formattedTitle ='';
        var formattedHeader= '';
        var formattedLocation= '';
        var formattedDates = '';
        var formattedDescription ='';
        var jobs = work.jobs;

        for(var i = 0; i< work.jobs.length; i++){
            /* use of String.replace in JS*/
            formattedEmployer = HTMLworkEmployer.replace('%data%', jobs[i].employer);
            formattedTitle = HTMLworkTitle.replace('%data%', jobs[i].title);
            formattedHeader = formattedEmployer + formattedTitle;
            $('.work-entry').append(formattedHeader);

            formattedDates = HTMLworkDates.replace('%data%', jobs[i].dates);
            $('.work-entry').append(formattedDates);

            formattedLocation = HTMLworkLocation.replace('%data%', jobs[i].location);
            $('.work-entry').append(formattedLocation);

            formattedDescription = HTMLworkDescription.replace('%data%', jobs[i].description);
            $('.work-entry').append(formattedDescription);
            console.log(i);
        }
    }

}//end of work object

var projects = {
    projects: [{
                title: 'Online Resume',
                dates:'02/2017',
                description: 'jdfklasjfsa',
                technology: 'HTML, CSS, Javascript, jQuery',
                images: ['http://placehold.it/300x200','http://placehold.it/300x200']

                },
                {
                title: 'Chilly',
                dates: 'In progress',
                description: 'fdafeasfdasfdaaa',
                technology: 'HTML, CSS, Javascript, AngularJS, Ionic Framework, Firebase',
                images: ['http://placehold.it/300x200', 'http://placehold.it/300x200']
                },
                {
                title: 'Animal Trading Card',
                dates: '01/20/2017 -- 01/22/2017',
                description: "fdafeasfdasfdaaa fdafeasfdasfd",
                technology: 'HTML, CSS',
                images: ['http://placehold.it/300x200','http://placehold.it/300x200']
                }],

    display: function(){
        $('#projects').append(HTMLprojectStart);
        var formattedPTitle = '';
        var formattedPDates = '';
        var formattedPDescription = '';
        var formattedPTechnology= '';
        var formattedPImages = '';
        var HTMLTechnology = '<div class="technology-text"><b>Skills Used: %data%</b></div>';
        var projectArray = projects.projects;
        /* TODO: add alt to imgaes */
        /* Array of href for each project */
        var hrefs = ['#', 'https://github.com/EmoBarney/Chilly', '2.fend-animal-trading-cards-master/card.html'];
        for(var i = 0; i < projectArray.length; i++){
            formattedPTitle = HTMLprojectTitle.replace('%data%', projectArray[i].title);
            formattedPTitle = formattedPTitle.replace('#', hrefs[i]);
            $('.project-entry').append(formattedPTitle);
            formattedPDates = HTMLprojectDates.replace('%data%', projectArray[i].dates);
            $('.project-entry').append(formattedPDates);
            formattedPDescription = HTMLprojectDescription.replace('%data%', projectArray[i].description);
            $('.project-entry').append(formattedPDescription);
            formattedPTechnology = HTMLTechnology.replace('%data%', projectArray[i].technology);
            $('.project-entry').append(formattedPTechnology);
            for(var j = 0; j< projectArray[i].images.length; j++){
                formattedPImages = HTMLprojectImage.replace('%data%', projectArray[i].images[j]);
                $('.project-entry').append(formattedPImages);
            }
            // formattedPImages = HTMLprojectImage.replace('%data%', projectArray[i].images);
            // $('.project-entry').append(formattedPImages);

        }
    }
}//end of project object

var education = {
    schools: [{
                name: 'University of California, San Diego',
                location:'La Jolla, CA',
                degree: 'B.S.',
                majors: ['Computer Science','Mathematics'],
                dates: '09/2013 -- 06/2017',
                url: 'https://ucsd.edu/'
             },{
                name: 'Beijing NO.5 High School',
                location:'Beijing, China',
                degree: '',
                majors: ['aa'],
                dates: '09/2010 -- 06/2013',
                url: ''
             },{
                name: 'ABC School',
                location:'Mars, The Milky Way',
                degree: 'B.S.',
                majors: ['Martian','Tennis','Music'],
                dates: '09/3000 -- future',
                url: ''
             }],
    onlineCourses: [{
                title: 'Front-End Web Developer Nanodegree',
                school: 'Udacity',
                dates: '01/17 -- Current',
                url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
             },{
                title: 'Front-End Web Development Track',
                school: 'Treehouse',
                dates: '10/2016 -- 02/2017',
                url: 'https://teamtreehouse.com/tracks/front-end-web-development'
             }],
    display: function(){
        /* Local universities and schools */
        $('#education').append(HTMLschoolStart);
        var formattedschoolName = '';
        var formattedschoolDegree= '';
        var formattedschoolDates= '';
        var formattedschoolLocation= '';
        var formattedschoolMajor= '';
        var formattedonlineTitle='';
        var formattedonlineSchool= '';
        var formattedonlineDates= '';
        var formattedonlineUrl= '';
        var formattedonlineHeader = '';
        var schoolArray = education.schools;
        var onlineCourseArray = education.onlineCourses;
        var formattedschoolHeader = '';

        for(var i = 0; i < schoolArray.length; i++ ){
            formattedschoolName = HTMLschoolName.replace('%data%', schoolArray[i].name);
            formattedschoolName = formattedschoolName.replace('#', schoolArray[i].url);
            formattedschoolDegree = HTMLschoolDegree.replace('%data%', schoolArray[i].degree);
            formattedschoolHeader = formattedschoolName + formattedschoolDegree;
            $('.education-entry').append(formattedschoolHeader);
            formattedschoolDates = HTMLschoolDates.replace('%data%', schoolArray[i].dates);
            $('.education-entry').append(formattedschoolDates);
            formattedschoolLocation = HTMLschoolLocation.replace('%data%', schoolArray[i].location);
            $('.education-entry').append(formattedschoolLocation);
            for(var j = 0; j< schoolArray[i].majors.length; j++){
                formattedschoolMajor = HTMLschoolMajor.replace('%data%', schoolArray[i].majors[j]);
                $('.education-entry').append(formattedschoolMajor);
            }
        }

        /* Online courses */
        $('.education-entry').append(HTMLonlineClasses);
        for(var i = 0; i < onlineCourseArray.length; i++){
            formattedonlineTitle = HTMLonlineTitle.replace('%data%', onlineCourseArray[i].title);
            formattedonlineTitle = formattedonlineTitle.replace('#', onlineCourseArray[i].url);
            formattedonlineSchool = HTMLonlineSchool.replace('%data%', onlineCourseArray[i].school);
            formattedonlineHeader = formattedonlineTitle + formattedonlineSchool;
            $('.education-entry').append(formattedonlineHeader);
            formattedonlineDates = HTMLonlineDates.replace('%data%', onlineCourseArray[i].dates);
            $('.education-entry').append(formattedonlineDates);

            formattedonlineUrl = HTMLonlineURL.replace('%data%', onlineCourseArray[i].url);
            formattedonlineUrl = formattedonlineUrl.replace('#', onlineCourseArray[i].url);
            $('.education-entry').append(formattedonlineUrl);
        }

    }
}//end of education object

/* TODO: Map */
$('#mapDiv').append(googleMap);



/*Let's Connect */
function fillFooter(){
    var HTMLlinkedin = HTMLcontactGeneric.replace('%contact%', 'linkedin');
        $('#footerContacts').append(HTMLmobile, HTMLemail, HTMLgithub, HTMLlinkedin, HTMLlocation);
        /** fill out each contact info**/
        var index = 0;
        for(var property in bio.contacts){
            $('#footerContacts li').eq(index).children().last().text(bio.contacts[property]);
            index++;

    }
}

/* call display function */

bio.display();
work.display();
projects.display();
education.display();
/* TODO: call map functions */



fillFooter();

// /* Header contents */
// /* Name and title */
// $('#header').prepend(HTMLheaderName);
// $('#name').text('Cici Yu');

// $(HTMLheaderRole).insertAfter('#name');
// $('#name').next().text('Web Developer');

// /* Contacts */
// $('#topContacts').append(HTMLmobile);
// $('#topContacts').append(HTMLemail);
// $('#topContacts').append(HTMLgithub);
// $('#topContacts').append(HTMLlinkedin);
// $('#topContacts').append(HTMLlocation);
// /** fill out each contact info**/
// for(var i = 0 ; i < contactArray.length; i++ ){
// $('#topContacts li').eq(i).children().last().text(contactArray[i]);
// };

// /* Profile picture */
// $('#header').append(HTMLbioPic);
// $('.biopic').attr('src', 'images/fry.jpg');
// $('.biopic').attr('alt', "Cici's profile picture");

// /* Welcome msg and skillset, I switched the order of welcome message and skill set on purpose. */
// $('#header').append(HTMLskillsStart);
// for(var i = 0; i < skillArray.length; i++ ){
//     $('#skills').append(HTMLskills);
//     $('#skills li').eq(i).children().text(skillArray[i]);

// }

// $('#header').append(HTMLwelcomeMsg);
// $('.welcome-message').text('Hi, this is Cici Yu. I have a great passion for website and web app development. Feel free to check all my projects! I am getting my bachlor degree in math-computer science in June, 2017 from UCSD and I am currently seeking for a full-time web(front-end) developer position.');

// /* Work experience */
// $('#workExperience').append(HTMLworkStart);

// $('.work-entry').append(HTMLworkEmployer);
// $('.work-entry a').text('UCSD');
// $('.work-entry a').append(HTMLworkTitle);
// $('.work-entry a').text('Freelance Web Developer');

// $('.work-entry').append(HTMLworkDates);
// $('.work-entry').append(HTMLworkLocation);
// $('.work-entry').append(HTMLworkDescription);



// $('.work-entry').append(HTMLworkEmployer);
// $('.work-entry a').text('Freelance Web Developer');
// $('.work-entry a').append(HTMLworkTitle);
// $('.work-entry a').text('');




