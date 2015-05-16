(function ($) {
    "use strict";

    var source = $("#cv-template").html(),
        template = Handlebars.compile(source);

    var context = {
        entry: [
            {
                title: "Personal Info", content: "Full name:                MLADENOV, VALENTIN SVETOSLAVOV\r\n" +
                                                "Resident Address:\t27 SELIOLU STREET, VARNA, 9000, BULGARIA\r\n" +
                                                "Telephone:\t\t+359887880925, +359877398909\r\n" +
                                                "Date of Birth:\t\t22.10.1978\r\n\r\n" +
                                                "Mobility:\t\t\tClean Driving Licence (10 years)\r\n\r\n" +
                                                "E-mail:\t\t\thudsonvsm@gmail.com\r\n" +
                                                "Aditional Site:\t\tvalentinmladenov.wix.com/home\r\n" +
                                                "Git:\t\t\t\tgithub.com/hudsonvsm\r\n",
                icon: "profile"
            },
            {
                title: "Education Summary", content: "Period:\t\t\t1993 - 1997\r\n" +
                                                    "School:\t\t\tTechnical School of Electronics - Varna,\r\n" +
                                                    "Major Subjects:        Electronics, English, Computers\r\n\r\n" +
                                                    "Period:\t\t\t2011 - 2012\r\n" +
                                                    "School:\t\t\tInformation Services AD - Varna\r\n" +
                                                    '\t\t\t\t"Centre for Professional Training"\r\n' +
                                                    "Professional aim:\tGraphic Designer\r\n\r\n" +
                                                    "Period:\t\t\t2013 - I'm to graduate in 2015\r\n" +
                                                    'School:\t\t\t"Telerik Software Academy" - Sofia,\r\n' +
                                                    "Major Subjects:        C#, HTML, SQL, CSS, JS, OOP\r\n" +
                                                    "Professional aim:\tC# and Front-End developer\r\n\r\n" +
                                                    "Period:\t\t\t2014 - 2015\r\n" +
                                                    "School:\t\t\tInformation Services AD - Varna,\r\n" +
                                                    '\t\t\t\t"Info-Start Learning System"\r\n' +
                                                    "Professional aim:\tNetwork and System Administrator",
                icon: "medal"
            },
            {
                title: "Work Experience", content: "Period:\t\t\t2012 - to date\r\n" +
                                                    "Company:                Freelance\r\n" +
                                                    "Business sector:\tGraphic Designer, C# and Front-End Developer\r\n" +
                                                    "Address:\t\t\t27 Seliolu street, Varna\r\n\r\n" +
                                                    "Period:\t\t\t2008 - 2014\r\n" +
                                                    'Company:                "Ataro clima" AD - Varna\r\n' +
                                                    "Job title: \t\t\tFitter Heating, Climatization, Ventilation (HCV)\r\n" +
                                                    "Position level:\t\tFitter brigade leader oversee 4 workers.\r\n" +
                                                    "Business sector:\tHeating, Air conditioning, Ventilation\r\n" +
                                                    "Address:\t\t\t272 Vasil Levski street, Plovdiv\r\n\r\n" +
                                                    "Period:\t\t\t2006 - 2008\r\n" +
                                                    'Company:                "Investbank" AD - Varna\r\n' +
                                                    "Job title:\t\t\tSecurity guard\r\n" +
                                                    "Position level:\t\tArmed Security\r\n" +
                                                    "Business sector:\tSecurity\r\n" +
                                                    "Address:\t\t\t7 Luben Karavelov street, Varna\r\n\r\n" +
                                                    "Period:\t\t\t2005 - 2006\r\n" +
                                                    'Company:                "Eastern Gas Company" AD - Varna (EGC)\r\n' +
                                                    "Job title:\t\t\tGas Engineer Manager\r\n" +
                                                    "Position level:\t\tBuilding Gas Installations and oversee 5 workers\r\n" +
                                                    "Business sector:\tInstallations\r\n" +
                                                    "Address:\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:\t\t\t2004 - 2005\r\n" +
                                                    'Company:                "Eastern Gas Company" AD - Varna (EGC)\r\n' +
                                                    "Job title:\t\t\tGas Engineer\r\n" +
                                                    "Position level:\t\tBuilding Gas Installations\r\n" +
                                                    "Business sector:\tInstallations\r\n" +
                                                    "Address:\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:\t\t\t2003 - 2004\r\n" +
                                                    'Company:                "Eastern Gas Company" AD - Varna (EGC)\r\n' +
                                                    "Job title:\t\t\tOperative manager\r\n" +
                                                    "Position level:\t\tManger middle class oversee 15 workers.\r\n" +
                                                    "Business sector:\tSales\r\n" +
                                                    "Address:\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:\t\t\t2002 - 2003\r\n" +
                                                    'Company:                "Eastern Gas Company" AD - Varna (EGC)\r\n' +
                                                    "Job title:\t\t\tDispatcher\r\n" +
                                                    "Position level:\t\tWorking with special EGC software\r\n" +
                                                    "Business sector:\tSales\r\n" +
                                                    "Address:\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:\t\t\t1997 - 1998\r\n" +
                                                    "Bulgarian Army:\tElectronic Engineer in the Intercommunication Service.\r\n",
                icon: "dollar"
            },
            {
                title: "Skills", content: "Own PC:\t\t\tDesktop, Laptop\r\n" +
                                        "Computer skills:\tMS Windows, MS Word, MS Excel, MS Power Point\r\n" +
                                        "Design skills:\t\tAdobe Photoshop, Adobe Illustrator, Corel Draw\r\n\r\n" +
                                        "Developer skills:\tC#, OOP, JS, HTML, CSS, High-Quality Programming Code\r\n" +
                                        "\t\t\t\tSQL, PHP, EntityFramework\r\n\r\n" +
                                        "Projects:\t\t\thttp://www.itcomfort.bg/index.html\r\n\r\n" +
                                        "Networking skills:\tMS Server IIS, Apache, OSI and IP/TCP\r\n\r\n" +
                                        "Language:                English\r\n" +
                                        "Reading Level:\t\tVery good\r\n" +
                                        "Writing level:\t\tGood\r\n" +
                                        "Speaking level:\t\tVery good\r\n" +
                                        "Experience:\t\t7 years\r\n\r\n" +
                                        "Driving license:         Yes",
                icon: "star-full"
            },
            {
                title: "Hobbies", content: "Marital Arts:\t\tAjKiDo\r\n" +
                                            "\t\t\t\tJudo\r\n\r\n" +
                                            "Logical Games:         Rubik's Cube\r\n" +
                                            "\t\t\t\tChess\r\n" +
                                            "\t\t\t\tBelote\r\n\r\n" +
                                            "Out Door:\t\t\tHiking\r\n" +
                                            "\t\t\t\tVolleyball\r\n",
                icon: "heart"
            }
        ]
    };

    $("#cvData").html(template(context));
})($);