# CowenApplication

## Personal Notes

1. The app doesn't need state management but to improve performance and reduce the number of api requests
   I saved the first users request into an observable to be accessible within the UserService.
2. I didn't use any library for styling
3. The app routing is working like this:

  - `/` Home: Lists all users with their details, it is possible to search by name.
  - `/user/:userId` User albums: Lists all the albums by user ID, here is possible to create a new album,
    the created album is using the endpoint but is created in memory,
    this means that the new album is visible after creation but is not possible to navigate to it.
  - `/user/:userId/album/:albumId` Album photos: Lists all the photos of an album
  - `/not-found` Page not found message
  - `/error` Generic Error message

4. I did 2 unit tests `npm run test`

  - One testing that a service is being called with the right parameters (photo.service.spec.ts)
  - One testing that the component is being shown and hidden (modal.component.spec.ts)

5. The e2e test written tests a happy path: `npm run e2e`

  - Navigate to home
  - Search a name
  - Click a user card
  - Check breadcrumbs
  - Click an album
  - Check a single photo

6. To show random images I used https://picsum.photos/

## Coding challenge

This offline challenge was invented to get a picture of your coding skills, git usage, documentation and ability to deliver a working result. Besides coding, we're
interested in your ability to convert requirements into UI and UX experience.

### General

Focus on a working solution rather than the most beautiful or complex
Styling can be added, however a useable result is more important than awesome CSS
If you can not finish a task or have an issue during implementation try to explain it in the git commit description and/or README file
A git history is very important, please do not have a single final commit. We want to follow your flow of development.

### Tasks

1. Create an Angular application that lists all users and their addresses provided by the users API of JSONPlaceholder
2. The project should have at least one meaningful unit test using jest
3. Add the possibility to view the albums and photos of a selected user.
4. Add the possibility to create new albums.
5. Add at least one meaningful end-to-end test for your application using cypress

### Optional

The tasks above are considered the "Pflicht", while this section allows you to stand out from other candidates (the "Kür").
E.g. any pagination, sorting, filtering, drag-and-drop, styling, error reporting, analytics, integration with external services etc are a plus. Show off your skills here!

### Expectations

Document your coding process with Git and publish your result to a Github or Gitlab repository. We'll clone this repo run your code locally on our machines.

The result should be a git history of your development process (a single commit with the complete application is not acceptable. We want to see multiple commits
showing your progress), a README document on how to install and start your application, and a package.json with scripts to build and serve your application.

Any styling of your HTML is not necessary. Using AngularJS is not acceptable. Simple is better than complicated. Consider your application a proof-of-concept, quicker development using tools to achieve the result is better than handcrafting every line but taking 5x as long. You can use whatever resources/libraries/open-
source also (but not as a replacement) of the libraries previously mentioned.

We will do a code review and look for standards, consistency, error handling, testing, readability, maintainability, correctness, usability, simplicity, leveraging of existing
code/concepts/services and surprises.
