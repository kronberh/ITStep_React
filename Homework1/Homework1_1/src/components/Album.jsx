import "./Album.css"

export const Album = () => {
  return <>
    <div class="album">
      <div class="responsive-container-block bg">
        <div class="responsive-container-block img-cont">
          <img class="img" src="./main01.jpg" />
          <img class="img" src="./c2832b483bff72f8c1a5e087e8bf417c.jpg" />
          <img class="img img-last" src="./d5247773d5c26b723544554557d8997c.jpg" />
        </div>
        <div class="responsive-container-block img-cont">
          <img class="img" src="./images.jpg" />
          <img class="img img-big" src="./images (1).jpg" />
        </div>
        <div class="responsive-container-block img-cont">
        <img class="img" src="./48389728.jpg" />
          <img class="img" src="./odeskyj-botanichnyj-sad-informatsiya-dlya-turystiv.jpg" />
          <img class="img img-big img-last" src="./images (2).jpg" />
        </div>
      </div>
    </div>
  </>
};