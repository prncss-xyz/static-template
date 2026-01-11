import stylex from '@stylexjs/unplugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'waku/config'

export const basePath = import.meta.env.VITE_BASE_PATH ?? '/'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	basePath,
	vite: {
		build: {
			rollupOptions: {
				external: ['sharp'],
			},
		},
		define: {
			'import.meta.vitest': 'undefined',
		},
		plugins: [
			stylex.vite({
				aliases: {
					'@/*': [path.resolve(__dirname, 'src/*')],
				},
				dev: process.env.NODE_ENV === 'development',
				devMode: 'css-only',
				devPersistToDisk: true,
				runtimeInjection: false,
				useCSSLayers: true,
			}),
			react({
				babel: {
					plugins: ['babel-plugin-react-compiler'],
				},
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		ssr: {
			external: ['sharp'],
		},
	},
})
