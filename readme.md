# River Rumble!
Foundations project of Odin Project

## What I learned
Using an object-oriented paradigm might have made more sense here conceptually, but the functional style was simple to execute in this toy project. 

I did this to recap basics of DOM manipulation. Having spent a long time in React, I wanted to re-do this project from the Odin Project curriculum to see my own mindset on building this simple game without a UI framework.

I tried to abstract the game logic into functions that were as modular as possible to avoid the habit of many rock-paper-scissors implementations of creating a large `game()` function inhabited with verbose if-else blocks and repetitive lines of DOM updates. I also made use of `event.target` to dynamically add callbacks to the button nodelist.
