
const pages={
park:{title:'Park Plaza',cards:[{title:'Park Plaza',items:['Opened 1927','Originally Statler Hotel','Back Bay built on filled land']}]} ,
garden:{title:'Public Garden',cards:[{title:'Public Garden',items:['Established 1837','First public botanical garden in America']},{title:'Make Way for Ducklings',items:['Book by Robert McCloskey','Statues installed 1987']}]},
arlington:{title:'Arlington Street Church',cards:[{title:'Arlington Street Church',items:['Completed 1861','Arthur Gilman architect']}]},
mit:{title:'MIT',cards:[{title:'Location',items:['Original campus between Berkeley and Clarendon']},{title:'MIT Facts',items:['Founded 1861','Moved to Cambridge in 1916']}]},
copley:{title:'Copley Square',cards:[{title:'Trinity Church',items:['Completed 1877','Henry Hobson Richardson']},{title:'Boston Public Library',items:['Opened 1895','Free to All']}]} };

function renderPage(page){
let html='<h2>'+page.title+'</h2>';
page.cards.forEach(card=>{
html += '<div class="card"><h3>'+card.title+'</h3><ul>'+card.items.map(i=>'<li>'+i+'</li>').join('')+'</ul></div>';
});
document.getElementById('content').innerHTML=html;
}

function showPage(id){ renderPage(pages[id]); }

function searchCards(){
const q=document.getElementById('search').value.toLowerCase();
if(!q){showPage('park');return;}
let html='<h2>Search Results</h2>';
for(const k in pages){
pages[k].cards.forEach(card=>{
const hits=card.items.filter(i=>i.toLowerCase().includes(q));
if(card.title.toLowerCase().includes(q)||hits.length){
html+='<div class="card"><h3>'+card.title+'</h3><ul>'+hits.map(h=>'<li>'+h+'</li>').join('')+'</ul></div>';
}
});
}
document.getElementById('content').innerHTML=html;
}

showPage('park');
