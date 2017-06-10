/**
 * Created by thisguy on 6/9/17.
 */

//  Kory Schmidt
//  CS 81: Javascript Programming
//  June 9, 2017
//  Assignment 9 Part 2


//  This file creates a new element,
//  fills it with the given paragraph full of bolded words,
//  and appends it to the body of the document.
//  Then it creates an array of all the bold elements in paragraph
//  and adds a mouseover event that changes the text color to red




//  Create variable to hold new element ---------------------------------------------------------------------
    var p = document.createElement("p");

//  Fill element with paragraph full of bolded words    -----------------------------------------------------
    p.innerHTML = "<b>We</b> have just started <b>this</b> section for the users " +
    "(<b>beginner</b> to intermediate) who want to work with <b>various</b> JavaScript <b>problems</b> " +
    "and write scripts online to <b>test</b> their JavaScript <b>skill</b>.";

//  Append element to body of document  ---------------------------------------------------------------------
    document.body.appendChild(p);

//  Variable to hold array of bold elements -----------------------------------------------------------------
    var bolds = document.body.querySelectorAll("b");

//  Add mouseover event to all bold elements, setting the color of text to red  -----------------------------
    for(var i=0; i<bolds.length; i++)
    {
        bolds[i].onmouseover = function()
        {   this.style.color = "red";    };    }


//------------**************    END OF SCRIPT   ***********--------------------------------------------------