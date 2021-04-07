<template>
<b-card @click.prevent="toggleItem($event,data.id)" :class="{'active' :  (data.status == 'done')}" no-body>
    <div class="position-relative">
        <router-link :to="`/app/bioclick/reto?id=${data.id}`" class="w-40 w-sm-100">
            <img :src="data.img" class="card-img-top" :alt="data.name" />
        </router-link>
        <b-badge pill :variant="data.statusColor" class="position-absolute badge-top-left">
           {{ data.category }}
        </b-badge>
        <img :src="data.category_icon" class="position-absolute category-top-right"/> 

    </div>
    <b-card-body>
        <b-row>
            <b-col class="mb-3">
                <h6 class="mb-4 card-subtitle">{{data.name}}</h6>
                <p class="text-muted text-small mb-0 font-weight-light card-text">{{data.type}}</p>
                <p class="text-muted text-small mb-0 font-weight-light card-text">Puntos: {{data.score}}</p>
                <p class="text-muted text-small mb-0 font-weight-light card-text"><i class="simple-icon-check icon-color" v-if="data.status=='done'" /></p>
            </b-col>
        </b-row>
    </b-card-body>
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
