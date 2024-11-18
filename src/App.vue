<script>

</script>

<template>
	<header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>

	<RouterView />
</template>

<style lang="scss">
nav {
	padding: 15px;
	display: flex;
	gap: 15px;
	a {
		font-size: 24px;
	}
}
</style>
