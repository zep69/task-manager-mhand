<template>
<div class="logreg">
	<div style=" display: flex;justify-content: center; align-content: center">
		<Card style="padding: 1rem 1rem 0 1rem; border-radius: 2rem">
			<template #header>
				<div style="display: flex; justify-content: center; margin-top: 1rem;">
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
					  <Input class="p-inputtext-sm" :type="changeType" style="width: 20rem" v-model="password" placeholder="Password"/>
						<i :class="changeIcons" @click="pass=!pass" />
				  </span>
					<br>
					<div style="display: flex;margin-top: 10px;align-content: center; justify-content: space-between" >
						<div style="display: flex;align-content: center">
							<Checkbox v-model="remember" inputId="remember" :binary="true"/>
							<span style="margin-left: 2px;margin-top: 1px;">Запомнить</span>
						</div>
						<div style="margin-top: 2px">
							<a @click="" class="forget" >Забыли пароль?</a>
						</div>

					</div>
					<Button class="Primary" rounded style="margin-top: 1rem; width:100%; text-align: center;justify-content: center" size="small">Войти</Button>
					<div style="width:20rem;margin-top: 1rem;">
						<span>Впервые тут? Вы можете <span class="register" @click="registrationDialog=true" >зарегистрироваться</span>!</span>
					</div>
				</div>



			</template>
		</Card>
	</div>

</div>
<Dialog v-model:visible="registrationDialog" modal style="width: 30rem">
	<template #header>
		<div style="display: flex; justify-content: center">
			<span>Регистрация</span>
		</div>
	</template>
	<template #default>
		<div style="display: flex; justify-content: center">
			<span class="p-input-icon-left">
					  <i class="pi pi-at" />
					  <Input class="p-inputtext-sm"  placeholder="Email" style="width: 20rem"/>
				  </span>
		</div>
		<div style="display: flex; justify-content: center">
			<span style="margin-top: 1rem" class="p-input-icon-left p-input-icon-right">
					  <i class="pi pi-lock" />
					  <Input class="p-inputtext-sm" :type="changeType" style="width: 20rem" v-model="password" placeholder="Password"/>
						<i :class="changeIcons" @click="pass=!pass" />
				  </span>
		</div>
		<div style="display: flex; justify-content: center; margin-top: 1rem;">
			<span class="p-input-icon-left">
				<i class="pi pi-user" />
				<Input class="p-inputtext-sm" placeholder="Имя" style="width: 20rem;"/>
			</span>

		</div>
		<div style="display: flex; justify-content: center; margin-top: 1rem;">
			<span class="p-input-icon-left">
				<i class="pi pi-user" />
				<Input class="p-inputtext-sm" placeholder="Фамилия" style="width: 20rem;"/>
			</span>
		</div>
	</template>
	<template #footer>
		<div style="display: flex; justify-content: end">
			<Button rounded size="small" severity="success">Зарегистрироваться</Button>
		</div>
	</template>
</Dialog>
</template>

<script>
export default {
	name: "Login",
	data:()=>({
		remember:false,
		pass:false,
		password:'',
		registrationDialog:false
	}),
	computed:{
		changeType(){
			if(this.pass){
				return 'text'
			}else{
				return 'password'
			}
		},
		changeIcons(){
			if(this.pass){
				return 'pi pi-eye-slash'
			}else{
				return 'pi pi-eye'
			}
		}
	},
	methods:{

	}
}
</script>

<style scoped>

.logreg{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)}
.forget{
	color: grey;
}
.forget:hover{
	color: #414141;
	text-decoration: underline;
	cursor: default;
}
.register{
	color: dodgerblue;
}
.register:hover{
	text-decoration: underline;
	cursor: default;
}
</style>