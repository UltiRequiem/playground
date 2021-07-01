const { exec } = require('child_process');

function getStreak(days) {
  for (let i = 0; i < days; i++) {
    exec(
      `git commit --allow-empty --date='${i} day ago' -m 'Nothing to view here'`
    );
  }
}

getStreak(500)
