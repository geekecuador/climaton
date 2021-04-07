<template>
<b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
        <b-card no-body id="huella">
            <h1 class="mt-5 mb-1 text-center text-uppercase">Calcula tu huella</h1>
            <hr>
            <b-card-body class="wizard wizard-default" >
                <form-wizard :next="'Siguiente Pregunta'" :prev="'Anterior Pregunta'" :withValidate="true" :topNavDisabled="true">
                    <tab :name="'Hogar'" :desc="''" :icon="'/assets/img/huella/1.png'" :selected="true" :validate="validateFirst" :submit="submitFirst">
                        <div class="wizard-basic-step">
                            <b-col xl="8" xxs="12" class="mx-auto my-auto text-center">
                                <b-form class="my-5">
                                    <h2>¿Cuántas personas viven en tu casa?</h2>
                                    <b-row class="my-5 justify-content-md-center">
                                        <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'UNA'" icon="glyph-icon simple-icon-user" :value="'1'" :clicked="() => {questions.first = 1}" :selected="questions.first == 1"/>
                                        </b-col>
                                         <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'DOS'" icon="glyph-icon simple-icon-user" :value="'2'" :clicked="() => {questions.first = 2}" :selected="questions.first == 2"/>
                                        </b-col>
                                         <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'TRES'" icon="glyph-icon simple-icon-user" :value="'3'" :clicked="() => {questions.first = 3}" :selected="questions.first == 3"/>
                                        </b-col>
                                         <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'CUATRO'" icon="glyph-icon simple-icon-user" :value="'4'" :clicked="() => {questions.first = 4}" :selected="questions.first == 4"/>
                                        </b-col>
                                         <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'CINCO'" icon="glyph-icon simple-icon-user" :value="'5'" :clicked="() => {questions.first = 5}" :selected="questions.first == 5"/>
                                        </b-col>
                                         <b-col xxs="6" md="4" xl="4">
                                            <clickable-card :title="'+ CINCO'" icon="glyph-icon simple-icon-user" :value="'>5'" :clicked="() => {questions.first = '>5'}" :selected="questions.first == 6"/>
                                        </b-col>
                                    </b-row>

                                    <b-alert show variant="danger" v-if="validationMessage!=''">{{validationMessage}}</b-alert>                                
                                </b-form>
                            </b-col>
                        </div>
                    </tab>
                    <tab :name="'Electricidad'" :desc="''" :icon="'/assets/img/huella/2.png'" :validate="validateSecond" :submit="submitSecond">
                        <div class="wizard-basic-step">
                             <b-col xl="8" xxs="12" class="mx-auto my-auto text-center">
                                <b-form class="my-5">
                                    <h2>¿Cuál fue el costo de tu última factura de luz?</h2>
                                        <b-row class="my-5 justify-content-md-center">
                                            <b-colxx xxs="6" sm="4" lg="3">
                                                <clickable-card :title="'MENOS 5'" icon="iconsminds-money-bag" :value="'<5'" :clicked="() => {questions.second = 1}" :selected="questions.second == 1"/>
                                            </b-colxx>
                                            <b-colxx xxs="6" sm="4" lg="3">
                                                <clickable-card :title="'ENTRE 5 y 10'" icon="iconsminds-money-bag" :value="'5-10'" :clicked="() => {questions.second = 2}" :selected="questions.second == 2"/>
                                            </b-colxx>
                                            <b-colxx xxs="6" sm="4" lg="3">
                                                <clickable-card :title="'ENTRE 10 y 15'" icon="iconsminds-money-bag" :value="'10-15'" :clicked="() => {questions.second = 3}" :selected="questions.second == 3"/>
                                            </b-colxx>
                                            <b-colxx xxs="6" sm="4" lg="3">
                                                <clickable-card :title="'MÁS DE 15'" icon="iconsminds-money-bag" :value="'>15'" :clicked="() => {questions.second = 4}" :selected="questions.second == 4"/>
                                            </b-colxx>
                                        </b-row>

                                        <b-alert show variant="danger" v-if="validationMessage!=''">{{validationMessage}}</b-alert>       
                                </b-form>
                             </b-col>
                        </div>
                    </tab>
                    <tab :name="'Reciclaje'" :desc="''" :icon="'/assets/img/huella/3.png'" :validate="validateThird" :submit="submitThird">
                        <div class="wizard-basic-step">
                            <b-form>
                                <b-col xl="8" xxs="12" class="mx-auto my-auto text-center">
                                    <b-form class="my-5">
                                        <h2>¿Reciclas en casa?</h2>
                                            <b-row class="my-5 justify-content-md-center">
                                                <b-colxx xxs="6" lg="6">
                                                    <clickable-card :title="''" icon="simple-icon-check" :value="'SI'" :clicked="() => {questions.third = 1}" :selected="questions.third == 1"/>
                                                </b-colxx>
                                                <b-colxx xxs="6" lg="6">
                                                    <clickable-card :title="''" icon="simple-icon-close" :value="'NO'" :clicked="() => {questions.third = 2}" :selected="questions.third == 2"/>
                                                </b-colxx>
                                            </b-row>

                                            <b-alert show variant="danger" v-if="validationMessage!=''">{{validationMessage}}</b-alert>       
                                    </b-form>
                                </b-col>
                            </b-form>
                        </div>
                    </tab>

                    <tab :name="'Movilización'" :desc="''" :icon="'/assets/img/huella/4.png'">
                        <div class="wizard-basic-step" :validate="validateFourth" :submit="submitFourth">
                            <b-form class="my-5">
                               <b-col xl="8" xxs="12" class="mx-auto my-auto text-center">
                                    <b-form class="my-5">
                                        <h2>¿Cómo te movilizas?</h2>
                                            <p v-if="questions.fourth!=''"><b>Respuesta: </b> {{questions.fourth}}</p>
                                            <b-row class="my-5 justify-content-md-center">
                                                <b-colxx md="4">
                                                    <clickable-card :title="''" icon="iconsminds-car" :value="'Vehículo Propio'" :clicked="() => {questions.fourth = 1}" :selected="questions.fourth == 1"/>
                                                </b-colxx>
                                                <b-colxx md="4">
                                                    <clickable-card :title="''" icon="iconsminds-bus-2" :value="'Transporte Público'" :clicked="() => {questions.fourth = 2}" :selected="questions.fourth == 2"/>
                                                </b-colxx>
                                                <b-colxx md="4">
                                                    <clickable-card :title="''" icon="iconsminds-bicycle-1" :value="'Transporte Público'" :clicked="() => {questions.fourth = 3}" :selected="questions.fourth == 3"/>
                                                </b-colxx>
                                            </b-row>

                                            <b-alert show variant="danger" v-if="validationMessage!=''">{{validationMessage}}</b-alert>       
                                    </b-form>
                                </b-col>
                            </b-form>
                        </div>
                    </tab>

                    <tab :name="'Comida'" :desc="''" :icon="'/assets/img/huella/5.png'" :validate="validateFifth" :submit="submitFifth">
                        <div class="wizard-basic-step">
                             <b-form class="my-5">
                               <b-col xl="8" xxs="12" class="mx-auto my-auto text-center">
                                    <b-form class="my-5">
                                        <h2>¿Tu consumo de carne es?</h2>
                                            <p v-if="questions.fifth!=''"><b>Respuesta: </b> {{questions.fifth}}</p>
                                            <b-row class="my-5 justify-content-md-center">
                                                <b-col md="6">
                                                    <clickable-card :title="''" icon="" :value="'1. Una vez a la semana'" :clicked="() => {questions.fifth = 1}" :selected="questions.fifth == 1"/>
                                                </b-col>
                                                <b-col md="6">
                                                    <clickable-card :title="''" icon="" :value="'2. Tres veces a la semana'" :clicked="() => {questions.fifth = 2}" :selected="questions.fifth == 2"/>
                                                </b-col>
                                                <b-col md="6">
                                                    <clickable-card :title="''" icon="" :value="'3. Todos los días'" :clicked="() => {questions.fifth = 3}" :selected="questions.fifth == 3"/>
                                                </b-col>
                                                <b-col md="6">
                                                    <clickable-card :title="''" icon="" :value="'4. No consumo'" :clicked="() => {questions.fifth = 4}" :selected="questions.fifth == 4"/>
                                                </b-col>
                                            </b-row>

                                            <b-alert show variant="danger" v-if="validationMessage!=''">{{validationMessage}}</b-alert>       
                                    </b-form>
                                </b-col>
                            </b-form>
                        </div>
                    </tab>

                    <tab type="done">
                        <div class="wizard-basic-step text-center my-5">
                            <b-row>
                                <b-col lg="6">
                                    <h2 class="mb-2">Gracias!</h2>
                                    <h3>Tu perfil quedará guardado</h3>
                                    <p>Tu resultado fue: <br></p>
                                    <h1>123</h1>
                                    <p><br>Lo que significa que tu huella de carbono es el siguiente: <br></p>
                                    <h1>123</h1>
                                    <br>
                                </b-col>
                                 <b-col lg="6">
                                    <h3>Puedes mejorar este resultado. En Bioclick te presentamos retos e información que te ayudarán con esta tarea</h3>
                                    <b-button class="btn btn-primary btn-lg my-5">COMPARTE EN REDES</b-button>
                                    <router-link tag="b-button" to="/app/" class="btn btn-success btn-lg my-5">ENTRAR EN BIOCLICK</router-link>
                                </b-col>
                            </b-row>
                            
                            
                        </div>
                    </tab>
                </form-wizard>
            </b-card-body>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import FormWizard from "../../../components/Form/Wizard/FormWizard";
import Tab from "../../../components/Form/Wizard/Tab";
import ClickableCard from '../../../components/Cards/ClickableCard'

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
import { adminRoot } from '../../../constants/config';

export default {
    components: {
        "form-wizard": FormWizard,
        "tab": Tab,
        'clickable-card': ClickableCard
    },
    data() {
        return {
            form: {
                email: "test@coloredstrategies.com",
                password: "xxxxxx"
            },
            questions: {
                first: "",
                second:"",
                third:"",
                fourth:"",
                fifth:"",
                sixth:""
            },
            validationMessage: ""
        };
    },
    mixins: [validationMixin],
    validations: {
        form: {
            password: {
                required,
                maxLength: maxLength(16),
                minLength: minLength(4)
            },
            email: {
                required,
                email,
                minLength: minLength(4)
            }
        },
        questions: {
            first: {
                required,
                minLength: minLength(1)
            },
            second:{
                required,
                minLength: minLength(1)
            },
            third:{
                required,
                minLength: minLength(1)
            },
            fourth:{
                required,
                minLength: minLength(1)
            },
            fifth:{
                required,
                minLength: minLength(1)
            },
            sixth:{
                required,
                minLength: minLength(1)
            }
        }
    },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login"]),
        formSubmit() {
            this.$v.$touch();
            this.form.email = "piaf-vue@coloredstrategies.com";
            this.form.password = "piaf123";
            this.$v.form.$touch();
           // if (!this.$v.form.$anyError) {
                this.login({
                    email: this.form.email,
                    password: this.form.password
                });
            //}
        },
        validateFirst(){
            this.$v.questions.$touch();
            if(!this.$v.questions.first.$anyError)
            {
                return true
            }
            else{
                this.validationMessage = "Completa la primera pregunta"
            }
            return false
        },
        submitFirst(){
            this.validationMessage = ""
        },
        validateSecond(){
            this.$v.questions.$touch();
            if(!this.$v.questions.second.$anyError)
            {
                return true
            }
            else{
                this.validationMessage = "Completa la segunda pregunta"
            }
            return false
        },
        submitSecond(){
            this.validationMessage = ""
        },
        validateThird(){
            this.$v.questions.$touch();
            if(!this.$v.questions.third.$anyError)
            {
                return true
            }
            else{
                this.validationMessage = "Completa la tercera pregunta"
            }
            return false
        },
        submitThird(){
            this.validationMessage = ""
        },
         validateFourth(){
            this.$v.questions.$touch();
            if(!this.$v.questions.fourth.$anyError)
            {
                return true
            }
            else{
                this.validationMessage = "Completa la cuarta pregunta"
            }
            return false
        },
        submitFourth(){
            this.validationMessage = ""
        },
         validateFifth(){
            this.$v.questions.$touch();
            if(!this.$v.questions.fifth.$anyError)
            {
                return true
            }
            else{
                this.validationMessage = "Completa la cuarta pregunta"
            }
            return false
        },
        submitFifth(){
            this.validationMessage = ""
        },

    },
    watch: {
        currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                setTimeout(() => {
                    this.$router.push(adminRoot);
                }, 200);
            }
        },
        loginError(val) {
            if (val != null) {
                this.$notify("error", "Login Error", val, {
                    duration: 3000,
                    permanent: false
                });

            }
        }
    }
};
</script>

<style>
    #huella .col-form-label{
        font-size: 1.5em !important;
    }

    #huella i{
        font-size: 2rem;
    }

    #huella h1{
        font-size: 4em;
    }
</style>