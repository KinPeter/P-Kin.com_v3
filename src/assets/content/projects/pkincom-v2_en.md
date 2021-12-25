![pkincom](https://stuff.p-kin.com/screentogif/pkincom-full.gif)

For my very first VueJS project I choose to create a new portfolio website for myself. My goal was to make it easy for anyone who is interested in my work to find all the relevant information.

[>> Check it out here!](https://v2.p-kin.com)

### Features:

- **About me & my skills -** On the home page there are a few words about me and I list all the technologies and languages I'm familiar with

- **Portfolio -** All my recent, noteworthy projects can be found here, with links to their repositories.

- **Pens -** Some of my works on CodePen, especially animations.

## Backstage

A custom dashboard-like app to manage all contents of my website, such as my skills and portfolio information.

### Features:

- **Content management -**
This app gives me full control on what is displayed on my website. I can add, edit or remove anything to the data stored in Firebase which will immediately change the content of P-Kin.com.

- **Material Design with Vuetify -**
Thanks to Vuetify it was really easy to create a nice looking and easily usable admin interface without writing even a line of CSS.

### Skills section:

![skills](https://stuff.p-kin.com/screentogif/backstage-skills.gif) 

### Portfolio section:

![skills](https://stuff.p-kin.com/screentogif/backstage-portfolio.gif)

### Technologies used:
- Vue
- TypeScript
- Vuex
- SCSS
- Firebase REST APIs

### Methods I used:
- **Central state management -**
My first experiment with Vue and it's state management, all data and UI state are managed in different modules of a central VueX store.

- **Routing and lazy loading -**
Portfolio page and some assets use lazy loading for better performance.

- **Dynamic data -**
Whether I want to add a new portfolio item or make a change on my tech stack, no need to touch the frontend, only to adjust the data in the database.

---
Repositories: [Public page](https://github.com/KinPeter/P-Kin.com_v2), [Backstage](https://github.com/KinPeter/P-Kin.com_v2-backstage)
