import { createTheme } from "@mui/material";

export const appTheme = createTheme({
	palette: {
		primary: {
			main: '#50786E',
		},
		background: {
			default: '#323232',
		},
	},
	components: {
		MuiAppBar: {
			position: 'static'
		},
		MuiToolBar: {
			disableGutters: true
		},
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#eeeeee',
					textTransform: 'none',
					margin: 3,
					'&:hover': { backgroundColor: '#5A6E6E' }
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					color: '#eeeeee',
					
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				list: {
					'&[role="menu"]': {
						backgroundColor: '#50786E'
					},
				},
			},
		},
	},
});