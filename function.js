function check(){
    var memberID = document.getElementById("memberID").value;
    var ref = firebase.database().ref();
    ref.child("Users").orderByChild("id").equalTo(memberID).once("value",snapshot => {
        if (snapshot.exists()){
            console.log("exists!");
            ref1 = firebase.database().ref("Users/"+memberID);
            ref1.on("value", function(data){
                var certification = data.val().certification;
                var name = data.val().name;
                var id = data.val().id;
                document.getElementById("availability").innerHTML = certification;
                document.getElementById("name").innerHTML = name;
                document.getElementById("id").innerHTML = id;
            });
            document.getElementById("contain").style.visibility = "visible";
        }
        else{
            document.getElementById("availability").innerHTML = "null";
            document.getElementById("name").innerHTML = "null";
            document.getElementById("id").innerHTML = "null";    
        }
    });
}