import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Card,
	Fab,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Tour } from "../type/Tour";
import ItemSelectedPath from "./ItemSelectedPath";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import Draggable from "react-draggable";
import { BsArrowsMove } from "react-icons/bs";
import {
	SortableContainer,
	SortableElement,
	arrayMove,
} from "react-sortable-hoc";

const useStyles = makeStyles({
	fr: {
		minWidth: 275,
		// height: "90vh",
		padding: 0,
		paddingBottom: 30,
	},
	collapse: {
		position: "fixed",
		minWidth: 275,
		top: "5vh",
		left: 10,
		zIndex: 1000,
	},
	frTitle: {
		color: "#FF416C",
		display: "flex",
		justifyContent: "center",
		padding: 30,
	},
	title: {
		color: "#FF416C",
	},
	item: {
		borderRadius: 0,
		// boxShadow : "none",
		// borderBottom : "2px solid #FF416C"
	},
	iconAction: {
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
	listTour: Tour[];
	isSetting: boolean;
	isDemo: boolean;
	onDelete: (item: Tour) => void;
	onSave: (item: Tour) => void;
	onChangeList: (item: Tour[]) => void;
	onClickSetting: () => void;
	onClickDemo: () => void;
};
export default function ListPathSelected(props: Props) {
	const onSortEnd = ({ oldIndex, newIndex }: any) => {
		props.onChangeList(arrayMove(props.listTour, oldIndex, newIndex));
	};
	const SortableItem = SortableElement((value : any) => {
		return (
			<li style = {{
				zIndex : 2000
			}}>
				{
					<ItemSelectedPath
						item={value.value}
						onDelete={props.onDelete}
						onSave={props.onSave}
					/>
				}
			</li>
		);
	});

	const SortableList = SortableContainer(({ items }: any) => {
		return (
			<ul style={{ listStyle: "none", padding: 0 }}>
				{items.map((value: any, index: any) => (
					<SortableItem
					key={`item-${index}`} index={index} value={value}
					/>
				))}
			</ul>
		);
	});
	const classes = useStyles();
	return (
		<div id="popup-select-path-tour">
			<Draggable handle=".handle">
				<Accordion className={classes.collapse}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Grid container alignItems="center">
							<Fab
								className={classes.iconAction}
								size="small"
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								<BsArrowsMove size={20} className={"handle"} />
							</Fab>
							<Typography>Setting Tour</Typography>
						</Grid>
					</AccordionSummary>
					<AccordionDetails
						style={{
							padding: 0,
						}}
					>
						<Grid className={classes.fr}>
							<Grid className={classes.frTitle}>
								<Typography
									variant={"h4"}
									color="secondary"
									className={classes.title}
								>
									History
								</Typography>
							</Grid>
							<Grid container justify="space-around">
								<Fab
									className={classes.iconAction}
									size="small"
									onClick={(e) => {
										props.onClickSetting();
									}}
								>
									<AiFillSetting size={20} />
								</Fab>
								<Fab
									className={classes.iconAction}
									size="small"
									onClick={(e) => {
										props.onClickDemo();
									}}
								>
									<AiFillPlayCircle size={20} />
								</Fab>
							</Grid>
							<Grid>
								<SortableList
									items={props.listTour}
									onSortEnd={onSortEnd}
								/>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Draggable>
		</div>
	);
}
