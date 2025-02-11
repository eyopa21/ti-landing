import path from "path"
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), vike({prerender: true})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}

export default config

