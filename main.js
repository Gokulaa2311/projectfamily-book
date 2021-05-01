var images=["https://static.wikia.nocookie.net/disney/images/8/87/Profile_-_Cinderella%27s_Father.png/revision/latest/top-crop/width/360/height/450?cb=20190830011008","https://media.istockphoto.com/vectors/freelance-mother-with-a-laptop-vector-id1095108758?k=6&m=1095108758&s=612x612&w=0&h=7qXEKG_OCB7mWEM1smP2FzhGert7RAcYbLGk-1yQOro=","https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jMP17yi2fua4c-PIjRtX1aJxh8nXLHAplzYJsKtCmlOlki8nEXOGWsPuCrKVGQWHTD8&usqp=CAU"];
var names=["Mohan","Gayathri","Gopikaa","Gokulaa"]

var i=0;
function update(){
i++;
var number_of_family_member_in_array=5
if(i > number_of_family_member_in_array)
{
    i=0;
}
var updatedImage=images[i];
var updatedName=names[i]
document.getElementById("family_image").src=updatedImage;
document.getElementById("family_name").innerHTML=updatedName;

}
