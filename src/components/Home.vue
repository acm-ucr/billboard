<template>
  <div>
    <iframe class="w100 h33"
      src="http://bcoelc.com"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <div class="w100 h33 is-cropped">
      <iframe class="w100"
        style="
          height: 109%;
        "
        src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=o5etp9bnv2icv4kam97nn65n54%40group.calendar.google.com&amp;color=%23AB8B00&amp;ctz=America%2FLos_Angeles"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>

    <div class="w50 h33 is-left is-cropped">
      <iframe class="w100"
        style="height: 109%;
          zoom: 1.5; -moz-transform: scale(1.25); -moz-transform-origin: 0 0;"
        src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=acmucr.org_gqk7rog6vidospeb1b9orug5t0%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FLos_Angeles" 
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>

    <div class="w50 h33 is-right announcements">
      <div class="w100 announcements-content">
        <div v-if="!announcements[0].imageUrl">
          <h1 class="announcements-header">{{ announcements[0].header }}</h1>
          <p>{{ announcements[0].body }}</p>
        </div>
        <div v-else>
          <img class="w100" :src="announcement.imageUrl"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    announcements: gql`
      query {
        getAnnouncements(last: 1) {
          id
          header
          body
        }
      }
    `
  },
  data: function () {
    return {
      announcements: [{
        header: '',
        body: '',
        imageUrl: ''
      }]
    }
  }
}
</script>

<style scoped>
iframe {
  overflow-y: hidden;
}
.is-cropped {
  overflow: hidden;
}
.w100 {
  width: 100%;
}
.w50 {
  width: 50%;
}
.h33 {
  height: 33%;
}
.is-left {
  float: left;
}
.is-right {
  float: right;
}
.announcements-content {
  text-align: center;
}
</style>
