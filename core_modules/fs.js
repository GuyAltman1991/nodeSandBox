const fs = require("fs");
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");
const path = require("path");

const users = [
  { name: "avi", last: "levy" },
  { name: "baruch", last: "menachem" },
  { name: "dave", last: "shapel" },
];

const makeAndRemoveFilesAndFolder = async () => {
  try {
    const isExists = fs.existsSync(`${__dirname}/users`);
    if (!isExists) {
      await mkdir(`${__dirname}/users`);
      makeFiles();
    }

    const files = await readdir(`${__dirname}/users`);
    if (!files.length) makeFiles();

    setTimeout(async () => {
      try {
        const files = await readdir(`${__dirname}/users`);
        files.forEach(async (file) => {
          try {
            await unlink(`${__dirname}/users/${file}`);
          } catch (error) {
            console.log(error.message);
          }
        });
        await rmdir(`${__dirname}/users`);
      } catch (error) {
        console.log(error.message);
      }
    }, 5000);
  } catch (error) {
    console.log(error.message);
  }
};

const makeFiles = async () => {
  users.forEach(async (user) => {
    await writeFile(
      `${__dirname}/users/${user.name}_${user.last}.txt`,
      `the user name is: ${user.name}_${user.last}}`
    );
  });
};
makeAndRemoveFilesAndFolder();
