<template>
    <div id="app">
        <app-sidebar></app-sidebar>
        <app-header></app-header>
        <app-main></app-main>
    </div>
</template>

<script>
    import sidebar from './components/Sidebar'
    import header from './components/Header'
    export default {
        name: 'app',
        components: {
            sidebar:sidebar,
            header:header
        }
    }
</script>
