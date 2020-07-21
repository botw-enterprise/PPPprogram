# Paycheck Protection Program
## Adding capabilities to your workspace

## Build Instructions

##### Build UI Resources
 ` ng build ppp --prod --base-href=/ppp/`
 
##### Gradle build with resources packed
  `gradle build`

##### Pushing to nexus
`curl -v -H 'Authorization:Basic ' --upload-file  ppp.war http://nexus.com/nexus/content/repositories/releases/ppp/`*war version*`.0/`

## Technlogies used
>Java\
>Angular

## How to Configure the application?

clone the git repositorty and follow the below instruction to start the service and UI accordigly:

## UI Development server

Run `ng serve ppp` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Java Development server

Run `gradle build`

## UI Unit Test

Run `ng e2e ppp -watch` for running integration tests using Cypress and Jest.

## Building for Production

Run `npm run build-deploy`, this will create the war with UI resources.

## Application Configurations

Upon having the form data submit, the mail services are configured to send email to appropriate teams for any Back Office work. Change/update the email configrations in src/main/resources/application.yml

`Profiles Available: TEST, toggle-upload, show-upload - to be provided in application.yml or program arguments or JVM arguiments`

`toggle-upload: provided toggle option to switch beteween document upload and basic application`

`show-upload: shows document upload`

## Deploying Application

Run `java -jar -Dspring.config.location = <<location of application.yml>> ppp.war`
 
## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Updating Questions and Logic's

You can update json available in `apps/ppp/src/app/covid-care-act/covid-form/covid-form.ts` accordingly to show up in user interface.


## Further help

Project inspired by Nrwl projects, visit the [Documentation](https://nx.dev/angular) to learn more.

