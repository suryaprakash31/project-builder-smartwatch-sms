var date = new Date();
var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

//setting the upper date
document.querySelector("#upper-date").textContent = date.toLocaleString().split(",")[0];

document.querySelector("#messages").onclick = function () {
    //removing the main-content element
    var mainContent = document.querySelector("#main-content");
    mainContent.innerHTML = ''

    //creating the message container
    var messageContainer = document.createElement('div')
    messageContainer.id = "message-container"

    messageContainer.innerHTML = `
    <div id="html" onclick="onClick('html')">HTML</div>
    <div id="css" onclick="onClick('css')">CSS</div>
    <div id="js" onclick="onClick('js')">JS</div>
    `
    //appending the message container to the main content
    mainContent.appendChild(messageContainer)
}

function onClick(data) {
    var messageContent = document.querySelector("#message-container");
    messageContent.innerHTML = ''

    var message = document.createElement('p')
    switch (data) {
        case 'html':
            message.innerHTML = 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
            break;
        case 'css':
            message.innerHTML = 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. '
            break;
        case 'js':
            message.innerHTML = 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
            break;
    }

    //appending the message to the message container
    messageContent.appendChild(message)
}

//fetching the time
function fetchTime() {

    var mainContent = document.querySelector("#main-content");
    mainContent.innerHTML = `
    <h3 id="middle-time"></h3>
    <h4 id="day"></h4>
    `

    //updating the time for  every second
    setInterval(
        function () {
            document.querySelector("#middle-time").textContent = new Date().toTimeString().split(" ")[0]
        }, 1000
    )

    //setting the week day
    document.querySelector("#day").textContent = dayNames[date.getDay()]


}

//upon clicking the clock icon
document.querySelector("#clock").addEventListener("click",fetchTime)


//by deafult on window load it display the time
window.onload=()=>{
    fetchTime();
}