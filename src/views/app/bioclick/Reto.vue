<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="'Retos'"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>

  <b-row>
    <b-col>
         
    </b-col>
  </b-row>

  <glide-component :settings="glideBasicOption">
                <div class="pr-3 pl-3 mb-4 glide__slide position-relative" :class="{'glide__slide--done': (item.status == 'done')}" v-for="item in items" :key="item.id">
                  <div class="overlay">
                    <div class="h-100 row justify-content-center align-items-center text-center">
                      <div class="w-100 mb-5">
                        <h1><i class="simple-icon-check"></i></h1><br><br>
                        <h1>RETO CUMPLIDO</h1>
                      </div>
                    </div>
                  </div>
                    <b-row class="justify-content-center pt-5 glide_box" :class="{'primary-background': (item.type == 'Residuos'), 'secondary-background': (item.type != 'Residuos')}">
                        <b-colxx xxs="12">
                          <b-card no-body>
                              <b-card-body v-if="item.status !== 'done' || !item.currentPrize">
                                <h1>{{item.name}} <small class="text-muted">{{item.score}} <span class="text-bold">Puntos</span></small> </h1>
                                
                                <b-row align-v="center">
                                  <b-col>
                                    <p class="mb-0">
                                      <img :src="item.category_icon" class="category-top-right"/> 
                                      <b-badge pill variant="primary">{{ item.category }}</b-badge>
                                      <b-badge variant="secondary" pill>{{ item.type}}</b-badge>
                                      <span class="ml-3" v-if="item.status=='done'">RETO CUMPLIDO <i class="simple-icon-check icon-color"/></span>
                                    </p>
                                  </b-col>
                                </b-row>
                                
                                <b-row class="justify-content-center">
                                  <b-col sm="12" md="6" lg="4">
                                      <single-lightbox
                                        :thumb="item.img"
                                        :large="item.img"
                                        class-name="img-fluid border-0 border-radius mb-3">
                                      </single-lightbox>
                                  </b-col>
                                </b-row>

                                <b-row class="justify-content-center">
                                  <b-colxx xxs="12" md="10">
                                      <b-row class="justify-content-center">
                                          <b-col class="post-icon text-center mb-1" sm="12">

                                            <!-- <share :config="{url: 'https://google.com', sites: ['facebook','twitter'], title: 'He cumplido el reto '+item.name, image: item.img}"></share> -->
                                            <ShareNetwork
                                                network="facebook"
                                                url="https://news.vuejs.org/issues/180"
                                                :title="'He cumplido el reto '+item.name"
                                                description="Ve a Climaton.ec y crea tu perfil."
                                                hashtags="climaton,bioclick"
                                                class="btn btn-facebook"
                                              >
                                              <i class="demo-icon iconsminds-facebook"></i>
                                                Compártelo en Facebook
                                            </ShareNetwork>

                                            <!-- <router-link to="#" class="btn btn-primary">
                                              <i class="simple-icon-heart mr-1"></i>
                                              <span>Compártelo en redes</span>
                                            </router-link>                    -->
                                          </b-col>
                                          <b-col class="post-icon text-center mb-3" sm="12" v-if="item.status!='done'">
                                            <b-button class="btn btn-success" @click="completed(item)" type="button" :id="item.id">
                                              <i class="simple-icon-check"></i>
                                              <span>¿Ya lo completaste?</span>
                                            </b-button>
                                          </b-col>
                                      </b-row>
                                  </b-colxx>
                                </b-row>

                                <div class="my-2">
                                  <h6>Description</h6>
                                  <p class="text-justify">{{item.description}}</p>
                                </div>
                              </b-card-body>
                               <b-card-body v-if="item.currentPrize && item.status == 'done'">
                                <h1>{{item.name}}  </h1>
                                <h2 class="text-center"><span class="ml-3" v-if="item.status=='done'">RETO CUMPLIDO <i class="simple-icon-check icon-color"/></span></h2>
                                                               
                                <b-row class="justify-content-center">
                                  <b-col sm="12">
                                      <single-lightbox
                                        :thumb="item.currentPrize.img"
                                        :large="item.currentPrize.img"
                                        class-name="img-fluid border-0 border-radius mb-3">
                                      </single-lightbox>
                                  </b-col>
                                </b-row>

                                <div class="my-2">
                                  <h6>Datos curioso</h6>
                                  <p class="text-justify">{{item.currentPrize.data}}</p>
                                  <p class="text-justify text-muted"><b>Fuente: </b>{{item.currentPrize.source}}</p>
                                </div>

                                <b-row class="justify-content-center">
                                  <b-colxx xxs="12" md="10">
                                      <b-row class="justify-content-center">
                                          <b-col class="post-icon text-center mb-1" sm="12">

                                            <!-- <share :config="{url: 'https://google.com', sites: ['facebook','twitter'], title: 'He cumplido el reto '+item.name, image: item.img}"></share> -->
                                            <ShareNetwork
                                                network="facebook"
                                                url="https://news.vuejs.org/issues/180"
                                                :title="'He cumplido el reto '+item.name"
                                                description="Ve a Climaton.ec y crea tu perfil."
                                                hashtags="climaton,bioclick"
                                                class="btn btn-facebook"
                                              >
                                              <i class="demo-icon iconsminds-facebook"></i>
                                                Compártelo en Facebook
                                            </ShareNetwork>

                                            <!-- <router-link to="#" class="btn btn-primary">
                                              <i class="simple-icon-heart mr-1"></i>
                                              <span>Compártelo en redes</span>
                                            </router-link>                    -->
                                          </b-col>
                                      </b-row>
                                  </b-colxx>
                                </b-row>

                                
                              </b-card-body>
                            </b-card>
                        </b-colxx>
                    </b-row>
                </div>                
  </glide-component>
 
  </div>
</template>

<script>
import FormWizard from "../../../components/Form/Wizard/FormWizard";
import Tab from "../../../components/Form/Wizard/Tab";
import IconCard from '../../../components/Cards/IconCard'
import GlideComponent from '../../../components/Carousel/GlideComponent'
import { adminRoot, db_items, datos_curiosos} from '../../../constants/config';
import VueSpeedometer from "vue-speedometer"
import SingleLightbox from '../../../containers/pages/SingleLightbox';
import axios from "axios";
import { apiUrl } from "../../../constants/config";
import ListPageHeading from "../../../containers/pages/ListPageHeading";
import ListPageListing from "../../../containers/pages/ListPageListing";

export default {
    components: {
    VueSpeedometer,
    'single-lightbox': SingleLightbox,
    'icon-card': IconCard,
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing,
    'glide-component': GlideComponent,
    }, 
    data() {
        return {
            toggle: false,
            isLoad: false,
            apiBase: apiUrl + "/cakes/fordatatable",
            displayMode: "thumb",
            sort: {
              column: "name",
              label: "Nombre del Reto"
            },
            filter: {
              column: "status",
              label: "Todos los retos",
              value: ""
            },
            page: 1,
            perPage: 4,
            search: "",
            from: 0,
            to: 0,
            total: 0,
            lastPage: 0,
            currentActivity: {currentPrize: {activity_id: false}},            
            items: [],
            selectedItems: [], 
             glideBasicOption: {
                gap: 15,
                perView: 3,
                focusAt: 'center',
                type: "carousel",
                animationDuration: 500,
                hideNav: true,
                breakpoints: {
                    992: {
                        perView: 1
                    },
                    1600: {
                        perView: 2
                    },
                },
                onMove: function(){
                  // console.log(this.$route.query.id)
                }
            },
        };
    },
   methods: {
    getItems() {
      // this.items = db_items.filter(x=>x.id==this.$route.query.id)[0]
      this.items = db_items
    },
    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    filterStatus(filter) {
      this.filter = filter;
      console.log(this.filter)
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    // handleContextMenu(vnode) {
    //   if (!this.selectedItems.includes(vnode.key)) {
    //     this.selectedItems = [vnode.key];
    //   }
    // },
    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
    sortBy: function(array, param, reverse) {
        var filterA, filterB;
        return array.sort(function (a, b) {
            switch (param) {
                case 'id':
                    filterA = a.id;
                    filterB = b.id;
                    break;
                case 'name':
                    filterA = a.name;
                    filterB = b.name;
                    break;
                case 'parent_category':
                    filterA = a.parent_category.name;
                    filterB = b.parent_category.name;
                    break;
                case 'status':
                    filterA = a.status;
                    filterB = b.status;
                    break;
            }
            if (reverse) {
                return (filterA > filterB) ? 1 : -1;
            } else {
                return (filterA < filterB) ? 1 : -1;
            }
        });
    },
    onMove(index) {
      this.glideBasicOption.startAt = index;
      this.$router.replace({
              path: "/app/bioclick/reto",
              query: {
                  id: index+1
              }
      }).catch(err => { 
          // Ignore the vuex err regarding  navigating to the page they are already on.
          if (err.name != "NavigationDuplicated") {
              console.log(err.name)
          }
      });
    }, 
    completed(item) {
      item.status = 'done'
      var prize = this.lookForPrizeInside()
      console.log(prize)
      item.currentPrize = prize
    },
    lookForPrize(){
      var index = this.$route.query.id-1
      this.currentActivity = db_items[db_items.indexOf(db_items.filter(x=>x.id==(index+1))[0])]
      if(this.currentActivity.status == 'done'){
        this.currentActivity.currentPrize = datos_curiosos.filter(x=>x.activity_id==(index+1))[0]
        console.log(this.currentActivity)
      }
    },
    lookForPrizeInside(){
      var index = this.$route.query.id-1
      this.currentActivity = db_items[db_items.indexOf(db_items.filter(x=>x.id==(index+1))[0])]
      if(this.currentActivity.status == 'done'){
        return datos_curiosos.filter(x=>x.activity_id==(index+1))[0]
      }
      return false
    }
  },
  computed: {
    filteredItems() {
      this.items = this.sortBy(this.items,this.sort.column,false)
      if(this.items.length>0)
      {
        var items = this.items.filter((item)=>    
              item.status.includes(this.filter.value)
        );

        if(this.search != '')
        {
          items = items.filter((item)=>
              this.search.toLowerCase().split(' ').every(v => 
              item.name.toLowerCase().includes(v)
          ))
        }
        return items
      }
      
      return this.items;
    }
  },
  watch: {
    search() {
      this.page = 1;
    },
    '$route.query': {
        handler(query) {
          this.lookForPrize();
        }
    }
  },
  created() {
    if(this.$route.query.id){
        this.glideBasicOption.startAt = this.$route.query.id-1;
        this.lookForPrize() 
        // this.currentItem = db_items.filter(x=>x.id==(this.$route.query.id))[0]
        // if(this.currentItem.status == 'done'){
        //   this.currentPrize = datos_curiosos.filter(x=>x.activity_id==(this.$route.query.id))[0]
        //   console.log(this.currentPrize)
        // }
        // else{
        //   this.currentItem = {}
        //   this.currentPrize = {activity_id: false}
        // }
    }
    
    this.glideBasicOption.onMove = this.onMove
    this.getItems()
  }
};
</script>
