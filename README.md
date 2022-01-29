# patrickaregan.github.io/pats-work-schedule
Pat's Work Day Scheduler

## Description
- This project is a work day scheduler that lets me enter events for an hour of the day.
- The time blocks are color-coded to signify whether they are upcoming, current or past.
- When I click the save button the event text is saved to local storage so when I refresh the page the event shows up in the correct time block.
- Workday planners have been around for a long time and they are essential to a busy person who has a lot of appointments to keep or just to log what was done during the day.
- After I created this project I immediately started thinking how I would used it and what features I could add, like notifications or saving the data in a database so I could see the same events from any device.
- In coding bootcamp I leaned two things that helped me complete this project.
- I learned about bootstrap and I used it to format the time blocks. I used the grid system of rows and columns. I created three columns, one for the hour label, one for the event and one for the save button. For smaller screens I picked the bootstrap column style for 12 columns so that the columns would line up vertically. For larger screens I set the first and last columns to take up 1 column and the middle one to take up 10 columns. For the smaller screensize, I used media queries to change other styles like aligning the hour label in the center and rouding all 4 corners for all the columns. I tried it on my phone and it looks great.
- I also learned about jquery and I made use of its shorthand syntax to build the time blocks. If you look in the index.html file you will not see any html for the time blocks. I chose to create those programatically in the script file. I created a function called buildTimeBlocks that takes one of the normal business hours as a parameter and starts building each of the 3 columns and filling in the content for that hour. This was a lot of code and using jQuery made it shorter and more concise.
- Finally, I learned how to use moment.js to format dates and times. At the top of the script file I use moment to get the current date and the current hour. This was very easy to do with moment and their documentation was very clear.
- Overall I really enjoyed this project.

## Screenshot
![Pat's Work Day Scheduler](assets/images/screenshot.png)

## Link
[https://patrickaregan.github.io/pats-work-schedule/](https://patrickaregan.github.io/pats-work-schedule/)
