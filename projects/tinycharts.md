---
title: Tiny Charts
description: CSS Charts
date: 2021-02-19
---

# Motivation

When building my personal blog, I came across a problem.

I needed to display a bar chart. Simple problem, right? I can think of 2 ways of doing it:

*   draw in Google Spreadsheets and insert the image
*   import a large canvas-based chart drawing library

I didn't want to bother with opening Google Spreadsheets, generating a bar chart, screenshotting it, pasting the image here... It was a cumbersome process, not to mention it would lead to problems with theming.

I realised that I didn't need a large canvas library to draw some of the basic charts I wanted, so I opted for creating my own simple library.

# Example

```html
<div class="bars" style="--max: 86">
  <div style="--v: 86; --l: '86%'">Rust</div>
  <div style="--v: 67; --l: '67%'">TS</div>
  <div style="--v: 66; --l: '66%'">Python</div>
  <div style="--v: 63; --l: '63%'">Kotlin</div>
  <div style="--v: 62; --l: '62%'">Go</div>
  <div style="--v: 62; --l: '62%'">Julia</div>
  <div style="--v: 62; --l: '62%'">Dart</div>
  <div style="--v: 52; --l: '52%'">Haskell</div>
  <div style="--v: 44; --l: '44%'">Java</div>
</div>
```
<div class="bars" style="--max: 86; --c: red">
  <div style="--v: 86; --l: '86%'; --c: blue">Rust</div>
  <div style="--v: 67; --l: '67%'">TS</div>
  <div style="--v: 66; --l: '66%'">Python</div>
  <div style="--v: 63; --l: '63%'">Kotlin</div>
  <div style="--v: 62; --l: '62%'">Go</div>
  <div style="--v: 62; --l: '62%'">Julia</div>
  <div style="--v: 62; --l: '62%'">Dart</div>
  <div style="--v: 52; --l: '52%'">Haskell</div>
  <div style="--v: 44; --l: '44%'">Java</div>
</div>

<style>
.bars>div::before, .hbars>div::after {
  border-radius: 5px;
  background: var(--c, var(--c-link));
}

.bars>div::after, .hbars>div::before {
  font-size: 0.9em;
  color: var(--app-c-alt);
}

.hbars div {
  margin: 5px 0;
}
  </style>