const fs = require('fs');
const { question } = require('../utils/readline');

async function updateOpenid(prompt = '请输入openid：') {
  let openid = '';
  do {
    openid = await question(prompt);
    if (!openid) {
      console.log('openid不能为空，请重新输入！');
    }
  } while (!openid);
  fs.writeFile('../data/openid.json', JSON.stringify({ openid }), err => {
    if (err) {
      throw err;
    }
  });
  return openid;
}

module.exports = updateOpenid;