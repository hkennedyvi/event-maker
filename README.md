![Issues](https://img.shields.io/github/issues/hkennedyvi/event-maker)  ![Forks](https://img.shields.io/github/forks/hkennedyvi/event-maker)  ![Stars](	https://img.shields.io/github/stars/hkennedyvi/event-maker)  ![License](https://img.shields.io/github/license/hkennedyvi/event-maker)  [![Twitter](https://img.shields.io/twitter/url?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fimg.shields.io%2Fgithub%2Flicense%2Fhkennedyvi%2Fevent-maker)

# Cahoots
A New Social Platform, 
Live in the Moment with Cahoots.

![Dashboard](https://media.giphy.com/media/W5ZWHQSfmTgOnupLtx/giphy.gif)

#### [Deployed App](https://u-incahoots.herokuapp.com/)

## Concept
As a community member,
I want to be able to meet new neighbors and fill someone's spot spontaneously,
So that I can continue to enjoy special moments without hesitation.

## Local Installation
1. Fork the repo and then Clone the repo or download the repo to your computer. 
2. Open your terminal to the root of the repo. Install the required modules by typing "npm install" or "npm i" using your code editor terminal.
3. Seed the database by running "npm run seed"
4. Run the app by typing "npm start", "node server.js", or "node server."
5. The console log will display "API server now on port 300."
6. React should automatically open a webpage on your default browser. Should this not happen, you can open your browser and got http://localhost:3000/ .


## Usage
<img src="./readme-assets/sign-up" alt="Sign Up Page" width="400"/>  <img src="./readme-assets/login" alt="Login Page" width="400"/>

Sign up by adding a unique email and password. Password will be encrypted by bcrypt. If you've already signed up, click the login button to be redirect to the login page.

Menu is located in the top right. Click the icon to open the menu drawer. 
    * Dashboard: The home page where you can create & join events. 
    * Profile: User's personal profile 
    * Logout: Logs you out and takes you back to sign up page.

![Curate Event](https://media.giphy.com/media/QYLUpwxaDDi8XZl8no/giphy.gif)

After logging in or signing up you will be redirected to the dashboard.
    * Map: app geolocates your device and adds pin for your current location
    * Curate event button: allows you to create an event & store it in the database. Opens a modal with the create event form. 
    * Event cards: displays events in your neighborhood. Can move on next event by clicking the next event button or join an event by clicking join. 

![Profile Page](https://media.giphy.com/media/VeI1Mq1ch8h1F68FkI/giphy.gif)

Profile page contains user's event history.
    * Can view three types of events: your most recent event (whether attended or created), created events, and attended events.
    * Click the icons to navigate between the three types


## Tech Utilized
* MERN Stack: Mongo, Express, React, Node
* HTML
* CSS
* Javascript
* jQuery
* Material-UI
* Material Bootstrap Design (MBD)
* Mongoose
* Google Maps API (Maps & Geolocator)
* Passport
* Bcrypt JS
* Moment JS
* NPM
* FS


## Future Development
* Admin feature to create a system to allow access to specific neighborhoods
* Verification of user's address to be a part of specific neighborhoods.
* Social authentication
* SMS alerts
* Chat room
* Connect to another events API so users can invite neighbors to specific events


## Credits
* MDB docs
* Google Maps API
* Material-UI
* Several gradients were provided by [ColorSpace](https://mycolor.space/). This website allows you to pick 2-3 colors you want in your gradients, which direction you want them to go, and then generates a more complex gradient with additional colors. 


## License

MIT License

Copyright (c) 2020 Howard Kennedy VI, Jennifer Kim, Laurie Schroeder, Sarah Vivoli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.