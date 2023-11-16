/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
	    	    colors: {
		    'theme-white': "#e5e7eb",
		    'theme-gray-one': "#94A3B8",
		    'theme-gray-two': "#64748b",
		    'theme-cyan': "#5eead4",
		    'theme-blue': "#3b82f6",
		    'theme-black': "#0f172a",
	    }
    },
  },
  plugins: [],
}

