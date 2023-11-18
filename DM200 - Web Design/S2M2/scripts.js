//Function to cycle through all the images in the list.  This is where the fun begins.
function nextImage(){
    //Read out the current value from the carousel and increment by 1
    var next = parseInt( $('.carousel').attr('current') ) + 1;
    //Load the next image from the 'next' index
    var img = $('.carousel').find('img')[next];
    //Update the background image for #carousel
    $('.carousel').css('background-image', 'url(' + $(img).attr('src') + ')');

    //Check if the current image is the last (if so loop around to the beginning)
    //Save result back to carousel
    if(next >= $('.carousel').find('img').length -1) next = -1;
    $('.carousel').attr('current', next);
}        

//Automatically cycle through the images every 3 seconds (3000 milliseconds)
setInterval(nextImage, 3000);


// Ignore this commented code, its nonsense that broke way too easily. It's an alternate to the carousel above I guess.
/*var myIndex = 0;
rotator();

function rotator() { 
    var i;
    var x = document.getElementsByClassName("galleryRotator");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex = 1 ].style.display = "block";
    setTimeout(rotator, 2000);
}*/