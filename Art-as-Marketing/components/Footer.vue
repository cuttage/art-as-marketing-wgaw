<!--Copyright (c) 2021 Marta Fattori-->
<!--This code is licensed under MIT license (see LICENSE-MIT for details)-->
<template>
  <!--eslint-disable-->
  <footer class="footer">
    <section class="footer-ttts">
      <div class="ttt" style="">
        <a href="/events">
          <h6>Contact</h6>
        </a>
      </div>
      <div class="ttt" style="">
        <a href="/events">
          <h6>Cuttage</h6>
        </a>
      </div>
      <div class="ttt" style="">
        <a href="/">
          <h6>Legal</h6>
        </a>
      </div>
    </section>
    <section class="footer-bottom">
      <section class="footer-credits">
        <p> ©2021 <cite>Art as Marketing</cite></p>
      </section>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.03);
  text-align: center;
  font-size: 0.368947368421053rem;
  font-size: 0.368947368421053rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #d25593;
  text-decoration: none;
  transition: 0.2s opacity ease;
  z-index: 5000;
  cursor: pointer;
  border-bottom: calc(0.55px + 0.007vw) solid rgba(255, 255, 255, 0.35);
  max-height: 25px;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

a,
a:visited,
a:active {
  font-weight: bold;
  text-decoration: none;
  padding-left: 2em;
}

section {
  display: flex;
}

p {
  -moz-font-feature-settings: 'liga', 'kern', 'onum';
  -moz-font-feature-settings: 'liga=1, kern=1', 'onum=1';
  -ms-font-feature-settings: 'liga', 'kern', 'onum';
  -o-font-feature-settings: 'liga', 'kern', 'onum';
  -webkit-font-feature-settings: 'liga', 'kern', 'onum';
  font-feature-settings: 'liga', 'kern', 'onum';
}

h6 {
  line-height: 1.084;
}

h6 {
  font-family: "proxima-nova-condensed", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-size: 0.328947368421053rem;;
  letter-spacing: .1em;
  text-transform: uppercase;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.ttt:last-of-type {
  margin: 0 2em 0 0;
}
.ttt a {
  display: flex;
  flex-direction: row;
}
.ttt a:hover h6 {
  border-color: #d5dee3;
  color: #d5dee3;
}
.ttt h6 {
  border-bottom: 1px solid;
  transition: all 0.1s ease;
}
</style>
