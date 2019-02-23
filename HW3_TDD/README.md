## How to run unittest in JavaScript?

### Step 0: Open cmd and clone your repo from github.

`cd path/to/your/fileholder`
`git clone url/to/your/repo`

### Step 1: Initial enviroment.
`npm init`

### Step 2: Install some packages for test.
`npm install`
`npm install chai` or `npm install -global chai`
`npm install mocha` or `npm install -global mocha`

### Step 3: Open package.json and change scripts path for tests.
`"scripts": {
    "test": "node ./node_modules/mocha/bin/mocha"
  }`

### Step 4: Write our own test cases and then test.
`npm test path/to/your/test.js` or `mocha path/to/your/test.js`

### Step 5: Iterate TDD process and finally submit code. (Git bach in your fileholder)
`git init

git add . (or git add -A)

git commit -m 'commit_message'

git push origin`
