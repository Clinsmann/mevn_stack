<template>
    <div class="container">
        <div class="row justify-content-center my-5">
            <div class="col-lg-5">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-white pb-5">
                        <div class="text-muted text-center mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div class="btn-wrapper text-center">
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img :src="`/svg/github.svg`"></span>
                                <span class="btn-inner--text">Github</span>
                            </a>
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img :src="`/svg/google.svg`"></span>
                                <span class="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Or sign up with credentials</small>
                        </div>
                        <form role="form" @submit.prevent="registerUser" method="post">
                            <div class="form-group mb-3">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input class="form-control" type="text" name="username" id="username"
                                           placeholder="Username" v-model="username">
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input class="form-control" type="text" name="name" id="name"
                                           placeholder="Name" v-model="name">
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input class="form-control" type="email" name="email" id="email"
                                           placeholder="Email" v-model="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input class="form-control" type="password" name="password" id="password"
                                           placeholder="Password" v-model="password">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input class="form-control" type="password" name="password2" id="password2"
                                           placeholder="Confirm password" v-model="confirm_password">
                                </div>
                            </div>
                            <div class="text-muted font-italic">
                                <small>password strength: <span class="text-success font-weight-700">strong</span>
                                </small>
                            </div>
                            <div class="row my-4">
                                <div class="col-12">
                                    <div class="custom-control custom-control-alternative custom-checkbox">
                                        <input class="custom-control-input" id="customCheckRegister" type="checkbox">
                                        <label class="custom-control-label" for="customCheckRegister">
                                            <span>I agree with the <a href="#">Privacy Policy</a></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary my-4">Create account</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-right">
                        <router-link to="/login" class="text-light">
                            <small>Have an account? sign in</small>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Register",
        data() {
            return {
                name: '',
                email: '',
                username: '',
                password: '',
                confirm_password: ''
            }
        },
        methods: {
            ...mapActions(['register']),
            registerUser() {
                let userData = {
                    name: this.name,
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    confirm_password: this.confirm_password
                };
                this.register(userData)
                    .then(res => res.data.success && this.$router.push('/login'))
                    .catch(err => console.log(err));
            }
        }
    }
</script>