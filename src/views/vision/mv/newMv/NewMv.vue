<!--最新MV-->
<template>
    <div class="new-mv">
        <child-cpn :mv-list="newMv"/>
    </div>
</template>

<script>
    import ChildCpn from "../childCpn/ChildCpn";
    export default {
        name: "NewMv",
        components: {ChildCpn},
        props:{
            newMv:{
                type:Array,
                default()
                {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>