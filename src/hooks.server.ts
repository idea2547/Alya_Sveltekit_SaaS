/** @type {import('@sveltejs/kit').Handle} */
import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

export async function handle({ event, resolve }) {
	console.log("PB Server hook started")
	event.locals.pb = new PocketBase(import.meta.env.VITE_PB_URL);
	/* event.locals.pb.admins.authWithPassword(import.meta.env.VITE_AUTH_ADMIN_NAME, import.meta.env.VITE_AUTH_ADMIN_PASS) */
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	try {
		if (event.locals.pb.authStore.isValid) {
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({ sameSite: 'Lax', secure: true }));
	//sameSite: 'Lax'
	return response;
}; 