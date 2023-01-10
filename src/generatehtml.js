const generateCards = function (employees) {
  let html = "";
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].getRole() === "Manager") {
      html += `<div>${employees[i].getName()}</div>`;
    } else if (employees[i].getRole() === "Engineer") {
      html += `<div>${employees[i].getName()}</div>`;
    } else {
      html += `<div>${employees[i].getName()}</div>`;
    }
  }
  return html;
};

const generatePage = function (employees) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateCards(employees)}
</body>
</html>
  `;
};

module.exports = generatePage;
