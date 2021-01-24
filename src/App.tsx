import { Box, IconButton } from "@material-ui/core";
import { PlayCircleOutline, SettingsOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import Tour, { ReactourStep } from "reactour";
import "./App.css";
import Demo from "./container/Demo";
import EditTourPopUp from "./container/EditTourPopUp";

const tourConfig: ReactourStep[] = [
	{
		selector: '[data-tut="reactour__iso"]',
		content: `Ok, let's start with the name of the Tour that is about to begin.`,
		stepInteraction: true,
		navDotAriaLabel: "abcxyz",
		action: () => {
			console.log("aaaa");
		},
	},
	{
		selector: '[data-tut="reactour__logo"]',
		content: `And this is our cool bus...`,
	},
	{
		selector: '[data-tut="reactour__copy"]',
		content: `Keep in mind that you could try and test everithing during the Tour. 
      For example, try selecting the highlighted text…`,
	},
	{
		selector: '[data-tut="reactour__style"]',
		content: () => <div>aaaaa</div>,
		style: {
			backgroundColor: "black",
			color: "white",
		},
	},
	{
		selector: '[data-tut="reactour__goTo"]',
		content:
			"Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…",
	},
	{
		selector: '[data-tut="reactour__position"]',
		content:
			"Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…",
		position: "left",
	},
	{
		selector: '[data-tut="reactour__scroll"]',
		content:
			"Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…",
	},
	{
		selector: '[data-tut="reactour__scroll--hidden"]',
		content: "Also when places are pretty hidden…",
	},
	{
		selector: '[data-tut="reactour__action"]',
		content: "When arrived on each place you could fire an action, like… (look at the console)",
		action: () =>
			console.log(`
                  ------------🏠🏚---------
      🚌 Arrived to explore these beautiful buildings! 🚌
                  ------------🏠🏚---------
   🚧 This action could also fire a method in your Component 🚧
    `),
	},
	{
		selector: '[data-tut="reactour__state"]',
		content:
			"And the Tour could be observing changes to update the view, try clicking the button…",
	},
];

export type TourType = {
	top?: number;
	left?: number;
	title?: string;
	index?: number;
} & ReactourStep;
function App() {
	const [tourConfig, setTourConfig] = useState<TourType[]>([]);
	const [isEdit, setEdit] = useState<boolean>(false);
	const [isTest, setTest] = useState<boolean>(false);
	document.onclick = (e) => {
		const element: HTMLElement = e.target as any;
		if (element.id === "edit-tour") {
			setEdit(!isEdit);
			// element.innerHTML = isEdit ? "edit" : "done";
			return;
		}
		if (isEdit) {
			const path = getDomPath(element);
			setTourConfig([
				...tourConfig,
				{
					content: Math.random() * 1,
					selector: path,
					title: "3232",
				},
			]);
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

	function getDomPath(el: any) {
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
				if (sib.nodeName == el.nodeName) {
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
				stack.unshift(nodeName + ":nth-of-type(" + (sibIndex + 1) + ")");
			} else {
				stack.unshift(nodeName);
			}
			el = el.parentNode;
			if (el.nodeType === 11) {
				isShadow = true;
				el = el.host;
			}
		}
		stack.splice(0, 1);
		return stack.join(" > ");
	}

	const [editTour, setEditTour] = useState(false);

	return (
		<div className="App">
			<Box style={{ position: "fixed", bottom: 60, right: 20 }}>
				<IconButton >
					<SettingsOutlined id="edit-tour" fontSize="small" />
				</IconButton>
				<IconButton id="test-tour" onClick={(e) => setTest(true)}>
					<PlayCircleOutline fontSize="small" />
				</IconButton>
				{/* <button id="test-tour" onClick={(e) => setEditTour(true)}>
					Pop Up
				</button> */}
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
				getCurrentStep={(cu) => {
					console.log(cu);
				}}
			/>
			<EditTourPopUp isDisplay={editTour} onCancel={() => setEditTour(false)}></EditTourPopUp>
		</div>
	);
}

export default App;
