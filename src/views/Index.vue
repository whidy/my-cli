<template>
  <div class="h-screen overflow-hidden">
    <navbar-component />
    <div class="flex w-full flex flex-wrap mx-auto p-0">
      <sidebar-component />
      <div class="w-full lg:w-5/6 lg:mt-0">
        <!-- <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <footer class="block py-4">
            <div class="container mx-auto px-4">
              <hr class="mb-4 border-b-1 border-gray-300">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4">
                  <div class="text-sm text-gray-600 font-semibold py-1">
                    Copyright © {{ date }}
                    <a
                      href="https://www.creative-tim.com"
                      class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1">
                      Creative Tim
                    </a>
                  </div>
                </div>
                <div class="w-full md:w-8/12 px-4">
                  <ul class="flex flex-wrap list-none md:justify-end  justify-center">
                    <li>
                      <a
                        href="https://www.creative-tim.com"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">
                        Creative Tim
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://blog.creative-tim.com"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3">
                        MIT License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from '@/components/Navbar.vue'
import SidebarComponent from '@/components/Sidebar.vue'
// import LineChartComponent from '../components/LineChart.vue'
// import BarChartComponent from '../components/BarChart.vue'
export default {
  name: 'DashboardPage',
  components: {
    NavbarComponent,
    SidebarComponent,
    // LineChartComponent,
    // BarChartComponent
  },
  data() {
    return {
      date: new Date().getFullYear()
    }
  },
  mounted() {
    // console.log(111)
  }
}
</script>
