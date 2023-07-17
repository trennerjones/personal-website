var seconds = 5;
var madlibs = {
  'a': ['hello', 'hey', 'howdy', 'hi', 'welcome', 'greetings']
};
var madlibA = document.getElementById('a');

function rand(x) {
  return Math.floor(Math.random() * x);
}

function change() {
  var txtA = madlibs['a'][rand(madlibs['a'].length)];
  madlibA.innerHTML = txtA;
  madlibA.classList.remove('flip');
}

function reveal() {
  madlibA.classList.add('flip');
  setTimeout(change, 100);
}
setInterval(reveal, seconds * 1000);