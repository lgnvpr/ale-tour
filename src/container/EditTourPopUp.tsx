import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TourType } from "../App";

function EditTourPopUp(props: Props) {
	const [item, setItem] = useState<TourType>();
	useEffect(() => {
		setItem(props.item)
	}, [props])
	return (
		<Dialog open={props.isDisplay} fullWidth maxWidth="md">
			<DialogTitle id="customized-dialog-title">
				<Grid item xs={12}>
					<Typography variant="h4" color={"primary"} align={"center"}>
						Edit
					</Typography>
				</Grid>
				<Box style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
					<IconButton
						aria-label="close"
						onClick={() => {
							props.onCancel();
						}}
					>
						<CloseIcon />
					</IconButton>
				</Box>
			</DialogTitle>

			<DialogContent>
				<Grid container xs={12} direction="column" style={{ marginTop: 8 }}>
					<Grid style={{ marginBottom: 24 }} item xs={12}>
						<TextField fullWidth variant="outlined" label={"Path"} 
							
						/>
					</Grid>

					<Grid item>
						<Editor
							apiKey="8x2ixjpdc6sigjnb5xhluh335t8a3q0s2zx0xdofz3woekba"
							initialValue="<p>This is the initial content of the editor</p>"
							init={{
								height: 500,
								// menubar: false,
								plugins: [
									"advlist autolink lists link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"insertdatetime media table paste code help wordcount",
								],
								toolbar:
									"undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | code",
							}}
							onEditorChange={(value, editor) => {
								setItem({
									...item,
									content: value || ""
								})
								console.log(value);
							}}
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Grid item container xs={12} justify={"space-between"}>
					<Grid item container xs={3} justify={"center"} alignItems={"center"}>
						<Button
							id = "btn-save-tour"
							startIcon={<CloseIcon />}
							variant="contained"
							// size="medium"
							color="default"
							fullWidth
							onClick={() => {
								props.onCancel();
							}}
						>
							Cancel
						</Button>
					</Grid>
					<Grid item container xs={3} justify={"center"} alignItems={"center"}>
						<Button
							id = "btn-save-tour"
							variant="contained"
							size="medium"
							fullWidth
							startIcon={<SaveIcon />}
							type={"submit"}
							color="primary"
							onClick = {(e)=>{
								props.onSave(item || {} as TourType);
							}}
						>
							OK
						</Button>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
}

type Props = {
	isDisplay: boolean;
	onCancel(): void;
	item : TourType;
	onSave(item : TourType):void
};

export default EditTourPopUp;
