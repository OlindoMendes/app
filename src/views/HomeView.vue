<template>
  <div>
    <div class="container-center-horizontal" v-if="!clickToFav">
      <div class="buscascreen">
        <div class="header">
          <div class="overlap-group-container">
            <div class="overlap-group2">
              <!-- <hr class="line-1"> -->
              <button class="overlap-group1">Favoritos</button>
            </div>
          </div>

          <input class="overlap-group" placeholder="Buscar Usuário" />
        </div>
      </div>
      <div class="instrues">
        <h3 class="user-search-text">{{ textRender.notfound }}</h3>
        <h4 class="repository-search">
          {{ textRender.verify }}
        </h4>
        <img v-if="!img" class="search-img" src="../assets/search.svg" />
        <img v-else class="search-img" src="../assets/notfound.svg" />
      </div>
    </div>

    <div class="bigcontainer" v-else> 
      <h3>Meus Favoritos</h3>
      <div class="big-container" v-for="node in favorites" :key="node.id">
        <h2>{{ node.name }}</h2>
        <p>{{ node.description }}</p>
        <h5>{{ node.primaryLanguage }}</h5>
        <h6 id="updated">{{ node.updatedAt }}</h6>
        <div class="btn-container">
          <button class="btn-fav" @click="addToFavourites(node.id)">
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions} from "vuex";
export default {
  data() {
    return {
      img: false,
      clickToFav: false,
    };
  },
  computed: {
    ...mapState(["favorites"]),
    nodes() {
      return this.user.repositories.edges.map((item) => {
        return item.node;
      });
    },
    haveLanguage() {
      const programLang = this.favorites.primaryLanguage
        ? this.favorites.primaryLanguage
        : "Não identificada";
      return programLang;
    },
    textRender() {
      const notFoundText = {
        notfound: "Nenhum usuário encontrado",
        verify: "Verifique se a escrita está correta ou tente novamente",
      };
      const searchText = {
        notfound: "Procure pelo nome do repositório ou de usuário",
        verify: "Encontre os repositórios de algum usuário no campo acima",
      };
      if (this.img) {
        return notFoundText;
      } else return searchText;
    },
  },
  methods: {
    ...mapActions({ add: "favAdded" }),
    addToFavourites(id) {
      this.clickToFav = true
      const selectFav = this.nodes.filter((node) => {
        return node.id === id;
      });
      this.add(selectFav);
    },
  },
};
</script>

<style lang="scss">
.favs-center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.header {
  align-items: flex-end;
  background-color: white;
  display: flex;
  height: 80px;
  justify-content: flex-end;
  min-width: 1440px;
}

.overlap-group-container {
  height: 81px;
  margin-bottom: -0.58px;
  position: relative;
  width: 1440px;
}

.overlap-group2 {
  height: 81px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.line-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 80px;
  width: 1440px;
}

.overlap-group1 {
  font-family: Poppins;
  align-items: flex-start;
  font-size: 21px;
  background-color: #32c0c6;
  color: aliceblue;

  display: flex;
  height: 80px;
  left: 1295px;
  min-width: 145px;
  padding: 29.4px 24px;
  position: absolute;
  top: 0;
  border: none;
}

.icon-heart {
  height: 21px;
  margin-top: 0;
  width: 24px;
}

.overlap-group {
  align-items: flex-start;
  // background-color: rgb(255, 0, 170);
  border: 1px solid #e3e6e8;
  font-size: 21px;
  border-radius: 4px;
  display: flex;
  height: 40px;
  left: 24px;
  min-width: 668px;
  padding: 7px 15px;
  position: absolute;
  top: 20px;
}

.instrues {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 169px;
  min-height: 361px;
  width: 562px;
}

.user-search-text {
  color: rgba(97, 97, 97, 1);
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0;
  min-height: 32px;
  min-width: 424px;
  text-align: center;
}

.repository-search {
  color: rgba(97, 97, 97, 1);

  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0;
  min-height: 24px;
  min-width: 562px;
  text-align: center;
}

.search-img {
  height: 257px;
  margin-top: 48px;
  width: 230px;
}
</style>
