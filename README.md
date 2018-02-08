## React Slick
  React Slick is a Carouseling library built for react. With some beautiful documentation. <a href='https://github.com/akiran/react-slick'>Click here to see the docs</a> Or <a href=''>here to see some Demos</a>

## Installing
```bash
npm install react-slick
```

```bash
yarn add react-slick
```

<strong><u>Then You need to do one of these two things. </u></strong>

1. Install Slick Carousel for css and font 

```bash 
npm install slick-carousel
```
and add this to your css
```css
@import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css";
```

<strong><u>-- OR --</u></strong>

2. add cdn link in your html above the closing body tage

```html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```

## Simpliest example
```html

<Slider dots={true}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Slider>

```

## I have set up some basic examples using divs
to view them and play around please fork, clone, and play!

to see a full list of possible props please visit the <a href='https://github.com/akiran/react-slick' >github repo for react-slick</a>