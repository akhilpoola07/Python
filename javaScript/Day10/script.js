        console.log(window)
        
        //Tag Name
        let h1Element = document.getElementsByTagName("h1");
        console.dir(h1Element)
        console.dir(h1Element["1"]["innerText"]);
        h1Element["1"]["innerText"] = "This is content 2 changed"
        console.log(h1Element)
        //Id
        let h1Element1 = document.getElementById("cont3");
        console.dir(h1Element1)
        h1Element1.innerText = "This is content 3 changed"
        //queryselector
        //id
        let h2Element = document.querySelector("#cont4");
        console.dir(h2Element)
        h2Element.innerText = "This is content 4 changed"
        //class
        let h3Element = document.querySelector(".cont5");
        console.dir(h3Element)
        h3Element.innerText = "This is content 5 changed"
        // if you use a same multiple class the js will change the content of the first element with that class */
        let multipleClass = document.querySelector(".cs1");
        console.dir(multipleClass)
        multipleClass.innerText = "This is content 6 changed"
        //queryselectorall
// used for selecting multiple elements and updating them all at once using a loop and also use the for loop to iterate through the collection
// Using for...of to iterate through the collection
 let h4Elements = document.querySelectorAll("h5");

for (let element of h4Elements) {
    element.innerText = "Thor";
    console.log("Updated an element:", element);
}
        

        


