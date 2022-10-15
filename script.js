const love = document.getElementById('love');
love.onclick = () => {
      if (love.style.color == "black") {
            love.style.color = "red"
      } else {
            love.style.color = "black"
      }

}

// fetch('https://api.unsplash.com/photos/?client_id=V78VAuWsPc6RWSux-uacjVZ8ZCh3mSVwC6O_ppPFNJs')
//       .then((response) => response.json())
//       .then((data) => {
//             console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 const  url = data[i].urls.small;
//                 const imagecontainer = document.getElementById('imagecontainer');
//                 const image = document.createElement("img");
//                 const image_container = document.createElement("div");
//                 const author = document.createElement('a');

//                 image_container.classList.add('image_card');
//                 image_container.appendChild(image);
//                 image.src = url;
                
//                 author.href = `${data[i].user.portfolio_url}`;
//                 author.innerHTML = `${data[i].user.username}`;
//                 imagecontainer.appendChild(image_container);
//                 image_container.appendChild(author);


//             //     const img = document.getElementById('imageplace');
//             //     img.src = url;
//             //     console.log(img)
                  
//             }

//             // data.forEach(images => {
//             //       const image = images.urls.full;
//             //       let div = document.getElementById('imageplace');
//             //       div.location = image;
//             //       div.src = image;
//             // });
//       })