const locations = {

park: {
title: "📍 Park Plaza / Park Square",

look: [
"Boston Park Plaza",
"Boylston Street",
"Public Garden edge",
"Back Bay skyline"
],

sections: [
{
heading: "Facts",
facts: [
"Opened in 1927 as the Statler Hotel Boston.",
"Designed by George B. Post & Sons.",
"One of the largest hotels in New England when completed.",
"Renamed Boston Park Plaza in 1998.",
"Much of the neighborhood ahead of us did not exist when Boston was founded.",
"Back Bay was filled between 1857 and 1882.",
"Roughly 450 acres of land were created.",
"Fill material arrived by rail from Needham Heights.",
"The project helped address sanitation problems while creating new land for development."
]
}
]
},

garden: {
title: "🌳 Public Garden",

look: [
"Lagoon",
"Footbridge",
"Swan Boats",
"Duckling Statues",
"Ether Monument"
],

sections: [

{
heading: "Public Garden",
facts: [
"Established in 1837.",
"America's first public botanical garden.",
"Separate from Boston Common.",
"Many visitors assume the two parks are one.",
"Occupies land once near the original Back Bay shoreline."
]
},

{
heading: "🦢 Swan Boats",
facts: [
"Operating since 1877.",
"Created by Robert Paget.",
"Still operated by descendants of the Paget family.",
"Inspired by the opera Lohengrin."
]
},

{
heading: "🦆 Make Way for Ducklings",
facts: [
"Based on the 1941 book by Robert McCloskey.",
"Sculpted by Nancy Schön.",
"Installed in 1987.",
"One of Boston's most photographed sculptures.",
"Frequently dressed for holidays and celebrations."
]
},

{
heading: "⚕️ Ether Monument",
facts: [
"Dedicated in 1868.",
"Commemorates the 1846 public demonstration of surgical anesthesia.",
"Connected to Massachusetts General Hospital.",
"One of the few monuments dedicated to a medical breakthrough.",
"Does not mention ether by name because of disputes over credit."
]
}

]
},

arlington: {
title: "⛪ Arlington Street Church",

look: [
"Steeple",
"Facade"
],

sections: [
{
heading: "Facts",
facts: [
"Completed in 1861.",
"Designed by Arthur Gilman.",
"First major public building erected on newly filled Back Bay land.",
"Inspired by St. Martin-in-the-Fields in London.",
"Contains Tiffany windows.",
"Long history of social activism.",
"Rang bells for Boston's first Pride march in 1971."
]
}
]
},

mit: {
title: "🎓 MIT on Boylston Street",

look: [
"Boylston Street corridor",
"Berkeley Street",
"Clarendon Street"
],

sections: [

{
heading: "Location",
facts: [
"Original MIT campus occupied the block between Berkeley Street and Clarendon Street.",
"Original Rogers Building stood near today's 497 Boylston Street area."
]
},

{
heading: "Facts",
facts: [
"Founded in 1861.",
"Founder: William Barton Rogers.",
"Originally located in Boston, not Cambridge.",
"Often called Boston Tech.",
"Original campus stood in Back Bay.",
"Expanded into multiple nearby buildings.",
"Moved to Cambridge in 1916.",
"A plaque commemorates the original location."
]
}

]
},

copley: {
title: "📍 Copley Square",

look: [
"Trinity Church",
"Old South Church",
"Hancock Tower",
"Boston Public Library"
],

sections: [

{
heading: "⛪ Old South Church",
facts: [
"Congregation founded in 1669.",
"Current building completed in 1875.",
"Architects: Charles Amos Cummings and Willard T. Sears.",
"Venetian Gothic architecture.",
"Members included Benjamin Franklin.",
"Members included Samuel Adams.",
"Members included Phillis Wheatley."
]
},

{
heading: "⛪ Trinity Church",
facts: [
"Completed in 1877.",
"Architect: Henry Hobson Richardson.",
"Defining example of Richardsonian Romanesque.",
"Replaced church lost after the Great Boston Fire of 1872.",
"Voted America's most important building by architects in 1885."
]
},

{
heading: "🏙 Hancock Tower",
facts: [
"Completed in 1976.",
"Architect: Henry Cobb.",
"Tallest building in New England.",
"Large glass panels detached after construction.",
"Thousands of windows replaced.",
"Nicknamed 'The World's Tallest Plywood Building.'"
]
},

{
heading: "📚 Boston Public Library",
facts: [
"Opened in 1895.",
"Architect: Charles Follen McKim.",
"Beaux-Arts architecture.",
"First large free municipal library in the United States.",
"Famous inscription: 'Free to All.'"
]
}

]
},

library: {
title: "📚 Boston Public Library",

look: [
"Facade",
"Inscriptions",
"Entrance"
],

sections: [
{
heading: "Facts",
facts: [
"Opened in 1895.",
"Designed by Charles Follen McKim.",
"Beaux-Arts architecture.",
"First large free municipal library in the United States.",
"Famous inscription: 'Free to All.'",
"Often called a palace for the people.",
"Inspired by Renaissance palaces.",
"Bates Hall is one of Boston's great interiors.",
"Contains major art collections.",
"Public access to knowledge was a core mission."
]
}
]
},

prudential: {
title: "🏙 Prudential Center",

look: [
"Prudential Tower",
"Skyline",
"Boylston corridor"
],

sections: [
{
heading: "Facts",
facts: [
"Completed in 1964.",
"Built over former Boston & Albany Railroad yards.",
"Developed by Prudential Insurance.",
"Tallest building in Boston when completed.",
"Redefined the skyline.",
"Major urban renewal era project.",
"Observation deck overlooks the city.",
"Initially controversial.",
"Now a defining Boston landmark."
]
}
]
}

};

function render(id){

const stop = locations[id];

let html = `
<h2>${stop.title}</h2>

<h3>LOOK AT</h3>
<ul>
${stop.look.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

stop.sections.forEach(section => {

html += `
<h3>${section.heading}</h3>

<ul>
${section.facts.map(item => `<li>${item}</li>`).join("")}
</ul>
`;

});

content.innerHTML = html;
}

function showLocation(id){
render(id);
}

function searchFacts(){

const q = search.value.toLowerCase();

if(!q){
showLocation("park");
return;
}

let html = "<h2>Search Results</h2>";

for(const key in locations){

const stop = locations[key];

let matches = [];

if(stop.title.toLowerCase().includes(q)){
matches.push(stop.title);
}

stop.look.forEach(item=>{
if(item.toLowerCase().includes(q)){
matches.push(item);
}
});

stop.sections.forEach(section=>{

if(section.heading.toLowerCase().includes(q)){
matches.push(section.heading);
}

section.facts.forEach(fact=>{
if(fact.toLowerCase().includes(q)){
matches.push(fact);
}
});

});

if(matches.length){

html += `
<h3>${stop.title}</h3>
<ul>
${matches.map(m=>`<li>${m}</li>`).join("")}
</ul>
`;

}
}

content.innerHTML = html;
}

showLocation("park");
