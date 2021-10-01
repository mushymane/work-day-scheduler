# Work Day Scheduler

## Description
This single page application lets the user schedule their work day and add events to each hour. The events are saved to the user's browser and will persist on their next visit or refresh. To save an event, the user must click on the save button.

Most of the app uses jQuery to simplify the selecting and modifying of elements. To give the user a better sense of where they are in their workday, each time slot is color coded to: red for the past hours, blue for the present hour, and purple for future hours. The events persist by utilizing localStorage. By pressing the save button, the data inputted in the textarea is stored in localStorage. hi

To view the web page visit this [link](https://mushymane.github.io/work-day-scheduler/)

## Preview
![alt page](assets/preview.png)

## Technologies Used
- HTML - used to structure and create elements on the DOM
- CSS - styles the HTML elements on page
- JavaScript - provides the site's functionality
- jQuery - JS library for simplified DOM traversal
- Moment.js - JS library for manipulating time
- Git - version control
- Github - where the repository is hosted
- Visual Studio Code - text editor
- Bootstrap - CSS framework
- Font Awesome - for awesome free icons
- Google Fonts - variety of fonts

## Code Snippet
JavaScript code that color codes the time slots based on current time
```
for (let i = 0; i < timeBlocks.length; i++) {
    var str = timeBlocks.item(i).innerHTML;
    var hourStr = str.replace(/\D/g, "").slice(0, -2);
    var hour = parseInt(hourStr);

    if (hour >= 1 && hour <= 5) {
        hour += 12;
    }
    
    if (hour < now.hour()) {
        timeBlocks.item(i).nextElementSibling.classList.add("past");
    } else if (hour > now.hour()) {
        timeBlocks.item(i).nextElementSibling.classList.add("future");
    } else {
        timeBlocks.item(i).nextElementSibling.classList.add("present");
    }
}
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)
[Github](https://github.com/mushymane)