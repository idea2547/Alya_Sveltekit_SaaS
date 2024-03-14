# Sveltekit SaaS - Launch Your Own SaaS Rapidly!
Welcome to Sveltekit SaaS, your go-to solution for swiftly building and deploying your Software as a Service (SaaS) applications. Powered by a robust tech stack including Sveltekit, Pocketbase, and Stripe, we provide everything you need to kickstart your project and bring your ideas to life.

Techstack:
sveltekit, pocketbase, stripe
Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

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

Enter your stripe environment key
```bash
VITE_STRIPE_SECRET_KEY=
VITE_STRIPE_WEBHOOK_KEY=
```


## About deployment

Front-end page - Cloudflare

Back-end - DigitalOcean


## Create your Mail STMP for sending verification email, password change for your pocketbase app.
1. Go to https://myaccount.google.com/apppasswords
2. Create new app name and get your password
3. Go to pocketbase instance -> go to setting -> mail setting -> Enable use SMTP mail server ->
4. ![image](https://github.com/idea2547/Sveltekit_SaaS/assets/53974956/c188bf6a-951e-40a6-9093-f5556b1a8559) Your input field supposed to be like this
