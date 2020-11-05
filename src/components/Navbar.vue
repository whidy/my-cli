<template>
  <header
    class="h-15 shadow-md w-full z-10 md:flex-no-wrap justify-between lg:px-10 md:px-5 sm:px-2 flex flex-row items-center">
    <a class="text-c:yaola" href="/">
      <img
        src="@/assets/images/logo.png"
        class="w-6 h-auto"
        alt="logo">
    </a>
    <user-dropdown-component />
  </header>
</template>
<script>
import UserDropdownComponent from './UserDropdown.vue';

export default {
  components: {
    UserDropdownComponent
  },
  methods: {
    handleEnter(e) {
      const el = e.target;
      if (el.className.includes('item')) {
        el.className += ' item-active';
      }
    },
    handleLeave(e) {
      const el = e.target;
      if (el.className.includes('item')) {
        el.className = el.className.replace(' item-active', '');
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.nav-menu {
  display: flex;
  justify-content: center;
  .item {
    color: #fff;
    padding: 0;
    transition: all 0.5s;
    position: relative;
    a,
    span {
      // padding: 0 50px;
      // color: #333;
      // display: block;
      // height: 60px;
      // line-height: 60px;
    }
    span {
      cursor: default;
    }
    &.item-active {
      background-color: #f5f5f5;
      .nav-menu-sub {
        display: block;
        width: 200px;
      }
    }
  }
  .nav-menu-sub {
    position: absolute;
    padding: 10px 0;
    display: none;
    background-color: #fff;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    left: 0;
    top: 60px;
    z-index: 2001;
    .nav-menu-sub-item {
      a {
        height: 50px;
        line-height: 50px;
        padding-right: 0;
        color: #333;
      }
    }
  }
}
</style>
