## Movie Mate - Final assignment for Coder Academy

https://movieeemate.herokuapp.com/

https://github.com/annehomann/moviemate

#### Purpose

Movie Mate is an online source for recently released films. It also allows interaction between movie fans through a comments section for every movie. Its purpose is to quickly find relevant information about each movie and lets the user curate a list of their favourites. 

#### Functionality/Features

Movie Mate is a full stack MERN application using MongoDB, ExpressJS, React and Node as its core functionality. The user can sign up and then save their actions when logged into a database.

When a user is logged in, they can see a visual grid of films that continues to load as they scroll. When a movie is selected, the user will be provided with information related to the film such as release date, run time and vote average related to its popularity. This data is fetched using the The Movie Database API. and the option to save it to a favourites list. 

For interactivity, the user has the option to save movies to a favourites list to narrow down their most loved ones. There is also a comments section below to start a conversation with other movie fans and a social media 'like' system.

#### Target Audience

This web app can be used by a wide demographic, basically anyone who is a big film lover and likes to keep track of which were their favourites. The key target audience would be 15-60 years of age.



## Final thoughts

Unfortuantely I had more success with my app in development mode than in production. Locally it works flawlessly connected to a MongoDB database but when I deployed the final build to heroku, moviemate would not allow a connection to the database. After hours and hours and hours of debugging I just simply could not work out why I kept receiving a **405 method not allowed** error. I tried the following:

* Adding the Cors dependency 
* Adding a long list of Config Vars in Heroku settings to make sure everything was covered
* Making sure all URLs were typed correctly
* Adding 0.0.0.0/0 to the IP whitelist within my MongoDB cluster
* Checking that my MongoDB credentials had been typed in correctly
* Checking user permissions in MongoDB cluster
* Debugging my code 
* Hours of research to find if someone experienced the same issue

A few of my classmates were very kind ot help but they could not work out the issue either. I am hoping to figure this issue out over time as I cannot stop thinking about it!



## Side notes

In local environment, **pkill node** is a great way to clear all servers and test without any issues.

