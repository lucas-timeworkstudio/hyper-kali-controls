# Hyper-kali-controls! [![npm-version][npm-badge]][npm-link]

A plugin that makes the close, minimize and maximize buttons look like the kali linux window controls. This plugin is tested in both linux and windows.

![hyper-kali-controls][screenshot]

### Install

**Hyper store**:  
Install using `hyper i hyper-kali-controls`

**Manually**:  
1. Open Hyper preferences (or edit them manually at `~/.hyper.js`  with your editor).
2. Update your list of plugins to include hyper-kali-controls, like so:
```javascript
plugins: [
	'hyper-kali-controls'
],
```
3. Reload (`Ctrl+Shift+R`) or restart Hyper

### Config

It makes use of `showWindowControls` to determine where to place the controls. To move the controls to the left side, change your config to the following:
```javascript
module.exports = {
  config: {
    ...
    showWindowControls: 'left',
    ...
  }
}
```

**Flip controls**  
Default value is `true`

```javascript
module.exports = {
  config: {
    ...
      hyperkaliControls: {
        flipped: true,
      }
    ...
  }
}
```

### Changelog
**1.2.0**
- Fixed issue with latest version of HyperJS

**1.1.2**
- Add flipped versions again (see config option above)

**1.1.0**
- Update to work with Hyper 2.0
- Remove flipped versions (they are on my todo)
- Remove package specific config options and make use of `showWindowControls` instead.

**1.0.4**
- Add left and right-flipped options

### License

MIT © [krve][author]

[screenshot]: https://cloud.githubusercontent.com/assets/5139119/21655977/766986e0-d2bc-11e6-8182-fd48c55c4416.png
[npm-badge]:  https://img.shields.io/npm/v/hyper-kali-controls.svg?style=flat-square
[npm-link]:   https://www.npmjs.com/package/hyper-kali-controls
[author]:     https://github.com/krve
