<template>
  <div class="event-card">
    <p>@ {{ event.time }} on {{ event.title }}</p>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 250px;
  margin-bottom: 18px;
  border: 2px solid #39495c;
  padding: 20px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
