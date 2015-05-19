I wrote two projects fulfilling the task.

The first one is in C# using windows form.
I decide to keep it simple, but still left some options to extend the app further.
I wrote a interface IParticle which can be inherited by classes such as Ball, Square, Pentagon and etc.
The app use IParicle interface to store all possible variations of Shapes in one place.
The most bigger amount of calculations are done in Engine class, which job is to calculate
and display the moving shapes every tick. 
(Calculations and drawing should be separated to increase cohesion and to lower coupling, but for this App
simply will be overkill.)

The second one is JavaScript web page.
Well i got lazy and didn't separate the logic in different files.
Everythig happens in Game.js.

The way both codes work is very similar. Using the same objects and logic, just in diferent ways, but to 
be honest JS is way faster.

Thank you for your time, if you have any questions, please email me at: hudsonvsm@gmail.com