###Week 3 Homework - Due 1/31/15 at 11:59pm5

Create the game SnowMan as a Node.js Command Line App.

#####Guidelines

[1] The app should run from the command line and display a help menu by typing:

    node app.js -h

 This way I know how to run your app and if I should pass any arguments.

[2] The app should pick a word at random.  The word should not be hard coded. All words for the app to use should be contain in a separate file.

[3] The app should follow the rules that are outlined in the below section on How the Game is Played.

[4] At the end of a game (win or lose) the app should prompt the user to ask if they want to play a new game.  If yes - a new game is started.  If no - exit the program.

[5] It is not mandatory to draw the SnowMan on the console.  But the app should inform the player if the guess is right or wrong, how many guesses are remaining and if the player loses the app should tell them the word.

 

#####How the Game Is Played:

The program random picks a word and prints a row of dashes, giving the number of letters in the word.

The guessing player now guesses a letter.

If the guessing player suggests a letter which occurs in the word, the program writes it in all its correct positions. And the player does not lose a guess.

If the suggested letter does not occur in the word, the program draws one element of a snowman stick figure. And the player loses a guess.

The game is over when - the guessing player completes the word.  Or the guessing player has used 5 guesses.