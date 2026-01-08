/// <reference types="@astrojs/cloudflare" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		/**
		 * Bridge AI OS runtime context
		 * - Cloudflare Workers execution environment
		 * - Request-scoped data
		 * - Future system signals (non-sensitive only)
		 */
	}
}
