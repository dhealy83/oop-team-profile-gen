function generateHTML(teamArray) {
  const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- bootstrap link -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <!-- Header elements -->
    <header>
      <div class="bg-dark text-white text-center fs-1 col-12">My team</div>
    </header>
    <main class="d-flex m-3 justify-content-center">
      <section
        class="container row m-0 d-flex flex-wrap justify-content-center space-evenly"
      >

    ${teamArray.map((employee) => {
      let special;
      if (employee.getRole() === "Manager") {
        special = "Office_Number";
      } else if (employee.getRole() === "Engineers") {
        special = "GitHub";
      } else {
        special = "School";
      }
      return `<div
            class="card shadow-md m-3 col-3 bg-primary shadow"
            style="width: 18rem"
          >
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <p class="card-text text-white">
                ${employee.getRole()}
              </p>
            </div>
            <ul class="list-group list-group-flush bg-primary">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">EMAIL: <a href="mailto:${
                employee.email
              }">${employee.email}</a>
              </li>
              <li class="list-group-item">${special}: <a href="https://github.com/${
        employee[special]
      }" target= "_blank">${employee[special]}</a></li>
            </ul>
          </div>`;
    })}

        <!-- Cards in here and fully built them out. Then add text dynamically. -->
        

      </section>
    </main>
    <script src="../index.js"></script>
  </body>
</html>
`;

  return template;
}

module.exports = generateHTML;
