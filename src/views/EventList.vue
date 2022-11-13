<template>
  <div class="event-list">
    <EventCard v-for="event in events" :key="event" :event="event" />
    <div class="pagination">
      <router-link
        class="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        class="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "vue";

export default {
  name: "EventList",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
      this.event = null;
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    },
  },
};
</script>

<style scoped>
.event-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;

  width: 300px;
}

.page-prev,
.page-next {
  display: inline-block;
  text-decoration: none;
  color: #2c3e50;
}

.page-prev {
  justify-self: flex-start;
}

.page-next {
  justify-self: flex-end;
}

.page-prev:hover,
.page-next:hover {
  color: #42b983;
}
</style>
