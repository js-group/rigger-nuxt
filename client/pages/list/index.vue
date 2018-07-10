<template>
        <div>
            list/index:{{name}}
            <nuxt-link to="/">Go to /</nuxt-link>
        </div>
    </template>
    <script>
        export default {
            head() {
                return {
                    title: 'list-index'
                }
            },
            asyncData() {
                return new Promise((resolve) => {
                setTimeout(function () {
                    resolve({name:'jm'})
                }, 1000)
                })
            },
            // fetch() {}
        }
    </script>
    <style scoped>
    .container {
        font-size: 20px;
        text-align: center;
        padding-top: 100px;
    }
    </style>
    