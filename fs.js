const fs = require("fs");
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");
const path = require("path");

const users = [
  { name: "avi", last: "levy" },
  { name: "baruch", last: "menachem" },
  { name: "dave", last: "shapel" },
];

const removeFilesAndFolders = async () => {
  try {
    const users = await readdir(`${__dirname}/users`);
    users.forEach(async (user) => await unlink(`${__dirname}/users/${user}`));
    await rmdir(`${__dirname}/users`);
  } catch (error) {
    console.log(error.message);
  }
};

const makeAndRemoveFilesAndFolder = async () => {
  try {
    const isExists = fs.existsSync(`${__dirname}/users`);
    if (isExists) return await removeFilesAndFolders();
    await mkdir(`${__dirname}/users`);
    await writeFile(`${__dirname}/users/test.pdf`, `the user name in pdf is: `);
    for (let index = 0; index < 4; index++) {
      await writeFile(
        `${__dirname}/users/${users[index].name}_${users[index].last}.txt`,
        `the user name is: ${users[index].name}_${users[index].last}`
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};
makeAndRemoveFilesAndFolder();

const removeAfterFiveSeconds = setTimeout(async () => {
  await removeFilesAndFolders();
}, 5000);
