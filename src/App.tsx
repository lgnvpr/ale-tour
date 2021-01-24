import { Box, IconButton } from "@material-ui/core";
import { PlayCircleOutline, SettingsOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Tour, { ReactourStep } from "reactour";
import "./App.css";
import Demo from "./container/Demo";
import EditTourPopUp from "./container/EditTourPopUp";

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
	document.onclick = (e) => {
		const element: HTMLElement = e.target as any;
		if (element.id === "edit-tour") {
			setEdit(!isEdit);
			return;
		}
		if (isEdit && element.id !== "btn-save-tour") {
			console.log("on edit ")
			const path = getDomPath(element);
			setSelected({
				content: Math.random() * 1,
				selector: path,
				title: "3232",
			});
			setEdit(false)
			setShowPopupEdit(true);
			const getMyDiv = document.getElementById("myDiv");
			element.style.background = `${getMyDiv?.style.background}`;
			element.style.cursor = `${getMyDiv?.style.cursor}`;
			getMyDiv?.remove();
		}
	};

	document.onmouseout = (e) => {
		if (isEdit) {
			const element: HTMLElement = e.target as any;
			const getMyDiv = document.getElementById("myDiv");
			element.style.background = `${getMyDiv?.style.background}`;
			element.style.cursor = `${getMyDiv?.style.cursor}`;
			getMyDiv?.remove();
		}
	};

	document.onmouseover = (e) => {
		if(isShowPopupEdit){
			return
		}
		const element: HTMLElement = e.target as any;
		if (element.id === "edit-tour" || element.id === "test-tour") {
			element.style.cursor = "default";
			return;
		}
		if (isEdit) {
			if (element) {
				var myDiv = document.createElement("div");
				myDiv.style.position = "absolute";
				myDiv.style.left = `0px`;
				myDiv.style.top = `0px`;
				myDiv.style.height = `100%`;
				myDiv.style.width = `100%`;
				myDiv.style.border = "1px solid black";
				myDiv.style.zIndex = "-1";
				myDiv.style.background = element.style.background;
				myDiv.style.cursor = element.style.cursor;
				element.style.background = "rgba(219, 52, 235,0.3)";
				element.style.cursor = "copy";
				myDiv.id = "myDiv";
				try {
					element?.parentNode?.insertBefore(myDiv, element);
				} catch {}
			}
		}
	};
	
	var btnSave1 = document.querySelectorAll("#btn-save-tour");
	var btnEdit1 = document.querySelectorAll("#edit-tour");
	setAutoId(btnSave1, "btn-save-tour");
	setAutoId(btnEdit1, "edit-tour")
	

	function setAutoId(element:NodeListOf<Element>, id : string){
		for (let i = 0; i < element.length; i++) {
			const getElement = element[i];
			getElement.id = id;
			if(getElement.hasChildNodes()){
				setAutoId(getElement.childNodes as NodeListOf<Element>, id);
			}
			
		}
	}



	function getDomPath(el: Element) {
		if (!el) {
			return;
		}
		var stack = [];
		var isShadow = false;
		while (el.parentNode != null) {
			var sibCount = 0;
			var sibIndex = 0;
			for (var i = 0; i < el.parentNode.childNodes.length; i++) {
				var sib = el.parentNode.childNodes[i];
				if (sib.nodeName === el.nodeName) {
					if (sib === el) {
						sibIndex = sibCount;
					}
					sibCount++;
				}
			}
			var nodeName = el.nodeName.toLowerCase();
			if (isShadow) {
				nodeName += "::shadow";
				isShadow = false;
			}
			if (sibCount > 1) {
				stack.unshift(
					nodeName + ":nth-of-type(" + (sibIndex + 1) + ")"
				);
			} else {
				stack.unshift(nodeName);
			}
			el = el.parentNode as Element;
			if (el.nodeType === 11) {
				isShadow = true;
				const cp: any = el;
				el = cp.host;
			}
		}
		stack.splice(0, 1);
		return stack.join(" > ");
	}

	return (
		<div className="App">
			<Box style={{ position: "fixed", bottom: 60, right: 20 }}>
				<IconButton id="edit-tour">
					<SettingsOutlined id="edit-tour" fontSize="small" />
				</IconButton>
				<IconButton id="test-tour" onClick={(e) => {
					console.log(tourConfig)
					setTest(true)
				}}>
					<PlayCircleOutline fontSize="small" />
				</IconButton>
			</Box>
			<Demo></Demo>
			<Tour
				steps={tourConfig}
				isOpen={isTest}
				maskClassName="mask"
				className="helper"
				rounded={5}
				accentColor={"#5cb7b7"}
				onRequestClose={() => {}}
			/>
			<EditTourPopUp
				isDisplay={isShowPopupEdit}
				onCancel={() => {
					setShowPopupEdit(false)
				}}
				item = {selected}
				onSave = {(item)=>{
					setTourConfig([...tourConfig, {...item}])
					setEdit(!isEdit);
					setShowPopupEdit(false);
				}}
			></EditTourPopUp>
		</div>
	);
}

export default App;
