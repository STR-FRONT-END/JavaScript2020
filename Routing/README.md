
* **Routing** is accessing information based on a url
* **Servers** are physical devices, usually housed with other servers in large warehouses, that run the “behind the scenes” work of the internet like data storage.
* **Network Request**, when you type a url in a browser and hit enter a network request fires, HTTP request happens on top of a TCPIP connection




#### Server-side
* When a browser's URL is changed, it will send a new request for a new page from the server. 
* A new document is served to the user.
* Causes the whole page to refresh, a new GET request is sent to the server which responds with a new document



#### Client-side
* When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as **Client-side routing**. 
* Client-side routing is a JavaScript managed routing option. It offers control over your site URL & content without necessarily having to wait for a server to respond with content. It is designed to mimic the appearance of traditional multi page websites.
* Javascript manipulates the url and changes it without causing actual request, we can then conditionally render things depending on the url, SO NO ACTUAL NETWORK REQUEST ARE BEING MADE (FrontEnd)





