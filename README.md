# Cordros Nautilus

Central web app for the Cordros AI Transformation — one shell, six business-arm workspaces (Investment Banking, Investment Management, Securities, Research, Private Wealth, Registrars).

**Two front-end options:**

| App   | Path      | Port | Stack                          |
|-------|-----------|------|--------------------------------|
| React | `/` (root)| 5173 | React 18, Vue Router 6, Tailwind |
| Vue   | `/app-vue`| 5174 | Vue 3, Vue Router 4, Pinia, Tailwind |

## Run (React)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Default route redirects to **Deal & Advisory** (Banking); use the top nav to switch arms.

## Run (Vue)

```bash
cd app-vue && npm install && npm run dev
```

Open [http://localhost:5174](http://localhost:5174). Same shell and six workspaces; Vue 3 + Pinia + Vue Router.

---

## React stack (root)

- **React 18** + **TypeScript**
- **Vite** (build & dev)
- **React Router 6** (shell + workspace routes)
- **Tailwind CSS** (design system)

## Structure

- `src/layouts/Shell.tsx` — App shell (arm switcher, global search, notifications, outlet for workspaces).
- `src/workspaces/{banking,im,securities,research,wealth,registrars}/` — One module per arm; add nested routes and features here.
- `src/contexts/AuthContext.tsx` — User + current arm + `hasAccessToArm` (mock; plug in SSO later).
- `src/config/arms.ts` — Arm ids, names, paths, descriptions.
- `src/components/shell/` — Global search, notifications, arm nav.
- `src/routes/WorkspaceRoutes.tsx` — Maps path prefix to the correct workspace component.

## Next steps

- Add nested routes per workspace (e.g. `/banking/deals`, `/im/risk`).
- Connect BFF/APIs (search, document intelligence, model orchestration, HITL, XAI).
- Add XAI and Audit viewer routes under the shell.
- Replace mock auth with real SSO and role/arm permissions.
