### Node // Angular Project - DUE 3/28/2015 11:59pm

##### PART 1 - 40 pts

Build a web application using Node.js and Angular.js that allows a user to search for a Marvel Character by name using the Marvel Developer's API

    -- Implement a server with Node.js using the express framework
    -- Implement client side using Angular.js and Jade or EJS (no jQuery)

    -- IF the search is successful - user should see details (name and description) about the character searched
    -- IF the search is NOT successful - user should see a message indicating no results found


##### Additional Details

    -- Sign up for an API key - http://developer.marvel.com/
    
    -- Base REQUEST Format - https://developer.marvel.com/documentation/authorization
    
      -- http://gateway.marvel.com/v1/public/comic?apikey=xxxx&ts=xxxx&hash=xxxx
        -- apikey = your assigned PUBLIC api key after registering at developer.marvel.com
        
        -- ts (timestamp) = the current time 
           *HINT*: how do we get time (not date) in JavaScript ??
           
        -- hash = MD5 hash of (ts + private key + public key)
           *HINT*: http://nodejs.org/api/crypto.html


##### Extra Credit

    -- Display the searched character image - 5 pts
    -- Originality of Web Design - up to 10 pts

