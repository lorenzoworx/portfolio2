const portfolio = [
  {
    gridClass: 'grid1',
    heading: 'My Recent Works',
    h1Class: 'crete w400 s40 lh52 blackish',
  },

  {
    gridClass: 'grid2',
    imgLink: 'img/todoList.png',
    heading: 'Multi-Post Stories',
    h1Class: 'crete w400 s32 lh44 nBlue1',
    textContent: "A daily selection of privately personlized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever sincr the 1500s, when an unknown printer took a standard dummy text",
    textClass: 'inter w400 s16 lh24 nBue1',
    ulClass: 'techList',
    tags: ['css', 'html', 'bootstrap', 'Ruby'],
    tagClass: 'project1Tag',
    buttonText: 'See Project',
  },

  {
    divClass: 'project2',
    gridClass: ['grid3', 'grid4', 'grid5', 'grid6', 'grid7', 'grid8'],
    heading: 'Professional Art <br> Printing Data',
    h1Class: 'crete w400 s32 lh44 white p16',
    textContent: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    textClass: 'inter w400 s16 lh24 white p16',
    ulClass: 'techlist p16',
    tags: ['css', 'html', 'bootstrap', 'Ruby'],
    tagClass: 'inter w500 s16 lh20 white project2Tag',
    buttonText: 'See Project',
  },

];

const worksGrid = Array.from(document.querySelector('.worksGrid').children);

worksGrid[0].innerHTML = `
    <h1 class="${portfolio[0].h1Class}">${portfolio[0].heading}</h1>
    <hr>`;
worksGrid[0].classList.add(portfolio[0].gridClass);

worksGrid[1].innerHTML = `
<img src="${portfolio[1].imgLink}" alt="">
<div>
    <h1 class="${portfolio[1].h1Class}">${portfolio[1].heading}</h1>
    <p class="${portfolio[1].textClass}">${portfolio[1].textContent}</p>
    <ul class="${portfolio[1].ulClass}">
        <li class="${portfolio[1].tagClass} css"><span class="inter w500 s15 lh20 nBlue1">${portfolio[1].tags[0]}</span> </li>
        <li class="${portfolio[1].tagClass} html"><span class="inter w500 s15 lh20 nBlue1">${portfolio[1].tags[1]}</span></li>
        <li class="${portfolio[1].tagClass} boot"><span class="inter w500 s15 lh20 nBlue1">${portfolio[1].tags[2]}</span></li>
        <li class="${portfolio[1].tagClass} ruby"><span class="inter w500 s15 lh20 nBlue1">${portfolio[1].tags[3]}</span> </li>
    </ul>
    <button onclick = "window.location.href='https://github.com/lorenzoworx/to-do-list';" type="button" class="inter w700 s17 lh24 ls048 white bcOrange project1Button showModal">${portfolio[1].buttonText}</button>
</div>`;
worksGrid[1].classList.add(portfolio[1].gridClass);
const project2 = worksGrid.slice(2);
project2.forEach((project, index) => {
  project.innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
         <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
         <ul class="${portfolio[2].ulClass}">
             <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
             <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
             <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
         </ul>
         <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal" id="btnHover">${portfolio[2].buttonText}</button>`;
  project.classList.add(portfolio[2].gridClass[index], portfolio[2].divClass);
});

const popup = document.querySelector('.popSection');

const modalContent = {
  heading: ['Multi Post Stories', 'Keeping track of hundreds  of components website'],
  headingClasses: 'roboto s32 nBlue2 w700 lh44',
  tagClasses: 'poppins w600 s13 lh16',
  imageLink: ['img/popupbkg.jpg', 'img/deskPopup.jpg'],
  paragraphText: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  ],
};

const screenWidth = window.innerWidth;
if (screenWidth < 768) {
  popup.innerHTML = `
    <div id="popup-window">
    <div id="popup">
        <div class="popHeader">
            <h1 class="${modalContent.headingClasses}">${modalContent.heading[0]}</h1>
            <img src="img/Cancel.png" alt="" class="closeModal">
        </div>
        <ul>
            <li class="${modalContent.tagClasses}" >html</li>
            <li class="${modalContent.tagClasses}" >Bootstrap</li>
            <li class="${modalContent.tagClasses}" >Ruby on rails</li>
        </ul>
        <div class="popContent">
            <img src="${modalContent.imageLink[0]}" alt="" class="popupImg">
            <div>
                <p class="inter w400 s16 lh24" >${modalContent.paragraphText[0]}</p>
                <div class="popButtons">
                    <button class="bcOrange popButton" ><span class="inter w700 s17 lh24 white btnText" >See Live</span> <img src="img/seeLive.png" alt="" class="btnImg"></button>
                    <button class="bcOrange popButton" ><span class="inter w700 s17 lh24 white btnText" >See Source</span> <img src="img/seeSource.png" alt="" class="btnImg"></button>
                </div>
  
            </div>
        </div>
  
    </div> 
  </div>   
    `;
} else {
  popup.innerHTML = `
    <div id="popup-window">
    <div id="popup">
        <div class="popHeader">
            <h1>${modalContent.heading[1]}</h1>
            <img src="img/Cancel.png" alt="" class="closeModal">
        </div>
        <ul>
            <li>html</li>
            <li>Bootstrap</li>
            <li>Ruby on rails</li>
        </ul>
        <div class="popContent">
            <img src="${modalContent.imageLink[1]}" alt="" class="popupImg">
            <div>
                <p class="inter w400 s16 lh24" >${modalContent.paragraphText[1]}</p>
                <div class="popButtons">
                    <button class="bcOrange popButton" ><span class="inter w700 s17 lh24 white btnText" >See Live</span> <img src="img/seeLive.png" alt="" class="btnImg"></button>
                    <button class="bcOrange popButton" ><span class="inter w700 s17 lh24 white btnText" >See Source</span> <img src="img/seeSource.png" alt="" class="btnImg"></button>
                </div>
  
            </div>
        </div>
  
    </div> 
  </div>   
    `;
}
