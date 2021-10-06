//12

// function changeCoints(){
//     const http1 = new XMLHttpRequest();
//     const user = document.getElementById("userInput").value
//     http1.onreadystatechange = function(){
//       if(this.readyState === 4 && this.status === 200){
//             const obj = JSON.parse(this.responseText);
//             console.log(obj);
//             document.getElementById("para").innerHTML = `${obj.rates.ILS}<br>`;
//             document.getElementById("para").innerHTML += `${user / obj.rates.ILS}`
//         }
//     }
// const API_KEY = "c2e3b3e4a4cc12c909993a790d17d06d";
// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
//     http1.open("GET",`${url}`);
//     http1.send();
//     http1.onerror = ()=>{console.log("you got error");}
// }

//13

// function changeCoints() {
//   const API_KEY = "c2e3b3e4a4cc12c909993a790d17d06d";
//   const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
//   para.innerHTML += "loading"
//   axios.get(url)
//   .then(function (response) {
//       console.log("got success");
//       if (response.status === 200) {
//         const user = document.getElementById("userInput").value
//         para.innerHTML = `${response.data.rates.ILS}<br>`;
//         para.innerHTML += `${user / response.data.rates.ILS}`
//         console.log(response);
//       }
//     })
//     .catch(function (error) {
//       console.log("got error");
//       console.log(error);
//     });
// }