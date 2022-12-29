var updateWindow = document.getElementById("update-window");

// fetch('scripts/tags.json')
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (tags){
//         const tagcloud = '.tagcloud';
//         const options = {
//             radius : "550",
//             unit : "%",
//             keep : false
//         };
//         TagCloud(tagcloud, tags, options);
//     })

fetch('scripts/updates.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var noOfUpdates = 0;
        data.forEach(x => {
            let box = document.createElement("div");
            box.className = "box fancy-button";
            box.onclick= function(){
                window.location.href = "/page.html" + "?id="+ x["id"];
            }
            // console.log(x["title"])
            let h2 = document.createElement("h2");
            h2.innerHTML = x["title"];
            let p = document.createElement("p");
            p.innerHTML = x["content"];
            updateWindow.appendChild(box);
            box.appendChild(h2);
            box.appendChild(p);
            noOfUpdates += 1;
        })
        if(noOfUpdates==0){
            let text = document.createElement("p");
            text.innerHTML = "No updates..";
            updateWindow.appendChild(text);
        }
    })
    .catch(function (err) {
        let text = document.createElement("p");
        text.innerHTML = "Connection Error..";
        updateWindow.appendChild(text);
        // console.log('error retrieving data for updates ' + err);
    });
