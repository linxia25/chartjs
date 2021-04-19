# CPNT 265 Assessments: 3rd-party plugin/library implementation: 5 points
By Xia Lin April 15, 2021

## Description
A website for online sales of high-end furniture!

## Comments

The most difficult part of this assignment is to display the single product by title. At the beginning, I spent a lot of time facing an undefined error. After consulting with TONY, I finally realized that in any http link there will be a string instead of a number. Thank you Tony!

## Attributions
- [Logo.jpg](https://www.designevo.com/ "Logo") by DesignEvo.
- [bed.jpg](https://www.pexels.com/photo/brown-wooden-bed-inside-bedroom-3773575/ "bed") by Curtis Adams.
- [chair.jpg](https://www.pexels.com/photo/two-assorted-color-padded-chairs-near-side-table-1350789/ "chair") by Eric Montanah.
- [sofa.jpg](https://www.pexels.com/photo/2-seat-orange-leather-sofa-beside-wall-1866149/ "sofa") by Martin Pechy.
- [sofa-bed.jpg](https://www.pexels.com/photo/empty-bedroom-set-1648768/ "sofa-bed") by Victoria Borodinova.
- [table.jpg](https://www.pexels.com/photo/glass-bottle-filled-with-black-straw-on-brown-wooden-table-890669/ "table") by Juan Pablo Serrano Arenas.
- [accent-table.jpg](https://www.pexels.com/photo/white-and-black-desk-beside-bed-and-window-439227/"accent-table.jpg") by Medhat Ayad.
- [malm-dresser.jpg](https://www.pexels.com/photo/photo-of-brown-wooden-3-drawer-malm-dresser-with-black-plastic-case-879821/) by Daria Shevtsova.
- [shelves.jpg](https://www.pexels.com/photo/interior-of-children-bedroom-with-wooden-furniture-and-toys-and-globe-placed-on-shelves-in-room-3932930/) by Tatiana Syrikova.
- [wooden-table.jpg](https://www.pexels.com/photo/brown-wooden-table-with-chair-3097112/) by Nugroho Wahyu.
- [Login/Register Page](https://codepen.io/colorlib/pen/rxddKy) by Aigars Silkalns.

## Links
- GH repo: https://github.com/linxia25/cpnt262-a5.git
- Heroku URL: https://cpnt262a5-20210324.herokuapp.com/
- Single item pages:<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Chair<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Sofa<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Bed<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Sofa-bed<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Table<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Accent-table<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Wooden-table<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Malm-dresser<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/Shelves<br />

- 404 error page example:<br />
--- https://cpnt262a5-20210324.herokuapp.com/404<br />
--- https://cpnt262a5-20210324.herokuapp.com/furnitures/aabbccddeeff<br />

- String for MONGODB_URL:<br />
--- MONGODB_URL=mongodb+srv://xialin:1982@cluster0.klahv.mongodb.net/sait?retryWrites=true&w=majority

## File/directory
- /nodels<br />
--- /furniture.js<br />

- /public<br />
- /css<br />
--- /style.css<br />
--- /index.css<br />
--- /login.css<br />
--- /register.css<br />
--- /reset.css<br />
- /images<br />
--- /accent-table.jpg<br />
--- /chair.jpg<br />
--- /bed.jpg<br />
--- /sofa.jpg<br />
--- /sofa-bed.jpg<br />
--- /table.jpg<br />
---/malm-dresser.jpg<br />
---/shelves.jpg<br />
---/wooden-table.jpg<br />
---/logo.png<br />
---/404.png<br />
- /js<br />
---/client.js<br />
- /routes<br />
--- /furnitures.js<br />
--- /api<br />
  --- /v0.js<br />
--- index.js<br />

- /views<br />
--- /pages<br />
  --- index.ejs<br />
  --- login.ejs<br />
  --- register.ejs<br />
  --- 404.ejs<br />
  --- singleitem.js<br />
--- /partials<br />
  --- /footer.ejs<br />
  --- /header.ejs<br />
  --- /nav.ejs<br />

- /.env.text

- /.gitignore.txt

- /config.js

- /import.js

- /package-lock.json

- /package.json

- /server.js

- /README.md

## License
- [Applicable License](https://creativecommons.org/licenses/by/4.0/legalcode "Applicable License")