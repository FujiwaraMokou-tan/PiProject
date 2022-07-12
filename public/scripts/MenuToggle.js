"use strict";

/**
 * Function to show the IPS section of the website
 */
function showIPS(){
    document.getElementById("IPS").style.display = "block";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the Technology section of the website
 */
function showTechnology(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "block";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the Home section of the website
 */
function showHome(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "block";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the General section of the website
 */
function showGeneral(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "block";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the AboutMe section of the website
 */
function showMe(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "block";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the Social sub-section of the website
 */
function showSocial(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "block";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the environmental sub-section of the website
 */
function showEnvironment(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "block";
    document.getElementById("Economic").style.display = "none";
}

/**
 * Function to show the economic sub-section of the website
 */
function showEconomic(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Articles").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "block";
}

/**
 * Function to show the login/register menu
 */
function showLoginRegister(){
    let a =  document.getElementById("containerLogIn");
    if(a.style.display == "none"){
        a.style.display = "block";
        document.getElementById("containerRegister").style.display = "none";
    }else{
        document.getElementById("containerRegister").style.display = "block";
        a.style.display = "none";
    }

}

/**
 * Function to show the articles section
 */
function showArticles(){
    document.getElementById("IPS").style.display = "none";
    document.getElementById("Technology").style.display = "none";
    document.getElementById("Home").style.display = "none";
    document.getElementById("General").style.display = "none";
    document.getElementById("Articles").style.display = "block";
    document.getElementById("AboutMe").style.display = "none";
    document.getElementById("Social").style.display = "none";
    document.getElementById("Environmental").style.display = "none";
    document.getElementById("Economic").style.display = "none";
}
