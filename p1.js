/**
 * Created by thisguy on 6/9/17.
 */

//  Kory Schmidt
//  CS 81: Javascript programming
//  June 9, 2017
//  Assignment 9 part 1


//  This file creates a new element using Javascript
//  It then adds text to this new element, and appends it to the document
//  Finally, it changes the contents of this element with the click of a button





//  Create element with Javascript
    var p = document.createElement("p");    //  Lame that you have to use a variable

//  Add text to innerHTML
    p.innerHTML = "Hello Cruel World!";

//  Append variable and it's contents to document
    document.body.appendChild(p);

                                                        //Testing   *************************************************
                                                        //p.appendChild();

                                                        //document.createTextNode("Jumpin Jesus");



                                                        //document.getElementsByName("p")[0]. = "Hello Cruel World!";

                                                        //document.querySelector("p").textvalue = "Good Night World";

    //Create a button to show change    ///////////////////
    var button = document.createElement("input");   ///////
    button.type = "button";                         ///////
    button.value = "Don't click me";                ///////
    button.onclick = function()                     ///////
    {
        //  Change text in created element
            p.innerHTML = "Good Night World";               };
    document.body.appendChild(button);              ///////