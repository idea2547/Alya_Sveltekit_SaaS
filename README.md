# Alya Sveltekit SaaS - Launch Your Own SaaS Rapidly!

Am not finished the doc yet!

Try out here-> https://sveltekit-saas.pages.dev/

Welcome to Sveltekit SaaS, your go-to solution for swiftly building and deploying your Software as a Service (SaaS) applications. Powered by a robust tech stack including Sveltekit, Pocketbase, and Stripe, we provide everything you need to kickstart your project and bring your ideas to life.

![image](https://github.com/idea2547/Alya_Sveltekit_SaaS/assets/53974956/9914ac07-89e0-4c98-8e64-456aab557933)


Techstack:
sveltekit, pocketbase, stripe
Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Clone project to local and install

```bash
# create a new project in the current directory
npm install
```

Enter your environment key
```bash
VITE_PB_URL=YOUR_POCKETBASE_INSTANCE_URL #example https://pockerbaseinstance.fly.dev NOT https://pockerbaseinstance.fly.dev/_/ which is pocketbase ui page
VITE_AUTH_ADMIN_NAME=
VITE_AUTH_ADMIN_PASS=
VITE_STRIPE_SECRET_KEY=STRIPE_KEY
VITE_WEBURL=YOUR_OWN_WEBURL
```


## Developing

Once you've clone a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Pocketbase back-end
Open Source backend for your next SaaS and Mobile app in 1 file written in go. Light-weight (Firebase, supabase alternative). Can support up to 10,000 concurrent user on low spec hosting server.
(PocketBase can easily serve 10,000+ persistent realtime connections on a cheap $4 Hetzner CAX11 VPS (2vCPU, 4GB RAM)).

[Click here to install pocketbase](https://pocketbase.io/docs/) - Follow the official documentation

To run pocketbase type:
./pocketbase serve

### Host your pocketbase on fly.io
https://github.com/pocketbase/pocketbase/discussions/537


## About deployment

Sveltekit project - Cloudflare pages for front-end web
Back-end - DigitalOcean, Fly.io


## Create your Mail STMP for sending verification email, password change for your pocketbase app.
1. Go to https://myaccount.google.com/apppasswords
2. Create new app name and get your password
3. Go to pocketbase instance -> go to setting -> mail setting -> Enable use SMTP mail server ->
4. Your input field supposed to be like this ![image](https://github.com/idea2547/Sveltekit_SaaS/assets/53974956/c188bf6a-951e-40a6-9093-f5556b1a8559) 
