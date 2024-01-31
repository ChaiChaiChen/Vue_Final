<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: pages.current_page===1}">
          <a class="page-link" href="#"
           @click.prevent="updatePage(pages.current_page-1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{ 'active': page === pages.current_page }">
          <a class="page-link" href="#" @click.prevent="updatePage(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item " :class="{ disabled: pages.current_page===pages.total_pages}">
          <a class="page-link" href="#"
          @click.prevent="updatePage(pages.current_page+1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
<style>
.page-link{
  border: none;
  color: #555;
  margin: 0 6px;
}
.page-item:first-child .page-link{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.page-item:last-child .page-link{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.page-link:hover{
  border: none;
  border-bottom: solid #a04a03;
  color: #a04a03;
  margin: 0 6px;
}
.pagination{
  --bs-pagination-disabled-bg: #fff;
  border: none;
}
.page-link:focus{
  color: #a04a03;
}
.page-link.active, .active > .page-link {
  background-color: #ffffff;
  color: #ffab4b;
  font-weight:bolder;
  border-bottom: solid #ffab4b;
}
</style>
<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      console.log(page);
      this.$emit('emit-pages', page);
    },
  },
};
</script>
