import PocketBase from 'pocketbase';


const adminClient = new PocketBase(import.meta.env.VITE_PB_URL);

export const createAdminClient = async () => {
    await adminClient.admins.authWithPassword(
        import.meta.env.VITE_AUTH_ADMIN_NAME,
        import.meta.env.VITE_AUTH_ADMIN_PASS,
        {
        autoRefreshThreshold: 30 * 60
        }
    );
    adminClient.autoCancellation(false)
    return adminClient;
}
