# A Lie Reveals The Truth
This repository provides replication materials for our CHI 2019 paper, **A Lie Reveals the Truth: Quasimodes for Task-Aligned Data Presentation**.

This website includes all questionnaires used in the experiment, as well as all code used for interactive charts.

It also includes [a link to the preregistration of our procedure, analysis, hypotheses for Study 1](https://aspredicted.org/blind.php?x=cz33i9).

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

For example, to see the main questionnaire for Phase I of Study 2, navigate to

```shell
localhost:8000/Study_I/templates/test.html
```

Links between pages are not currently functional, so navigate to each URL separately.

To change the experimental condition (C, D, D->C, C->D), open the developer console with F12 and use the following console command.

```js
localStorage.condition = "A" // or "B","C","D" 
```

The following files are included:

```shell
# Study 1
#--------

study_1/templates/consent.html	# Informed Consent
study_1/templates/calibration.html # Calibration
study_1/templates/userinfo.html	# Demographic Information
study_1/templates/chartfam.html # Self-reported Chart Familiarity
study_1/templates/visab.html # Visual Ability
study_1/templates/test.html	# Deception Test Question
study_1/templates/nfc1.html # Need For Cognition Questionnaire
study_1/templates/finish.html # Debriefing Page

# Study 2
#--------

# Phase I
#--------
phase_1/templates/controls.html	 # Used by experimenter to set the condition
phase_1/templates/userinfo.html	# User Information
phase_1/templates/demo.html	# Demo question used to explain experimental setup
phase_1/templates/questions.html #	All questionnaires and charts used in Phase I questions

# Phase II re-used the deception test question from Study 1

# Phase III
#--------
phase_1/templates/vis_app_demo.html # Used to show a demo of the application (with all views active)
phase_3/static/index.html # All questions and charts for the usability evaluation

# Design Examples
----------------
route_map_demo/templates/map_demo.html
multi_series_bar_chart_demo/index.html
```

These HTML pages were initially run using on heroku using flask and gunicorn, and responses were stored in a PostgreSQL database. I have not included the back-end code in this repository.

The cartogram example, which is based on [this New York Times infographic](http://graphics8.nytimes.com/packages/images/us/20031108_RECALL_MAP/california_recall.gif), requires the proprietary GreenSock Animation Platform MorphSVG Plugin, and cannot be run directly unless you purchase this product. However, it can be run at [this CodePen.io link](https://codepen.io/jritch/pen/bOYpvO).

The route map example, which adapts a chart from [Maneesh Agrawala et. al.'s LineDrive paper](http://graphics.stanford.edu/papers/routemaps/), requires a Google Maps API key to run properly. To add an API key, [follow these instructions to obtain a key](https://developers.google.com/maps/documentation/javascript/get-api-key), and then change the following line in "route_map_demo/templates/map_demo.html" from:

```html
<script src="//maps.google.com/maps/api/js?sensor=true"></script>
```

to:

```html
<script src="//maps.google.com/maps/api/js?sensor=true&key=YOUR_API_KEY"></script>
```

In creating these charts and questionnaires, I have made liberal use of third party libraries, and advice from tutorials (e.g., W3Schools) and Q&A sites (e.g., StackOverflow). This should always be attributed by a comment in the code. All charts are rendered using [D3 by Mike Bostock](https://www.d3js.org). I have sometimes used code snippets from the D3 documentation without attribution.

The code for Study 1 was created based upon replication materials [for a 2015 CHI Paper](https://dl.acm.org/citation.cfm?id=2702608), kindly provided by Enrico Bertini and Anshul Pandey. All experimental stimuli used in the study (other than the interactive Perceptual Glimpses charts) were provided by them and modified by us.
