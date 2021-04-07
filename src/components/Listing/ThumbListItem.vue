<template>
<b-card @click.prevent="toggleItem($event,data.id)" :class="{'d-flex flex-row':true, 'active' :  (data.status == 'done')}" no-body>
    <router-link :to="`?p=${data.id}`" class="d-flex">
        <img :src="data.img" class="list-thumbnail responsive border-0" :alt="data.name" />
    </router-link>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`/app/bioclick/reto?id=${data.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.name}}</p>
            </router-link>
            <p class="mb-0 text-muted text-small w-20 w-sm-100 text-lg-right">Tipo: {{data.type}}</p>
            <p class="mb-0 text-muted text-small w-15 w-sm-100 text-lg-center">Puntos: {{data.score}}</p>
            <div class="w-10 w-sm-100 text-lg-center">
                <!-- :variant="data.category_color" -->
                <b-badge pill >{{ data.category }}</b-badge>
            </div>
            <p class="mb-0 text-muted text-small w-10 w-sm-100 text-lg-right"><img :src="data.category_icon" class="category-icon"/> </p>
            <p class="mb-0 text-muted text-small w-5 w-sm-100 text-lg-right"><i class="simple-icon-check icon-color" v-if="data.status=='done'" /></p>
        </div>
        <!-- <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
            <b-form-checkbox :checked="selectedItems.includes(data.id)" class="itemCheck mb-0" />
        </div> -->
    </div>
</b-card>
</template>

<script>
export default {
    props: ['data', 'selectedItems'],
    methods: {
        toggleItem(event, itemId) {
            this.$emit('toggle-item', event, itemId)
        }
    }
}
</script>
