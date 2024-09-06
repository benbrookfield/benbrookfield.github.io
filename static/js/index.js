const projectsButton = document.getElementById("projectsButton");
const workButton = document.getElementById("workButton");
const educationButton = document.getElementById("educationButton");

// This function loads all info for the projects section of my website
projectsButton.onclick = function(){
    // Clear the bottom section by removing all items that are in the "bottom" class
    document.querySelectorAll(".bottom").forEach(element => element.remove());

    // Create all entities for this section and add them to "bottom" class
    const heading4 = document.createElement("h2");
    heading4.classList.add("Bottom");
    const link4 = document.createElement("a");
    link4.classList.add("bottom");
    const link5 = document.createElement("a");
    link5.classList.add("bottom");
    const para5 = document.createElement("p");
    para5.classList.add("bottom");
    const para6 = document.createElement("p");
    para6.classList.add("bottom");
    const line3 = document.createElement("hr");
    line3.classList.add("bottom");

    const heading3 = document.createElement("h2");
    heading3.classList.add("bottom");
    const link3 = document.createElement("a");
    link3.classList.add("bottom");
    const para4 = document.createElement("p");
    para4.classList.add("bottom");
    const line2 = document.createElement("hr");
    line2.classList.add("bottom");

    const heading1 = document.createElement("h2");
    heading1.classList.add("bottom");
    const link1 = document.createElement("a");
    link1.classList.add("bottom");
    link1.id = "link1"
    const para1 = document.createElement("p");
    para1.classList.add("bottom");
    const para2 = document.createElement("p");
    para2.classList.add("bottom");
    const line1 = document.createElement("hr");
    line1.classList.add("bottom");

    const heading2 = document.createElement("h2");
    heading2.classList.add("bottom");
    const link2 = document.createElement("a");
    link2.classList.add("bottom");
    const para3 = document.createElement("p");
    para3.classList.add("bottom");

    heading4.textContent = "PlaygrounDB - Online SQL practice tool"
    document.body.appendChild(heading4);

    link4.textContent = "Try PlaygrounDB"
    link4.href = "http://www.benbrookfield.me/playgroundDB"
    document.body.appendChild(link4);

    const lbreak = document.createElement("br");
    lbreak.classList.add("bottom")
    document.body.appendChild(lbreak);

    link5.textContent = "Github link"
    link5.href = "https://github.com/benbrookfield/benbrookfield.github.io"
    document.body.appendChild(link5);

    para5.textContent = "PlaygrounDB is my most recent and favourite project. Built with pythons Flask framework, HTML," +
        ' CSS, and SQLite, PlaygrounDB is a full stack web application which allows users to query a sample SQLite ' +
        'database and presents the query results in a table on the website for you. It is designed to help people learn ' +
        'SQL without needing to download a database or any software.'
    document.body.appendChild(para5);

    para6.textContent = "Building playgrounDB felt like a natural progression from my previous projects, which had used " +
        "HTML, CSS, Python and SQLite but never combined them all into a single project. It also allowed me to build " +
        "upon this webpage, which previously only contained HTML, CSS and Javascript files. Adding in a backend was really " +
        "interesting and fun. I am really proud of this project and my favourite thing about it is definitely being able " +
        "to go onto the website anywhere I want and show it off to friends and family!"
    document.body.appendChild(para6);
    document.body.appendChild(line3);


    heading3.textContent = 'Folder cleanup tool'
    document.body.appendChild(heading3);

    link3.textContent = 'Github link'
    link3.href = "https://github.com/benbrookfield/File_cleanup_tool"
    document.body.appendChild(link3);

    para4.textContent = 'During my first-year christmas break I spent a weekend making a file cleanup tool. This tool goes through' +
        ' a folder on a computer (I have it set to my own downloads folder in the code) and iterates through all loose files. It ' +
        'checks the file type of all files and moves them to a new folder based on their file format. This project was ' +
        'super easy and fun, and is also one I actually use when my downloads folder is too cluttered!'
    document.body.appendChild(para4);
    document.body.appendChild(line2);

    heading2.textContent = 'Portfolio Website'
    document.body.appendChild(heading2);

    link2.textContent = 'Github link'
    link2.href = "https://github.com/benbrookfield/portfolio-website"
    document.body.appendChild(link2);

    para3.textContent = 'My second notable project is this website! Although the website is quite basic, creating it was' +
        ' quite a challenge as I had no previous experience with HTML, CSS, or Javascript prior to making this and had' +
        ' to teach myself how to use them with the help of youtube, W3Schools and Stack Overflow. I have found the ' +
        ' development process of this website very fun, and really enjoyed learning the new languages.'
    document.body.appendChild(para3);
    document.body.appendChild(line1);

    // Add text and any other neccesarry info e.g. href links to all entities, then append them.
    heading1.textContent = "Fitassist - A Level Coursework"
    document.body.appendChild(heading1);

    link1.textContent = "Github link"
    link1.href = "https://github.com/benbrookfield/benbrookfield.github.io"
    document.body.appendChild(link1);

    para1.innerText = 'Fitassist is a health and fitness app which I made for my A Level Computer Science coursework.' +
        ' The app allows users to create a profile, choose from a range of personalised nutrition plans' +
        ' based on their weight loss/gain goals and track their calorie intake and workouts. All user information is' +
        ' stored in a multi-table relational database. Calorie intake data is also plotted onto a bar chart to help' +
        ' users better understand their eating habits.'
    document.body.appendChild(para1);

    para2.textContent = 'The project was awarded level 3/3 for programming technique thanks to the use of' +
        ' aggregate SQL queries, advanced algorithms (e.g. merge sorts), multi-table databases, oop,' +
        ' and much more. This project was a milestone in my programming journey as it was my first' +
        ' major project. I had lots of fun making it and was felt a great sense of pride once it was completed, which' +
        ' really motivated me to expand my skills so I could make more impressive projects in the future.'
    document.body.appendChild(para2);
}

/*This function loads the work experience section after the work experience button is pressed.*/
workButton.onclick = function(){
    // Clear bottom section
    document.querySelectorAll(".bottom").forEach(element => element.remove());

    // create all entities, add neccesary data, and append to the web page.
    const heading1 = document.createElement("h2");
    heading1.classList.add("bottom");
    heading1.textContent = 'The Mile Castle, Newcastle';
    document.body.appendChild(heading1);

    const date1 = document.createElement("h3");
    date1.classList.add("bottom");
    date1.textContent = 'Bartender, November 2023 - Present';
    document.body.appendChild(date1);

    const para1 = document.createElement("p");
    para1.classList.add("bottom");
    para1.textContent = 'I currently work behind the bar at the biggest and busiest pub in Newcastle, ensuring the bar' +
        ' is clean and all customers are served in a timely fashion and to a very high standard.'
    document.body.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("bottom");
    para2.textContent = 'This job has allowed me to build on my communication skills as communication with my colleagues is' +
        ' vital to make sure that we work efficiently and stay on top of all necessary tasks. The bar often gets' +
        ' extremely busy, so this job has really helped learn to work quickly and efficiently.';
    document.body.appendChild(para2);

    const line1 = document.createElement("hr");
    line1.classList.add("bottom");
    document.body.appendChild(line1);

    const heading2 = document.createElement("h2");
    heading2.classList.add("bottom");
    heading2.textContent = 'Respect League Manchester';
    document.body.appendChild(heading2);

    const date2 = document.createElement("h3");
    date2.classList.add("bottom");
    date2.textContent = 'Football Referee, September 2020 - July 2023';
    document.body.appendChild(date2);

    const para3 = document.createElement("p");
    para3.classList.add("bottom");
    para3.textContent = 'I worked as a football referee for 3 years and officiated games for children aged 8 up to 15' +
        " years old. I really enjoyed this job, not only because I'm a football fan, but also because of the social" +
        " aspect. I was able to create fantastic relationships with players and coaches who I saw every week, as well as" +
        " the other referees at my venue."
    document.body.appendChild(para3);

    const para4 = document.createElement("p");
    para4.classList.add("bottom");
    para4.textContent = 'This job really built on my social skills and confidence. Good communication with players and' +
        ' coaches is vital so that they understand what is going on and what decisions I have made. My quick thinking and' +
        ' decisions making also improved alot thanks to being a referee. I had to process what was going on and make' +
        ' decisions almost instantly to avoid confusion among players and coaches.';
    document.body.appendChild(para4);

    const line2 = document.createElement("hr");
    line2.classList.add("bottom");
    document.body.appendChild(line2);

    const heading3 = document.createElement("h2");
    heading3.classList.add("bottom");
    heading3.textContent = 'PC Centre Northwest, Manchester';
    document.body.appendChild(heading3);

    const date3 = document.createElement("h3");
    date3.classList.add("bottom");
    date3.textContent = 'Technician Intern, July 2022';
    document.body.appendChild(date3);

    const para5 = document.createElement("p");
    para5.classList.add("bottom");
    para5.textContent = 'I did 1 week of work experience as a technician at my local computer shop. On this job I was' +
        ' responsible for diagnosing and repairing customers computers, and ensuring that computers which were about to' +
        ' be sold were ready with Windows and drivers installed. I contributed to a fun and healthy working environment' +
        ' in the office with my colleagues and also made sure we were all up to date on projects which we worked on' +
        ' together. I also oversaw the packaging and delivery of several high-end PCs and made sure they were' +
        ' transported safely.';
    document.body.appendChild(para5);
}

// This function adds all info for the education section
educationButton.onclick = function() {
    // Clear bottom section
    document.querySelectorAll(".bottom").forEach(element => element.remove());

    const heading1 = document.createElement("h2");
    heading1.classList.add("bottom");
    heading1.textContent = 'Newcastle University';
    document.body.appendChild(heading1);

    const date1 = document.createElement("h3");
    date1.classList.add("bottom");
    date1.textContent = '2023 - Present';
    document.body.appendChild(date1);

    const para1 = document.createElement("p");
    para1.classList.add("bottom");
    para1.textContent = 'I am currently in my first year of a bachelors Computer Science degree at Newcastle University.' +
        ' So far, I am really enjoying the course and have been able to learn alot from it.';
    document.body.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("bottom");
    para2.textContent = "First year modules include: Programming Portfolio (done in Python and Java), Foundations of" +
        " Data Science, Computer Systems Design and Architecture, Fundamentals of Computing."

    const line1 = document.createElement("hr");
    line1.classList.add("bottom");
    document.body.appendChild(line1);

    const heading2 = document.createElement("h2");
    heading2.classList.add("bottom");
    heading2.textContent = "Parrs Wood Sixth Form"
    document.body.appendChild(heading2)

    const date2 = document.createElement("h3");
    date2.classList.add("bottom");
    date2.textContent = '2021-2023';
    document.body.appendChild(date2);

    const para3 = document.createElement("p");
    para3.classList.add("bottom");
    para3.textContent = 'I did my A levels at Parrs Wood Sixth Form in Manchester and studied Computer Science, Economics,' +
        ' and History. I got an A in all 3 subjects.';
    document.body.appendChild(para3);

    const line2 = document.createElement("hr");
    line2.classList.add("bottom");
    document.body.appendChild(line2);

    const heading3 = document.createElement("h2");
    heading3.classList.add("bottom");
    heading3.textContent = "Parrs Wood High School"
    document.body.appendChild(heading3)

    const date3 = document.createElement("h3");
    date3.classList.add("bottom");
    date3.textContent = '2016-2021';
    document.body.appendChild(date3);

    const para4 = document.createElement("p");
    para4.classList.add("bottom");
    para4.textContent = 'I attended high school at Parrs Wood High School in Manchester and achieved the following GCSE' +
        ' grades:';
    document.body.appendChild(para4);

    const GCSElist = document.createElement("ul");
    GCSElist.classList.add("bottom", "parent");
    GCSElist.id = "gcses";
    document.body.appendChild(GCSElist);

    const Maths = document.createElement("li");
    Maths.textContent = "Maths: 7";
    document.getElementById("gcses").appendChild(Maths);

    const Englit = document.createElement("li");
    Englit.textContent = "English Literature: 8";
    document.getElementById("gcses").appendChild(Englit);

    const Englang = document.createElement("li");
    Englang.textContent = "English Language: 6";
    document.getElementById("gcses").appendChild(Englang);

    const Compsci = document.createElement("li");
    Compsci.textContent = "Computer Science: 8";
    document.getElementById("gcses").appendChild(Compsci);

    const Drama = document.createElement("li");
    Drama.textContent = "Drama: 8";
    document.getElementById("gcses").appendChild(Drama);

    const Bio = document.createElement("li");
    Bio.textContent = "Biology: 7";
    document.getElementById("gcses").appendChild(Bio)

    const Chem = document.createElement("li");
    Chem.textContent = "Chemistry: 7";
    document.getElementById("gcses").appendChild(Chem);

    const History = document.createElement("li");
    History.textContent = "History: 7";
    document.getElementById("gcses").appendChild(History);

    const Geo = document.createElement("li");
    Geo.textContent = "Geography: 7";
    document.getElementById("gcses").appendChild(Geo);

    const Physics = document.createElement("li");
    Physics.textContent = "Physics: 6";
    document.getElementById("gcses").appendChild(Physics);
}