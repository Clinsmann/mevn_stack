<template>
    <div>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img :src="`/img/team-4-800x800.jpg`" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <div class="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                <i class="ni ni-settings-gear-65"></i>
                            </div>
                            <h3>Awesome features</h3>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <ul class="list-unstyled mt-5" v-if="!!user">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="ni ni-settings-gear-65"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0">{{user.name}}</h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="ni ni-html5"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0">{{user.username}}</h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="badge badge-circle badge-success mr-3">
                                                <i class="ni ni-satisfied"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="mb-0">{{user.email}}</h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">The amazing Team</h2>
                        <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img :src="`/img/team-4-800x800.jpg`"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Ryan Tompson</span>
                                    <small class="h6 text-muted">Web Developer</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" class="btn btn-warning btn-icon-only rounded-circle">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img :src="`/img/team-4-800x800.jpg`"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Romina Hadid</span>
                                    <small class="h6 text-muted">Marketing Strategist</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" class="btn btn-primary btn-icon-only rounded-circle">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img :src="`/img/team-4-800x800.jpg`"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Alexander Smith</span>
                                    <small class="h6 text-muted">UI/UX Designer</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" class="btn btn-info btn-icon-only rounded-circle">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img :src="`/img/team-4-800x800.jpg`"
                                 class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                 style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">John Doe</span>
                                    <small class="h6 text-muted">Founder and CEO</small>
                                </h5>
                                <div class="mt-3">
                                    <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" class="btn btn-success btn-icon-only rounded-circle">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex';

    export default {
        computed: mapGetters(['user']),
        methods: {
            ...mapActions(['getProfile'])
        },
        created() {
            this.getProfile();
        }
    }
</script>