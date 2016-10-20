# HTTP POST demo
A number minus another number through POST method.

`Console.log` is a good method to debug, but you should be careful. Don't let `Console.log` be the bug. For example, 
`console.log("Req.body: ",req.body)` can show the http request body information, like `{ firstNum: '16', secondNum: '2' }`. But `console.log("Req.body: "+req.body)` will throw **Cannot convert object to primitive value** exception.

**Note that "Req.body" is used by POST method, while "Req.query" is by GET.**
## Reference
[What is HTTP POST request method?][1]

[1]: http://www.w3schools.com/tags/ref_httpmethods.asp "httpmethod"
