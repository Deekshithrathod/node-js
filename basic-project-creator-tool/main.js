const fs = require("fs");

const args = process.argv.slice(2);

const project_name = args.length === 0 ? "new-project" : args[0];

const HTML_TEXT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        Hello World
    </div>
    <script src="./js/script.js"></script>
</body>
</html>
`;

const CSS_TEXT = `* {
  box-sizing: border-box;
}
body {
  font-size: 20px;
  color: red;
  margin: 0;
  padding: 0;
}
`;
const JS_TEXT = `function init() {
  console.log('Hello from the Console');
}
window.onload = init;
`;

// create project folder
fs.mkdir(project_name, { recursive: true }, (err) => {
  if (err) throw err;
  // create index.html in project folder
  console.log(`Created ${project_name}/`);
  fs.writeFile(`${project_name}/index.html`, HTML_TEXT, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Created index.html");
  });

  // create css & css/styles.css
  const CSS_PATH = `${project_name}/css`;
  fs.mkdir(CSS_PATH, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`Created ${CSS_PATH}`);
    fs.writeFile(`${CSS_PATH}/styles.css`, CSS_TEXT, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(`Created ${CSS_PATH}/styles.css`);
    });
  });

  // create js & js/index.css
  const JS_PATH = `${project_name}/js`;
  fs.mkdir(JS_PATH, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`Created ${JS_PATH}`);
    fs.writeFile(`${JS_PATH}/index.js`, JS_TEXT, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(`Created ${JS_PATH}/index.js`);
    });
  });
});
