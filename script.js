let feedGridElement = document.getElementById('feed');

let jsonDatabase= [
{
  "profilePic": "https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://cdn.slant.co/36c89dcc-60fc-4638-bfc3-6913dc101461/-/format/jpeg/-/progressive/yes/-/preview/480x480/",
  "nameID":"Sarah",
  "caption":"lol I hate this",
},
{
  "profilePic": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://cdn.slant.co/36c89dcc-60fc-4638-bfc3-6913dc101461/-/format/jpeg/-/progressive/yes/-/preview/480x480/",
  "nameID":"Sarah",
  "caption":"lol I hate this",
},{
  "profilePic": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
},{
  "profilePic": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
},{
  "profilePic": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
},{
  "profilePic": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "name": "Sarah",
  "feedImg1": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "feedImg2": "https://bestprohealth.com/pure-and-natural-weight-loss/img/sarah-ig-header.png",
  "nameID":"Sarah",
  "caption":"lol I hate this",
}
]


for (var i=0; i < jsonDatabase.length; i++) {
  populateFeed(jsonDatabase[i]);
}


function populateFeed(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('feedbox');

  let a = document.createElement("DIV");
  a.classList.add('profile');
  newContentElement.appendChild(a);

  let a1 = document.createElement("IMG");
  a1.classList.add('profilePic');
  a1.src = incomingJSON['profilePic'];
  a.appendChild(a1);

  let a2 = document.createElement("H1");
  a2.classList.add('name');
  a2.innerText = incomingJSON['name'];
  a.appendChild(a2);

  let b= document.createElement("DIV");
  b.classList.add('glide');
  newContentElement.appendChild(b);

  let b1= document.createElement("DIV");
  b1.classList.add('glide__track');
  b.appendChild(b1);

  let b1_1 = document.createElement("UL");
  b1_1.classList.add('glide__slides');
  b1.appendChild(b1_1);


//////
  let b1_2 = document.createElement("LI");
  b1_2.classList.add('glide__slide');
  b1_1.appendChild(b1_2);

  let b1_2_1 = document.createElement("IMG");
  b1_2_1.classList.add('feedImg');
  b1_2_1.src= incomingJSON['feedImg1'];
  b1_2.appendChild(b1_2_1);
  ////////

  let b1_3 = document.createElement("LI");
  b1_3.classList.add('glide__slide');
  b1_1.appendChild(b1_3);

  let b1_3_1 = document.createElement("IMG");
  b1_3_1.classList.add('feedImg');
  b1_3_1.src= incomingJSON['feedImg2'];
  b1_3.appendChild(b1_3_1);
/////////



  //
  // let b = document.createElement("IMG");
  // b.classList.add('feedImg');
  // b.src = incomingJSON['feedImg'];
  // newContentElement.appendChild(b);

  let c = document.createElement("DIV");
  c.classList.add('caption');
  newContentElement.appendChild(c);

  let c1 = document.createElement("H5");
  c1.classList.add('nameID');
  c1.innerText = incomingJSON['nameID'];
  c.appendChild(c1);

  let c2 = document.createElement("P");
  c2.classList.add('caption');
  c2.innerText = incomingJSON['caption'];
  c.appendChild(c2);


  feedGridElement.appendChild(newContentElement);

  // newContentElement.addEventListener('click' , function(myEvent) {
  //   myEvent.currentTarget.style.border = "0.5vmin solid #2f5f41";
  // });

}

new Glide('.glide').mount()
