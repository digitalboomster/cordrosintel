# Cordros Intelligence Platform (Vue)

Vue 3 version of the central web app — one shell, six business-arm workspaces.

## Stack

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**
- **Vite**
- **Vue Router 4**
- **Pinia** (auth + current arm state)
- **Tailwind CSS**

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5174](http://localhost:5174). React app runs on 5173, Vue on 5174.

## Structure

- `src/layouts/Shell.vue` — App shell (arm switcher, global search, notifications, `<RouterView />`).
- `src/views/*.vue` — One view per arm (Banking, IM, Securities, Research, Wealth, Registrars).
- `src/stores/auth.ts` — Pinia store: user, currentArm, hasAccessToArm, setCurrentArm.
- `src/config/arms.ts` — Arm ids, names, paths.
- `src/components/shell/` — ArmNav, GlobalSearch, Notifications.
- `src/router/index.ts` — Routes with Shell as layout and children per arm.

## Next steps

- Nested routes per arm (e.g. `/banking/deals`).
- Connect BFF/APIs; add XAI and Audit routes.
- Replace mock auth with SSO.
