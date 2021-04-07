<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
            <router-link tag="a" to="/"><img :src="'/assets/logos/bioclick.png'" class="logo-img"/></router-link>
            <p class=" text-white h2">REGISTRO BIOCLICK</p>
              <p class="white mb-0">  Por favor agrega en este formulario la información que necesitamos <br />Si ya tienes una cuenta inicia sesión. <br />

                <router-link tag="b-button" to="/user/login" class="btn-multiple-state btn-shadow mt-3 btn-block">Inicia sesión</router-link>
                <b-button class="btn-shadow mt-3 btn btn-block" style="background: #4065B4">Inicia sesión con Facebook <i class="simple-icon-social-facebook"></i></b-button>
                <b-button class="btn-shadow mt-3 btn btn-block" style="background: #dd4b39">Inicia sesión con Google <i class="simple-icon-social-google"></i></b-button>
              </p>
          </div>
          <div class="form-side">
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
               <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="email" class="form-control" v-model="email">
                <span>{{ $t('user.email') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <span>Ciudad</span>
                 <v-select :options="cities" v-model="city">
                        <template slot="option" slot-scope="option">
                            {{ option.name }}
                        </template>
                </v-select>
              </label>
              
              <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="institution">
                <span>Institución</span>
              </label>

              <label class="form-group has-float-label mb-4">
                <input type="phone" class="form-control" v-model="phone">
                <span>Teléfono</span>
              </label>

               <b-row class="mb-5">
                <b-colxx xxs="12">
                  <label>Fecha de nacimiento</label>
                </b-colxx>
                <b-colxx xxs="12">
                <datepicker
                        :bootstrap-styling="true"
                        v-model="birthday"
                      ></datepicker>
                </b-colxx>
              </b-row>

              

              <div class="d-flex justify-content-end align-items-center">
                  <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { adminRoot } from '../../constants/config';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import Datepicker from "vuejs-datepicker";
import InputTag from "../../components/Form/InputTag";

export default {
  components: {
    'v-select' :vSelect,
    'datepicker': Datepicker
  },
  data () {
    return {
      fullname: '',
      email: '',
      password: '',
      city: '',
      birthday: '',
      phone: '',
      institution: '',
      cities: [
        {name: "Quito"},
        {name: "Guayaquil"},
        {name: "Cuenca"},
        {name: "Manta"},
        {name: "Otras"},
      ]
    }
  },
  methods: {
    formSubmit () {
      console.log('register')
      this.$router.push(adminRoot)
    }
  }
}
</script>
