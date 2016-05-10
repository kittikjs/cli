# kittik-cli

![Downloads](https://img.shields.io/npm/dm/kittik-cli.svg)
![Downloads](https://img.shields.io/npm/dt/kittik-cli.svg)
![npm version](https://img.shields.io/npm/v/kittik-cli.svg)
![License](https://img.shields.io/npm/l/kittik-cli.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/kittikjs/cli.svg)
![dev dependencies](https://img.shields.io/david/dev/kittikjs/cli.svg)

CLI tool for starting Kittik presentations.

## Getting Started

Install it via npm:

```shell
npm install -g kittik-cli
```

Create your presentation:

```shell
kittik create my_presentation
```

Start your presentation:

```shell
kittik start my_presentation.yml
```

## Example

Here is an example how you can declare your yml file:

```yml
# Array of shapes available in all slides by name
shapes:
  - name: "Hello"
    type: "FigText"
    options:
      text: "Hello, Kittik"
      x: "center"
      y: "middle"
      font: "Ghost"

# Array of animations available in all slides by name
animations:
  - name: "Print"
    type: "Print"
    options:
      duration: 2000

# Array of slides in your presentation
slides:
    # Array of shapes, but available only in this slide
  - shapes:
      - name: "Local Shape"
        type: "Text"
        options:
          text: "Local Shape"
    # Array of animations, but available only in this slide
    animations:
    # Array with order of rendering the shapes
    # Format: <shape>::<animation1>-><animation2>
    order:
      - "Hello::Print->Print"
```

## License

The MIT License (MIT)

Copyright (c) 2015-2016 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
