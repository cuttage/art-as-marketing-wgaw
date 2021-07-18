<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <div class="c-mrt">
    <div class="day day1">
      <div class="t-mrt">
        <span v-show="toggleMarta === false" class="spinner"></span>
        <div class="c-s-r-t-r-t-sb" v-once>
          <span class="temp tmp1">Marta Fattori</span>
          <h1 class="header">A couturière with a vision.</h1>
          <h2 class="sbhdr">Read my latest Medium article</h2>
          <h3 class="rg-txt">"Change in Fashion: A China Case-Study."</h3>
          <p class="rg-txt-sb">"Change in Fashion: A Case-Study. Lorem ipsum dolor sit"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ArticleWidgetDesk',
  computed: mapState(['toggleMarta'])
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/awidgetstyle.scss";
$blue: #03aaee;
$secondary: #87728e;
$d: 70px;
$c: rgba(0, 169, 157, 0.9);
$m: rgba(210, 85, 147, 0.9);
$g: 2.15219298245614rem;

@media only screen and (min-width: 1196px) {
  .c-mrt {
    background: linear-gradient(to right, rgba(32,28,41,0.2), rgba(32,28,41,0.2) 1px, rgba(23,20,29,0.2) 1px, rgba(23,20,29,0.2));
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4), inset -2px -2px 2px rgba(0, 0, 0, 0.4);
    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4), inset -2px -2px 2px rgba(0, 0, 0, 0.4);
    z-index: 998;
    overflow: hidden;
    position: absolute;
    left: 12px;
    top: 50px;
    width: 250px;
    height: 420px;
    box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 0.3) 0 0 0 0.3px, // min. 1px in Safari
      rgba(black, 0.66) 0 30px 60px 0;
    &:focus, &:hover {
      cursor: pointer;
      background: linear-gradient(rgba(39,38,27,0.4), rgba(39,38,27,0.3111111111111111), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2), rgba(64,64,37,0.2));
      transform: scale(1.022);
      transform-origin: 50% 50%;
      transition: all 0.4s ease;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 0.3) 0 0 0 0px, // min. 1px in Safari
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5.8px,
        inset rgba(white, 0.9) 0 0 0 6px;
    }
  }

  .spinner {
  	&, &:before {
      width: $d; height: $d;
      z-index: 7000;
  		border-radius: 50%;
      animation: ar 22.5s infinite linear;
  	}

    filter: saturate(1.3);
    display: grid;
    margin-left: 60px;
    margin-right: -60px;
  	box-sizing: border-box;
  	background: url('~assets/img/avatar.jpg?original&format=webp') 50%/ cover padding-box !important;
    box-shadow: 0 1px 1px rgba(0,0,0,0.125),
                0 2px 2px rgba(0,0,0,0.1),
                0 4px 4px rgba(0,0,0,0.075),
                0 8px 8px rgba(0,0,0,0.05),
                0 16px 16px rgba(0,0,0,0.025);
  }
  .t-mrt {
    margin-top: 12%;
    align-self: center;
    margin-left: 11%;
    width: 80%;
    font-family: 'Barlow', sans-serif;
    &:focus, &:hover {
      text-shadow: none !important;
    }
  }

  .header {
    font-size: 17px;
    line-height: 1.18;
    font-weight: 400;
    background: -webkit-gradient(linear, left top, right top, from(#f27881), to(#D25593));
    background: linear-gradient(to right, #f27881, #D25593);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sbhdr {
    font-weight: 400;
    font-size: 10px;
    text-transform: uppercase;
    background: -webkit-gradient(linear, left top, right top, from(#FFFAF0), to(#F5F5F5));
    background: linear-gradient(to right, #FFFAF0, #F5F5F5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .temp {
    align-self: center;
    font-size: 19px;
    margin-top: 40%;
    font-family: 'WindsorEF' !important;
    background: -webkit-gradient(linear, left top, right top, from(#f27881), to(#D25593));
    background: linear-gradient(to right, #f27881, #D25593);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .rg-txt {
    font-size: 22px;
    line-height: 1.45;
    text-transform: uppercase;
    background: -webkit-gradient(linear, left top, right top, from(#FFFAF0), to(#F5F5F5));
    background: linear-gradient(to right, #FFFAF0, #F5F5F5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .rg-txt-sb {
    font-size: 12px;
    line-height: 1.55;
    margin-top: 6%;
    background: -webkit-gradient(linear, left top, right top, from(rgba(255,250,240,0.8)), to(rgba(245,245,245,0.5)));
    background: linear-gradient(to bottom, rgba(255,250,240,0.8), rgba(245,245,245,0.5));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.spinner::after {
  width: $d - 5px; height: $d - 5px;
  border-radius: 10%;
}

@keyframes ar {
  25%,
  75% {
    border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
  }
  50% {
    border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
  }
}
</style>
