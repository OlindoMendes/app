<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600");


#app {
  font-family: Poppins;  
  display: flex;
flex-direction: row;
justify-content: center;
pointer-events: none;
width: 100%
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
