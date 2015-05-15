(function ($) {
    "use strict";

    var source = $("#cv-template").html(),
        template = Handlebars.compile(source);

    var context = {
        entry: [
            {
                title: "Personal Info", content: "Full name:\t\t\t\t\t\t\t\tMLADENOV, VALENTIN SVETOSLAVOV\r\n" +
                                                "Resident Address:\t\t\t\t\t\t\t27 SELIOLU STREET, VARNA, 9000, BULGARIA\r\n" +
                                                "Telephone:\t\t\t\t\t\t\t\t+359887880925, +359877398909\r\n" +
                                                "Date of Birth:\t\t\t\t\t\t\t\t22.10.1978\r\n\r\n" +
                                                "Mobility:\t\t\t\t\t\t\t\t\tClean Driving Licence (10 years)\r\n\r\n" +
                                                "E-mail:\t\t\t\t\t\t\t\t\thudsonvsm@gmail.com\r\n" +
                                                "Aditional Site:\t\t\t\t\t\t\t\tvalentinmladenov.wix.com/home\r\n" +
                                                "Git:\t\t\t\t\t\t\t\t\t\tgithub.com/hudsonvsm\r\n" +
                                                "Preferred Contact Methods:\t\t\t\t\tMobile phone, E-mail\r\n"
            },
            {
                title: "Education Summary", content: "Period:				\t\t\t\t\t1993 – 1997\r\n" +
                                                    "School:				\t\t\t\t\tTechnical School of Electronics – Varna,\r\n" +
                                                    "Major Subjects: 		\t\t\t\t\tElectronics, English, Computers\r\n\r\n" +
                                                    "Period:				\t\t\t\t\t2011 – 2012\r\n" +
                                                    "School:				\t\t\t\t\tInformation Services AD– Varna\r\n" +
                                                    "\t\t\t\t\t\t\t\t\t\t“Centre for Professional Training”\r\n" +
                                                    "Professional aim:		\t\t\t\t\tGraphic Designer\r\n\r\n" +
                                                    "Period:				\t\t\t\t\t2013 – I’m to graduate in 2015\r\n" +
                                                    "School:				\t\t\t\t\t“Telerik Software Academy” -Sofia,\r\n" +
                                                    "Major Subjects:		\t\t\t\t\tC#, HTML, SQL, CSS, JS, OOP\r\n" +
                                                    "Professional aim:		\t\t\t\t\tC# and Front-End developer\r\n\r\n" +
                                                    "Period:				\t\t\t\t\t2014 – 2015\r\n" +
                                                    "School:				\t\t\t\t\tInformation Services AD– Varna,\r\n" +
                                                    "\t\t\t\t\t\t\t\t\t\t“Info-Start Learning System”\r\n" +
                                                    "Professional aim:		\t\t\t\t\tNetwork and System Administrator"
            },
            {
                title: "Work Experience", content: "Period:			\t\t\t\t\t\t2012 – to date\r\n" +
                                                    "Company:		 	\t\t\t\t\tFreelance\r\n" +
                                                    "Business sector: 		\t\t\t\t\tGraphic Designer, C# and Front-End Developer\r\n" +
                                                    "Address: 			\t\t\t\t\t\t27 Seliolu street, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2008 – 2014\r\n" +
                                                    "Company:		 	\t\t\t\t\t“Ataro clima” AD – Varna\r\n" +
                                                    "Job title: 		\t\t\t\t\t\t\tFitter Heating, Climatization, Ventilation (HCV)\r\n" +
                                                    "Position level: 	\t\t\t\t\t\t\tFitter brigade leader oversee 4 workers.\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Heating, Air conditioning, Ventilation\r\n" +
                                                    "Address: 			\t\t\t\t\t\t272 Vasil Levski street, Plovdiv\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2006 – 2008\r\n" +
                                                    "Company:		 	\t\t\t\t\t“Investbank” AD – Varna\r\n" +
                                                    "Job title: 		\t\t\t\t\t\t\tSecurity guard\r\n" +
                                                    "Position level: 	\t\t\t\t\t\t\tArmed Security\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Security\r\n" +
                                                    "Address: 			\t\t\t\t\t\t7 Luben Karavelov street, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2005 – 2006\r\n" +
                                                    "Company:		 	\t\t\t\t\t“Eastern Gas Company” AD – Varna (EGC)\r\n" +
                                                    "Job title: 		\t\t\t\t\t\t\tGas Engineer Manager\r\n" +
                                                    "Position level: 	\t\t\t\t\t\t\tBuilding Gas Installations and oversee 5 workers\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Installations\r\n" +
                                                    "Address: 			\t\t\t\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2004 – 2005\r\n" +
                                                    "Company:		 	\t\t\t\t\t“Eastern Gas Company” AD – Varna (EGC)\r\n" +
                                                    "Job title: 		\t\t\t\t\t\t	Gas Engineer\r\n" +
                                                    "Position level: 	\t\t\t\t\t\t	Building Gas Installations\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Installations\r\n" +
                                                    "Address: 			\t\t\t\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2003 – 2004\r\n" +
                                                    "Company:			\t\t\t\t\t“Eastern Gas Company” AD – Varna (EGC)\r\n" +
                                                    "Job title: 		\t\t\t\t\t\t	Operative manager\r\n" +
                                                    "Position level: 	\t\t\t\t\t\t	Manger middle class oversee 15 workers.\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Sales\r\n" +
                                                    "Address: 			\t\t\t\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t2002 – 2003\r\n" +
                                                    "Company:			\t\t\t\t\t“Eastern Gas Company” AD – Varna (EGC)\r\n" +
                                                    "Job title:			\t\t\t\t\t\tDispatcher\r\n" +
                                                    "Position level:	\t\t\t\t\t\t	Working with special EGC software\r\n" +
                                                    "Business sector: 	\t\t\t\t\t	Sales\r\n" +
                                                    "Address: 			\t\t\t\t\t\t61 Chajka district, Varna\r\n\r\n" +
                                                    "Period:			\t\t\t\t\t\t1997 – 1998\r\n" +
                                                    "Bulgarian Army:	\t\t\t\t\t	Electronic Engineer in the Intercommunication Service.\r\n"
            },
            {
                title: "Skills", content: "Own PC:			\t\t\t\t\t\tDesktop, Laptop\r\n" +
                                        "Computer skills: 	\t\t\t\t\t\tMS Windows, MS Word, MS Excel, MS Power Point\r\n" +
                                        "Graphic Design skills:	\t\t\t\t\tAdobe Photoshop, Adobe Illustrator, Corel Draw\r\n\r\n" +
                                        "Developer skills:		\t\t\t\t\tC#, OOP, JS, HTML, CSS, High-Quality Programming Code\r\n" +
                                        "\t\t\t\t\t\t\t\t\t\tSQL, PHP, EntityFramework\r\n\r\n" +
                                        "Projects:			\t\t\t\t\t\thttp://www.itcomfort.bg/index.html\r\n\r\n" +
                                        "Networking skills:		\t\t\t\t\tMS Server IIS, Apache, OSI and IP/TCP\r\n\r\n" +
                                        "Language: 			\t\t\t\t\tEnglish\r\n" +
                                        "Reading Level: 		\t\t\t\t\tVery good\r\n" +
                                        "Writing level: 		\t\t\t\t\t\tGood\r\n" +
                                        "Speaking level: 			\t\t\t\tVery good\r\n" +
                                        "Experience: 			\t\t\t\t\t7 years\r\n\r\n" +
                                        "Driving license:			\t\t\t\tYes"
            },
            {
                title: "Hobbies", content: "Marital Arts:			\t\t\t\t\tAjKiDo\r\n" +
                                            "\t\t\t\t\t\t\t\t\t\tJudo\r\n\r\n" +
                                            "Logical Games:\t\t\t\t\t\t\tRubik's Cube\r\n" +
                                            "\t\t\t\t\t\t\t\t\t\tChess\r\n" +
                                            "\t\t\t\t\t\t\t\t\t\tBelote\r\n\r\n" +
                                            "Out Door:\t\t\t\t\t\t\t\t\tHiking\r\n" +
                                            "\t\t\t\t\t\t\t\t\t\tVolleyball\r\n"
            }
        ]
    };

    $("#cvData").html(template(context));
})($);