var client = io.connect('http://localhost:4000');

var temp = null;
var current = null;
var record = [];
var keyboard1 = document.querySelectorAll(".block1");
var keyboard2 = document.querySelectorAll(".block2");

var numbers;
var started = false;
var clietNameList;



//List of functions used

function requestNum(e) {

	var ID = e.target.id.toString(); //ID is a string
	e.stopPropagation();

	if( record.indexOf(ID) > -1 ){
		console.log('Already here')
		return;
	} else if (temp!=null && current!=null){
		console.log("You are clicking too fast!")
		return;
	}else{

		var i = ID.match(/\d+/)[0]; //extract number from id tag e.g. f1->1, f7->7

		if(temp==null){

			temp = numbers[i-1];
			console.log(temp);
			// var htmlStr = "<img src='"+i+".jpg'>";
			document.getElementById(ID).innerHTML = temp.number;
			requestImage(i);
			// document.getElementById(ID).innerHTML = "<img src='"+i+".jpg'>";

		} else {

			current = numbers[i-1];
			console.log(current)

			if( temp.number == current.number && temp.id!=current.id ){
				document.getElementById(ID).innerHTML = current.number;
				record.push(temp.id);
				record.push(current.id);
				client.emit("clientKeyboardUpdate", temp.id, current.id);

				if(record.length==16){
					console.log("Completed");
					client.emit('endgame');
					return
				}else{
					temp = current = null;
					return
				}

			} else {

				document.getElementById(ID).innerHTML = current.number;
				requestImage(i);
				setTimeout(function(){ 
					reset(temp);
					reset(current);
					temp = current = null;
				}, 500)
				return
			}
		}
	}
}

function reset(g){
	document.getElementById(g.id).innerHTML = null;
}

function resetAll(){
	for(i=0; i<numbers.length;i++){
		try { document.getElementById( numbers[i].id ).innerHTML = null; } //Object.keys( io.nsps['/'].adapter.rooms[client.RoomName] ).length
		catch(error){
			if( error.name === 'TypeError' ){}
		}
	}
}

function createPlayerNode(id, name, winStreak) {
    var frag = document.createDocumentFragment();
    var temp = document.createElement('ul');
	var htmlStr = '<ul id='+id+'><p1>'+name+'</br></p1>' +
				'<p2>Winning Streak: '+winStreak+'</br></p2>';
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
	}
	return frag;
}

function deletePlayerNode(id, name) {
    var frag = document.createDocumentFragment();
    var temp = document.createElement('ul');
	var htmlStr = '<ul id='+id+'><p1>'+name+'</br></p1>' +
				'<p2>Winning Streak: '+winStreak+'</br></p2>';
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
	}
	return frag;
}

function askForName() {
    return prompt("Please enter your name", "");
}

function requestImage(i){
	var _img = document.getElementById('fi' + i);
	// var newImg = new Image;
	// newImg.onload = function() {
	//     _img.src = this.src;
	// }
	// newImg.src = i+'.jpg';
	console.log(i+'.jpg');
	_img.src = i+'.jpg';
}


//events listening and emitting
client.on('start', function(content){
	started = true;
	numbers = content;
	console.log("numbers received")
	for(i in numbers){ console.log(numbers[i]); }
	// keyboard = document.querySelectorAll(".block1"); //select all block class
	for(i=0; i<keyboard1.length;i++){
		keyboard1[i].addEventListener("click", requestNum, false); //iterate through each block to add a click listener
	}
})

client.on('pause', function(RoomName){
	if(started == true){
		resetAll();
		for(i=0; i<keyboard1.length;i++){
			keyboard1[i].removeEventListener("click"); //iterate through each block to add a click listener
		}
		started = false;
	}
	console.log( RoomName +"'s game is paused. " + client.id + " is waiting.");
	console.log( "Requesting pairing...")
	client.emit('PairMe');
})

client.on('end', function(RoomName){
	if(started == true){
		resetAll();
		for(i=0; i<keyboard.length;i++){
			keyboard1[i].removeEventListener("click"); //iterate through each block to add a click listener
		}
		started = false;
	}
	console.log( RoomName + " is ending game!");
	client.emit('endgame');
})

client.on('serverKeyboardUpdate', function(ma, mb){
	document.getElementById(ma).innerHTML = '@';
	document.getElementById(mb).innerHTML = '@';
})

client.on("ServerUpdateNameList", function(idlist, namelist, string){
	if(string == 'add'){
		for(i=0; i<idlist.length;i++) {
			var frag = createPlayerNode(idlist[i], namelist[i], 0)
			document.getElementById("playerList").appendChild(frag);
		}
	} else if ( string == 'remove') {
		for(i=0; i<idlist.length; i++){
			console.log("idlist: " + idlist);
			console.log("namelist: " + namelist);
			var item = document.getElementById(idlist[i]);
			item.parentNode.removeChild(item);
		}
	}
})

client.on("initalise", function(){
	client.emit("JoinGame");
	var name = askForName();
	client.emit("sendClientName", name);
})