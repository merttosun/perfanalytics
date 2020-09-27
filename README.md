### Perf Analytics
https://performanceanalytics.herokuapp.com/
####subitems
- performanceAnalyzer.js
	- performanceAnalyzer.js collects some performance related key metrics from browser and sends to the perfanalytics API
```html
<script async src="https://performanceanalytics.herokuapp.com/performanceAnalyzer.js"></script>
```
https://www.linkedin.com/pulse/async-vs-defer-attributes-javascript-diwaker-mishra/



- perfanalyticsAPI
	- perfanalytics api is a restful api whic saves data, poster from performanceAnalyzer.js and returns specific filtered data
- perfanalyticsdashboard;
	- perfanalyticsdashboard is a dashboard which show perf related metrics in a visualized way


# usage

npm install
node server.js
cd perfanalyticsdashboard
npm install
npm run start

make sure that you fixed fetch urls

#Tech Stack
- performanceAnalyzer.js
	- javascript
- perfanalyticsAPI
	- nodejs - mongodb - express
- perfanalyticsdashboard;
	- reactjs
- CI/CD;
	- circleci / heroku

#Resources that i have used
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseStart

https://attacomsian.com/blog/static-resources-express

https://www.mongodb.com/mern-stack

https://medium.com/swlh/components-testing-in-react-what-and-how-to-test-with-jest-and-enzyme-7c1cace99de5

https://javascript.info/script-async-defer

