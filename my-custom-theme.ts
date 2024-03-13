
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #3b296b 
		"--color-primary-50": "226 223 233", // #e2dfe9
		"--color-primary-100": "216 212 225", // #d8d4e1
		"--color-primary-200": "206 202 218", // #cecada
		"--color-primary-300": "177 169 196", // #b1a9c4
		"--color-primary-400": "118 105 151", // #766997
		"--color-primary-500": "59 41 107", // #3b296b
		"--color-primary-600": "53 37 96", // #352560
		"--color-primary-700": "44 31 80", // #2c1f50
		"--color-primary-800": "35 25 64", // #231940
		"--color-primary-900": "29 20 52", // #1d1434
		// secondary | #a7f522 
		"--color-secondary-50": "242 254 222", // #f2fede
		"--color-secondary-100": "237 253 211", // #edfdd3
		"--color-secondary-200": "233 253 200", // #e9fdc8
		"--color-secondary-300": "220 251 167", // #dcfba7
		"--color-secondary-400": "193 248 100", // #c1f864
		"--color-secondary-500": "167 245 34", // #a7f522
		"--color-secondary-600": "150 221 31", // #96dd1f
		"--color-secondary-700": "125 184 26", // #7db81a
		"--color-secondary-800": "100 147 20", // #649314
		"--color-secondary-900": "82 120 17", // #527811
		// tertiary | #1f7126 
		"--color-tertiary-50": "221 234 222", // #ddeade
		"--color-tertiary-100": "210 227 212", // #d2e3d4
		"--color-tertiary-200": "199 220 201", // #c7dcc9
		"--color-tertiary-300": "165 198 168", // #a5c6a8
		"--color-tertiary-400": "98 156 103", // #629c67
		"--color-tertiary-500": "31 113 38", // #1f7126
		"--color-tertiary-600": "28 102 34", // #1c6622
		"--color-tertiary-700": "23 85 29", // #17551d
		"--color-tertiary-800": "19 68 23", // #134417
		"--color-tertiary-900": "15 55 19", // #0f3713
		// success | #9e818a 
		"--color-success-50": "240 236 237", // #f0eced
		"--color-success-100": "236 230 232", // #ece6e8
		"--color-success-200": "231 224 226", // #e7e0e2
		"--color-success-300": "216 205 208", // #d8cdd0
		"--color-success-400": "187 167 173", // #bba7ad
		"--color-success-500": "158 129 138", // #9e818a
		"--color-success-600": "142 116 124", // #8e747c
		"--color-success-700": "119 97 104", // #776168
		"--color-success-800": "95 77 83", // #5f4d53
		"--color-success-900": "77 63 68", // #4d3f44
		// warning | #54f421 
		"--color-warning-50": "229 253 222", // #e5fdde
		"--color-warning-100": "221 253 211", // #ddfdd3
		"--color-warning-200": "212 252 200", // #d4fcc8
		"--color-warning-300": "187 251 166", // #bbfba6
		"--color-warning-400": "135 247 100", // #87f764
		"--color-warning-500": "84 244 33", // #54f421
		"--color-warning-600": "76 220 30", // #4cdc1e
		"--color-warning-700": "63 183 25", // #3fb719
		"--color-warning-800": "50 146 20", // #329214
		"--color-warning-900": "41 120 16", // #297810
		// error | #0bb71f 
		"--color-error-50": "218 244 221", // #daf4dd
		"--color-error-100": "206 241 210", // #cef1d2
		"--color-error-200": "194 237 199", // #c2edc7
		"--color-error-300": "157 226 165", // #9de2a5
		"--color-error-400": "84 205 98", // #54cd62
		"--color-error-500": "11 183 31", // #0bb71f
		"--color-error-600": "10 165 28", // #0aa51c
		"--color-error-700": "8 137 23", // #088917
		"--color-error-800": "7 110 19", // #076e13
		"--color-error-900": "5 90 15", // #055a0f
		// surface | #e3e3e3 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "249 249 249", // #f9f9f9
		"--color-surface-200": "248 248 248", // #f8f8f8
		"--color-surface-300": "244 244 244", // #f4f4f4
		"--color-surface-400": "235 235 235", // #ebebeb
		"--color-surface-500": "227 227 227", // #e3e3e3
		"--color-surface-600": "204 204 204", // #cccccc
		"--color-surface-700": "170 170 170", // #aaaaaa
		"--color-surface-800": "136 136 136", // #888888
		"--color-surface-900": "111 111 111", // #6f6f6f
		
	}
}