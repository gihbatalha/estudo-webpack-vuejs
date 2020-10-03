<template>
    <div>
        <p>{{msg}}</p>
    </div>
</template>

<script>

module.exports = {
    name:'second-component',
    data(){
        return {
            msg:'Olá, sou second-component.vue'
        }
    }
}

</script>