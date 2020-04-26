# DBQ Tournament Organizer
A simple chat bot to help run the DBQ Tournaments on Challonge.

## Adding the bot to a Discord server
1. Visit https://discordapp.com/oauth2/authorize?client_id=695052247616454657&scope=bot
2. Select the server you want to add the bot to
3. Click Authorize

## Running a Tournament
1. Create a tournament on Challonge with the following criteria: 
    - Take note of the tournament ID. This will be used later.
    ![Tournament ID on Challonge](/img/tournament-id.png)
    
    - Make sure to create a single stage tournament as the Challonge API does not work with a Two Stage Tournament. 
    - Under Advanced Options select 'Share admin access to this tournament (select to specify usernames).' and add 'CrashCourse'. This is required so that the bot can make changes to the tournament.
    ![Permissions](/img/permissions.png)

2. Go to Discord and set the ID using the '/set-id \<id>' command. 
    - This is an admin only command to prevent server members from changing the tournament id.
3. Discord members can now sign up for the tournament using '/sign-me-up' or '/sign-up \<name>'
