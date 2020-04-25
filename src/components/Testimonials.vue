<template lang="html">
    <div class="max-w-md py-4 px-6 mx-1 bg-ui-primary border-ui-primary shadow-lg rounded-lg my-10">
        <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" :src="clientPic">
        </div>
        <div>
            <a v-if="!clientUrl" ><h2 class="text-white text-3xl font-semibold">{{companyName}}</h2></a>
            <a v-else :href="clientUrl" target="_blank"><h2 class="text-white text-3xl font-semibold">{{companyName}}</h2></a>
            <div class="pt-8  border-t border-top border-ui-border "></div>
            <p class="mt-2 text-white">{{testimonialText}}
            </p>
        </div>
        <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-white">- {{clientName}}</a>
        </div>
    </div>


</template>

<script>
export default {
    props: {
        clientName: {
            type: String,
            default: ""
        },
        companyName: {
            type: String,
            default: ""
        },
        testimonialText: {
            type: String,
            default: ""
        },
        clientPic: {
            type: String,
            default: ""
        },
        clientUrl: {
            type: String,
            default: ""
        }

    },
}
</script>

<style lang="css" scoped>

</style>
