//rip to using fs to do it in a cooler way but node is acting like garbage and the other ways of running the modules here are dumb so I won't bother for now
//Also can't seem to import the data without require (there may be another way but idk) so here's a text dump

SYLLABI_DATA = {
    "CS-UY": {
        "1114": "Introduction to Programming and Problem Solving",
        "1122": "Problem Solving and Programming I",
        "1133": "Engineering Problem Solving and Programming",
        "1134": "Data Structures and Algorithms",
        "2124": "Object Oriented Programming",
        "2163": "Introduction to Programming in C",
        "2214": "Computer Architecture and Organization",
        "2204": "Digital Logic and State Design",
        "2413": "Design and Analysis of Algorithms", 
        "3083": "Introduction to Databases",
        "3113": "Introduction to Game Programming",
        "3224": "Introduction to Operating Systems",
        "3254": "Introduction to Parallel and Distributed Systems",
        "3923": "Computer Security",
        "3933": "Network Security",
        "4533": "Interactive Computer Graphics", 
        "4793": "Computer Networking"
    }
}

function load()
{
    let CS_SYLLABI = SYLLABI_DATA["CS-UY"];
    for (let classCode in CS_SYLLABI) {
        document.getElementById("links").innerHTML += ("<h3><a href=../syllabi/CS-UY/" + classCode + ".pdf>" 
        + CS_SYLLABI[classCode] + " (" + classCode + ")</a></h3>");
    }
}

window.onload = load;
