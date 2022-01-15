const ACCESS_KEY = "8yVS2RcYtaAb3uex-O0YpgAOxGJEnGqAGbIWFb1iqaU";
const SECRET_KEY = "sSKcvJMh-tcfARaYIPd-Je80ujX0U0J-YyVxJKcKKnc";
const BASE_URL   = "https://api.unsplash.com";


console.log('😏');


// const prm = fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

//Nested then. ❌
// prm.then((res) => {
//     const json_prm = res.json(); //This returns a PROMISE!
//     // console.log(res);
//     // console.log(json_prm);
//     json_prm.then((res_obj) => {
//         console.log(res_obj);
//     });
// });


//Then Chaining. ✔
// prm.then((res) => {
//     return res.json();
// }).then((res_obj) => {
//     console.log(res_obj);
// });



// fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
// .then((res) => {
//     return res.json();
// }).then((res_obj) => {
//     console.log(res_obj);
// });

(() => {
    let images = [];

    const search = async (search_query) => {
        try {
            const fetch_config = {
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`,
                }
            };
            const res = await fetch(`${BASE_URL}/search/photos?query=${search_query}`, fetch_config);
            images = await res.json();
            images = images.results;
            disp();
        
        } catch(e) {
            console.log(e);
            console.log("Something is wrong in the search")
        }
    }

    (async () => {
        try {
            const current_location = window.location.href;
            const url_obj = new URL(current_location);
            const search_query = url_obj.searchParams.get("search_query");
            if(search_query == null || search_query == "") {
                const res = await fetch(`${BASE_URL}/photos/?client_id=${ACCESS_KEY}`);
                images = await res.json();
                disp();
            } else {
                search(search_query);
            }
        } catch(e) {
            console.log("Something messed up");
        }
    })();
    
    
    const disp = () => {
        // console.log(images);
        const container = document.getElementById('container');
        container.innerHTML = "";
        images.forEach((elem) => {
            const img_loc = elem.links.download;
            // console.log(elem);


            const img_box = document.createElement('div');
            const img = document.createElement('img');
            img.src = img_loc;
            img_box.appendChild(img);

            container.appendChild(img_box);
        });
    }

})();

