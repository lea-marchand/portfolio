/** @jsxImportSource astro */
<Fragment>
  <body>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="asset\css\style.css" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </head>
    <header class="fixed w-full top-0 z-50">
      <div class="logo-container">
        <a href="index.html">
          <img src="/logo-blanc-01.png" alt="logo blanc" />
        </a>
      </div>
      <div class="text-container">
        <nav>
          <ul>
            <li>
              <a href="#portfolio">Mon portfolio</a>
            </li>
            <li>
              <a href="#parcours">Mon parcours</a>
            </li>
            <li>
              <a href="#savoir-faire">Mon savoir-faire</a>
            </li>
            <li>
              <a href="#competences">Mes compétences</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </body>

  <style>{`
/* Styles de base pour tous les écrans */
body {
  font-size: 16px;
}

/* Styles pour les écrans de taille moyenne et plus grands */
@media screen and (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* Styles pour les écrans plus petits (par exemple, smartphones) */
@media screen and (max-width: 480px) {
  body {
    font-size: 14px;
  }
}

header {
  padding: 20px;
}
.logo-container {
    max-width: 100px;
    margin: 0; /* Réinitialise les marges */
    margin-right: 20px; /* Ajoute une marge à droite */
    margin-left: 56px;
}
.text-container{
    margin: 0; /* Réinitialise les marges */
    margin-right: 45px; /* Ajoute une marge à droite */
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Optionnel : assurez-vous que l'image conserve son ratio d'aspect et remplit complètement le conteneur */
  display: block; /* Élimine l'espace sous l'image dû à l'élément en ligne */
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Hind', regular;
}

header {
    background-color: #FB8500;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img {
    max-width: 55%; /* Assurez-vous que l'image ne dépasse pas la largeur du conteneur */
    height: auto; /* Garantit que l'aspect ratio de l'image est préservé */
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #FBFBFF;
    font-weight: semi-bold;
    font-size: 16px;
}
nav a:hover {
    text-decoration: none;
    color: #023047;
    font-weight: semi-bold;
    font-size: 16px;
}
`}</style>
</Fragment>;
