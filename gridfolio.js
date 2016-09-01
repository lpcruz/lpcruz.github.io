/*
Sample Structure:

gf_content =  [
[ row 1
{ block 1 },
{ block 2 },
{ block 3 }
],
etc.
]

Rows can have 1 - 9 blocks.
*/

var gf_content = [
[
],
[ // row
{ // block
title: "Laurence Cruz",
style: {
backgroundColor: "rgb(28, 179, 124",
fontSize: "25px",
letterSpacing: "1px"
}

},
{ // block
title: "Squarespace \n Engineer" ,
style: {
backgroundColor: "#414141",
fontSize: "25px",
letterSpacing: "1px"
},
link: "https://www.squarespace.com",
keywords: ["qa", "node", "javascript", "nightwatch"]
},

{ // block
title: "ScriptEd Volunteer",
style: {
backgroundColor: "#EF5330",
fontSize: "25px",
letterSpacing: "1px"
},
link: "https://scripted.org/volunteer",
keywords: ["frontend", "html", "css", "javascript", "jQuery", "bootstrap"]
},

{ // block
title: "Holy Cross 2013",
link: "http://holycross.edu",
style: {
backgroundColor: "#63257B",
fontSize: "25px",
letterSpacing: "1px"
},
keywords: ["english", "digital media", "education", "social justice"]
}
],

[  // row
{ // block
title: "Github",
link: "https://github.com/lpcruz",
style: {
backgroundColor: "#3276B1",
fontSize: "25px",
letterSpacing: "1px"
},
keywords: ["projects", "node", "javascript", "python"]
},

{ // block
title: "TBD",
link: "/#",
style: {
backgroundColor: "#AAAAAA",
fontSize: "25px",
letterSpacing: "1px"
},
keywords: ["skill", "thing", "language", "library"]
},

{ // block
title: "TBD",
link: "/#",
style: {
backgroundColor: "#AAAAAA",
fontSize: "25px",
letterSpacing: "1px"
},
keywords: ["skill", "thing", "language", "library"]
},

]
];


var gf_styles = {
squareMode: true,
innerBlock: {
fontFamily: "Montserrat",
color: "#fff",
padding: "10px"
},

blockTitle: {
margin: "0 auto",
textTransform: "uppercase"
},

keyword: {
fontSize: "11px",
backgroundColor: "rgba(0,0,0,0.7)",
padding: "2px 5px",
margin: "2px"
},

keywords: {
fontSize: "10px",
marginTop: "-50px"
}
};
