<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="'Tu perfil'"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
    <b-row>
      <b-colxx xxs="12" lg="3" class="mb-2">
        <b-row>
          <b-col>
              <b-card no-body class="mb-2">
                  <div class="position-absolute card-top-buttons">
                      <b-button variant="outline-white" class="icon-button">
                          <i class="simple-icon-pencil" />
                      </b-button>
                  </div>
                  <single-lightbox thumb="/assets/img/profiles/6.jpg" large="/assets/img/profiles/6.jpg" class-name="card-img-top" />
                  <b-card-body>
                      <p class="text-muted mb-2">Trevor Kartney: email@email.com</p>
                      <p class="text-muted text-small mb-2">Ciudad e institución</p>
                      <p class="mb-3">Quito, Escuela</p>
                      <p class="text-muted text-small mb-2">Fecha de nacimiento</p>
                      <p class="mb-3">11/12/1995</p>
                      <p class="text-muted text-small mb-2">Comparte tu perfil</p>
                      <div class="social-icons">
                          <ul class="list-unstyled list-inline">
                              <li class="list-inline-item">
                                  <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                              </li>
                              <li class="list-inline-item">
                                  <router-link to="#"><i class="simple-icon-social-twitter"></i></router-link>
                              </li>
                              <li class="list-inline-item">
                                  <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                              </li>
                          </ul>
                      </div>
                  </b-card-body>
              </b-card>
          </b-col>
        </b-row>
      </b-colxx>
      <b-colxx xxs="12" lg="9" class="mb-2">
        <b-row>
          <b-colxx xxs="12" class="mb-2">
            <b-card>
              <div style="height: 150px; width: 100%; text-align: center;">
                <vue-speedometer :value="toggle ? 333 : 555" />
              </div>
              <div class="my-5 text-center">
                <h1>TU HUELLA DE CARBONO</h1>
                <h3>Tu trabajo no está completo. Requieres hacer XXX puntos para poder mejorar tu huella y ayudar más el ambiente</h3>
              </div>
            </b-card>
          </b-colxx>
          
          <b-colxx xxs="12" class="mb-2">
            <b-row>
              <b-colxx xxs="6" class="mb-4">
                  <icon-card :title="'RETOS CUMPLIDOS'" icon="" :value="123" />
              </b-colxx>
              <b-colxx xxs="6" class="mb-4">
                  <icon-card :title="'PUNTOS TOTALES'" icon="" :value="123" />
              </b-colxx>
            </b-row>
          </b-colxx>
        </b-row>
      </b-colxx>
    </b-row>
    <b-row>
      <b-col class="mb-4">
            <h2>Tus retos</h2>
            <div class="separator mb-5" />
             <list-page-heading
              :title="''"
              :keymap="keymap"
              :displayMode="displayMode"
              :changeDisplayMode="changeDisplayMode"
              :changeOrderBy="changeOrderBy"
              :changePageSize="changePageSize"
              :filterStatus="filterStatus"
              :sort="sort"
              :filter="filter"
              :searchChange="searchChange"
              :from="from"
              :to="to"
              :total="total"
              :perPage="perPage"
              ></list-page-heading>
              <template v-if="isLoad">
                <list-page-listing
                  :displayMode="displayMode"
                  :items="filteredItems"
                  :toggleItem="toggleItem"
                  :lastPage="lastPage"
                  :perPage="perPage"
                  :page="page"
                  :changePage="changePage"
                  :onContextMenuAction="onContextMenuAction"
                ></list-page-listing>
              </template>
              <template v-else>
                <div class="loading"></div>
              </template>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormWizard from "../../../components/Form/Wizard/FormWizard";
import Tab from "../../../components/Form/Wizard/Tab";
import IconCard from '../../../components/Cards/IconCard'

import {
    mapGetters,
    mapActions
} from "vuex";
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");
import { adminRoot, db_items } from '../../../constants/config';
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
    "list-page-listing": ListPageListing
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
            items: [],
            selectedItems: [], 
        };
    },
     methods: {
    loadItems() {
      this.isLoad = false;

      // axios
      //   .get(this.apiUrl)
      //   .then(response => {
      //     return response.data;
      //   })
      //   .then(res => {
      //     this.total = res.total;
      //     this.from = res.from;
      //     this.to = res.to;
      //     this.items = res.data.map(x => {
      //       return {
      //         ...x,
      //         img: x.img.replace("/img/", "/img/products/")
      //       };
      //     });
      //     this.perPage = res.per_page;
      //     this.selectedItems = [];
      //     this.lastPage = res.last_page;
      //     this.isLoad = true;
      //   });
      this.items = db_items
      this.total = this.items.length
      this.from = 0
      this.to = 100
      this.perPage = 1
      this.selectedItems = []
      this.lastPage = 1
      this.isLoad = true
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
    }
  },
  mounted() {
    this.loadItems();
  }
};
</script>

