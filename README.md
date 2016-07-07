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

## Walkthrough

Let me show you the process of creating a presentation step by step.

First of all, you need to create an empty YAML file.
You can do this by `touch my-presentation.yml` or scaffold it via `kittik create my-presentation`.
For educational purposes, I'll create an empty YAML file called `my-presentation.yml`.

Let's add our first slide declaration.
Since our slides is an array of objects with slide declaration, we need to declare it as an array of objects:

```yaml
slides:
  - shapes:
    animations:
    order:
```

It is our first slide, but it's empty for now.
We need to declare some shape in it.
You can achieve this by adding an item into `shapes` array.
`shapes` is an array of objects with shapes declaration:

```yaml
slides:
  - shapes:
    - name: "Our Shape Name"
      type: "FigText"
      options:
        text: "Hello, Kittik"
        x: "center"
        y: "middle"
        font: "Ghost"

    animations:
    order:
```

We have our first shape, which renders "Hello, Kittik" in the center of a terminal via Fig fonts.
Now, we need to say that we want this shape renders in specified order.
`order` is an array of strings where you specify the name of a shape and animations to play:

```yaml
slides:
  - shapes:
    - name: "Our Shape Name"
      type: "FigText"
      options:
        text: "Hello, Kittik"
        x: "center"
        y: "middle"
        font: "Ghost"

    animations:
    order:
      - "Our Shape Name"
```

You can run the presentation via `kittik start my-presentation.yml` now.
You will see our shape successfully rendered in a terminal.

![kittik](https://cloud.githubusercontent.com/assets/3625244/16656135/28b6a372-4466-11e6-9c26-3e8bb28b8d75.png)

What about animations?

Let's add some simple animation.
My favorite one is printing a text.
Add a similar declaration as in shapes, but in `animations` property.
`animations` is an array of objects where animations declaration are live:

```yaml
slides:
  - shapes:
      - name: "Our Shape Name"
        type: "FigText"
        options:
          text: "Hello, Kittik"
          x: "center"
          y: "middle"
          font: "Ghost"

    animations:
      - name: "Our Animation Name"
        type: "Print"
        options:
          duration: 4000
          easing: "outBounce"

    order:
      - "Our Shape Name::Our Animation Name"
```

Take an attention to how `order` property was changed.
I've added `::` and animation name that we declared previously.
That way, I'm saying to Kittik I want to render `Our Shape Name` with animation `Our Animation Name`.

Run the presentation:

![kittik](https://cloud.githubusercontent.com/assets/3625244/16656376/21906c08-4467-11e6-91ce-d9989c222629.gif)

In this guide, I showed you how to create a simple presentation.
If you want to go deeper here, I'd recommend you visit [these guides in kittik repository](https://github.com/kittikjs/kittik/tree/dev/doc/guides).

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
