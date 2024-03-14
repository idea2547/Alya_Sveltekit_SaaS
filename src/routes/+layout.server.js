import { error } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/utils";

export const load = async ({ locals }) => {
	

	const getUsersSubscription = async () => {
		try {
			const record = serializeNonPOJOs(await locals.pb.collection('users').getOne(locals.user.id));
			return record.Subscription
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	}

	if (locals.user) {
		return {
			user: locals.user,
			Subscription: await getUsersSubscription(),
		};
	}

	return {
		user: undefined
	};
};