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


