<template>
  <div ref="submenu">
    <span class="input-c" @focusin="muted">
      <div class="a-h" :key="diapobKeySub" @focusin="muted">
        <input id='sh-b' type="text" autocomplete="off" v-model="search" placeholder="   Browse keywords" ref="inputab" @focusin="muted"/>
      </div>
    </span>
    <span class="s-b-wrp drpdwn">
      <div v-for="blog in filteredBlogs" class="s-b" v-show="search.length > 0 && search.localeCompare(blog.keyword, undefined, { sensitivity: 'accent' }) != 0" @click="setState(blog.keyword)">
        <h2>{{blog.keyword}}</h2>
      </div>
    </span>
    <span v-if="search.length > 0 && hasSomePartial && search.localeCompare(batchedVal, undefined, { sensitivity: 'accent' }) != 0">
      <MoreList :xv="xv">
        <div v-for="moreblog in newExample" class="s-b" v-show="search.length > 0 && search.localeCompare(moreblog, undefined, { sensitivity: 'accent' }) != 0" @click="setState(moreblog)">
          <h2>{{moreblog}}</h2>
        </div>
      </MoreList>
    </span>
  </div>
</template>

<script>
import useRaw from '~/composables/raw-data.js'
import MoreList from '~/components/slots/MoreList.vue'

export default {
  components: {
    MoreList
  },
  setup (props) {
    const { moreKeyds, batchKeyds, firstArr } = useRaw();

    return { moreKeyds, batchKeyds, firstArr }
  },
  data() {
    return {
      diapobKeySub: "bb" + 2,
      search: '',
      hasSomePartial: '',
      hasSomeTotal: '',
      batchedVal: '',
      heightTextarea: 0,
      xv: false
    }
  },
  methods: {
    setState(x) {
      this.search = x;
    },
    muted() {
      this.xv = !this.xv;
    }
  },
  computed: {
    filteredBlogs() {
      return this.firstArr.body.filter((blog) => {
        return blog.keyword.match(this.search.toLowerCase());
      })
    },
    filteredMoreBlogs() {
      return this.moreKeyds.filter((moreblog) => {
        return moreblog.match(this.search.toLowerCase());
      })
    },
    filteredBlogsPre() {
      return this.filteredBlogs.map(a => a.keyword)
    },
    filteredBoth() {
      return this.filteredBlogsPre.concat(this.filteredMoreBlogs)
    },
    evalSearch() {
      return this.search.length !== 0
    },
    evalBatch() {
      return !this.batchKeyds.includes(this.search.toLowerCase())
    },
    evalSomeA() {
      return this.hasSomePartial
    },
    evalSomeB() {
      return !this.hasSomePartial
    },
    caseA() {
      return this.$refs.submenu && this.evalSearch && this.evalBatch && this.evalSomeA
    },
    caseB() {
      return this.$refs.submenu && this.evalSearch && this.evalBatch && this.evalSomeB
    },
    idx() {
      return this.filteredMoreBlogs .findIndex (
        (w, i) => this.filteredMoreBlogs .slice(0, i) .join ('') .length > 44
      )
    },
    newExample() {
      // https://gist.github.com/CrossEye/005bc0c848593bd37860978fe258dd27
      return this.idx < 0 ? this.filteredMoreBlogs : this.filteredMoreBlogs .slice (0, this.idx - 1)
    }
  },
  watch: {
    search: {
      handler: function(val) {
        if (val.length > 0) {
          this.$bus.$emit('search-change', val.toLowerCase());
          this.hasSomePartial = this.moreKeyds.some(function(v){ return v.indexOf(val.toLowerCase())>=0 });
          this.hasSomeTotal = this.batchKeyds.some(function(v){ return v.indexOf(val.toLowerCase())>=0 });
        }
      },
      immediate: true
    },
    filteredMoreBlogs: {
      handler: function(val) {
        if (val.length === 1) {
          this.batchedVal = val
        }
      },
      immediate: true
    },
    filteredBoth: {
      handler: function (newVal, oldVal) {
        let s = this.search
        let cond1 = (x,y) => x.toString() !== y.toString()
        let cond2 = (x,y) => x.toString() === y.toString() && (s.length === (x.toString().length - 1))
        let a = this.heightTextarea
        let b = this.$refs.submenu
        let c = a => this.$bus.$emit('dropd-change', a)
        // Required to push handling of this to end of queue stack
        // Otherwise you will get the height before text replacement
        this.$nextTick(() => {
          if (this.hasSomeTotal) {
            if (b && s.length === 0) {
              a = b.clientHeight
              c(a);
            } else if ((this.caseA && (cond1(newVal, oldVal))) || (this.caseA && (cond2(newVal, oldVal)))) {
              a = b.clientHeight + 94
              c(a);
            } else if ((this.caseB && (cond1(newVal, oldVal))) || (this.caseB && (cond2(newVal, oldVal)))) {
              a = b.clientHeight + 16
              c(a);
            } else if (b && s.length !== 0 && this.batchKeyds.includes(s.toLowerCase())) {
              a = b.clientHeight
              c(a);
            }
          }
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
// ispired by https://codepen.io/thebabydino/pen/PBXRRm
$t: 2.25s;
$main-h: 20.2vw;

h2 {
  position: relative;
  margin-top: 1em;
  margin-right: 6.59918336px;
  margin-left: 6.59918336px;
  padding: 0.35rem 12.65448px 0.27rem 12.65448px;
  font-family: 'AtkinsonHyperlegibleRegular';
  text-rendering: geometricPrecision;
  font-size: 27.82428px;
  line-height: 1.35;
  color: #333;
  z-index: 998;
}
.s-b {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: space-around;
  text-transform: capitalize;
}
.s-b-wrp {
  width: 100%;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.drpdwn {
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 2rem;
    background-image: linear-gradient(to left, black, black, rgba(black, 0));
    z-index: 999;
  }
}
.input-c {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.a-h {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black !important;
  height: $main-h;
}
*, :before, :after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font: inherit
}
html { overflow-x: hidden }

body {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	min-width: 400px; min-height: 100vh;
	background: transparent;
}

[id='sh-b'] {
  z-index: 998;
  align-self: self-start;
	border: none;
  user-select: auto !important;
  font-family: 'Avenir Heavy', sans-serif !important;
  line-height: $main-h !important;
  height: $main-h !important;
  font-size: 1.490250039119064rem !important;
  color: #333 !important;
  text-align: center;
  background-color: black !important;
  border-radius: 5px !important;
  border-bottom: calc(0.55px + 0.007vw) solid black;
  max-width: 92.777777777777778vw; //// HACK: this was calculated to keep border-bottom proportion on a minimum size screen of 360px.
  transition: color $t, border-bottom $t;
  &::placeholder {
    line-height: $main-h !important;
    font-size: 1.490250039119064rem !important;
    color: #F5F5F5 !important;
	}
  &:placeholder-shown {
    height: $main-h !important;
    text-align: left !important;
    outline: none;
    border-bottom: calc(0.55px + 0.007vw) solid #333;
    max-width: 92.777777777777778vw; //// HACK: this was calculated to keep border-bottom proportion on a minimum size screen of 360px.
  }
	&:focus {
		outline: none;
    color: blue !important;
    border-bottom: calc(0.55px + 0.007vw) solid blue;
    max-width: 92.777777777777778vw; //// HACK: this was calculated to keep border-bottom proportion on a minimum size screen of 360px.
	}
}
</style>
