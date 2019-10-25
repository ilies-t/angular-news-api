# angular-news-api
## Usage
1 - Install dependencies via npm
```shell
npm install
```

2 - Create account in [News API](https://newsapi.org/register)<br>

3 - Go to -> [src/app/api.service.ts](src/app/api.service.ts#L13) and put your key into `$API_KEY`<br>

Example
```ts
const $API_KEY = `t47g028g21dn09d3s2`;
```

4 - Fine ! Run the server to see the result 👌
```shell
ng serve
```
<img src="src/assets/images/interface/screen.png" width="100%" title="screenshot" alt="screenshot" />

#
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)