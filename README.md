![npm](https://img.shields.io/npm/v/eslint-config-manpacker-react.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-config-manpacker-react.svg)
![npm](https://img.shields.io/npm/dw/eslint-config-manpacker-react.svg)
![NPM](https://img.shields.io/npm/l/eslint-config-manpacker-react.svg)
<br><br>
![nodei.co](https://nodei.co/npm/eslint-config-manpacker-react.png?downloads=true&downloadRank=true&stars=true)
<br>
## Explain
This project uses parser <code>"babel-eslint"</code><br/>
And plugin <code>"react"</code>.<br> Inherits <code>"manpacker"</code>

## Install
```
npm install eslint -D

npm install eslint-config-manpacker-react -D
```
## Usage

- Add &nbsp;<code>.eslintrc</code> &nbsp; file to your project. &nbsp;<br/>
 Or <code>.eslintrc</code> file does not exist, Create a new file.

```
npx eslint --init
```

Configuration content of file.

```
{
  "extends": ["manpacker-react"]
}
```
- You can add a configuration entry to the <code>package.json</code> file as follows.

```
"eslintConfig": {
  "extends": ["manpacker-react"]
}
```
Refer to the following configuration.<br>
Example:<br>
```
"eslintConfig": {
  "root": true,
  "extends": ["manpacker-react"],
  "rules": {}
}
```

## Npm
[link](https://www.npmjs.com/package/eslint-config-manpacker-react)
