<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="/">Hillary's Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary"
                    aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-primary">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-brand"><a href="/">Hillary's Blog</a></div>
                        <div class="col-6 collapse-close">
                            <button type="button" class="navbar-toggler" data-toggle="collapse"
                                    data-target="#navbar-primary" aria-controls="navbar-primary"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>

                    <li class="nav-item dropdown" v-if="isLoggedIn && !!user">
                        <a class="nav-link" href="javascript:" id="navbar-primary_dropdown_1" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
                            <router-link class="dropdown-item" to="/profile">Profile</router-link>
                            <router-link class="dropdown-item" to="/">View Unpublished Posts</router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:" data-toggle="modal"
                               data-target="#logoutModal">
                                Logout ({{user.username}})
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="py-3 text-center">
                            <i class="fas fa-bell display-2 text-danger"></i>
                            <p class="lead mt-4 text-muted">Are you sure you want to logout?</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="logoutUser">Logout</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Navbar",

        computed: {
            ...mapGetters(['isLoggedIn', 'user'])
        },

        methods: {
            ...mapActions(['onLogout']),
            logoutUser() {
                this.onLogout();
                $('#logoutModal').modal('hide');
            }
        }
    }
</script>