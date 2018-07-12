// 生产环境
let isPrd = process.env.ENV === 'prd';
let domain = isPrd ? 'https://www.aaa.com' : 'http://localhost:3000';

export default {
  'testUrl': domain + '/test.do'
};