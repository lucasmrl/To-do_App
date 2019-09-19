# To-do_App

Project of a to-do list with HTML + CSS + VanillaJS - for learning purposes.

![Image of the To-Do App](https://github.com/l310301/To-do_App/blob/master/screen1.PNG?raw=true)

## Features

* Input a task / Mark a task as "Completed" / "Delete" a task.
* localStorage - The tasks will be saved even after you close/reload the page.

## Next Features / Improvements:

1. Change the style of the links (User should be able to know which tab he is in).
2. Possibility to edit an active task.
3. Responsive design (Mobile-Friendly)

## Known Bugs

* Date/Time - When an item ("task") goes to the "Completed" or "Deleted" list, it has a DATE + TIME information of when the user "completed" or "deleted" that task. (See displayDate() on to_doView.js)
After reloading the page, the task will bring the DATE + TIME when the page was reloaded. When the application is saving the information using LocalStorage, the code is not passing the DATE + TIME to the saved object.
* After an "x" number os tasks on the "Completed" or "Deleted" list, it will appear a scroll-bar before the end of the container. This is happening because I am hiding the "Input area" but I am not changing the size of the "list".

## Built With

* Adobe XD for planning the UI.
* HTML5/ CSS3/ Javascript

## Versioning

v.0.6.0

## Authors

* **Lucas Lima** - [l310301](https://github.com/l310301)
