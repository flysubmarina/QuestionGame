<template>
	<div class ="alert alert-primary">
		<h3>Success: {{stats.success}}</h3>
		<h3>Error: {{stats.error}}</h3>
		<hr>
		<button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
		<button class="btn btn-primary" @click="$emit('nextLevel')">Next Level</button>
	</div>
</template>
<script>	
export default {
	props: ['stats']
}
</script>
<style scoped>
	.btn{
		width: auto;
		text-align: center;
		margin:0 auto;

	}
	.alert{
		text-align:center;
		padding: 0 10;
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>