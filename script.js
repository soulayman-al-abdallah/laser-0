// var x = document.getElementById("nodenode");
// x.style.width = "80%";

// document.getElementById("p2").style.color = "blue";

// document.getElementById("slayip").innerHTML = "lalala";
// fetch('https://slay3.herokuapp.com/')
//     .then(response => response.json())
//     .then(json => { 
//         var x = document.getElementById("slayip")
//         x.innerHTML = json.knowledge }
//         console(x); )
        
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))

        fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {

        

        for (let i = 0; i < json.length; i++) {


            var y = document.createElement('li')
            var content = `<div class="card" style="width:400px">
                <img class="card-img-top" src="XXX" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">YYY</h4>
                        <p class="card-text">ZZZ</p>
                        <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
          </div>`;
            
        //   var x = content.replace("XXX",json[i].flag)
        //   var x = content.replace("XXX",json[i].flag)


            var test = content.replace("XXX", json[i].flag)
            test = test.replace("YYY",json[i].name)
             test = test.replace("ZZZ",json[i].region)

            y.innerHTML = test;    
            y.className = "list-group-item";
            document.getElementById('slayul').appendChild(y);