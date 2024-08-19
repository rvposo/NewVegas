const nvWallpapers = ['/src/imgs/ranger1.jpg' , '/src/imgs/ranger.jpg'];

//console.log(nvWallpapers[0]);

//wallpapersRotation = `url('${nvWallpapers[0]}')`;



//console.log(wallpapersRotation);

function setWallpaper()
   {
      for(let index in nvWallpapers)
      {
        wallpapersRotation = `url('${nvWallpapers[index]}')`;

            setTimeout(function() {
                document.body.style.backgroundImage = wallpapersRotation;
            }, 1000)
            return wallpapersRotation;
      }
   }

   



//wallpapersRotation = `url('/src/imgs/ranger1.jpg')`;

//document.body.style.backgroundImage = setWallpaper();



/*for (let i = 0; i <= 1; i++)
     {
        document.body.style.backgroundImage = 'url(`/src/imgs/${i}`)'; 
        console.log(nvWallpapers[i]);
     }

     for (let index in nvWallpapers)
     {
        document.body.style.backgroundImage = "url(`/src/imgs/${i}`)";
     }



//document.body.style.backgroundImage = "url('/src/imgs/ranger1.jpg')";
*/