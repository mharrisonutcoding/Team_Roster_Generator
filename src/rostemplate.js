// Manger generated card
const renderManager = function (manager) {
  return `
    <div class="col-4 mt-2 pb-1">
        <div class="card">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h5>Manager</h5>
            </div>

            <div class="card-body">
                <p class="id"> ID: ${manager.id}</p>
                <p class="email"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office"> Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

// Engineers card
const renderEngineer = function (engineer) {
  return `
    <div class="col-4 mt-2 pb-1">
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h5>Engineer</h5>
            </div>

            <div class="card-body">
                <p class="id"> ID: ${engineer.id}</p>
                <p class="email"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github"> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

// Interns card
const renderIntern = function (intern) {
  return `
    <div class="col-4 mt-2 pb-1">
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h5>Manager</h5>
            </div>

            <div class="card-body">
                <p class="id"> ID: ${intern.id}</p>
                <p class="email"> Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school"> School Attended: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
    rosterArray = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      // call manager function
      if (role === "Manager") {
        const managerCard = renderManager(employee);
  
        rosterArray.push(managerCard);
      }
  
      // call engineer function
      if (role === "Engineer") {
        const engineerCard = renderEngineer(employee);
  
        rosterArray.push(engineerCard);
      }
  
      // call intern function
      if (role === "Intern") {
        const internCard = renderIntern(employee);
  
        rosterArray.push(internCard);
      }
    }
  
    // joining strings
    const employeeCards = rosterArray.join("");
  
    // return to generated page
    const generateRoster = generateTeamRoster(employeeCards);
    return generateRoster;
  };

const generateTeamRoster = function (employeeCards) {   
    return`
          <!DOCTYPE html>
          <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Team-Roster</title>
                  <link rel="stylesheet" href="style.css">
              </head>
              <body>
                  <header>
                      <nav class="navbar" id="navbar">
                          <span class="navbar-brand mb-1 h1 w-100 text-center" id="navbar-text">Team Roster</span>
                      </nav>
                  </header>
                  <main>
                      <div class="container">
                          <div class="row justify-content-center" id="team-cards">
                              <!--Team Roster Cards-->
                              ${employeeCards}
                          </div>
                      </div>
                  </main>
              </body>
              <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          </html>
      `;
  };

  // export to index
  module.exports = generateHTML;
