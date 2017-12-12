<template>
  <div>
    <iframe class="w100 h33" src="http://bcoelc.com" frameborder="0"></iframe>
    <iframe class="w100 h33" src="http://johnpham.net/calendar" frameborder="0"></iframe>
    <iframe class="w50 h33" src="http://johnpham.net/calendar" frameborder="0"></iframe>
    <div class="w50 h33 is-right announcements">
      <div class="w100 announcements-content">
        <h1 class="announcements-header">{{ announcement.header }}</h1>
        <p>{{ announcement.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      announcement: {
        header: 'Winter 2018',
        body: 'Welcome back yall!'
      }
    }
  }
}
</script>

<style scoped>
.w100 {
  width: 100%;
}

.w50 {
  width: 50%;
}
.h33 {
  height: 33%;
}
.is-right {
  float: right;
}
.block {
  background-color: red;
}
.announcements-content {
  text-align: center;
}
</style>
