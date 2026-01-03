import stylex from '@stylexjs/unplugin'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'waku/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	vite: {
		define: {
			'import.meta.vitest': 'undefined',
		},
		plugins: [
			stylex.vite({
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
	},
})
