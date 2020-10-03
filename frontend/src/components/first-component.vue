<template>
    <div>
        <p>{{msg}}</p>

        <router-view></router-view>
    </div>
</template>

<script>

module.exports = {
    name:'first-component',
    data(){
        return {
            msg:'Olá, sou .vue'
        }
    }
}

</script>