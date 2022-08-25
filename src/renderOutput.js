function renderIndex(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Team</title>

    <!--local css-->
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
    <!--fontawesome link-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <!--google fonts import-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Bitter&family=Cutive+Mono&family=Fira+Sans:wght@300&display=swap');
    </style>
    
</head>
<body>
    <header><h1>Meet The Team</h1></header>
    <section id="theTeam">

    ${renderTeam(data)}

    </section>
</body>
</html>
    `;
}

function renderTeam(data) {
    let teamHTML = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].role == "employee") {
            teamHTML += `
<${data[i].role}>
    <h3>${data[i].name}</h3>
    <h4>${data[i].role} #${data[i].id}</h4>
    <div class="contactIcon">
        <i class="fas fa-envelope"></i>
        <div class="contactText">
            <a href="mailto:${data[i].email}">
                ${data[i].email}
            </a>
        </div>
    </div>
</${data[i].role}>
            `
        }
        if (data[i].role == "engineer") {
            teamHTML += `
<${data[i].role}>
    <h3>${data[i].name}</h3>
    <h4>${data[i].role} #${data[i].id}</h4>
    <div class="contactIcon">
        <i class="fas fa-envelope"></i>
        <div class="contactText">
            <a href="mailto:${data[i].email}">
                ${data[i].email}
            </a>
        </div>
    </div>
    <div class="contactIcon">
        <i class="fab fa-github"></i> 
        <div class="contactText">
            <a href="https://github.com/${data[i].gitName}">
                ${data[i].gitName}
            </a>
        </div>
    </div>
</${data[i].role}>
            `
        }
        if (data[i].role == "manager") {
            teamHTML += `
<${data[i].role}>
    <h3>${data[i].name}</h3>
    <h4>${data[i].role} #${data[i].id}</h4>
    <div class="contactIcon">
        <i class="fas fa-envelope"></i>
        <div class="contactText">
            <a href="mailto:${data[i].email}">
                ${data[i].email}
            </a>
        </div>
    </div>
    <div class="contactIcon">
        <i class="fas fa-building"></i>
        <div class="contactText">
            Office #${data[i].officeNum}
        </div>
    </div>
</${data[i].role}>
            `
        }
        if (data[i].role == "intern") {
            teamHTML += `
<${data[i].role}>
    <h3>${data[i].name}</h3>
    <h4>${data[i].role} #${data[i].id}</h4>
    <div class="contactIcon">
        <i class="fas fa-envelope"></i>
        <div class="contactText">
            <a href="mailto:${data[i].email}">
                ${data[i].email}
            </a>
        </div>
    </div>
    <div class="contactIcon">
        <i class="fas fa-graduation-cap"></i>
        <div class="contactText">
            ${data[i].school}
        </div>
    </div>
</${data[i].role}>
            `
        }
    }
    return teamHTML;
}
// exporting the genmarkdown function to index.js
module.exports = renderIndex;