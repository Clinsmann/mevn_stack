<template>
    <div aria-live="polite" aria-atomic="true" style="position: absolute; width: 100%; z-index: 10; min-height: 200px;">
        <div style="position: fixed; top: 80px; right: 20px;">
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000"
                 data-autohide="false" data-animation="true">
                <div class="toast-header bg-gradient-success">
                    <i class="fas fa-thumbs-up text-white mr-2"></i>
                    <strong class="text-white mr-5">Success</strong>
                    <small class="text-white">2 secs ago</small>
                    <button type="button" class="ml-2 my-1 close text-white-50" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body text-capitalize">{{msg}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        created() {
            $(document).ready(function () {
                $(".toast").toast('show');
            });
        }
    }
</script>