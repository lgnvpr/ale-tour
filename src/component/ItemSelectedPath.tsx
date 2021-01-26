import {
	Card,
	Fab,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { Tour } from "../type/Tour";

const useStyles = makeStyles({
	root: {
		zIndex: 1001,
		borderRadius: 0,
		padding: 20,
		// transition: "0.3s",
		"&:hover": {
			borderRight: "2px solid #FF416C",
			borderLeft: "2px solid #FF416C",
			cursor: "pointer",
		},
	},

	title: {
		color: "#FF416C",
	},
	item: {
		borderRadius: 0,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	iconEdit: {
		background: "none",
		boxShadow: "none",
		"&:hover": {
			background: "#5cb85c",
			color: "white",
		},
		"&:active": {
			boxShadow: "none",
		},
	},
	iconRemove: {
		background: "none",
		boxShadow: "none",
		"&:hover": {
			background: "#FF416C",
			color: "white",
		},
		"&:active": {
			boxShadow: "none",
		},
	},
});

type Props = {
	item: Tour;
	onDelete: (item: Tour) => void;
	onSave: (item: Tour) => void;
};
export default function ItemSelectedPath(props: Props) {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root} id="select-path-tour">
				<Grid className={classes.item}>
					<Typography variant="caption" style={{ color: "#FF416C" }}>
						{props?.item?.index}
					</Typography>
					<Typography
						style={{
							flex: 1,
							paddingLeft: 10,
						}}
					>
						{props?.item?.tittle}
					</Typography>
					<Grid>
						<Fab
							className={classes.iconEdit}
							size="small"
							onClick={(e) => {
								e.stopPropagation();
								props.onSave(props.item);
							}}
						>
							<FaRegEdit size={20} />
						</Fab>
						<Fab
							className={classes.iconRemove}
							size="small"
							onClick={(e) => {
								e.stopPropagation();
								props.onDelete(props.item);
							}}
						>
							<TiDeleteOutline
								size={20}
							/>
						</Fab>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
