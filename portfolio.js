const portfolio = [
    {
        gridClass: 'grid1',
        heading: 'My Recent Works',
        h1Class:'crete w400 s40 lh52 blackish',
    },

    {
        gridClass: 'grid2',
        imgLink: 'img/projectImg1.jpg',
        heading: 'Multi-Post Stories',
        h1Class: "crete w400 s32 lh44 nBlue1",
        textContent: "A daily selection of privately personlized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever sincr the 1500s, when an unknown printer took a standard dummy text",
        textClass: "inter w400 s16 lh24 nBue1",
        ulClass: "techList",
        tags: ['css','html','bootstrap','Ruby',],
        tagClass: "project1Tag",
        buttonText: 'See Project',
    },

    {
        divClass: 'project2',
        gridClass: ['grid3','grid4','grid5','grid6','grid7','grid8',],
        heading: 'Professional Art <br> Printing Data',
        h1Class: "crete w400 s32 lh44 white p16",
        textContent: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        textClass: "inter w400 s16 lh24 white p16",
        ulClass: "techlist p16",
        tags: ['css','html','bootstrap','Ruby',],
        tagClass: "inter w500 s16 lh20 white project2Tag",
        buttonText: 'See Project',
    }

]

const worksGrid = Array.from(document.querySelector('.worksGrid').children);

worksGrid[0].innerHTML = `
    <h1 class="${portfolio[0].h1Class}">${portfolio[0].heading}</h1>
    <hr>`
worksGrid[0].classList.add(portfolio[0].gridClass)

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
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project1Button showModal">${portfolio[1].buttonText}</button>
</div>`
worksGrid[1].classList.add(portfolio[1].gridClass);

worksGrid[2].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[2].classList.add(portfolio[2].gridClass[0], portfolio[2].divClass)

worksGrid[3].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[3].classList.add(portfolio[2].gridClass[1], portfolio[2].divClass)

worksGrid[4].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[4].classList.add(portfolio[2].gridClass[2], portfolio[2].divClass)

worksGrid[5].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[5].classList.add(portfolio[2].gridClass[3], portfolio[2].divClass)

worksGrid[6].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[6].classList.add(portfolio[2].gridClass[4], portfolio[2].divClass)

worksGrid[7].innerHTML = `
    <h1 class="${portfolio[2].h1Class}">${portfolio[2].heading}</h1>
    <p class="${portfolio[2].textClass}">${portfolio[2].textContent}</p>
    <ul class="${portfolio[2].ulClass}">
        <li class="inter w500 s16 lh20 white project2Tag html">${portfolio[2].tags[1]}</li>
        <li class="inter w500 s16 lh20 white project2Tag boot">${portfolio[2].tags[2]}</li>
        <li class="inter w500 s16 lh20 white project2Tag ruby">${portfolio[2].tags[1]}</li>
    </ul>
    <button type="button" class="inter w700 s17 lh24 ls048 white bcOrange project2Button showModal">${portfolio[2].buttonText}</button>`
worksGrid[7].classList.add(portfolio[2].gridClass[5], portfolio[2].divClass)

