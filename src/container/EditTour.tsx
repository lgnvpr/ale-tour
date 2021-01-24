import {
	Badge,
	Button,
	Dialog,
	DialogActions,
	Fab,
	Grid,
	TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { TourType } from "../App";
import EditIcon from "@material-ui/icons/Edit";

type Props = {} & TourType;
export default function EditTour(props: Props) {
    const [showEdit, setShowEdit] = useState<boolean>(false);
    
	return (
		<div
			style={{
				position: "absolute",
				top: props.top,
				left: props.left,
				zIndex: 1000,
			}}
		>
			<Fab
				color="secondary"
				aria-label="add"
				size="small"
				onClick={(e) => setShowEdit(true)}
			>
				<Badge badgeContent={props.index} color="primary">
					<EditIcon />
				</Badge>
			</Fab>
			{
				<Dialog
					open={showEdit}
					fullWidth={true}
					onClose={() => setShowEdit(false)}
					aria-labelledby="responsive-dialog-title"
				>
					<div className="container" style ={{
                        display: "flex",
                        justifyContent : "center",
                    }} >
						<div className="form-container">
							<form action="#">
								<h1 tour-flynotes="3">Edit tour</h1>
								{/* <span>or use your account</span> */}
								<input type="text" placeholder="Title" />
								<input type="text" placeholder="Content" />
								<label></label>
								<button>lưu</button>
							</form>
						</div>
					</div>
				</Dialog>
			}
		</div>
	);
}
