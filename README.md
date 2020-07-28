# P-Kin.com V3

My third portfolio website made with currently the latest version 10 of Angular.

### Public pages:

![Website gif](https://stuff.p-kin.com/screentogif/pkincom_v3.gif)

### Admin area:

![Website gif](https://stuff.p-kin.com/screentogif/pkincom_v3_admin.gif)

### Features:

- **Introduction + Portfolio -**
Visitors can read about me, my skills, interests, also check out my developer portfolio in three different categories.

- **Exploiting Markdown -**
Most of the textual content is saved on the server using Markdown syntax, and then parsed on the frontend, thus reducing the necessary HTML in the code itself.  

- **Internationalization (i18n) -**
The UI and most of the contents are available in three different languages, and it is possible to switch between them at any time without reloading the page. I used the `ngx-translate` library for the i18n implementation.

- **Dark and light themes -**
Also switching between the light and dark theme is possible without any glitch thanks to the flexibility of CSS variables.

- **Admin area with authentication -**
To make it easy to manage the contents the site has an admin area (as a lazy-loaded module) which is of course only available after authentication.

- **Custom Markdown editor -**
For creating the Markdown contents I was looking for available editors, but I found all to be over-complicated, or having too many unnecessary dependencies. The solution at the end was to make my own simple implementation.

### Technologies used:

- Angular 10
- TypeScript
- CSS3 + SCSS
- Markdown
- Firebase Rest APIs
