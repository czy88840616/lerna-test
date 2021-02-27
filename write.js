const { writeFileSync } = require('fs');
const { join } = require('path');

writeFileSync(join(__dirname, 'version.json'), 'hello');
