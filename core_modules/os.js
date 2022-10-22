const os = require("os");

const totalMemoryInGB = `${os.totalmem() / 1073741824} GB`;
const freeMemory = `${os.freemem() / 1073741824} GB`;
const memoryInfo = { total: totalMemoryInGB, free: freeMemory };

console.table(memoryInfo);

const name = os.platform();
const version = `${os.version()}`;
const type = `${os.hostname()}`;
const architecture = os.arch();
const host = os.hostname();

const allSystemDetails = {
  name: name,
  version: version,
  type: type,
  arch: architecture,
  host: host,
};
console.table(allSystemDetails);
