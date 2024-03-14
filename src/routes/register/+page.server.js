import { error, redirect } from '@sveltejs/kit';
import { registerUserSchema } from '$lib/schemas';
import { generateUsername, validateData } from '$lib/utils';
import PocketBase from "pocketbase"
import { serializeNonPOJOs } from "$lib/utils";


export const actions = {
	register: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);
		const adminClient = await new PocketBase(import.meta.env.VITE_PB_URL);
		await adminClient.admins.authWithPassword(import.meta.env.VITE_AUTH_ADMIN_NAME, import.meta.env.VITE_AUTH_ADMIN_PASS, {
			// This will trigger auto refresh or auto reauthentication in case
			// the token has expired or is going to expire in the next 30 minutes.
			autoRefreshThreshold: 30 * 60
		})

		console.log(formData)

        /* if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		} */

		let username = formData.name.split(' ').join('').toLowerCase();
		console.log(username)

		const resultList = await adminClient.collection('users').getList(1, 1, { sort: '-created' });
		console.log(serializeNonPOJOs(resultList?.items[0].UserNumber))
		const UserNumAdd = resultList?.items[0].UserNumber + 1;
		let UserNumber = UserNumAdd;

		try {
			/* const checkNameExist = await locals.pb.collection('users').getFullList(undefined, {
				filter: `user = "${username}"`,
			})
			console.log(checkNameExist)
			if (checkNameExist.length > 0) {
				console.log("user exist")
				return {
					userExist: true,
				};
			} else {
				console.log("success")
				await locals.pb.collection('users').create({ username, ...formData, Token});
				await locals.pb.collection('users').requestVerification(formData.email);
			} */

			console.log("success")
			await adminClient.collection('users').create({ username, ...formData, UserNumber});
			await adminClient.collection('users').requestVerification(formData.email);
			
			
		} catch (err) {
			console.log('Error: ', err.data?.data?.email?.code);
			/* throw error(500, 'Something went wrong'); */
			if (err.data?.data?.username?.code){
				console.log("user already exist")
				return {
					userNameExist: true,
				};      
			} else if (err.data?.data?.email?.code){
				console.log("email already exist")
				return {
					userEmailExist: true,
				};  
			} else if (err.data?.data?.password?.code){
				console.log("password problem")
				return {
					userPasswordPass: true,
				};  
			}
		}
		
		throw redirect(303, '/login');
		/* throw redirect(303, '/login'); */
		
	}
};