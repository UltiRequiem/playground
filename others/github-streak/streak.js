const { exec } = require("child_process");

/**
 * Execute a command
 * @param {Number} days
 */
function getStreak(days) {
  for (let i = 0; i < days; i++) {
    exec(`git commit --allow-empty --date='${i} day ago' -m 'One line'`);
  }
}

getStreak(500);
