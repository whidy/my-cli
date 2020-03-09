<template>
  <div class="w-full lg:w-1/6 lg:p-6">
    <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;">
      <ul class="list-reset">
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <a href="#" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:border-purple-500 lg:hover:border-purple-500">
            <span class="pb-1 md:pb-0 text-sm text-gray-900 font-bold">Home</span>
          </a>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <a href="#" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
            <span class="pb-1 md:pb-0 text-sm">Tasks</span>
          </a>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <a href="#" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
            <span class="pb-1 md:pb-0 text-sm">Messages</span>
          </a>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <a href="#" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
            <span class="pb-1 md:pb-0 text-sm">Analytics</span>
          </a>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <a href="#" class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400">
            <span class="pb-1 md:pb-0 text-sm">Payments</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import NotificationDropdownComponent from './NotificationDropdown.vue'
import UserDropdownComponent from './UserDropdown.vue'
export default {
  components: {
    // NotificationDropdownComponent,
    // UserDropdownComponent
  },
  data() {
    return {
      collapseShow: 'hidden'
    }
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes
    }
  }
}
</script>
