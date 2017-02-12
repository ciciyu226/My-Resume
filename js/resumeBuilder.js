/* Author: Cici Yu
  * Date: 2.11.2017
  * This is the main javascript file for building my online resume. Jquery is used here.
  */

/** object bio **/
var bio = {
    name: 'Cici Yu',
    role: 'Web Developer',
    Contacts: {
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
        $('#topContacts').append(HTMLmobile, HTMLemail, HTMLgithub, HTMLlinkedin, HTMLlocation);
        /** fill out each contact info**/
        var index = 0;
        for(var property in bio.Contacts){
            $('#topContacts li').eq(index).children().last().text(bio.Contacts[property]);
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
                title: '',
                dates:'',
                description: '',
                images: ''

                },
                {
                title: '',
                dates:'',
                description: '',
                images: ''
                },
                {
                title: '',
                dates: '',
                description: "",
                images: ''
                }],
    display: function(){



    }




}


/* call display function */

bio.display();
work.display();
// project.display();
// education.display();

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




