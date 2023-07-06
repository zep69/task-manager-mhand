<template>
<div class="logreg">
	<div style=" display: flex;justify-content: center; align-content: center">
		<Card style="padding: 1rem 2rem 1rem 2rem; border-radius: 2rem">
			<template #header>
				<div style="display: flex; justify-content: center">
					<span>Вход в систему</span>
				</div>
			</template>
			<template #content>
				<div style="display: block">
					<span class="p-input-icon-left">
					  <i class="pi pi-at" />
					  <Input class="p-inputtext-sm"  placeholder="Email" style="width: 20rem"/>
				  </span>
					<br>
					<span style="margin-top: 1rem" class="p-input-icon-left p-input-icon-right">
					  <i class="pi pi-lock" />
					  <Input class="p-inputtext-sm" type="password" style="width: 20rem" placeholder="Email"/>
						<i class="pi pi-eye" />
				  </span>
					<br>
					<div >

					</div>
				</div>



			</template>
		</Card>
	</div>

</div>
</template>

<script>
export default {
	name: "Login"
}
</script>

<style scoped>
.logreg{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)}
</style>