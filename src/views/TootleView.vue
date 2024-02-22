<template>
  <div class="screen">
    <div class="content-tool">
      <h1>Tool page is building....</h1>
      <div class="loading-animation">
        <p>L</p>
        <p>O</p>
        <p>A</p>
        <p>D</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
.content-tool {
  height: 100%;
  width: 350px;
  margin: 0 auto;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loading-animation {
  display: flex;
  font-size: 48px;
}

.loading-animation p:nth-child(1) {
  animation: moveTran 1s ease-in;
}
.loading-animation p:nth-child(2) {
  animation: moveTran 1.5s ease-in;
}
.loading-animation p:nth-child(3) {
  animation: moveTran 2s ease-in;
}
.loading-animation p:nth-child(4) {
  animation: moveTran 2.5s ease-in;
}
.loading-animation p:nth-child(5) {
  animation: moveTran 3s ease-in;
}
.loading-animation p:nth-child(6) {
  animation: moveTran 3.5s ease-in;
}
.loading-animation p:nth-child(7) {
  animation: moveTran 4s ease-in;
}
.loading-animation p:nth-child(8) {
  animation: moveTran2 1s infinite linear;
  animation-delay: 0.25s;
}
.loading-animation p:nth-child(9) {
  animation: moveTran2 1s infinite linear;
  animation-delay: 0.5s;
}
.loading-animation p:nth-child(10) {
  animation: moveTran2 1s infinite linear;
  animation-delay: 0.75s;
}
@keyframes moveTran {
  0% {
    transform: translateY(-250px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes moveTran2 {
  0% {
    transform: translateY(0px);
  }
  49% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(-29px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
