1. Prompts user for name and client side EMITS user name to server (create_user)

2. Server side LISTENS for user and EMITS (welcome_user) to ALL users that this user has entered the chatroom

3. Users can send messages and the client side will EMIT this message to the server.

4. The server will LISTEN for such messages and display them for all to see. 

5. Users can leave the chatroom and the server/client side will listen for such responses and send the appropriate response. 