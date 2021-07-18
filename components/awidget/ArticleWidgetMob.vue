<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div class="c-mrt">
    <div class="p-cntnr t-mrt">
      <div class="c-s-r-t-r-t-sb">
        <small class="tmp1">
          Marta Fattori
        </small>
        <small class="sbhdr">
          Read my latest Medium article
        </small>
        <h3 class="rg-txt">"Change in Fashion: A China Case-Study."</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-mrt {
  margin-bottom: 1em;
}
.c-mrt .c-s-r-t-r-t-sb {
  will-change: opacity;
  opacity: 0.3;
}

.c-mrt {
  will-change: opacity;
  opacity: 1;
  background: linear-gradient(to right, rgba(32,28,41,0.2), rgba(32,28,41,0.2) 0.030745614035088rem, rgba(23,20,29,0.2) 0.030745614035088rem, rgba(23,20,29,0.2));
  border-radius: 0.307456140350877rem;
  -webkit-box-shadow: inset 0.061491228070175 0.061491228070175rem 0.061491228070175rem rgba(255, 255, 255, 0.4), inset -0.061491228070175rem -0.061491228070175rem 0.061491228070175rem rgba(0, 0, 0, 0.4);
  box-shadow: inset 0.061491228070175rem 0.061491228070175rem 0.061491228070175rem rgba(255, 255, 255, 0.4), inset -0.061491228070175rem -0.061491228070175rem 0.061491228070175rem rgba(0, 0, 0, 0.4);
  z-index: 998;
  overflow: hidden;
  position: relative;
  margin-left: 1.106842105263159rem;
  margin-right: 1.106842105263159rem;
  width: auto;
  height: auto;
  box-shadow: rgba(white, 0.2) 0 0 1.229824561403509rem 0.153728070175439rem, rgba(white, 0.3) 0 0 0 0.009223684210526rem, // min. 1px in Safari
    rgba(black, 0.66) 0 0.922368421052632rem 1.844736842105263rem 0;
  &:focus, &:hover {
    opacity: 1;
    cursor: pointer;
    background: linear-gradient(rgba(39,38,27,0.4), rgba(39,38,27,0.3111111111111111), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2));
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: all 0.4s ease;
    box-shadow: rgba(white, 0.2) 0 0 1.229824561403509rem 0.153728070175439rem, rgba(white, 0.3) 0 0 0 0, // min. 1px in Safari
      rgba(black, 0.66) 0 0.922368421052632rem 1.844736842105263rem 0, inset #333 0 0 0 0.178324561403509rem,
      inset rgba(white, 0.9) 0 0 0 0.184473684210526rem;
  }
  &:focus .c-s-r-t-r-t-sb,
  &:hover .c-s-r-t-r-t-sb {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
}

/* experimental feature: 375px limit in layout */
@media only screen and (max-device-width: 290px) and (orientation: portrait),
only screen and (max-width: 368px),
only screen and (max-width: 375px) and (max-resolution: 2.88dppx), // limit until 375px excluding iPhone 12 mini
only screen and (max-width: 375px) and (-webkit-max-device-pixel-ratio: 2.88),
only screen and (max-width: 460px) and (max-resolution: 1.6687500000dppx), // limit until 460px devices with max-resolution: 1.6687500000dppx (especially galaxy note II)
only screen and (max-width: 460px) and (-webkit-max-device-pixel-ratio: 1.6687500000),
only screen and (max-device-width: 480px) and (max-resolution: 2dppx) and (orientation: landscape), // limit anything below iPhone 4s in landscape
only screen and (max-device-width: 480px) and (-webkit-max-device-pixel-ratio: 2) and (orientation: landscape),
only screen and (max-height: 566px) and (min-aspect-ratio: 1/1) {
  .c-mrt {
    margin-top: -3em;
  }
}

.sbhdr {
  line-height: inherit !important;
}

.rg-txt {
  display: inline-block !important;
  font-size: 0.67640350877193rem; /*with bangla MN*/
  line-height: 1.89 !important; /*with bangla MN*/
  text-transform: uppercase;
  background: -webkit-gradient(linear, left top, right top, from(#FFFAF0), to(#F5F5F5));
  background: linear-gradient(to right, #FFFAF0, #F5F5F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sbhdr {
  padding-top: 3px;
  padding-bottom: 3px;
  font-family: sans-serif !important;
  letter-spacing: 0.04em;
  display: inline-block;
  line-height: 2.8;
  font-weight: 560 !important;
  text-rendering: geometricPrecision;
  text-transform: uppercase;
  background: -webkit-gradient(linear, left top, right top, from(#FFFAF0), to(#F5F5F5));
  background: linear-gradient(to right, #FFFAF0, #F5F5F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

div {
	display: flex;
	flex-direction: column;
}

.p-cntnr {
	padding: 30px;
}

.p-cntnr h3 {
  letter-spacing: 1.2px !important;
  line-height: 1.5;
  padding-top: 3px;
  padding-bottom: 3px;
  text-rendering: geometricPrecision;
}

.p-cntnr small {
	font-size: 0.75em;
}

.p-cntnr small:nth-of-type(2)  {
	text-transform: uppercase;
  opacity: 0.6;
}

.p-cntnr small:nth-of-type(1)  {
  opacity: 1;
}

.tmp1 {
  margin: 0;
  display: inline-block;
  line-height: 1;
  font-weight: 400;
  font-family: 'WindsorEF' !important;
  background: -webkit-gradient(linear, left top, right top, from(#f27881), to(#D25593));
  background: linear-gradient(to right, #f27881, #D25593);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.t-mrt {
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.5px;
  width: 80%;
  margin: auto;
  font-family: "Helvetica Neue Roman", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important;
  &:focus, &:hover {
    text-shadow: none !important;
  }
}
</style>
