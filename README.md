# A Lie Reveals The Truth
This repository provides replication materials for our CHI 2019 paper, **A Lie Reveals the Truth: Quasimodes for Task-Aligned Data Presentation**.

This website includes all questionnaires used in the experiment, as well as all code used for interactive charts.

It also includes [a link to the preregistration of our procedure, analysis, hypotheses for Study I](https://aspredicted.org/blind.php?x=cz33i9).

To view the charts or questionnaires in your web browser, download or clone the repository and in the root directory run one of the following python commands.

```shell
  # python2
  python -m SimpleHTTPServer

  # python3
  python -m http.server
```
Then in your browser, navigate to 

```shell
localhost:8000/path/to/file
```

For example, to see the main questionnaire for Phase I of Study II, navigate to

```shell
localhost:8000/Study_I/templates/index.html
```


The following files are included:

```shell
#Study I

study_1/static/controls.html	
study_1/static/demo.html	
study_1/static/questions.html	
study_1/static/userinfo.html	
study_1/static/vis_app_demo.html

#Study II

[list of files]

#Design Examples

[list of files]
```

These HTML pages were initially run using on heroku using flask and gunicorn, and responses were stored in a PostgreSQL database. I have not included the back-end code in this repository.

The cartogram example, which is based on [this New York Times infographic](http://graphics8.nytimes.com/packages/images/us/20031108_RECALL_MAP/california_recall.gif), requires the proprietary GreenSock Animation Platform MorphSVG Plugin, and cannot be run directly unless you purchase this product. However, it can be run at [this CodePen.io link](https://codepen.io/jritch/pen/bOYpvO).

The route map example, which adapts a chart from Maneesh Agrawala et. al.'s LineDrive paper, requires a Google Maps API key to run properly. To add an API key, change the following line from:

```html
<script src="//maps.google.com/maps/api/js?sensor=true"></script>
```

to

```html
<script src="//maps.google.com/maps/api/js?sensor=true&key=YOUR_API_KEY"></script>
```

In creating these charts and questionnaires, I have made liberal use of third party libraries, and advice from tutorials (e.g., W3Schools) and Q&A sites (e.g., StackOverflow). This should always be attributed by a comment in the code. All charts are rendered using [D3 by Mike Bostock](https://www.d3js.org). I have sometimes used code snippets from the D3 documentation without attribution.

The code for Study I was created based upon replication materials kindly provided by Enrico Bertini and Anshul Pandey. All images used in the study were provided by them.
