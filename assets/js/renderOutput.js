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
    for (i = 0; i < data.length; i++) {
        if (data.role == "employee") {
            team += `
<${data.role}>
<div class="empFlex">
<h3>${data.name}</h3>
<h4>${data.role} #${data.id}</h4>
<div class="contactIcon">
<i class="fas fa-envelope"></i>
<div class="contactText">
${data.email}
</div>
</div>
</div>
</${data.role}>
            `
        }
        if (data.role = "engineer") {
            team += `
<${data.role}>
<div class="empFlex">
<h3>${data.name}</h3>
<h4>${data.role} #${data.id}</h4>
<div class="contactIcon">
<i class="fas fa-envelope"></i>
<div class="contactText">
${data.email}
</div>
</div>
<div class="contactIcon">
<i class="fab fa-github"></i> 
<div class="contactText">
<a href="https://github.com/${data.gitName}">${data.gitName}</a>
</div>
</div>
</div>
</${data.role}>
            `
        }
        if (data.role == "manager") {
            team += `
<${data.role}>
<div class="empFlex">
<h3>${data.name}</h3>
<h4>${data.role} #${data.id}</h4>
<div class="contactIcon">
<i class="fas fa-envelope"></i>
<div class="contactText">
${data.email}
</div>
</div>
<div class="contactIcon">
<i class="fas fa-building"></i>
<div class="contactText">
Office #${data.officeNum}
</div>
</div>
</div>
</${data.role}>
            `
        }
        if (data.role == "intern") {
            team += `
<${data.role}>
<div class="empFlex">
<h3>${data.name}</h3>
<h4>${data.role} #${data.id}</h4>
<div class="contactIcon">
<i class="fas fa-envelope"></i>
<div class="contactText">
${data.email}
</div>
</div>
<div class="contactIcon">
<i class="fas fa-graduation-cap"></i>
<div class="contactText">
${data.school}
</div>
</div>
</div>
</${data.role}>
            `
        }
        return team;
    }
}
// exporting the genmarkdown function to index.js
module.exports = renderIndex;