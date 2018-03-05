//jquery
var imgs =['Carouselimg/purple.jpg', 'Carouselimg/noah1.jpg', 'Carouselimg/noah2.jpg','Carouselimg/headerpic.jpg','Carouselimg/silhouette.jpg','Carouselimg/charlesriver.jpg','Carouselimg/sky.jpg','Carouselimg/bark.jpg', 'Carouselimg/blueberry.jpg', 'Carouselimg/duck.jpg', 'Carouselimg/bikes.jpg', 'Carouselimg/balloons.jpg', 'Carouselimg/leaves.jpg', 'Carouselimg/disney.jpg', 'Carouselimg/whiteflower.jpg' ];
/*var index=0;
$(document).ready(function (){
   $("#next").on("click",function(){
   index+= 1;
   if (index > images.length-1) {
     index=0;
   }
   $("#main").attr("src", images[index]);
   });
   $("#back").on("click", function(){
     index-=1;
     if (index < 0){
       index==images.length-1;
     }
     $("#main").attr("src", images[index]);
   });
   $("#main").css("height", "500px").css("width", "650px");

 });*/

 var index = 0;
 var clickCount = 0;

 function nextImg(){
   clickCount++;
if (clickCount===3){
  clickCount=0;
  var random= Math.round(Math.random()* imgs.length-1)
  $("#main").attr("src", imgs[random]);
  index= random;
} else
index++;
if( index >imgs.length-1){
index =0;
}
$("#main").attr("src", imgs[index]);
}

function prevImg(){
index--;
if( index <0){
index=imgs.length-1;
}
$("#main").attr("src", imgs[index]);
}

function firstBigImg(){
  $("#main").attr("src", imgs[0]);
}
function secBigImg(){
  $("#main").attr("src", imgs[1]);
}
function thirdBigImg(){
  $("#main").attr("src", imgs[2]);
}
function fourthBigImg(){
  $("#main").attr("src", imgs[3]);
}
function fifthBigImg(){
  $("#main").attr("src", imgs[4]);
}
function sixthBigImg(){
  $("#main").attr("src", imgs[5]);
}
function sevBigImg(){
  $("#main").attr("src", imgs[7]);
}
  $(document).ready(function(){
  $("#next").on("click",nextImg);
  $("#back").on("click",prevImg);
  $("#firstBigImg").on("click", firstBigImg);
  $("#secBigImg").on("click", secBigImg);
  $("#thirdBigImg").on("click", thirdBigImg);
  $("#fourthBigImg").on("click", fourthBigImg);
  $("#fifthBigImg").on("click", fifthBigImg);
  $("#sixthBigImg").on("click", sixthBigImg);
  $("#sevBigImg").on("click", sevBigImg);
});





//VANILLA javascript
/*v/ar images = ['Carouselimg/noah1.jpg', 'Carouselimg/noah2.jpg', 'Carouselimg/duck.jpg', 'Carouselimg/bikes.jpg', 'Carouselimg/balloons.jpg', 'Carouselimg/leaves.jpg', 'Carouselimg/disney.jpg', 'Carouselimg/whiteflower.jpg', 'Carouselimg/bark.jpg' ];

var index = 0;

var the_image = document.getElementById("main-image");
the_image.src = images[0];

function show_image(direction)
{
if-
{
  index--;
}
else
{
  index++;
  index %= images.length;
}

if (index < 0)
{
  index = images.length - 1;
}

the_image.src = images[index];
}
*/
