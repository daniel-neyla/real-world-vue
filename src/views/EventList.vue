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
  beforeRouteEnter(routeTo, routeFrom, next) {


      EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
        .then((response) => {
          next(comp => {
            console.log(comp)
            comp.events = response.data;
            comp.totalEvents = response.headers["x-total-count"];
          })
        })
        .catch(() => {
          next({ name: "NetworkErr" })
        })

  },
  beforeRouteUpdate(routeTo) {


      return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
        .then((response) => {
       

            this.events = response.data;
            this.totalEvents = response.headers["x-total-count"];

        })
        .catch(() => {
          return { name: "NetworkErr" }
        })

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
  position: relative;
  gap: 35px;
  margin-top: 50px ;
}

.pagination {

  position: absolute;

  width: 300px;
  bottom: -30px;

}

.page-prev,
.page-next {
  /* flex: 1; */
  position: absolute;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 400;
  font-size: 25px;
}

.page-prev {
  left: -80px;
  text-align: left;
}

.page-next {
  right: -80px;
  text-align: right;
}

/* .page-prev:hover,
.page-next:hover {
  color: #42b983;
} */
</style>
