  <template>
    <v-app dark>

      <SystemBar></SystemBar>
      <!-- <TopMenu></TopMenu> -->
      <v-main app>
        <nuxt />
      </v-main>

      <MainDividers></MainDividers>
      <v-footer style="justify-content: center"
      >
        <span class="m-auto"> Davmar.am &copy; {{ new Date().getFullYear() }} All rights reserved</span>
      </v-footer>
      <client-only>
        <Cookie />
      </client-only>
    </v-app>
  </template>

  <script>
    import MainDividers from "../components/MainDividers";
    import Filters from "../components/Filters";
    import SystemBar from '../components/systemBar'
    import TopMenu from '../components/Topmenu'
    import Cookie from "../components/Cookie";
    export default {
      components: {
        MainDividers,
        Filters,
        SystemBar,
        TopMenu,
        Cookie
      },
      data () {
        return {
          valid: true,
          password: '',
          passwordRules: [
            v => !!v || 'Password is required',
          ],
          name: '',
          nameRules: [
            v => !!v || 'Name is required',
          ],
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          checkbox: false,
          fixed: false,
          fav: true,
          menu: false,
          message: false,
          hints: true,

          items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
          ],
          rightDrawer: false,
          title: 'Dalmar',
          windowSize: {
            x: 0,
            y: 0,
          },
        }
      },
      mounted () {
        this.onResize()
      },

      methods: {
        onResize () {
          if(window.innerWidth >= 960){
            this.drawer = false;
          }
          this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        },
      },
    }
  </script>
  <style>
    .theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before{
      opacity: 0;
    }
    a{
      text-decoration: none;
    }
    .theme--dark.v-system-bar .v-icon {
      color: rgb(255, 255, 255);
      font-size: 24px;
    }
    body{
      overflow-x: hidden;
    }
    .nav_button{
      /*background-color: #ccc;*/
      color: #b20839;
    }
    .theme--dark.v-btn--active:hover::before, .theme--dark.v-btn--active::before {
      opacity: 0;
    }
    .v-badge__wrapper{
      left: -25px;
      top: 25px;
    }
    .mainDivide{
      position: relative;
    }
    .mainDivide:after{
      content: '';
      position: absolute;
      right: 0;
      height: 100%;
      width: 2px;
      background-color: #b20839;
    }
  </style>


