//alert ("Hello World")
//console.log("Console Message Test")

//$ (".menu-area").addClass ("active")

$(".menu-area").click(function() {
    /*if ($(".menu-area").hasClass("active")){
        $(".menu-area").removeClass("active")
    } else {
        $(".menu-area").addClass("active")
    } */
    $ (".menu-area").toggleClass("active")
})

/*var x=5;

if (x=4) (
    do this
) else (
    then do this istead
)*/

var studentName ="Ray" //variable for one object
var allStudents = ["Ray","Naveena","Turba","Warrick", "Yuna", "Beatrice", "Prilscilla"] //array for multiple 
console.log(allStudents[2])
//alert(studentName)

var i=0;
while (i<allStudents.lenght) {
    console.log(allStudents [i])
    i = 1 + i;
}

/*while (i<5)
{
    do this
    i=i+1;

}*/