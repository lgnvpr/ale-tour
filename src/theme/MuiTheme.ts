import { createMuiTheme } from "@material-ui/core/styles";
import color from "../constants/Color";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: color.primary,
			light: color.lightPrimary,
			"100": color.primary100,
			"200": color.primary200,
		},
		secondary: {
			main: color.secondary,
		},
		warning: {
			main: color.warning,
		},
		success: {
			main: color.success,
		},
		error: {
			main: color.error,
		},
		grey: {
			"50": color.grey50,
			"100": color.grey100,
			"200": color.grey200,
		},
		text: {
			primary: color.textPrimary,
		},
	},
	typography: {
		htmlFontSize: 14,
		fontSize: 14,
		fontFamily: `"Poppins", sans-serif`,
		body1: {
			fontSize: "1rem",
		},
		body2: {
			fontSize: "0.85rem",
		},
		h6: {
			fontSize: "1rem",
			fontWeight: 500,
		},
		h5: {
			fontSize: "1.25rem",
			fontWeight: 500,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: 500,
		},
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: "none",
				padding: "0.75rem 2rem",
				fontSize: "1rem",
				lineHeight: "2rem",
				height: "fit-content",
				borderRadius: "5px",
				fontWeight: 500,
				boxShadow: "none",

				"&:hover  .MuiSvgIcon-root": {
					padding: "0.125rem",
					fontSize: "2rem",
				},
			},
			contained: {
				padding: "0.75rem 2rem",
				fontSize: "1rem",
				lineHeight: "2rem",
				boxShadow: "none",
				backgroundColor: color.grey50,
				color: color.lightDark2,
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: color.grey50,
				"&:hover": {
					boxShadow: "none",
					color: color.primary,
					borderColor: color.primary,
					borderWidth: 1,
					borderStyle: "solid",
					backgroundColor: color.white,
				},
				"&.Mui-disabled": {
					backgroundColor: "#F3F3F3",
					borderColor: "#F3F3F3",
					color: "#A6A6A6",
				},
			},
			outlined: {
				padding: "0.75rem 2rem",
				fontSize: "1rem",
				lineHeight: "2rem",
				"&:hover": {
					backgroundColor: color.white,
					borderColor: color.primary,
					color: color.primary,
				},
			},
			containedSecondary: {
				color: color.white,
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: color.secondary,
				"&:hover": {
					boxShadow: "none",
					color: color.white,
					borderColor: color.darkSecondary,
					borderWidth: 1,
					borderStyle: "solid",
					backgroundColor: color.darkSecondary,
				},
			},
			containedPrimary: {
				color: color.white,
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: color.primary,
				"&:hover": {
					boxShadow: "none",
					color: color.white,
					borderColor: color.darkPrimary,
					borderWidth: 1,
					borderStyle: "solid",
					backgroundColor: color.darkPrimary,
				},
			},
			outlinedPrimary: {
				"&:hover": {
					backgroundColor: color.primary,
					color: color.white,
				},
			},
			outlinedSecondary: {
				"&:hover": {
					backgroundColor: color.secondary,
					color: color.white,
				},
			},
			textSizeSmall: {
				fontSize: "0.85rem",
				lineHeight: "1.25rem",
				padding: "0.75rem 1rem",
				"&:hover  .MuiSvgIcon-root": {
					padding: "0.125rem",
					fontSize: "1.5rem",
				},
			},
			sizeSmall: {
				fontSize: "0.85rem",
				lineHeight: "1.25rem",
				padding: "0.5rem 1rem",
				"&:hover .MuiSvgIcon-root": {
					padding: "0.125rem",
					fontSize: "1.5rem",
				},
			},
			sizeLarge: {
				fontSize: "1rem",
				padding: "1rem 2rem",
				"&:hover  .MuiSvgIcon-root": {
					padding: "0.125rem",
					fontSize: "2rem",
				},
			},
			textSizeLarge: {
				fontSize: "1rem",
				padding: "1rem 2rem",
			},
			containedSizeSmall: {
				fontSize: "0.85rem",
				padding: "0.75rem 1rem",
			},
			containedSizeLarge: {
				fontSize: "1rem",
				padding: "0.75rem 2rem",
			},

			iconSizeMedium: {
				"& *:first-child": {
					fontSize: "2rem",
					padding: "0.25rem",
				},
			},
			iconSizeSmall: {
				"& *:first-child": {
					fontSize: "1.5rem",
					padding: "0.25rem",
				},
			},
			iconSizeLarge: {
				"& *:first-child": {
					fontSize: "2rem",
					padding: "0.25rem",
				},
			},
			startIcon: {
				marginRight: "4px",
				"&.MuiButton-iconSizeSmall": {
					marginRight: "0px",
				},
			},
		},
		MuiTypography: {
			root: {
				color: color.textPrimary,
			},
			caption: {
				color: color.grey300,
			},
			body1: {
				fontSize: "1rem",
				fontWeight: 400,
			},
			body2: {
				fontSize: "0.85rem",
			},
			h6: {
				fontSize: "1rem",
				fontWeight: 500,
			},
			h5: {
				fontSize: "1.25rem",
				fontWeight: 500,
			},
			h4: {
				fontSize: "1.5rem",
				fontWeight: 500,
			},
			h3: {
				fontSize: "2rem",
				fontWeight: 500,
			},
			h2: {
				fontSize: "3rem",
				fontWeight: 500,
			},
			subtitle2: {
				fontSize: "1rem",
				fontWeight: 500,
			},
			colorTextPrimary: {
				color: color.textPrimary,
			},
		},
		MuiInputBase: {
			input: {
				height: "fit-content",
			},
			root: {
				"&.Mui-disabled": {
					backgroundColor: color.grey100,
					borderColor: color.grey100,
				},
			},
		},
		MuiOutlinedInput: {
			notchedOutline: {
				borderColor: color.grey200,
			},
			inputMarginDense: {
				paddingTop: "1rem",
				paddingRight: "1rem",
			},
			input: {
				padding: "1.25rem 1rem",
				fontSize: "1rem",
				lineHeight: "1rem",
				height: "calc(1rem + 1px)",
			},
			inputMultiline: {
				height: "inherit",
				lineHeight: "1.5rem",
			},
			root: {
				"&:hover .MuiOutlinedInput-notchedOutline": {
					// borderColor: color.grey200
				},
			},
		},
		MuiInputLabel: {
			outlined: {
				transform: "translate(14px, 1.25rem) scale(1)",
			},
		},
		MuiIconButton: {
			colorPrimary: {
				// boxShadow: `0px 0px 2px #ccc`,
				borderColor: "primary",
				border: "1px solid",
				// backgroundColor: "#fff",
				"&:hover": {
					color: "white",
					backgroundColor: color.primary,
					borderColor: color.primary,
					border: "1px solid",
				},
			},
			colorSecondary: {
				color: color.secondary,
				// boxShadow:`0px 0px 2px #ccc`,
				borderColor: "none",
				backgroundColor: "#fff",
			},
			sizeSmall: {
				padding: "8px",
				"& .MuiSvgIcon-root": {
					fontSize: "1rem",
				},
			},
		},
		MuiDialog: {
			paper: {
				padding: "16px",
			},
		},
		MuiDialogTitle: {
			root: {
				padding: "24px",
			},
		},
		MuiDialogContent: {
			root: {
				padding: "0px 24px",
			},
		},
		MuiDialogActions: {
			root: {
				padding: "24px",
			},
		},
	},
});

export default theme;
