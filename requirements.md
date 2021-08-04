# Vision

What is the vision of this product?

- Allow users to create a custom folder of exercises that they can reference for buidling workouts.

What pain point does this project solve?

- A lot of exercise apps come with predisigned workouts that may not be suitable for everyone's level of fitness and equipment. This app allows you to pick just the exercises you want.

Why should we care about your product?

- One of the biggest road blocks to increasing your physical activite level is doing too much too fast. This app will give users more control over that pace to be able to stick to their exercise goals. 

# Scope

## In

You can sign in to this app using your google account or create a new one. 

There will be a profile page with your info.

There will be an exercise library that holds all the ones you have saved.

There will be a server area to enter parameters for your exercise search.

There will be a page with info about the app and its creators.

## Out

This app will not be for creating your own new exercises.

## Minimum Viable Product

The MVP will be a web page that the user can login to, search through a database for exercises, and add those to their favorite's list

Our stretch goal is to use AWS SNS to send a notification to the user daily with exercises from their favorites library as their daily workout. 

# Functional Requirements

1. Loggin and out
2. User can save and delete items from their library
3. Users can search a third party DB for exercises

## Data Flow

Login -> user is authenticated and authorized through auth0, data is pulled from their profile on the server.

Search -> user sends search parameters to the server that are used to send back a list of exercises for them to choose from. The use can then add these to thier favorites.

# Non-Functional Requirements
