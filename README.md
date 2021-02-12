## The Plan

App.js -> Header.js & Footer.js (rendered on all pages)
|   |
|   +-> HomePage.js
|       |
|       +-> Welcome Message
|
+-> SearchPage.js (STATE LIVES HERE)
    |   |
    |   +-> PokeList.js (mapped pokemon; pass in FILTERED POKEMON, STATE & changeHandlers as props)
    |       |
    |       +-> PokeItem.js (individual Pokemon class)
    |
    +-> SideBar.js (with drop-downs, etc to be rendered on SearchPage)
