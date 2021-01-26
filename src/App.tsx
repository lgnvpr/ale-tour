import { Box, IconButton } from "@material-ui/core";
import { PlayCircleOutline, SettingsOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Tour, { ReactourStep } from "reactour";
import "./App.css";
import Demo from "./container/Demo";
import EditTourPopUp from "./container/EditTourPopUp";
import axios from "axios";
import SelectPath from "./component/SelectPath";
import ListPathSelected from "./component/ListPathSelected";
import SettingTour from "./container/SettingTour";
export type TourType = {
	top?: number;
	left?: number;
	title?: any;
	index?: number;
} & ReactourStep;
function App() {
	const [tourConfig, setTourConfig] = useState<TourType[]>([]);
	const [isEdit, setEdit] = useState<boolean>(false);
	const [isTest, setTest] = useState<boolean>(false);
	const [selected, setSelected] = useState<TourType>({
		content: "",
	});


	const [isShowPopupEdit, setShowPopupEdit] = useState<boolean>(false);
	

	return (
		<div className="App">
			<Box style={{ position: "fixed", bottom: 60, right: 20 }}>
				<IconButton
					id="test-tour"
					onClick={(e) => {
						console.log(tourConfig);
						setTest(true);
					}}
				>
					<PlayCircleOutline fontSize="small" />
				</IconButton>
			</Box>
			<SettingTour></SettingTour>
			<Demo/>
			<Tour
				steps={tourConfig}
				isOpen={isTest}
				maskClassName="mask"
				className="helper"
				rounded={5}
				accentColor={"#5cb7b7"}
				onRequestClose={() => {
					setTest(false);
				}}
			/>
			<EditTourPopUp
				isDisplay={isShowPopupEdit}
				onCancel={() => {
					setShowPopupEdit(false);
				}}
				item={selected}
				onSave={(item) => {
					setTourConfig([...tourConfig, { ...item }]);
					setEdit(!isEdit);
					setShowPopupEdit(false);
				}}
			></EditTourPopUp>
		</div>
	);
}

export default App;
