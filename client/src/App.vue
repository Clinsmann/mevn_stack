<template>
    <div id="app" class="bg-secondary">
        <Navbar/>
        <ErrorsToast v-if="error" :msg="error"/>
        <SuccessToast v-if="success" :msg="success"/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import ErrorsToast from './components/ErrorToast';
    import SuccessToast from './components/SuccessToast';

    export default {
        components: {Navbar, Footer, ErrorsToast, SuccessToast},
        computed: {
            ...mapGetters(['error','success'])
        }
    }
</script>
