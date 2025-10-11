const isLocalhost = 
window.location.hostname === "localhost" ||
 window.location.hostname === "127.0.0.1";

let url;
  
if(isLocalhost)
{
    url="http://localhost:8080/api";
}
else
{
    url="/api";
}