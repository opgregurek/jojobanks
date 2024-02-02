# README
## Running the application
Ensure you have NVM installed, follow this [tutorial](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
If you have it installed, you should be able to run the command `nvm --version` in your terminal.

Install the latest version of npm, `nvm install-latest-npm`.
You should now be able to run `npm --version` and the version number should be > 10.4.0
Similarly, you should now be able to run `node --version` and the version number should be > v20.8.0.

Now within the `jojobanks` folder, run `yarn install`. This will install the necessary dependencies for the application.
Once complete, run `yarn run dev` this will now start the application on [localhost:3000](http://localhost:3000).

## Development
### Creating a page
To create a new page, we need to create a new folder within the `/app` directory. This app uses the [app router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router). All folders within the `app` directory is a new route within the application, where the `page.tsx` and `layout.tsx` combine to form the page that is rendered for that route. Nested folders will create nested routes, i.e. directory `projects -> 404-animation` will map to `/projects/404-animation`. The simplest way to create a new page, is to just copy the contents from the `page.tsx.template` and `layout.tsx.template` files within the `templates` directory to your new directory. This will provide the basic skeleton for a new page to be created.

### Existing/Reusable Components
- `components/FullScreenStack.tsx`: Creates a vertical stack of the children, where the component takes up the full screen height (at a minimum) and then will take up a max width of 1440px.
- `components/projects/Project.tsx`: Creates the project page with the information passed through the props. The props necessary/needed can be seen within the different projects on the project page.
- `components/CloudinaryImage.tsx`: Creates a cloudinary image, for the path you have specified to the component.

### General Information
When creating new reusable components within the components folder, ensure you add `use client` to the top of the file to ensure next.js knows the file is a client component.

This project utilises [Chakra UI](https://chakra-ui.com/), where the full list of components can be found [here](https://chakra-ui.com/docs/components). The left sidebar contains 'most' of the Chakra components that have been created. In general, the components are fairly intuitive and well documented.

To perform responsive styling, we follow the [array syntax](https://chakra-ui.com/docs/styled-system/responsive-styles#the-array-syntax) meaning that we can pass an array into all style props of a chakra component and it will apply those styles for the different breakpoints in the application.

## Releasing
In general all your changes should be done on a `feature/x` branch.

When you are ready to publish your changes:
- Create a new pull request [here](https://github.com/opgregurek/jojobanks/compare).
- Choose `beta` as the base branch and your `feature/x` as the compare branch.
- You should now see a `Create pull request` button, press this button
- Review the changes at the bottom of the screen to ensure those are valid, then press the `Create pull request` button
- You should now see a `Merge pull request`, press that button and confirm the merge
- You can choose to delete the branch, there should be a new prompt for this.
- Now that you have published to the `beta` branch, wait approximately 2 minutes, and you will see your changes on [beta](https://jojobanks.vercel.app/)
- If you are happy with this, repeat this same process but a pull request from `beta` to `main`.
  - Create a new pull request [here](https://github.com/opgregurek/jojobanks/compare).
  - Choose `main` as the base branch and your `beta` as the compare branch
  - You should now see a `Create pull request` button, press this button
  - Review the changes at the bottom of the screen to ensure those are valid, then press the `Create pull request` button
  - You should now see a `Merge pull request`, press that button and confirm the merge
  - You can choose to delete the branch, there should be a new prompt for this.
  - Now that you have published to the `main` branch, wait approximately 2 minutes, and you will see your changes on [beta](https://www.jojobanks.net/)
YEET THAT SHOULD BE IT
